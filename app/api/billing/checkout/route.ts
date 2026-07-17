import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
import { getPriceId, getSiteUrl, stripeRequest, type StripeCheckoutSession } from "@/lib/stripe/config";

export async function POST() {
  try {
    const context = await getMerchantContext();
    if (!context) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
    if (!context.subscription) return NextResponse.json({ error: "Choose a plan before checkout." }, { status: 400 });
    if (["active", "trialing"].includes(context.subscription.status)) {
      return NextResponse.json({ next: context.organization.onboarding_complete ? "/dashboard" : "/onboarding/business" });
    }

    const siteUrl = getSiteUrl();
    const plan = context.subscription.plan_slug === "pro" ? "pro" : "starter";
    const rows = await supabaseAdminRequest<Array<{ stripe_customer_id: string | null }>>(
      `/rest/v1/organization_subscriptions?organization_id=eq.${context.organization.id}&select=stripe_customer_id&limit=1`
    );
    const customerId = rows[0]?.stripe_customer_id || null;
    const values: Record<string, unknown> = {
      mode: "subscription",
      "line_items[0][price]": getPriceId(plan),
      "line_items[0][quantity]": 1,
      success_url: `${siteUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/subscription/canceled`,
      client_reference_id: context.organization.id,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      "metadata[organization_id]": context.organization.id,
      "metadata[plan_slug]": plan,
      "metadata[owner_user_id]": context.user.id,
      "subscription_data[metadata][organization_id]": context.organization.id,
      "subscription_data[metadata][plan_slug]": plan,
      "subscription_data[metadata][owner_user_id]": context.user.id
    };
    if (customerId) values.customer = customerId;
    else if (context.user.email) values.customer_email = context.user.email;

    const session = await stripeRequest<StripeCheckoutSession>("/checkout/sessions", values);
    if (!session.url) throw new Error("Stripe did not return a checkout URL.");

    await supabaseAdminRequest(`/rest/v1/organization_subscriptions?organization_id=eq.${context.organization.id}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ stripe_checkout_session_id: session.id, status: "incomplete", updated_at: new Date().toISOString() })
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout creation failed", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to start checkout." }, { status: 500 });
  }
}
