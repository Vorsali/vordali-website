"use client";

import { useMemo, useState } from "react";
import { RECOVERY_THEMES, RecoveryTheme, RevenueRecoveryTank } from "@/components/RevenueRecoveryTank";
import { BUSINESS_TYPES, dashboardLanguage } from "@/lib/merchant/adaptiveProfile";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const BUSINESS_DEFAULTS: Record<string, { riskModel: string; events: number; ticket: number; recoveryRate: number }> = {
  restaurant: { riskModel: "prepared_order_loss", events: 5, ticket: 42, recoveryRate: 70 },
  bakery_catering: { riskModel: "deposit_required", events: 3, ticket: 125, recoveryRate: 75 },
  automotive: { riskModel: "unpaid_invoice", events: 2, ticket: 480, recoveryRate: 68 },
  home_services: { riskModel: "deposit_required", events: 2, ticket: 650, recoveryRate: 72 },
  professional_services: { riskModel: "unpaid_invoice", events: 2, ticket: 375, recoveryRate: 65 },
  appointments: { riskModel: "appointment_no_show", events: 6, ticket: 85, recoveryRate: 78 },
  retail: { riskModel: "phone_order_abandonment", events: 4, ticket: 68, recoveryRate: 70 },
  other: { riskModel: "custom", events: 3, ticket: 100, recoveryRate: 70 },
};

export function RoiCalculator({ compact = false }: { compact?: boolean }) {
  const [businessType, setBusinessType] = useState("restaurant");
  const [riskModel, setRiskModel] = useState(BUSINESS_DEFAULTS.restaurant.riskModel);
  const [events, setEvents] = useState(compact ? 3 : BUSINESS_DEFAULTS.restaurant.events);
  const [ticket, setTicket] = useState(BUSINESS_DEFAULTS.restaurant.ticket);
  const [recoveryRate, setRecoveryRate] = useState(BUSINESS_DEFAULTS.restaurant.recoveryRate);
  const [weeks, setWeeks] = useState(52);
  const [theme, setTheme] = useState<RecoveryTheme>("vordali");
  const annualExposed = useMemo(() => Math.max(0, events * ticket * weeks), [events, ticket, weeks]);
  const annualRecovered = useMemo(() => annualExposed * (recoveryRate / 100), [annualExposed, recoveryRate]);
  const annualCost = 39.99 * 12;
  const ratio = annualRecovered / annualCost;
  const netGain = Math.max(0, annualRecovered - annualCost);
  const language = dashboardLanguage(riskModel);
  const business = BUSINESS_TYPES.find((item) => item.value === businessType)?.label ?? "Your business";
  const starterThemes = RECOVERY_THEMES.filter((item) => item.tier === "starter");

  function changeBusinessType(value: string) {
    const defaults = BUSINESS_DEFAULTS[value] ?? BUSINESS_DEFAULTS.other;
    setBusinessType(value);
    setRiskModel(defaults.riskModel);
    setEvents(defaults.events);
    setTicket(defaults.ticket);
    setRecoveryRate(defaults.recoveryRate);
  }

  return (
    <div className={`roi-tank-layout ${compact ? "compact-layout" : ""}`}>
      <div className="roi-controls recovery-simulator-controls">
        <div className="simulator-heading">
          <span>Interactive simulator</span>
          <h3>Build your Recovery Tank™</h3>
          <p>See what your business could recover before you commit to Commit.</p>
        </div>
        <label>Business type
          <select value={businessType} onChange={(event) => changeBusinessType(event.target.value)}>
            {BUSINESS_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </label>
        <label>{language.eventLabel} per week
          <input type="number" min="0" value={events} onChange={(event) => setEvents(Number(event.target.value))} />
        </label>
        <label>{language.valueLabel}
          <div className="input-prefix"><b>$</b><input type="number" min="0" step="1" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} /></div>
        </label>
        <label>Estimated recovery rate
          <div className="range-control"><input type="range" min="10" max="100" value={recoveryRate} onChange={(event) => setRecoveryRate(Number(event.target.value))} /><strong>{recoveryRate}%</strong></div>
        </label>
        {!compact ? <label>Operating weeks per year<input type="number" min="1" max="52" value={weeks} onChange={(event) => setWeeks(Number(event.target.value))} /></label> : null}
        <fieldset className="recovery-theme-picker">
          <legend>Recovery Theme</legend>
          <div className="theme-options">
            {starterThemes.map((item) => (
              <button type="button" key={item.value} className={theme === item.value ? "selected" : ""} onClick={() => setTheme(item.value)} aria-pressed={theme === item.value}>
                <span className="theme-preview" style={{ background: `linear-gradient(135deg,${item.colors[0]},${item.colors[1]} 55%,${item.colors[2]})` }}></span>
                <small>{item.label}</small>
              </button>
            ))}
          </div>
          <p>Four animated themes are included with Starter. Additional tank styles and themes unlock with Pro.</p>
        </fieldset>
        <div className="roi-inline-results">
          <span>Annual revenue at risk <b>{currency.format(annualExposed)}</b></span>
          <span>Estimated protected <b>{currency.format(annualRecovered)}</b></span>
          <span>Estimated net gain <b>{currency.format(netGain)}</b></span>
          <span>Value-to-cost <b>{ratio.toFixed(1)}×</b></span>
        </div>
      </div>
      <RevenueRecoveryTank compact={compact} exposedRevenue={annualExposed} recoveredRevenue={annualRecovered} planAnnualCost={annualCost} label={language.protectedLabel} theme={theme} businessLabel={business} />
    </div>
  );
}
