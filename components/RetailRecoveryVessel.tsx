"use client";

import { CSSProperties, useId } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type RetailRecoveryVesselProps = {
  recovered: number;
  annualCost: number;
  progress: number;
};

export function RetailRecoveryVessel({ recovered, annualCost, progress }: RetailRecoveryVesselProps) {
  const uid = useId().replace(/:/g, "");
  const fill = Math.max(10, Math.min(90, progress));
  const liquidTop = 354 - (fill / 100) * 146;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 354 - (breakEvenPercent / 100) * 146;

  const style = {
    "--commerce-light": "#c9ffff",
    "--commerce-mid": "#50dff5",
    "--commerce-deep": "#087aa6",
  } as CSSProperties;

  const ids = {
    frame: `${uid}-frame`,
    dark: `${uid}-dark`,
    glass: `${uid}-glass`,
    liquid: `${uid}-liquid`,
    edge: `${uid}-edge`,
    glow: `${uid}-glow`,
    soft: `${uid}-soft`,
    chamberClip: `${uid}-chamber-clip`,
  };

  return (
    <div
      className="retail-vessel-stage"
      style={style}
      role="img"
      aria-label={`Retail Commerce Series revenue engine showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}
    >
      <div className="retail-vessel-crown">
        <span>COMMERCE SERIES</span>
        <strong>Digital Revenue Engine™</strong>
        <small>Transaction capture, recovery visualization, and live commerce telemetry</small>
      </div>

      <svg className="retail-vessel-svg" viewBox="0 0 560 560" aria-hidden="true">
        <defs>
          <linearGradient id={ids.frame} x1="0" x2="1">
            <stop offset="0" stopColor="#02070d" />
            <stop offset=".18" stopColor="#4c6470" />
            <stop offset=".38" stopColor="#e8f6fa" />
            <stop offset=".56" stopColor="#536d79" />
            <stop offset=".78" stopColor="#d8edf2" />
            <stop offset="1" stopColor="#030910" />
          </linearGradient>
          <linearGradient id={ids.dark} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#142631" />
            <stop offset=".55" stopColor="#07131d" />
            <stop offset="1" stopColor="#02060b" />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".28" />
            <stop offset=".24" stopColor="#d9fbff" stopOpacity=".05" />
            <stop offset=".7" stopColor="#ffffff" stopOpacity=".015" />
            <stop offset="1" stopColor="#d8fbff" stopOpacity=".19" />
          </linearGradient>
          <linearGradient id={ids.liquid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--commerce-light)" />
            <stop offset=".48" stopColor="var(--commerce-mid)" />
            <stop offset="1" stopColor="var(--commerce-deep)" />
          </linearGradient>
          <linearGradient id={ids.edge} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dfffff" stopOpacity=".95" />
            <stop offset=".45" stopColor="#55dff6" stopOpacity=".62" />
            <stop offset="1" stopColor="#137fae" stopOpacity=".28" />
          </linearGradient>
          <filter id={ids.glow} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.soft} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <clipPath id={ids.chamberClip}>
            <rect x="222" y="165" width="116" height="205" rx="49" />
          </clipPath>
        </defs>

        <ellipse cx="280" cy="510" rx="170" ry="25" fill="var(--commerce-mid)" opacity=".14" filter={`url(#${ids.soft})`} />

        <g className="retail-fixed-frame">
          <rect x="138" y="96" width="284" height="378" rx="48" fill="#040a12" stroke={`url(#${ids.frame})`} strokeWidth="10" />
          <rect x="153" y="111" width="254" height="348" rx="39" fill="#07121d" stroke="#4fdff4" strokeOpacity=".27" strokeWidth="2" />
          <path d="M170 133 V439 M390 133 V439" stroke={`url(#${ids.edge})`} strokeWidth="3" opacity=".75" />
          <path d="M183 125 H377" stroke="#efffff" strokeOpacity=".28" strokeWidth="2" />
          <path d="M183 445 H377" stroke="#43d7ef" strokeOpacity=".22" strokeWidth="2" />
          <rect x="168" y="122" width="224" height="314" rx="28" fill="#07111a" stroke="#9ef5ff" strokeOpacity=".12" />
        </g>

        <g className="retail-top-display">
          <rect x="190" y="116" width="180" height="50" rx="12" fill="#02070c" stroke="#6ce9fa" strokeOpacity=".34" />
          <text x="207" y="134" fill="#7ea0b1" fontSize="7" letterSpacing="1">LIVE COMMERCE TELEMETRY</text>
          <text x="207" y="153" fill="#ffffff" fontSize="16" fontWeight="800">{currency.format(recovered)}</text>
          <circle cx="351" cy="140" r="5" fill="#50e49c" filter={`url(#${ids.glow})`} />
          <text x="338" y="154" fill="#7c9cab" fontSize="6">SYNCED</text>
        </g>

        <g className="retail-transaction-stream">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className="retail-transaction-packet" style={{ animationDelay: `${i * -0.78}s` }}>
              <rect x={251 + (i % 3) * 29} y={178 - i * 34} width="22" height="16" rx="5" fill="#07141e" stroke="#8ff6ff" strokeOpacity=".8" />
              <text x={262 + (i % 3) * 29} y={190 - i * 34} textAnchor="middle" fill="#dfffff" fontSize="9" fontWeight="800">$</text>
            </g>
          ))}
        </g>

        <g className="retail-vessel-body">
          <rect x="205" y="148" width="150" height="239" rx="62" fill="#02070c" stroke={`url(#${ids.frame})`} strokeWidth="9" />
          <rect x="215" y="158" width="130" height="219" rx="55" fill="#071018" stroke="#68e7f8" strokeOpacity=".44" strokeWidth="2" />

          <g clipPath={`url(#${ids.chamberClip})`}>
            <rect x="222" y="165" width="116" height="205" rx="49" fill="#02090f" />
            <rect x="222" y={liquidTop} width="116" height={370 - liquidTop} fill={`url(#${ids.liquid})`} />
            <path className="retail-wave retail-wave-back" d={`M212 ${liquidTop + 2} Q248 ${liquidTop - 7} 280 ${liquidTop + 2} T348 ${liquidTop + 2} V380 H212 Z`} fill="var(--commerce-light)" opacity=".36" />
            <path className="retail-wave retail-wave-front" d={`M211 ${liquidTop + 9} Q246 ${liquidTop + 17} 280 ${liquidTop + 8} T349 ${liquidTop + 8} V380 H211 Z`} fill={`url(#${ids.liquid})`} opacity=".96" />
            {[0,1,2,3,4,5].map((i) => (
              <circle key={i} className="retail-data-bubble" cx={241 + (i % 3) * 35} cy={350 - i * 24} r={2.5 + (i % 2)} fill="#e9ffff" opacity=".75" style={{ animationDelay: `${i * -.52}s` }} />
            ))}
            <rect x="222" y="165" width="116" height="205" rx="49" fill={`url(#${ids.glass})`} />
            <path className="retail-glass-sweep" d="M244 177 Q225 269 246 357" fill="none" stroke="#fff" strokeOpacity=".32" strokeWidth="10" strokeLinecap="round" />
          </g>

          <rect x="222" y="165" width="116" height="205" rx="49" fill="none" stroke="#c8fbff" strokeOpacity=".68" strokeWidth="2.2" />

          <g className="retail-break-even">
            <line x1="212" y1={breakEvenY} x2="348" y2={breakEvenY} stroke="#eaffff" strokeWidth="2" />
            <line x1="210" y1={breakEvenY} x2="350" y2={breakEvenY} stroke="#4ce4f8" strokeWidth="7" opacity=".14" filter={`url(#${ids.glow})`} />
            <rect x="347" y={breakEvenY - 12} width="76" height="24" rx="12" fill="#06131b" stroke="#5be7f7" strokeOpacity=".72" />
            <text x="385" y={breakEvenY + 3.5} textAnchor="middle" fill="#dfffff" fontSize="7.5" fontWeight="700">BREAK-EVEN</text>
          </g>
        </g>

        <g className="retail-side-display retail-side-display-left">
          <rect x="87" y="220" width="92" height="77" rx="14" fill="#030b12" stroke="#4bdcf3" strokeOpacity=".32" />
          <text x="103" y="240" fill="#6f91a3" fontSize="7">TODAY&apos;S ORDERS</text>
          <text x="103" y="269" fill="#fff" fontSize="22" fontWeight="800">48</text>
          <path d="M103 282 H160" stroke="#2b4a59" />
          <text x="103" y="292" fill="#55e5f6" fontSize="6.5">12 REMOTE</text>
        </g>

        <g className="retail-side-display retail-side-display-right">
          <rect x="381" y="220" width="92" height="77" rx="14" fill="#030b12" stroke="#4bdcf3" strokeOpacity=".32" />
          <text x="397" y="240" fill="#6f91a3" fontSize="7">REVENUE RATE</text>
          <text x="397" y="267" fill="#fff" fontSize="18" fontWeight="800">+$38</text>
          <text x="449" y="267" fill="#7897a6" fontSize="7">/HR</text>
          <path d="M397 282 H454" stroke="#2b4a59" />
          <text x="397" y="292" fill="#50e49c" fontSize="6.5">TRENDING UP</text>
        </g>

        <g className="retail-terminal-base">
          <path d="M177 392 Q177 376 193 376 H367 Q383 376 383 392 L407 447 Q411 460 395 460 H165 Q149 460 153 447 Z" fill={`url(#${ids.dark})`} stroke="#6d8995" strokeWidth="3" />
          <rect x="198" y="393" width="164" height="43" rx="9" fill="#02070c" stroke="#4bdcf3" strokeOpacity=".34" />
          <text x="214" y="409" fill="#74a5b6" fontSize="7" letterSpacing="1">RECOVERY OUTPUT</text>
          <text x="214" y="429" fill="#ffffff" fontSize="18" fontWeight="800">{currency.format(recovered)}</text>
          <circle cx="344" cy="412" r="5" fill="#50e49c" filter={`url(#${ids.glow})`} />
          <text x="331" y="430" fill="#7897a5" fontSize="6">READY</text>
          <path d="M178 448 H382" stroke="#8ceef9" strokeOpacity=".2" />
          <path d="M202 462 H358" stroke="#06101a" strokeWidth="12" strokeLinecap="round" />
          <path d="M235 475 H325" stroke={`url(#${ids.frame})`} strokeWidth="10" strokeLinecap="round" />
        </g>

        <g className="retail-serial">
          <rect x="386" y="325" width="110" height="59" rx="6" fill="#0a151d" stroke="#597987" />
          <text x="441" y="341" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">VORDALI</text>
          <text x="441" y="353" textAnchor="middle" fill="#9eb9c2" fontSize="7">COMMERCE SERIES</text>
          <line x1="397" y1="359" x2="485" y2="359" stroke="#45606c" />
          <text x="441" y="371" textAnchor="middle" fill="#77ecfb" fontSize="6.5">CS-500 PRO</text>
          <text x="441" y="380" textAnchor="middle" fill="#809da8" fontSize="5.5">REVENUE COLLECTION ENGINE</text>
        </g>
      </svg>

      <div className="retail-vessel-caption">
        <span>Real-time transaction recovery and commerce visualization</span>
        <strong className="retail-vessel-status"><i /> SYSTEM ONLINE</strong>
      </div>
    </div>
  );
}
