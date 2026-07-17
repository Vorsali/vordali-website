import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
import {
  normalizeSubscriptionStatus,
  stripeRequest,
  type StripeCheckoutSession,
  type StripeSubscription
} from "@/lib/stripe/config";

export function stripeId(value: string | { id: string } | null | undefined) {
  return typeof value === "string" ? value : value?.id || null;
}

export async function updateSubscriptionByOrganization(
  organizationId: string,
  values: Record<string, unknown>
) {
  await supabaseAdminRequest(
    `/rest/v1/organization_subscriptions?organization_id=eq.${encodeURIComponent(organizationId)}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        ...values,
        updated_at: new Date().toISOString()
      })
    }
  );
}

export async function syncStripeSubscription(subscription: StripeSubscription) {
  const organizationId = subscription.metadata?.organization_id;
  if (!organizationId) {
    throw new Error("Stripe subscription metadata is missing organization_id.");
  }

  const item = subscription.items?.data?.[0];
  const status = normalizeSubscriptionStatus(subscription.status);

  await updateSubscriptionByOrganization(organizationId, {
    stripe_subscription_id: subscription.id,
    stripe_customer_id: stripeId(subscription.customer),
    stripe_price_id: item?.price?.id || null,
    ...(subscription.metadata?.plan_slug
      ? { plan_slug: subscription.metadata.plan_slug }
      : {}),
    status,
    current_period_end: item?.current_period_end
      ? new Date(item.current_period_end * 1000).toISOString()
      : null,
    cancel_at_period_end: Boolean(subscription.cancel_at_period_end),
    activated_at: ["active", "trialing"].includes(status)
      ? new Date().toISOString()
      : null
  });

  return { organizationId, status };
}

export async function retrieveStripeSubscription(value: unknown) {
  const id = stripeId(value as string | { id: string } | null);
  return id
    ? stripeRequest<StripeSubscription>(`/subscriptions/${encodeURIComponent(id)}`)
    : null;
}

export async function syncCheckoutSession(session: StripeCheckoutSession) {
  const organizationId =
    session.metadata?.organization_id || session.client_reference_id;

  if (!organizationId) {
    throw new Error("Stripe checkout session is missing an organization reference.");
  }

  await updateSubscriptionByOrganization(organizationId, {
    stripe_checkout_session_id: session.id,
    stripe_customer_id: stripeId(session.customer),
    stripe_subscription_id: stripeId(session.subscription),
    ...(session.metadata?.plan_slug
      ? { plan_slug: session.metadata.plan_slug }
      : {})
  });

  const subscription = await retrieveStripeSubscription(session.subscription);
  if (!subscription) {
    throw new Error("Stripe checkout session does not contain a subscription.");
  }

  return syncStripeSubscription(subscription);
}

export async function recordStripeEvent(
  eventId: string,
  eventType: string,
  processed: boolean,
  errorMessage?: string
) {
  await supabaseAdminRequest("/rest/v1/stripe_webhook_events", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      stripe_event_id: eventId,
      event_type: eventType,
      processed,
      error_message: errorMessage || null,
      processed_at: processed ? new Date().toISOString() : null
    })
  });
}
