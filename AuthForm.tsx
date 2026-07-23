import { NextResponse } from "next/server";
import { insertRow } from "@/lib/supabaseServer";
import { email, ensureHuman, optionalNonNegativeNumber, optionalText, text } from "@/lib/validation/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    ensureHuman(body);

    const name = text(body.name, 150);
    const problem = text(body.problem, 8000);
    if (!name || !problem) {
      return NextResponse.json({ error: "Name, email, and problem are required." }, { status: 400 });
    }

    const hoursLost = optionalNonNegativeNumber(body.hours_lost_weekly, 168);
    const monthlyCost = optionalNonNegativeNumber(body.monthly_cost, 10000000);

    await insertRow("problem_submissions", {
      name,
      email: email(body.email),
      business_name: optionalText(body.business_name, 200),
      business_type: optionalText(body.business_type, 150),
      problem,
      current_workaround: optionalText(body.current_workaround, 5000),
      hours_lost_weekly: hoursLost,
      monthly_cost_cents: monthlyCost === null ? null : Math.round(monthlyCost * 100),
      source: "vordali.com"
    });

    return NextResponse.json({ message: "Problem submitted. Repeated pain points become Vordali research." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed.";
    const isInputError = message.startsWith("Please") || message === "Submission rejected.";
    console.error("Problem submission failed", error);
    return NextResponse.json({ error: isInputError ? message : "We could not save your submission. Please try again." }, { status: isInputError ? 400 : 500 });
  }
}
