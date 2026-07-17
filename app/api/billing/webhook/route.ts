import { NextResponse } from "next/server";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
import { normalizeSubscriptionStatus, stripeRequest, verifyStripeSignature, type StripeCheckoutSession, type StripeSubscription } from "@/lib/stripe/config";

export const runtime = "nodejs";
type StripeEvent = { type: string; data: { object: Record<string, any> } };

async function updateByOrganization(organizationId: string, values: Record<string, unknown>) {
  await supabaseAdminRequest(`/rest/v1/organization_subscriptions?organization_id=eq.${encodeURIComponent(organizationId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ ...values, updated_at: new Date().toISOString() })
  });
}
function idOf(value: string | { id: string } | null | undefined) { return typeof value === "string" ? value : value?.id || null; }
async function syncSubscription(subscription: StripeSubscription) {
  const organizationId = subscription.metadata?.organization_id;
  if (!organizationId) return;
  const item = subscription.items?.data?.[0];
  await updateByOrganization(organizationId, {
    stripe_subscription_id: subscription.id,
    stripe_customer_id: idOf(subscription.customer),
    stripe_price_id: item?.price?.id || null,
    ...(subscription.metadata?.plan_slug ? { plan_slug: subscription.metadata.plan_slug } : {}),
    status: normalizeSubscriptionStatus(subscription.status),
    current_period_end: item?.current_period_end ? new Date(item.current_period_end * 1000).toISOString() : null,
    cancel_at_period_end: Boolean(subscription.cancel_at_period_end)
  });
}
async function retrieveSubscription(value: unknown) {
  const id = idOf(value as string | { id: string } | null);
  return id ? stripeRequest<StripeSubscription>(`/subscriptions/${encodeURIComponent(id)}`) : null;
}

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) return new NextResponse("Webhook configuration missing.", { status: 400 });
  const body = await request.text();
  try { verifyStripeSignature(body, signature, secret); }
  catch (error) { console.error("Stripe webhook signature verification failed", error); return new NextResponse("Invalid webhook signature.", { status: 400 }); }

  const event = JSON.parse(body) as StripeEvent;
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as StripeCheckoutSession;
        const organizationId = session.metadata?.organization_id || session.client_reference_id;
        if (organizationId) await updateByOrganization(organizationId, {
          stripe_checkout_session_id: session.id,
          stripe_customer_id: idOf(session.customer),
          stripe_subscription_id: idOf(session.subscription),
          ...(session.metadata?.plan_slug ? { plan_slug: session.metadata.plan_slug } : {})
        });
        const subscription = await retrieveSubscription(session.subscription);
        if (subscription) await syncSubscription(subscription);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncSubscription(event.data.object as unknown as StripeSubscription);
        break;
      case "invoice.payment_failed":
      case "invoice.paid": {
        const invoice = event.data.object;
        const subscription = await retrieveSubscription(invoice.parent?.subscription_details?.subscription || invoice.subscription);
        if (subscription) await syncSubscription(subscription);
        break;
      }
      default: break;
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`Stripe webhook processing failed for ${event.type}`, error);
    return new NextResponse("Webhook processing failed.", { status: 500 });
  }
}
