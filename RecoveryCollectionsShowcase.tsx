import { NextResponse } from "next/server";
import { authRequest, ensureMerchantAccount, getMerchantContext, nextMerchantRoute, setAuthCookie } from "@/lib/auth/supabaseAuth";

type SignupResponse = { user?: { id: string; email?: string; user_metadata?: Record<string, unknown> }; access_token?: string; expires_in?: number };

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const businessName = String(body.businessName || "").trim();
    const ownerName = String(body.ownerName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim();
    const password = String(body.password || "");
    const plan = ["starter", "pro"].includes(String(body.plan)) ? String(body.plan) : "starter";
    if (businessName.length < 2 || ownerName.length < 2 || !email.includes("@") || password.length < 8) {
      return NextResponse.json({ error: "Complete every required field. Passwords must be at least 8 characters." }, { status: 400 });
    }
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vordali.com").replace(/\/$/, "");
    const result = await authRequest<SignupResponse>("/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        email_redirect_to: `${siteUrl}/auth/callback`,
        data: { business_name: businessName, owner_name: ownerName, phone, selected_plan: plan }
      })
    });
    if (result.access_token && result.user) {
      await setAuthCookie(result.access_token, result.expires_in);
      await ensureMerchantAccount(result.user);
      return NextResponse.json({ next: nextMerchantRoute(await getMerchantContext()) });
    }
    return NextResponse.json({ next: `/verify-email?plan=${encodeURIComponent(plan)}`, verificationRequired: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Registration failed." }, { status: 400 });
  }
}
