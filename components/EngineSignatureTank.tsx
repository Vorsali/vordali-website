"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { RECOVERY_THEMES, RecoveryTheme } from "@/components/RevenueRecoveryTank";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function useAnimatedNumber(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  const previous = useRef(target);

  useEffect(() => {
    const from = previous.current;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (target - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else previous.current = target;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  return value;
}

type Props = {
  recoveredRevenue: number;
  annualCost: number;
  recoveryRate: number;
  pendingCount: number;
  paidCount: number;
  theme?: RecoveryTheme;
  poweredBy?: string;
  valueLabel?: string;
};

export default function EngineSignatureTank({
  recoveredRevenue,
  annualCost,
  recoveryRate,
  pendingCount,
  paidCount,
  theme = "vordali",
  poweredBy = "Vordali",
  valueLabel = "Recovered Value",
}: Props) {
  const selectedTheme = RECOVERY_THEMES.find((item) => item.value === theme) ?? RECOVERY_THEMES[0];
  const displayRevenue = useAnimatedNumber(recoveredRevenue);
  const fillPercent = Math.max(8, Math.min(88, recoveryRate));
  const displayFill = useAnimatedNumber(fillPercent, 850);
  const breakEvenPercent = 34;

  const style = {
    "--engine-tank-light": selectedTheme.colors[0],
    "--engine-tank-mid": selectedTheme.colors[1],
    "--engine-tank-deep": selectedTheme.colors[2],
    "--engine-tank-fill": `${displayFill}%`,
    "--engine-break-even": `${breakEvenPercent}%`,
  } as CSSProperties;

  return (
    <section
      className="engine-dom-tank"
      style={style}
      aria-label={`Recovery Tank showing ${currency.format(recoveredRevenue)} in recovered revenue`}
    >
      <header className="engine-dom-tank-crown">
        <small>{valueLabel}</small>
        <strong>{currency.format(displayRevenue)}</strong>
        <span>{pendingCount} requests pending</span>
      </header>

      <div className="engine-dom-tank-vessel" role="img" aria-label={`${Math.round(displayFill)} percent recovery progress`}>
        <div className="engine-dom-tank-top-rim"><i /></div>
        <div className="engine-dom-tank-glass">
          <div className="engine-dom-tank-liquid">
            <div className="engine-dom-liquid-wave wave-back" />
            <div className="engine-dom-liquid-wave wave-front" />
            {Array.from({ length: 8 }, (_, index) => (
              <span key={index} className={`engine-dom-particle particle-${index + 1}`}>$</span>
            ))}
            {Array.from({ length: 7 }, (_, index) => (
              <i key={index} className={`engine-dom-bubble bubble-${index + 1}`} />
            ))}
          </div>
          <div className="engine-dom-glass-highlight highlight-one" />
          <div className="engine-dom-glass-highlight highlight-two" />
          <div className="engine-dom-break-even">
            <span>Break-even</span>
            <small>{currency.format(annualCost)}/year</small>
          </div>
        </div>

        <div className="engine-dom-tank-collar" />
        <div className="engine-dom-tank-base">
          <div className="engine-dom-tank-plaque">
            <strong>Recovery Tank™</strong>
            <small>Powered by {poweredBy}</small>
          </div>
        </div>
        <div className="engine-dom-floor-glow" />
      </div>

      <p className="engine-dom-proof">{paidCount} verified payments · {Math.round(recoveryRate)}% recovery progress</p>
    </section>
  );
}
