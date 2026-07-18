import { NextResponse } from "next/server";
import { authRequest, ensureMerchantAccount, getMerchantContext, nextMerchantRoute, setAuthCookie } from "@/lib/auth/supabaseAuth";

type LoginResponse = { user: { id: string; email?: string; user_metadata?: Record<string, unknown> }; access_token: string; expires_in?: number };

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const result = await authRequest<LoginResponse>("/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email: String(email || "").trim().toLowerCase(), password: String(password || "") })
    });
    await setAuthCookie(result.access_token, result.expires_in);
    await ensureMerchantAccount(result.user);
    const context = await getMerchantContext();
    return NextResponse.json({ next: nextMerchantRoute(context) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to sign in." }, { status: 401 });
  }
}
