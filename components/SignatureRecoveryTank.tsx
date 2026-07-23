"use client";

import { CSSProperties, useEffect, useId, useMemo, useRef, useState } from "react";
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
  valueLabel?: string;
  valueBadge?: string;
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
  valueLabel = "Estimated Annual Revenue Protected",
  valueBadge,
}: SignatureRecoveryTankProps) {
  const instanceId = useId().replace(/:/g, "");
  const svgIds = {
    glassStroke: `${instanceId}-glassStroke`,
    glassFill: `${instanceId}-glassFill`,
    liquidFill: `${instanceId}-liquidFill`,
    metalBody: `${instanceId}-metalBody`,
    collarMetal: `${instanceId}-collarMetal`,
    plaqueMetal: `${instanceId}-plaqueMetal`,
    floorGlow: `${instanceId}-floorGlow`,
    tankGlow: `${instanceId}-tankGlow`,
    softGlow: `${instanceId}-softGlow`,
    tankInterior: `${instanceId}-tankInterior`,
  };
  const themeData = RECOVERY_THEMES.find((item) => item.value === theme) ?? RECOVERY_THEMES[0];
  const valueRatio = protectedRevenue / annualCost;
  const breakEvenPercent = protectedRevenue > 0
    ? Math.min(92, Math.max(8, (annualCost / protectedRevenue) * 100))
    : 0;
  const animatedProtected = useAnimatedNumber(protectedRevenue);
  const fill = Math.max(8, Math.min(88, recoveryRate));
  const animatedFill = useAnimatedNumber(fill, 850);
  const liquidTop = 382 - (animatedFill / 100) * 270;
  const breakEvenY = 382 - (breakEvenPercent / 100) * 270;
  const style = {
    "--tank-light": themeData.colors[0],
    "--tank-mid": themeData.colors[1],
    "--tank-deep": themeData.colors[2],
  } as CSSProperties;

  const particles = useMemo(() => Array.from({ length: 8 }, (_, index) => ({
    id: index,
    x: 132 + ((index * 37) % 176),
    y: 190 + ((index * 47) % 160),
    delay: (index * .41) % 3.2,
    duration: 3.6 + (index % 4) * .55,
    size: 11 + (index % 3) * 4,
  })), []);

  return (
    <div className={`signature-tank-stage unified-tank-stage ${changing ? "is-changing" : ""} ${className}`.trim()} style={style}
      aria-label={`Recovery Tank showing ${currency.format(protectedRevenue)} estimated annual protected revenue`}>
      <div className="tank-value-crown">
        <small>{valueLabel}</small>
        <strong>{currency.format(animatedProtected)}</strong>
        <span>{valueBadge ?? `+${Math.round(valueRatio * 10)}% value`}</span>
      </div>

      <div className="unified-tank-wrap">
        <svg className="unified-tank-svg" viewBox="0 0 440 520" role="img" aria-hidden="true">
          <defs>
            <linearGradient id={svgIds.glassStroke} x1="0" x2="1">
              <stop offset="0" stopColor="var(--tank-light)" stopOpacity=".92" />
              <stop offset=".18" stopColor="#e9fbff" stopOpacity=".9" />
              <stop offset=".5" stopColor="var(--tank-mid)" stopOpacity=".65" />
              <stop offset=".82" stopColor="#d7f8ff" stopOpacity=".88" />
              <stop offset="1" stopColor="var(--tank-light)" stopOpacity=".92" />
            </linearGradient>
            <linearGradient id={svgIds.glassFill} x1="0" x2="1">
              <stop offset="0" stopColor="#dff8ff" stopOpacity=".11" />
              <stop offset=".15" stopColor="#9eeeff" stopOpacity=".03" />
              <stop offset=".5" stopColor="#ffffff" stopOpacity=".015" />
              <stop offset=".84" stopColor="#b9f5ff" stopOpacity=".06" />
              <stop offset="1" stopColor="#dff8ff" stopOpacity=".14" />
            </linearGradient>
            <linearGradient id={svgIds.liquidFill} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--tank-light)" stopOpacity=".96" />
              <stop offset=".3" stopColor="var(--tank-mid)" stopOpacity=".95" />
              <stop offset="1" stopColor="var(--tank-deep)" stopOpacity=".98" />
            </linearGradient>
            <linearGradient id={svgIds.metalBody} x1="0" x2="1">
              <stop offset="0" stopColor="#101923" />
              <stop offset=".13" stopColor="#33465a" />
              <stop offset=".31" stopColor="#101922" />
              <stop offset=".5" stopColor="#62778d" />
              <stop offset=".69" stopColor="#111a24" />
              <stop offset=".87" stopColor="#35485b" />
              <stop offset="1" stopColor="#0d151e" />
            </linearGradient>
            <linearGradient id={svgIds.collarMetal} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d3e6f3" />
              <stop offset=".18" stopColor="#586c7f" />
              <stop offset=".55" stopColor="#152332" />
              <stop offset="1" stopColor="#070d14" />
            </linearGradient>
            <linearGradient id={svgIds.plaqueMetal} x1="0" x2="1">
              <stop offset="0" stopColor="#6f7d89" />
              <stop offset=".18" stopColor="#e7edf1" />
              <stop offset=".48" stopColor="#aab5be" />
              <stop offset=".72" stopColor="#edf2f5" />
              <stop offset="1" stopColor="#6d7b86" />
            </linearGradient>
            <radialGradient id={svgIds.floorGlow}>
              <stop offset="0" stopColor="var(--tank-light)" stopOpacity=".42" />
              <stop offset=".48" stopColor="var(--tank-mid)" stopOpacity=".14" />
              <stop offset="1" stopColor="var(--tank-mid)" stopOpacity="0" />
            </radialGradient>
            <filter id={svgIds.tankGlow} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id={svgIds.softGlow} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="11" />
            </filter>
            <clipPath id={svgIds.tankInterior}>
              <path d="M92 92 C92 76 348 76 348 92 L348 370 C348 389 92 389 92 370 Z" />
            </clipPath>
          </defs>

          <ellipse cx="220" cy="474" rx="145" ry="18" fill={`url(#${svgIds.floorGlow})`} className="tank-floor-glow-svg" />

          <g className="tank-unified-assembly">
            {/* Everything behind the glass is painted first. */}
            <g className="unified-collar-rear">
              <path
                d="M86 404 C108 381 332 381 354 404"
                fill="none"
                stroke={`url(#${svgIds.collarMetal})`}
                strokeWidth="15"
                strokeLinecap="round"
              />
              <path
                d="M92 401 C121 386 319 386 348 401"
                fill="none"
                stroke="var(--tank-light)"
                strokeOpacity=".46"
                strokeWidth="2"
              />
            </g>

            <g className="unified-pedestal">
              <path
                d="M81 407 L81 451 C81 467 359 467 359 451 L359 407 C344 420 96 420 81 407 Z"
                fill={`url(#${svgIds.metalBody})`}
                stroke="#688096"
                strokeOpacity=".55"
                strokeWidth="1.5"
              />
              <ellipse cx="220" cy="451" rx="139" ry="16" fill={`url(#${svgIds.metalBody})`} stroke="#60768a" strokeOpacity=".72" strokeWidth="1.4" />
              <path d="M94 450 Q220 462 346 450" fill="none" stroke="var(--tank-light)" strokeWidth="3" strokeOpacity=".9" filter={`url(#${svgIds.tankGlow})`} />
            </g>

            {/* The complete glass vessel is now painted over the rear collar and pedestal body. */}
            <g className="unified-glass-assembly" transform="translate(0 12)">
              <g clipPath={`url(#${svgIds.tankInterior})`}>
                <rect x="88" y={liquidTop} width="264" height={390 - liquidTop} fill={`url(#${svgIds.liquidFill})`} />
                <path className="svg-wave svg-wave-back" d={`M70 ${liquidTop + 4} Q120 ${liquidTop - 10} 170 ${liquidTop + 4} T270 ${liquidTop + 4} T370 ${liquidTop + 4} L370 ${liquidTop + 38} L70 ${liquidTop + 38} Z`} fill="var(--tank-light)" fillOpacity=".48" />
                <path className="svg-wave svg-wave-front" d={`M70 ${liquidTop + 7} Q125 ${liquidTop + 22} 180 ${liquidTop + 7} T290 ${liquidTop + 7} T400 ${liquidTop + 7} L400 ${liquidTop + 42} L70 ${liquidTop + 42} Z`} fill="var(--tank-mid)" fillOpacity=".55" />
                <path d={`M88 ${liquidTop + 2} Q145 ${liquidTop - 7} 220 ${liquidTop + 2} T352 ${liquidTop + 2}`} fill="none" stroke="#e6fdff" strokeOpacity=".84" strokeWidth="3" filter={`url(#${svgIds.tankGlow})`} />

                {particles.map((item) => (
                  <g key={item.id} className="svg-business-particle-wrap">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 22; 0 0; 0 -54"
                      keyTimes="0; .2; 1"
                      dur={`${item.duration}s`}
                      begin={`-${item.delay}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0; .7; .5; 0"
                      keyTimes="0; .2; .8; 1"
                      dur={`${item.duration}s`}
                      begin={`-${item.delay}s`}
                      repeatCount="indefinite"
                    />
                    <text className="svg-business-particle" x={item.x} y={item.y} fontSize={item.size}>{particle}</text>
                  </g>
                ))}
                {Array.from({ length: 7 }, (_, index) => (
                  <circle key={index} className={`svg-bubble svg-bubble-${index + 1}`} cx={118 + ((index * 43) % 206)} cy={340 - ((index * 31) % 140)} r={2.5 + (index % 3) * 1.8}
                    fill="none" stroke="#d9fbff" strokeOpacity=".52" />
                ))}
              </g>

              <path d="M92 92 C92 76 348 76 348 92 L348 370 C348 389 92 389 92 370 Z" fill={`url(#${svgIds.glassFill})`} stroke={`url(#${svgIds.glassStroke})`} strokeWidth="4" filter={`url(#${svgIds.tankGlow})`} />
              <ellipse cx="220" cy="91" rx="128" ry="15" fill="#07101d" fillOpacity=".18" stroke={`url(#${svgIds.glassStroke})`} strokeWidth="4" />
              <ellipse cx="220" cy="91" rx="117" ry="9" fill="none" stroke="#d9fbff" strokeOpacity=".52" strokeWidth="1.4" />
              <path d="M128 104 C112 185 114 290 126 358" fill="none" stroke="#e9fbff" strokeOpacity=".24" strokeWidth="24" strokeLinecap="round" />
              <path d="M309 105 C320 180 320 294 307 359" fill="none" stroke="#d4f8ff" strokeOpacity=".13" strokeWidth="10" strokeLinecap="round" />
              <path className="svg-glass-sweep" d="M154 104 C135 190 142 285 160 356" fill="none" stroke="#ffffff" strokeOpacity=".42" strokeWidth="13" strokeLinecap="round" />

              {/* This visible glass foot continues into the collar opening. */}
              <ellipse cx="220" cy="379" rx="126" ry="13" fill="#8eeeff" fillOpacity=".035" stroke={`url(#${svgIds.glassStroke})`} strokeWidth="2.7" filter={`url(#${svgIds.tankGlow})`} />
              <path d="M101 381 Q220 394 339 381" fill="none" stroke="#e3fbff" strokeOpacity=".42" strokeWidth="1.2" />

              {/* Break-even marker is painted last so liquid, reflections, and the glass foot cannot hide it. */}
              <g className="break-even-marker-svg">
                <line x1="97" x2="349" y1={breakEvenY} y2={breakEvenY}
                  stroke="#04111f" strokeOpacity=".8" strokeWidth="5.5" strokeDasharray="8 6" strokeLinecap="round" />
                <line x1="97" x2="349" y1={breakEvenY} y2={breakEvenY}
                  stroke="var(--tank-light)" strokeOpacity="1" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" />
                <line x1="349" x2="368" y1={breakEvenY} y2={breakEvenY}
                  stroke="var(--tank-light)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="349" cy={breakEvenY} r="3.5" fill="var(--tank-light)" />
                <g transform={`translate(373 ${breakEvenY - 10})`} className="break-even-label-svg">
                  <rect x="-4" y="-10" width="62" height="29" rx="6" fill="#061326" fillOpacity=".94" stroke="var(--tank-light)" strokeOpacity=".55" />
                  <text fill="#ffffff" fontSize="10" fontWeight="800">Break-even</text>
                  <text y="12" fill="#cfe7f8" fontSize="7.3">{currency.format(annualCost)}/year</text>
                </g>
              </g>
            </g>

            {/* Only the narrow front retaining lip is allowed to cross the glass. */}
            <g className="unified-collar-front">
              <path
                d="M88 404 C116 418 324 418 352 404"
                fill="none"
                stroke={`url(#${svgIds.collarMetal})`}
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M94 405 C128 414 312 414 346 405"
                fill="none"
                stroke="var(--tank-light)"
                strokeOpacity=".88"
                strokeWidth="2"
                filter={`url(#${svgIds.tankGlow})`}
              />
            </g>

            <g className="unified-plaque">
              <rect x="121" y="414" width="198" height="34" rx="5" fill="#101820" fillOpacity=".62" />
              <rect x="124" y="411" width="192" height="34" rx="5" fill={`url(#${svgIds.plaqueMetal})`} stroke="#273644" strokeWidth="1.4" />
              <text x="220" y="427" textAnchor="middle" fill="#101923" fontSize="16" fontFamily="Georgia, serif" fontWeight="700">Recovery Tank™</text>
              <text x="220" y="439" textAnchor="middle" fill="#263544" fontSize="7.2">◉ Powered by Commit</text>
              <g fill="#26323d" stroke="#dce5eb" strokeWidth=".7">
                <circle cx="134" cy="419" r="2.7"/><circle cx="306" cy="419" r="2.7"/>
                <circle cx="134" cy="438" r="2.7"/><circle cx="306" cy="438" r="2.7"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p className="tank-proof-line">{proof} · {recoveryRate}% estimated recovery</p>
    </div>
  );
}
