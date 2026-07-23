import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
export async function POST(request: Request) {
  const context = await getMerchantContext();
  if (!context) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  const { plan } = await request.json();
  if (!["starter", "pro"].includes(plan)) return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
  await supabaseAdminRequest(`/rest/v1/organization_subscriptions?organization_id=eq.${context.organization.id}`, {
    method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ plan_slug: plan, updated_at: new Date().toISOString() })
  });
  return NextResponse.json({ next: "/checkout" });
}
