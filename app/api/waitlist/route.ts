import { NextResponse } from "next/server";
import { insertRow } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const b = await request.json();
    if (!b.product_slug || !b.name || !b.email || !b.problem) {
      return NextResponse.json({ error: "Product, name, email, and problem are required." }, { status: 400 });
    }
    await insertRow("product_waitlists", {
      product_slug: String(b.product_slug).slice(0, 50),
      name: String(b.name).slice(0, 150),
      email: String(b.email).slice(0, 320).toLowerCase(),
      business_name: b.business_name ? String(b.business_name).slice(0, 200) : null,
      business_type: b.business_type ? String(b.business_type).slice(0, 150) : null,
      problem: String(b.problem).slice(0, 5000),
      hours_lost_weekly: b.hours_lost_weekly ? Number(b.hours_lost_weekly) : null,
      monthly_cost_cents: b.monthly_cost ? Math.round(Number(b.monthly_cost) * 100) : null,
      source: "vordali.com"
    });
    return NextResponse.json({ message: "You are on the research waitlist. Thank you for helping shape Vordali." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Submission failed." }, { status: 500 });
  }
}
