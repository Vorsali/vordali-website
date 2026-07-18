"use client";

import { useState } from "react";
import Link from "next/link";
import { SignatureRecoveryTank } from "@/components/SignatureRecoveryTank";
import { RECOVERY_THEMES, RecoveryTheme } from "@/components/RevenueRecoveryTank";

const particles: Record<string, string> = {
  restaurant: "▤", bakery: "◫", automotive: "⚙", services: "⌁", appointments: "✦", retail: "◇", custom: "$",
};

export function RecoveryTankLab() {
  const [theme, setTheme] = useState<RecoveryTheme>("vordali");
  const [rate, setRate] = useState(70);
  const [business, setBusiness] = useState("restaurant");
  const [changing, setChanging] = useState(false);
  const protectedRevenue = 10920 * rate / 100;

  function update<T>(setter: (value: T) => void, value: T) {
    setChanging(true); setter(value); window.setTimeout(() => setChanging(false), 420);
  }

  return <main className="tank-lab-page">
    <header className="tank-lab-header">
      <div><span>VORDALI COMMIT · LABS</span><h1>Recovery Tank™ Lab</h1><p>Isolated visual QA before homepage integration.</p></div>
      <Link href="/">Return to homepage</Link>
    </header>
    <section className="tank-lab-workbench">
      <SignatureRecoveryTank protectedRevenue={protectedRevenue} annualCost={479.88} recoveryRate={rate} theme={theme}
        particle={particles[business]} proof="Revenue protected" changing={changing} className="tank-lab-stage" />
      <aside className="tank-lab-controls">
        <label>Business particle<select value={business} onChange={e => update(setBusiness, e.target.value)}>
          <option value="restaurant">Restaurant ticket</option><option value="bakery">Bakery deposit</option><option value="automotive">Automotive gear</option><option value="services">Service mark</option><option value="appointments">Appointment sparkle</option><option value="retail">Retail tag</option><option value="custom">Dollar</option>
        </select></label>
        <label>Fill / recovery rate <b>{rate}%</b><input type="range" min="20" max="88" value={rate} onChange={e => update(setRate, Number(e.target.value))}/></label>
        <fieldset><legend>Recovery theme</legend>{RECOVERY_THEMES.slice(0,4).map(t => <button key={t.value} className={theme===t.value?'active':''} onClick={() => update(setTheme,t.value)} style={{"--swatch":t.colors[1]} as React.CSSProperties}>{t.label}</button>)}</fieldset>
        <div className="tank-lab-checklist"><strong>Acceptance checks</strong><span>✓ Glass terminates into collar</span><span>✓ Pedestal remains below tank</span><span>✓ No black ellipse under base</span><span>✓ Theme-colored light and floor glow</span></div>
      </aside>
    </section>
  </main>;
}
