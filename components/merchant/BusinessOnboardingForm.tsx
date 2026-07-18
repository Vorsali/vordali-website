"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BUSINESS_TYPES, RISK_MODELS } from "@/lib/merchant/adaptiveProfile";

type Props = {
  profile: {
    name: string;
    phone: string | null;
    website: string | null;
    timezone: string;
    support_email: string | null;
    default_request_expiration_minutes: number;
    business_type: string | null;
    revenue_risk_model: string | null;
    baseline_unpaid_events_per_week: number;
    average_at_risk_value_cents: number;
    estimated_recovery_rate: number;
  };
  location: {
    name: string;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
  } | null;
  submitLabel?: string;
};

export function BusinessOnboardingForm({ profile, location, submitLabel = "Complete business setup" }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/merchant/business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    const result = await response.json();
    setBusy(false);
    if (!response.ok) return setError(result.error || "Unable to save.");
    window.location.assign(result.next || "/dashboard");
  }

  return (
    <form className="merchant-form merchant-form-wide" onSubmit={submit}>
      <div className="form-section">
        <p className="kicker">Business identity</p>
        <div className="form-grid">
          <label>Business name<input name="name" defaultValue={profile.name} required /></label>
          <label>Business phone<input name="phone" defaultValue={profile.phone || ""} inputMode="tel" /></label>
          <label>Support email<input name="supportEmail" type="email" defaultValue={profile.support_email || ""} /></label>
          <label>Website<input name="website" type="url" defaultValue={profile.website || ""} placeholder="https://" /></label>
        </div>
      </div>

      <div className="form-section adaptive-profile-section">
        <p className="kicker">Revenue intelligence profile</p>
        <h2>How does this business experience non-payment risk?</h2>
        <p>Vordali uses these answers to tailor dashboard language and estimate the value Commit can protect.</p>
        <div className="form-grid">
          <label>Business type
            <select name="businessType" defaultValue={profile.business_type || "restaurant"}>
              {BUSINESS_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label>Primary revenue-risk model
            <select name="revenueRiskModel" defaultValue={profile.revenue_risk_model || "prepared_order_loss"}>
              {RISK_MODELS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label>Typical non-payment events per week
            <input name="unpaidEventsPerWeek" type="number" min="0" max="10000" step="1" defaultValue={profile.baseline_unpaid_events_per_week || 3} />
          </label>
          <label>Average value exposed per event
            <span className="input-prefix"><b>$</b><input name="averageAtRiskValue" type="number" min="0" step="0.01" defaultValue={((profile.average_at_risk_value_cents || 4200) / 100).toFixed(2)} /></span>
          </label>
          <label>Estimated recovery rate
            <span className="input-suffix"><input name="estimatedRecoveryRate" type="number" min="1" max="100" step="1" defaultValue={profile.estimated_recovery_rate || 70} /><b>%</b></span>
          </label>
        </div>
        <small className="field-help">These start as estimates. Once real payment-request history exists, the dashboard can automatically switch to actual recovery data.</small>
      </div>

      <div className="form-section">
        <p className="kicker">Primary location</p>
        <div className="form-grid">
          <label>Location name<input name="locationName" defaultValue={location?.name || "Main location"} /></label>
          <label>Street address<input name="addressLine1" defaultValue={location?.address_line1 || ""} required /></label>
          <label>Address line 2<input name="addressLine2" defaultValue={location?.address_line2 || ""} /></label>
          <label>City<input name="city" defaultValue={location?.city || ""} required /></label>
          <label>State<input name="state" defaultValue={location?.state || "KY"} required /></label>
          <label>ZIP code<input name="postalCode" defaultValue={location?.postal_code || ""} required /></label>
        </div>
      </div>

      <div className="form-section">
        <p className="kicker">Commit defaults</p>
        <div className="form-grid">
          <label>Timezone<select name="timezone" defaultValue={profile.timezone || "America/Chicago"}><option>America/Chicago</option><option>America/New_York</option><option>America/Denver</option><option>America/Los_Angeles</option></select></label>
          <label>Payment-link expiration<select name="defaultExpiration" defaultValue={String(profile.default_request_expiration_minutes || 30)}><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="60">1 hour</option><option value="120">2 hours</option><option value="1440">24 hours</option></select></label>
        </div>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="button button-primary" disabled={busy}>{busy ? "Saving…" : submitLabel}</button>
    </form>
  );
}
