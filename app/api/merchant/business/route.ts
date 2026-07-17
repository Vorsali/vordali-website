import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
export async function POST(request: Request) {
  const context = await getMerchantContext();
  if (!context) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  const body = await request.json();
  const name = String(body.name || "").trim();
  if (name.length < 2) return NextResponse.json({ error: "Enter a business name." }, { status: 400 });
  await supabaseAdminRequest(`/rest/v1/organizations?id=eq.${context.organization.id}`, {
    method: "PATCH", headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ name, phone: String(body.phone || "").trim() || null, website: String(body.website || "").trim() || null, timezone: String(body.timezone || "America/Chicago"), onboarding_complete: true, updated_at: new Date().toISOString() })
  });
  return NextResponse.json({ next: "/dashboard" });
}
