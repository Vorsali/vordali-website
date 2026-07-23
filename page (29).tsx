import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";

export async function GET() {
  const context = await getMerchantContext();
  if (!context) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  return NextResponse.json({
    status: context.subscription?.status || "none",
    plan: context.subscription?.plan_slug || null,
    onboardingComplete: context.organization.onboarding_complete,
    next: ["active", "trialing"].includes(context.subscription?.status || "")
      ? context.organization.onboarding_complete ? "/dashboard" : "/onboarding/business"
      : "/checkout"
  });
}
