"use client";

import { useMemo, useState } from "react";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function RoiCalculator({ compact = false }: { compact?: boolean }) {
  const [orders, setOrders] = useState(18);
  const [ticket, setTicket] = useState(42);
  const [rate, setRate] = useState(6);
  const [days, setDays] = useState(365);
  const annual = useMemo(() => Math.max(0, orders * ticket * (rate / 100) * days), [orders, ticket, rate, days]);
  const ratio = annual / 479.88;

  if (compact) {
    return (
      <div className="roi-mini">
        <div>
          <label>Phone orders per day<input type="number" min="0" value={orders} onChange={e => setOrders(Number(e.target.value))} /></label>
          <label>Average order<input type="number" min="0" step=".01" value={ticket} onChange={e => setTicket(Number(e.target.value))} /></label>
          <label>Estimated no-show rate<input type="number" min="0" max="100" step=".1" value={rate} onChange={e => setRate(Number(e.target.value))} /></label>
        </div>
        <article>
          <span>Estimated annual revenue at risk</span>
          <strong>{currency.format(annual)}</strong>
          <p>Based on the inputs above. Actual results vary by business and customer behavior.</p>
          <a href="/pricing#roi-calculator">Open full ROI calculator →</a>
        </article>
      </div>
    );
  }

  return (
    <div className="roi-calculator">
      <label>Phone or commitment-dependent orders per day<input type="number" min="0" value={orders} onChange={e => setOrders(Number(e.target.value))} /></label>
      <label>Average order or job value<input type="number" min="0" step=".01" value={ticket} onChange={e => setTicket(Number(e.target.value))} /></label>
      <label>Estimated no-show or abandonment rate<input type="number" min="0" max="100" step=".1" value={rate} onChange={e => setRate(Number(e.target.value))} /><small>%</small></label>
      <label>Operating days per year<input type="number" min="0" max="366" value={days} onChange={e => setDays(Number(e.target.value))} /></label>
      <div className="roi-results">
        <div><span>Annual revenue at risk</span><strong>{currency.format(annual)}</strong></div>
        <div><span>Starter plan annual cost</span><strong>$479.88</strong></div>
        <div><span>Potential value-to-cost ratio</span><strong>{ratio.toFixed(1)}×</strong></div>
        <p>Actual revenue protected depends on customer behavior, operational policy, and how consistently the business uses Commit.</p>
      </div>
    </div>
  );
}
