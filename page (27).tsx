import { NextResponse } from "next/server";
import { insertRow } from "@/lib/supabaseServer";
import { email, ensureHuman, optionalNonNegativeNumber, optionalText, text } from "@/lib/validation/forms";

const allowedProducts = new Set(["approve", "follow", "verify"]);

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    ensureHuman(body);

    const productSlug = text(body.product_slug, 50).toLowerCase();
    const name = text(body.name, 150);
    const problem = text(body.problem, 5000);
    if (!allowedProducts.has(productSlug) || !name || !problem) {
      return NextResponse.json({ error: "Product, name, email, and problem are required." }, { status: 400 });
    }

    const hoursLost = optionalNonNegativeNumber(body.hours_lost_weekly, 168);
    const monthlyCost = optionalNonNegativeNumber(body.monthly_cost, 10000000);

    await insertRow("product_waitlists", {
      product_slug: productSlug,
      name,
      email: email(body.email),
      business_name: optionalText(body.business_name, 200),
      business_type: optionalText(body.business_type, 150),
      problem,
      hours_lost_weekly: hoursLost,
      monthly_cost_cents: monthlyCost === null ? null : Math.round(monthlyCost * 100),
      source: "vordali.com"
    });

    return NextResponse.json({ message: "You are on the research waitlist. Thank you for helping shape Vordali." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed.";
    const isInputError = message.startsWith("Please") || message === "Submission rejected.";
    console.error("Waitlist submission failed", error);
    return NextResponse.json({ error: isInputError ? message : "We could not save your submission. Please try again." }, { status: isInputError ? 400 : 500 });
  }
}
