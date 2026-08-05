import { NextResponse } from "next/server";
import { authRequest } from "@/lib/auth/supabaseAuth";
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    await authRequest("/recover", { method: "POST", body: JSON.stringify({ email, redirect_to: "https://www.vordali.com/login" }) });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ ok: true }); }
}
