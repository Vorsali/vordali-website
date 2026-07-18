"use client";

import { useMemo, useState } from "react";
import { RevenueRecoveryTank } from "@/components/RevenueRecoveryTank";
import { dashboardLanguage, RISK_MODELS } from "@/lib/merchant/adaptiveProfile";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function RoiCalculator({ compact = false }: { compact?: boolean }) {
  const [riskModel, setRiskModel] = useState("prepared_order_loss");
  const [events, setEvents] = useState(compact ? 3 : 5);
  const [ticket, setTicket] = useState(42);
  const [recoveryRate, setRecoveryRate] = useState(70);
  const [weeks, setWeeks] = useState(52);
  const annualExposed = useMemo(() => Math.max(0, events * ticket * weeks), [events, ticket, weeks]);
  const annualRecovered = useMemo(() => annualExposed * (recoveryRate / 100), [annualExposed, recoveryRate]);
  const ratio = annualRecovered / 479.88;
  const language = dashboardLanguage(riskModel);

  if (compact) {
    return (
      <div className="roi-tank-layout compact-layout">
        <div className="roi-controls">
          <label>Revenue-risk type<select value={riskModel} onChange={(event) => setRiskModel(event.target.value)}>{RISK_MODELS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
          <label>{language.eventLabel} per week<input type="number" min="0" value={events} onChange={(event) => setEvents(Number(event.target.value))} /></label>
          <label>{language.valueLabel}<input type="number" min="0" step=".01" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} /></label>
          <label>Estimated recovery rate<input type="range" min="10" max="100" value={recoveryRate} onChange={(event) => setRecoveryRate(Number(event.target.value))} /><span>{recoveryRate}%</span></label>
        </div>
        <RevenueRecoveryTank compact exposedRevenue={annualExposed} recoveredRevenue={annualRecovered} planAnnualCost={479.88} label={language.protectedLabel} />
      </div>
    );
  }

  return (
    <div className="roi-tank-layout">
      <div className="roi-controls">
        <label>Revenue-risk model<select value={riskModel} onChange={(event) => setRiskModel(event.target.value)}>{RISK_MODELS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
        <label>{language.eventLabel} per week<input type="number" min="0" value={events} onChange={(event) => setEvents(Number(event.target.value))} /></label>
        <label>{language.valueLabel}<input type="number" min="0" step=".01" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} /></label>
        <label>Estimated recovery rate<input type="number" min="1" max="100" step="1" value={recoveryRate} onChange={(event) => setRecoveryRate(Number(event.target.value))} /><small>%</small></label>
        <label>Operating weeks per year<input type="number" min="1" max="52" value={weeks} onChange={(event) => setWeeks(Number(event.target.value))} /></label>
        <div className="roi-inline-results">
          <span>Annual exposure <b>{currency.format(annualExposed)}</b></span>
          <span>Estimated protected <b>{currency.format(annualRecovered)}</b></span>
          <span>Value-to-cost <b>{ratio.toFixed(1)}×</b></span>
        </div>
      </div>
      <RevenueRecoveryTank exposedRevenue={annualExposed} recoveredRevenue={annualRecovered} planAnnualCost={479.88} label={language.protectedLabel} />
    </div>
  );
}
