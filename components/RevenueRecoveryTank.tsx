"use client";

import { useEffect, useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Props = {
  exposedRevenue: number;
  recoveredRevenue: number;
  planAnnualCost: number;
  mode?: "estimated" | "actual";
  label?: string;
  compact?: boolean;
};

export function RevenueRecoveryTank({ exposedRevenue, recoveredRevenue, planAnnualCost, mode = "estimated", label = "Revenue recovered", compact = false }: Props) {
  const targetPercent = useMemo(() => {
    if (exposedRevenue <= 0) return 0;
    return Math.max(0, Math.min(100, (recoveredRevenue / exposedRevenue) * 100));
  }, [exposedRevenue, recoveredRevenue]);
  const breakEvenPercent = exposedRevenue > 0 ? Math.max(0, Math.min(100, (planAnnualCost / exposedRevenue) * 100)) : 0;
  const [displayPercent, setDisplayPercent] = useState(0);
  const [displayMoney, setDisplayMoney] = useState(0);

  useEffect(() => {
    let frame = 0;
    const started = performance.now();
    const duration = 900;
    function tick(now: number) {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(targetPercent * eased);
      setDisplayMoney(recoveredRevenue * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetPercent, recoveredRevenue]);

  return (
    <section className={`recovery-tank-card ${compact ? "compact" : ""}`} aria-label={`${mode} revenue recovery visualization`}>
      <div className="tank-copy">
        <span className="tank-mode">{mode === "actual" ? "Actual recovery" : "Estimated recovery"}</span>
        <strong>{money.format(displayMoney)}</strong>
        <p>{label}</p>
        <div className="tank-summary">
          <span><b>{money.format(exposedRevenue)}</b> exposed</span>
          <span><b>{money.format(planAnnualCost)}</b> annual plan</span>
        </div>
      </div>
      <div className="tank-shell" role="img" aria-label={`${Math.round(displayPercent)} percent of exposed revenue recovered`}>
        <div className="tank-glass"></div>
        <div className="tank-liquid" style={{ height: `${displayPercent}%` }}>
          <div className="tank-wave tank-wave-one"></div>
          <div className="tank-wave tank-wave-two"></div>
          <span className="money-particle particle-one">$</span>
          <span className="money-particle particle-two">$</span>
          <span className="money-particle particle-three">$</span>
        </div>
        <div className="tank-break-even" style={{ bottom: `${breakEvenPercent}%` }}><span>Break even</span></div>
        <div className="tank-level">{Math.round(displayPercent)}%</div>
      </div>
    </section>
  );
}
