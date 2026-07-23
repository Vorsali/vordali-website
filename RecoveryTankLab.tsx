import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";
import { BUSINESS_TYPES, RISK_MODELS } from "@/lib/merchant/adaptiveProfile";

const clean = (value: unknown, max = 160) => String(value || "").trim().slice(0, max);
const optional = (value: unknown, max = 160) => clean(value, max) || null;
const allowedBusinessTypes = new Set(BUSINESS_TYPES.map((item) => item.value));
const allowedRiskModels = new Set(RISK_MODELS.map((item) => item.value));

export async function POST(request: Request) {
  try {
    const context = await getMerchantContext();
    if (!context) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
    if (!context.subscription || !["active", "trialing"].includes(context.subscription.status)) {
      return NextResponse.json({ error: "An active subscription is required." }, { status: 403 });
    }
    const body = await request.json();
    const name = clean(body.name, 120);
    const phone = optional(body.phone, 30);
    const website = optional(body.website, 300);
    const supportEmail = optional(body.supportEmail, 320);
    const timezone = clean(body.timezone, 80) || "America/Chicago";
    const expiration = Number(body.defaultExpiration || 30);
    const allowedExpiration = [15, 30, 60, 120, 1440].includes(expiration) ? expiration : 30;
    const addressLine1 = clean(body.addressLine1, 180);
    const city = clean(body.city, 100);
    const state = clean(body.state, 80);
    const postalCode = clean(body.postalCode, 20);
    const businessType = allowedBusinessTypes.has(String(body.businessType) as never) ? String(body.businessType) : "other";
    const revenueRiskModel = allowedRiskModels.has(String(body.revenueRiskModel) as never) ? String(body.revenueRiskModel) : "custom";
    const unpaidEventsPerWeek = Math.max(0, Math.min(10000, Number(body.unpaidEventsPerWeek || 0)));
    const averageAtRiskValueCents = Math.round(Math.max(0, Math.min(10000000, Number(body.averageAtRiskValue || 0) * 100)));
    const estimatedRecoveryRate = Math.max(1, Math.min(100, Number(body.estimatedRecoveryRate || 70)));

    if (name.length < 2 || addressLine1.length < 3 || city.length < 2 || state.length < 2 || postalCode.length < 3) {
      return NextResponse.json({ error: "Complete the business name and primary-location address." }, { status: 400 });
    }

    await supabaseAdminRequest(`/rest/v1/organizations?id=eq.${context.organization.id}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        name,
        phone,
        website,
        support_email: supportEmail,
        timezone,
        default_request_expiration_minutes: allowedExpiration,
        business_type: businessType,
        revenue_risk_model: revenueRiskModel,
        baseline_unpaid_events_per_week: unpaidEventsPerWeek,
        average_at_risk_value_cents: averageAtRiskValueCents,
        estimated_recovery_rate: estimatedRecoveryRate,
        onboarding_complete: true,
        status: "active",
        updated_at: new Date().toISOString()
      })
    });

    const existing = await supabaseAdminRequest<Array<{ id: string }>>(`/rest/v1/organization_locations?organization_id=eq.${context.organization.id}&is_primary=eq.true&select=id&limit=1`);
    const location = {
      organization_id: context.organization.id,
      name: clean(body.locationName, 120) || "Main location",
      address_line1: addressLine1,
      address_line2: optional(body.addressLine2, 180),
      city,
      state,
      postal_code: postalCode,
      country: "US",
      phone,
      timezone,
      is_primary: true,
      updated_at: new Date().toISOString()
    };
    if (existing[0]) {
      await supabaseAdminRequest(`/rest/v1/organization_locations?id=eq.${existing[0].id}`, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify(location) });
    } else {
      await supabaseAdminRequest("/rest/v1/organization_locations", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify(location) });
    }
    return NextResponse.json({ next: "/dashboard" });
  } catch (error) {
    console.error("Business setup failed", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save business setup." }, { status: 500 });
  }
}
