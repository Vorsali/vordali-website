import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { syncCheckoutSession } from "@/lib/billing/subscriptionSync";
import { stripeRequest, type StripeCheckoutSession } from "@/lib/stripe/config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const context = await getMerchantContext();
    if (!context) {
      return NextResponse.json({ error: "Sign in required." }, { status: 401 });
    }

    const payload = await request.json().catch(() => ({}));
    const sessionId = String(payload?.sessionId || "");
    if (!sessionId.startsWith("cs_")) {
      return NextResponse.json(
        { error: "A valid Stripe checkout session is required." },
        { status: 400 }
      );
    }

    const session = await stripeRequest<StripeCheckoutSession>(
      `/checkout/sessions/${encodeURIComponent(sessionId)}`
    );

    const organizationId =
      session.metadata?.organization_id || session.client_reference_id;
    if (organizationId !== context.organization.id) {
      return NextResponse.json(
        { error: "This checkout session does not belong to your business." },
        { status: 403 }
      );
    }

    const result = await syncCheckoutSession(session);
    return NextResponse.json({
      status: result.status,
      next: context.organization.onboarding_complete
        ? "/dashboard"
        : "/onboarding/business"
    });
  } catch (error) {
    console.error("Stripe checkout confirmation failed", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to confirm the subscription."
      },
      { status: 500 }
    );
  }
}
