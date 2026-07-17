import { NextResponse } from "next/server";
import { authRequest, ensureMerchantAccount, setAuthCookie } from "@/lib/auth/supabaseAuth";

type SignupResponse = { user: { id: string; email?: string; user_metadata?: Record<string, unknown> }; access_token?: string; expires_in?: number };

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
    const result = await authRequest<SignupResponse>("/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, data: { business_name: businessName, owner_name: ownerName, phone, selected_plan: plan } })
    });
    if (result.access_token) {
      await setAuthCookie(result.access_token, result.expires_in);
      await ensureMerchantAccount(result.user);
      return NextResponse.json({ next: "/checkout" });
    }
    return NextResponse.json({ next: "/verify-email", verificationRequired: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Registration failed." }, { status: 400 });
  }
}
