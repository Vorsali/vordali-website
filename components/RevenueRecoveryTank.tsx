"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export type RecoveryTheme = "vordali" | "emerald" | "royal" | "rose" | "carbon" | "glacier" | "ember" | "ocean" | "forest" | "midnight" | "sunset" | "neon" | "gold";

export const RECOVERY_THEMES: Array<{ value: RecoveryTheme; label: string; tier: "starter" | "pro" | "enterprise"; colors: [string, string, string] }> = [
  { value: "vordali", label: "Vordali", tier: "starter", colors: ["#42e7ff", "#0a98ff", "#0752d8"] },
  { value: "emerald", label: "Emerald", tier: "starter", colors: ["#6dffd0", "#15c98b", "#087357"] },
  { value: "royal", label: "Royal", tier: "starter", colors: ["#c7a4ff", "#7a4cff", "#4220b8"] },
  { value: "rose", label: "Rose", tier: "starter", colors: ["#ffb1dc", "#f347a7", "#a31261"] },
  { value: "carbon", label: "Carbon", tier: "pro", colors: ["#dce5ef", "#68798d", "#26313f"] },
  { value: "glacier", label: "Glacier", tier: "pro", colors: ["#e4fbff", "#73d9f5", "#2c89b6"] },
  { value: "ember", label: "Ember", tier: "pro", colors: ["#ffd46f", "#ff7a22", "#ad2f0b"] },
  { value: "ocean", label: "Ocean", tier: "pro", colors: ["#79f5e8", "#0eb5c7", "#07587c"] },
  { value: "forest", label: "Forest", tier: "pro", colors: ["#b7f58a", "#42a84e", "#1b5d32"] },
  { value: "midnight", label: "Midnight", tier: "pro", colors: ["#7ea8ff", "#304fba", "#121b5c"] },
  { value: "sunset", label: "Sunset", tier: "pro", colors: ["#ffd074", "#ff6e69", "#8f2e91"] },
  { value: "neon", label: "Neon", tier: "pro", colors: ["#c8ff50", "#13e7bf", "#0871c8"] },
  { value: "gold", label: "Gold", tier: "enterprise", colors: ["#fff0a8", "#e6b83f", "#9b6810"] },
];

type Props = {
  exposedRevenue: number;
  recoveredRevenue: number;
  planAnnualCost: number;
  mode?: "estimated" | "actual";
  label?: string;
  compact?: boolean;
  theme?: RecoveryTheme;
  businessLabel?: string;
};

export function RevenueRecoveryTank({
  exposedRevenue,
  recoveredRevenue,
  planAnnualCost,
  mode = "estimated",
  label = "Revenue recovered",
  compact = false,
  theme = "vordali",
  businessLabel,
}: Props) {
  const targetPercent = useMemo(() => {
    if (exposedRevenue <= 0) return 0;
    return Math.max(0, Math.min(100, (recoveredRevenue / exposedRevenue) * 100));
  }, [exposedRevenue, recoveredRevenue]);
  const breakEvenPercent = exposedRevenue > 0 ? Math.max(0, Math.min(100, (planAnnualCost / exposedRevenue) * 100)) : 0;
  const [displayPercent, setDisplayPercent] = useState(targetPercent);
  const [displayMoney, setDisplayMoney] = useState(recoveredRevenue);
  const previous = useRef({ percent: targetPercent, money: recoveredRevenue });
  const selectedTheme = RECOVERY_THEMES.find((item) => item.value === theme) ?? RECOVERY_THEMES[0];

  useEffect(() => {
    let frame = 0;
    const started = performance.now();
    const duration = 820;
    const from = previous.current;
    function tick(now: number) {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(from.percent + (targetPercent - from.percent) * eased);
      setDisplayMoney(from.money + (recoveredRevenue - from.money) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else previous.current = { percent: targetPercent, money: recoveredRevenue };
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [targetPercent, recoveredRevenue]);

  const tankStyle = {
    "--tank-light": selectedTheme.colors[0],
    "--tank-mid": selectedTheme.colors[1],
    "--tank-deep": selectedTheme.colors[2],
  } as CSSProperties;

  return (
    <section className={`recovery-tank-card theme-${theme} ${compact ? "compact" : ""}`} style={tankStyle} aria-label={`${mode} Recovery Tank visualization`}>
      <div className="tank-copy">
        <span className="tank-mode">Recovery Tank™ · {mode === "actual" ? "Live" : "Simulator"}</span>
        {businessLabel ? <span className="tank-business-label">{businessLabel}</span> : null}
        <strong>{money.format(displayMoney)}</strong>
        <p>{label}</p>
        <div className="tank-summary">
          <span><b>{money.format(exposedRevenue)}</b> annual revenue at risk</span>
          <span><b>{money.format(planAnnualCost)}</b> annual Commit cost</span>
          <span><b>{money.format(Math.max(0, recoveredRevenue - planAnnualCost))}</b> estimated net gain</span>
        </div>
        <div className="tank-plaque"><span>Recovery Tank™</span><small>Powered by Commit</small></div>
      </div>
      <div className="tank-shell" role="img" aria-label={`${Math.round(displayPercent)} percent of exposed revenue recovered`}>
        <div className="tank-rim"></div>
        <div className="tank-glass"></div>
        <div className="tank-liquid" style={{ height: `${displayPercent}%` }}>
          <div className="tank-wave tank-wave-one"></div>
          <div className="tank-wave tank-wave-two"></div>
          {["one", "two", "three", "four", "five", "six"].map((particle) => <span key={particle} className={`money-particle particle-${particle}`}>$</span>)}
          <span className="tank-bubble bubble-one"></span><span className="tank-bubble bubble-two"></span><span className="tank-bubble bubble-three"></span>
        </div>
        <div className="tank-break-even" style={{ bottom: `${breakEvenPercent}%` }}><span>Commit breaks even</span></div>
        <div className="tank-level">{Math.round(displayPercent)}%</div>
        <div className="tank-base-glow"></div>
      </div>
    </section>
  );
}
