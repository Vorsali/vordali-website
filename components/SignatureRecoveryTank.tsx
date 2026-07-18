"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { RECOVERY_THEMES, RecoveryTheme } from "@/components/RevenueRecoveryTank";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function useAnimatedNumber(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  const previous = useRef(target);
  useEffect(() => {
    const from = previous.current;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (target - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else previous.current = target;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

export type SignatureRecoveryTankProps = {
  protectedRevenue: number;
  annualCost: number;
  recoveryRate: number;
  theme: RecoveryTheme;
  particle: string;
  proof: string;
  changing?: boolean;
  className?: string;
};

export function SignatureRecoveryTank({
  protectedRevenue,
  annualCost,
  recoveryRate,
  theme,
  particle,
  proof,
  changing = false,
  className = "",
}: SignatureRecoveryTankProps) {
  const themeData = RECOVERY_THEMES.find((item) => item.value === theme) ?? RECOVERY_THEMES[0];
  const valueRatio = protectedRevenue / annualCost;
  const breakEvenPercent = protectedRevenue > 0 ? Math.min(94, Math.max(5, annualCost / protectedRevenue * recoveryRate)) : 0;
  const animatedProtected = useAnimatedNumber(protectedRevenue);
  const fill = Math.max(8, Math.min(88, recoveryRate));
  const style = {
    "--tank-light": themeData.colors[0],
    "--tank-mid": themeData.colors[1],
    "--tank-deep": themeData.colors[2],
    "--tank-fill": `${fill}%`,
    "--break-even": `${breakEvenPercent}%`,
  } as CSSProperties;

  const particles = useMemo(() => Array.from({ length: 8 }, (_, index) => ({
    id: index,
    left: 11 + ((index * 23) % 78),
    delay: (index * .43) % 3.4,
    duration: 3.4 + (index % 4) * .55,
    size: 12 + (index % 3) * 5,
  })), []);

  return (
    <div className={`signature-tank-stage ${changing ? "is-changing" : ""} ${className}`.trim()} style={style}
      aria-label={`Recovery Tank showing ${currency.format(protectedRevenue)} estimated annual protected revenue`}>
      <div className="tank-value-crown">
        <small>Estimated Annual Revenue Protected</small>
        <strong>{currency.format(animatedProtected)}</strong>
        <span>+{Math.round(valueRatio * 10)}% value</span>
      </div>

      <div className="cylinder-tank">
        <div className="tank-top-rim" aria-hidden="true"></div>
        <div className="cylinder-glass">
          <div className="cylinder-liquid">
            <div className="liquid-surface surface-back"></div>
            <div className="liquid-surface surface-front"></div>
            <div className="liquid-foam"></div>
            {particles.map((item) => (
              <span key={item.id} className="business-particle" style={{ left: `${item.left}%`, animationDelay: `${item.delay}s`, animationDuration: `${item.duration}s`, fontSize: `${item.size}px` }}>{particle}</span>
            ))}
            {Array.from({ length: 6 }, (_, index) => <i key={index} className={`liquid-bubble liquid-bubble-${index + 1}`}></i>)}
          </div>
          <div className="glass-reflection reflection-one"></div>
          <div className="glass-reflection reflection-two"></div>
          <div className="glass-sweep"></div>
          <div className="break-even-line"><span>Commit breaks even</span></div>
        </div>

        <div className="tank-bottom-rim" aria-hidden="true"></div>

        <div className="tank-pedestal" aria-hidden="true">
          <div className="pedestal-top-collar"></div>
          <div className="pedestal-body">
            <div className="pedestal-metal-sheen"></div>
            <div className="tank-plaque-large">
              <i className="plaque-screw screw-tl"></i><i className="plaque-screw screw-tr"></i>
              <i className="plaque-screw screw-bl"></i><i className="plaque-screw screw-br"></i>
              <strong>Recovery Tank™</strong><small>◉ Powered by Commit</small>
            </div>
          </div>
          <div className="pedestal-light-strip"></div>
          <div className="pedestal-floor-glow"></div>
        </div>
      </div>
      <p className="tank-proof-line">{proof} · {recoveryRate}% estimated recovery</p>
    </div>
  );
}
