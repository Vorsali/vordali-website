import { NextResponse } from "next/server";
import {
  recordStripeEvent,
  retrieveStripeSubscription,
  syncCheckoutSession,
  syncStripeSubscription
} from "@/lib/billing/subscriptionSync";
import {
  verifyStripeSignature,
  type StripeCheckoutSession,
  type StripeSubscription
} from "@/lib/stripe/config";

export const runtime = "nodejs";

type StripeEvent = {
  id: string;
  type: string;
  data: { object: Record<string, any> };
};

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!secret || !signature) {
    return new NextResponse("Webhook configuration missing.", { status: 400 });
  }

  const body = await request.text();

  try {
    verifyStripeSignature(body, signature, secret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed", error);
    return new NextResponse("Invalid webhook signature.", { status: 400 });
  }

  const event = JSON.parse(body) as StripeEvent;

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await syncCheckoutSession(
          event.data.object as unknown as StripeCheckoutSession
        );
        break;

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncStripeSubscription(
          event.data.object as unknown as StripeSubscription
        );
        break;

      case "invoice.paid":
      case "invoice.payment_failed": {
        const invoice = event.data.object;
        const subscription = await retrieveStripeSubscription(
          invoice.parent?.subscription_details?.subscription ||
            invoice.subscription
        );
        if (subscription) await syncStripeSubscription(subscription);
        break;
      }

      default:
        break;
    }

    await recordStripeEvent(event.id, event.type, true);
    return NextResponse.json({ received: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown webhook processing error.";
    console.error(`Stripe webhook processing failed for ${event.type}`, error);
    try {
      await recordStripeEvent(event.id, event.type, false, message);
    } catch (recordError) {
      console.error("Unable to record failed Stripe webhook event", recordError);
    }
    return new NextResponse("Webhook processing failed.", { status: 500 });
  }
}
