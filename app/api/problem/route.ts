import { NextResponse } from "next/server";
import { insertRow } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const b = await request.json();
    if (!b.name || !b.email || !b.problem) {
      return NextResponse.json({ error: "Name, email, and problem are required." }, { status: 400 });
    }
    await insertRow("problem_submissions", {
      name: String(b.name).slice(0, 150),
      email: String(b.email).slice(0, 320).toLowerCase(),
      business_name: b.business_name ? String(b.business_name).slice(0, 200) : null,
      business_type: b.business_type ? String(b.business_type).slice(0, 150) : null,
      problem: String(b.problem).slice(0, 8000),
      current_workaround: b.current_workaround ? String(b.current_workaround).slice(0, 5000) : null,
      hours_lost_weekly: b.hours_lost_weekly ? Number(b.hours_lost_weekly) : null,
      monthly_cost_cents: b.monthly_cost ? Math.round(Number(b.monthly_cost) * 100) : null,
      source: "vordali.com"
    });
    return NextResponse.json({ message: "Problem submitted. Repeated pain points become Vordali research." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Submission failed." }, { status: 500 });
  }
}
