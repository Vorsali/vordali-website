import { NextResponse } from "next/server";
import { authRequest, ensureMerchantAccount, getMerchantContext, nextMerchantRoute, setAuthCookie } from "@/lib/auth/supabaseAuth";

type UserResponse = { id: string; email?: string; user_metadata?: Record<string, unknown> };

export async function POST(request: Request) {
  try {
    const { accessToken, expiresIn } = await request.json();
    if (!accessToken) return NextResponse.json({ error: "The verification link did not contain a session." }, { status: 400 });
    const user = await authRequest<UserResponse>("/user", { headers: { Authorization: `Bearer ${accessToken}` } });
    await setAuthCookie(accessToken, Number(expiresIn || 3600));
    await ensureMerchantAccount(user);
    return NextResponse.json({ next: nextMerchantRoute(await getMerchantContext()) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to finish email verification." }, { status: 400 });
  }
}
