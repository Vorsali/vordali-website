"use client";

import { CSSProperties, useId, useMemo } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type RestaurantRecoveryVesselProps = {
  recovered: number;
  annualCost: number;
  progress: number;
};

export function RestaurantRecoveryVessel({ recovered, annualCost, progress }: RestaurantRecoveryVesselProps) {
  const uid = useId().replace(/:/g, "");
  const fill = Math.max(8, Math.min(90, progress));
  const liquidTop = 364 - (fill / 100) * 232;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 364 - (breakEvenPercent / 100) * 232;
  const style = {
    "--vessel-light": "#67e6ff",
    "--vessel-mid": "#168cff",
    "--vessel-deep": "#0738a8",
  } as CSSProperties;

  const bubbles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        cx: 154 + ((index * 41) % 190),
        cy: 320 - ((index * 29) % 160),
        r: 2.5 + (index % 4) * 1.3,
        delay: (index * 0.37) % 3.4,
        duration: 3.8 + (index % 3) * 0.7,
      })),
    [],
  );

  const ids = {
    glass: `${uid}-glass`,
    glassStroke: `${uid}-glass-stroke`,
    liquid: `${uid}-liquid`,
    steel: `${uid}-steel`,
    steelDark: `${uid}-steel-dark`,
    gauge: `${uid}-gauge`,
    measurement: `${uid}-measurement`,
    warmSteel: `${uid}-warm-steel`,
    glow: `${uid}-glow`,
    soft: `${uid}-soft`,
    clip: `${uid}-clip`,
  };

  return (
    <div
      className="restaurant-vessel-stage"
      style={style}
      role="img"
      aria-label={`Restaurant Recovery Vessel showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}
    >
      <div className="restaurant-vessel-crown">
        <span>KITCHEN SERIES</span>
        <strong>Recovery Vessel™</strong>
        <small>Commercial liquid holding vessel</small>
      </div>

      <svg className="restaurant-vessel-svg" viewBox="0 0 520 540" aria-hidden="true">
        <defs>
          <linearGradient id={ids.glassStroke} x1="0" x2="1">
            <stop offset="0" stopColor="#dffaff" stopOpacity=".88" />
            <stop offset=".18" stopColor="var(--vessel-light)" stopOpacity=".95" />
            <stop offset=".48" stopColor="#f7ffff" stopOpacity=".52" />
            <stop offset=".78" stopColor="var(--vessel-mid)" stopOpacity=".86" />
            <stop offset="1" stopColor="#dffaff" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1">
            <stop offset="0" stopColor="#e7fbff" stopOpacity=".14" />
            <stop offset=".16" stopColor="#9cecff" stopOpacity=".035" />
            <stop offset=".5" stopColor="#ffffff" stopOpacity=".012" />
            <stop offset=".83" stopColor="#bfeeff" stopOpacity=".06" />
            <stop offset="1" stopColor="#eafcff" stopOpacity=".15" />
          </linearGradient>
          <linearGradient id={ids.liquid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--vessel-light)" stopOpacity=".98" />
            <stop offset=".3" stopColor="var(--vessel-mid)" stopOpacity=".96" />
            <stop offset="1" stopColor="var(--vessel-deep)" stopOpacity=".99" />
          </linearGradient>
          <linearGradient id={ids.steel} x1="0" x2="1">
            <stop offset="0" stopColor="#15202a" />
            <stop offset=".08" stopColor="#75899a" />
            <stop offset=".18" stopColor="#d5e0e6" />
            <stop offset=".31" stopColor="#566a7a" />
            <stop offset=".5" stopColor="#eef4f7" />
            <stop offset=".66" stopColor="#526575" />
            <stop offset=".84" stopColor="#cbd8df" />
            <stop offset="1" stopColor="#111b25" />
          </linearGradient>
          <linearGradient id={ids.steelDark} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#66798a" />
            <stop offset=".22" stopColor="#273746" />
            <stop offset=".68" stopColor="#0c151e" />
            <stop offset="1" stopColor="#02070c" />
          </linearGradient>
          <radialGradient id={ids.gauge}>
            <stop offset="0" stopColor="#172b3d" />
            <stop offset=".7" stopColor="#07111c" />
            <stop offset="1" stopColor="#00050a" />
          </radialGradient>
          <linearGradient id={ids.measurement} x1="0" x2="1">
            <stop offset="0" stopColor="#03101b" stopOpacity=".92" />
            <stop offset=".55" stopColor="#183247" stopOpacity=".9" />
            <stop offset="1" stopColor="#02080e" stopOpacity=".96" />
          </linearGradient>
          <linearGradient id={ids.warmSteel} x1="0" x2="1">
            <stop offset="0" stopColor="#3b2a1a" />
            <stop offset=".16" stopColor="#d6b47a" />
            <stop offset=".34" stopColor="#6b5234" />
            <stop offset=".55" stopColor="#f2dfb8" />
            <stop offset=".76" stopColor="#715333" />
            <stop offset="1" stopColor="#26180d" />
          </linearGradient>
          <filter id={ids.glow} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.soft} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <clipPath id={ids.clip}>
            <path d="M127 153 Q127 132 148 132 H372 Q393 132 393 153 V376 Q393 397 372 397 H148 Q127 397 127 376 Z" />
          </clipPath>
        </defs>

        <ellipse cx="260" cy="492" rx="170" ry="24" fill="var(--vessel-mid)" opacity=".2" filter={`url(#${ids.soft})`} />

        {/* rear plumbing and support frame */}
        <g className="rv-rear-hardware">
          <path d="M112 221 H76 Q58 221 58 239 V292" fill="none" stroke={`url(#${ids.steel})`} strokeWidth="12" strokeLinecap="round" />
          <path d="M408 221 H444 Q462 221 462 239 V292" fill="none" stroke={`url(#${ids.steel})`} strokeWidth="12" strokeLinecap="round" />
          <rect x="53" y="286" width="16" height="42" rx="7" fill={`url(#${ids.steelDark})`} stroke="#9fb3c2" strokeOpacity=".5" />
          <rect x="451" y="286" width="16" height="42" rx="7" fill={`url(#${ids.steelDark})`} stroke="#9fb3c2" strokeOpacity=".5" />
        </g>

        {/* lid assembly */}
        <g className="rv-lid">
          <path d="M114 137 Q124 111 153 107 H367 Q396 111 406 137 Z" fill={`url(#${ids.steelDark})`} stroke="#8da3b4" strokeOpacity=".7" strokeWidth="2" />
          <rect x="140" y="92" width="240" height="30" rx="12" fill={`url(#${ids.steel})`} stroke="#d9e7ee" strokeOpacity=".5" />
          <rect x="224" y="75" width="72" height="21" rx="10" fill={`url(#${ids.steelDark})`} stroke="#c8d6de" strokeOpacity=".6" />
          <path d="M238 75 V65 Q238 54 249 54 H271 Q282 54 282 65 V75" fill="none" stroke={`url(#${ids.steel})`} strokeWidth="7" strokeLinecap="round" />
          <circle cx="144" cy="108" r="5" fill="#0a1118" stroke="#d8e5eb" strokeOpacity=".65" />
          <circle cx="376" cy="108" r="5" fill="#0a1118" stroke="#d8e5eb" strokeOpacity=".65" />
          <g className="rv-top-port" transform="translate(172 91)">
            <ellipse cx="0" cy="0" rx="18" ry="6" fill="#0a1118" stroke="#c8d7df" strokeOpacity=".7" />
            <rect x="-13" y="-14" width="26" height="14" rx="5" fill={`url(#${ids.steel})`} />
            <ellipse cx="0" cy="-14" rx="13" ry="4" fill="#d7e2e8" opacity=".6" />
          </g>
          <g className="rv-top-port" transform="translate(348 91)">
            <ellipse cx="0" cy="0" rx="15" ry="5" fill="#0a1118" stroke="#c8d7df" strokeOpacity=".7" />
            <rect x="-10" y="-12" width="20" height="12" rx="4" fill={`url(#${ids.steel})`} />
            <ellipse cx="0" cy="-12" rx="10" ry="3.5" fill="#d7e2e8" opacity=".58" />
          </g>
          <g className="rv-latch" transform="translate(120 116)">
            <rect x="0" y="0" width="30" height="12" rx="4" fill={`url(#${ids.steelDark})`} stroke="#b5c4ce" strokeOpacity=".7" />
            <path d="M7 2 V-10 H23 V2" fill="none" stroke="#b8c8d1" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>

        {/* glass chamber and liquid */}
        <g className="rv-chamber">
          <g clipPath={`url(#${ids.clip})`}>
            <rect x="123" y={liquidTop} width="274" height={402 - liquidTop} fill={`url(#${ids.liquid})`} />
            <path className="rv-wave rv-wave-back" d={`M104 ${liquidTop + 4} Q158 ${liquidTop - 11} 212 ${liquidTop + 4} T320 ${liquidTop + 4} T430 ${liquidTop + 4} L430 ${liquidTop + 38} H104 Z`} fill="var(--vessel-light)" opacity=".42" />
            <path className="rv-wave rv-wave-front" d={`M92 ${liquidTop + 8} Q154 ${liquidTop + 23} 216 ${liquidTop + 8} T340 ${liquidTop + 8} T465 ${liquidTop + 8} L465 ${liquidTop + 43} H92 Z`} fill="var(--vessel-mid)" opacity=".56" />
            <path d={`M127 ${liquidTop + 3} Q188 ${liquidTop - 7} 260 ${liquidTop + 3} T393 ${liquidTop + 3}`} fill="none" stroke="#e8feff" strokeOpacity=".88" strokeWidth="3" filter={`url(#${ids.glow})`} />

            {bubbles.map((bubble, index) => (
              <circle key={index} className="rv-bubble" cx={bubble.cx} cy={bubble.cy} r={bubble.r} fill="none" stroke="#e3fcff" strokeOpacity=".58">
                <animate attributeName="cy" values={`${bubble.cy + 24};${bubble.cy - 34};${bubble.cy - 82}`} dur={`${bubble.duration}s`} begin={`-${bubble.delay}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;.62;.35;0" keyTimes="0;.18;.78;1" dur={`${bubble.duration}s`} begin={`-${bubble.delay}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          <path d="M127 153 Q127 132 148 132 H372 Q393 132 393 153 V376 Q393 397 372 397 H148 Q127 397 127 376 Z" fill={`url(#${ids.glass})`} stroke={`url(#${ids.glassStroke})`} strokeWidth="4" filter={`url(#${ids.glow})`} />
          <path d="M151 155 C140 212 141 320 154 372" fill="none" stroke="#ffffff" strokeOpacity=".23" strokeWidth="27" strokeLinecap="round" />
          <path d="M175 153 C161 223 164 313 179 373" fill="none" stroke="#ffffff" strokeOpacity=".38" strokeWidth="8" strokeLinecap="round" className="rv-glass-sweep" />
          <path d="M357 153 C368 224 367 312 356 373" fill="none" stroke="#c7f4ff" strokeOpacity=".14" strokeWidth="12" strokeLinecap="round" />
          <rect x="145" y="146" width="230" height="8" rx="4" fill="#ffffff" opacity=".12" />

          <g className="rv-measurement-rail" transform="translate(106 151)">
            <rect width="18" height="242" rx="7" fill={`url(#${ids.measurement})`} stroke="#9ecce2" strokeOpacity=".42" />
            {[0, 25, 50, 75, 100].map((mark) => {
              const y = 228 - mark * 2.12;
              return (
                <g key={mark}>
                  <line x1="5" x2={mark % 50 === 0 ? 17 : 13} y1={y} y2={y} stroke="#dff8ff" strokeOpacity={mark % 50 === 0 ? ".8" : ".48"} strokeWidth={mark % 50 === 0 ? "1.6" : "1"} />
                  {mark % 50 === 0 ? <text x="-5" y={y + 3} textAnchor="end" fill="#9db6c8" fontSize="7">{mark}%</text> : null}
                </g>
              );
            })}
          </g>

          <g className="rv-break-even">
            <line x1="132" x2="389" y1={breakEvenY} y2={breakEvenY} stroke="#04111f" strokeWidth="6" strokeDasharray="8 6" strokeLinecap="round" />
            <line x1="132" x2="389" y1={breakEvenY} y2={breakEvenY} stroke="var(--vessel-light)" strokeWidth="2.6" strokeDasharray="8 6" strokeLinecap="round" />
            <line x1="389" x2="410" y1={breakEvenY} y2={breakEvenY} stroke="var(--vessel-light)" strokeWidth="2" />
            <circle cx="389" cy={breakEvenY} r="3.5" fill="var(--vessel-light)" />
            <g transform={`translate(416 ${breakEvenY - 10})`}>
              <rect x="-5" y="-10" width="70" height="30" rx="7" fill="#061326" fillOpacity=".96" stroke="var(--vessel-light)" strokeOpacity=".58" />
              <text fill="#fff" fontSize="10" fontWeight="800">Break-even</text>
              <text y="12" fill="#cfe7f8" fontSize="7.5">{currency.format(annualCost)}/year</text>
            </g>
          </g>
        </g>

        {/* stainless lower collar, feet and drain */}
        <g className="rv-base">
          <path d="M119 395 Q133 411 153 414 H367 Q387 411 401 395 L396 444 Q394 460 376 462 H144 Q126 460 124 444 Z" fill={`url(#${ids.steelDark})`} stroke="#8196a7" strokeOpacity=".7" strokeWidth="2" />
          <path d="M135 410 Q260 428 385 410" fill="none" stroke="#d7e6ed" strokeOpacity=".28" strokeWidth="2" />
          <path d="M160 462 V478" stroke={`url(#${ids.steel})`} strokeWidth="13" strokeLinecap="round" />
          <path d="M360 462 V478" stroke={`url(#${ids.steel})`} strokeWidth="13" strokeLinecap="round" />
          <ellipse cx="160" cy="482" rx="25" ry="7" fill="#050a0f" stroke="#718695" strokeOpacity=".7" />
          <ellipse cx="360" cy="482" rx="25" ry="7" fill="#050a0f" stroke="#718695" strokeOpacity=".7" />

          <path d="M260 458 V483" stroke={`url(#${ids.steel})`} strokeWidth="13" strokeLinecap="round" />
          <rect x="239" y="479" width="42" height="18" rx="7" fill={`url(#${ids.steelDark})`} stroke="#a9bbc7" strokeOpacity=".7" />
          <path d="M260 497 V510" stroke="#9fb4c2" strokeWidth="8" strokeLinecap="round" />
          <path d="M244 486 H276" stroke="#d7e6ed" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* gauge and kitchen equipment detail */}
        <g className="rv-gauge" transform="translate(87 177)">
          <circle cx="0" cy="0" r="35" fill={`url(#${ids.steel})`} stroke="#dce8ee" strokeOpacity=".55" />
          <circle cx="0" cy="0" r="28" fill={`url(#${ids.gauge})`} stroke="#7d91a0" />
          <path d="M-18 10 A21 21 0 0 1 18 10" fill="none" stroke="#9eb2c0" strokeWidth="2" />
          <path d="M0 0 L12 -12" stroke="#67e6ff" strokeWidth="2.8" strokeLinecap="round" filter={`url(#${ids.glow})`} />
          <circle cx="0" cy="0" r="3.5" fill="#d9e7ed" />
          <text x="0" y="17" fill="#a8bac6" fontSize="6.5" textAnchor="middle">TEMP</text>
        </g>

        <g className="rv-control-box" transform="translate(390 417)">
          <rect x="0" y="0" width="67" height="40" rx="7" fill={`url(#${ids.steelDark})`} stroke="#7890a2" strokeOpacity=".75" />
          <circle cx="14" cy="20" r="5" fill="#48e28c" filter={`url(#${ids.glow})`} />
          <rect x="26" y="12" width="30" height="16" rx="3" fill="#03111c" stroke="#5e7c91" />
          <text x="41" y="23" fill="#83eaff" fontSize="8" fontWeight="700" textAnchor="middle">READY</text>
        </g>

        <g className="rv-serial" transform="translate(143 424)">
          <rect width="91" height="25" rx="4" fill="#101820" stroke="#a9bac5" strokeOpacity=".55" />
          <text x="8" y="10" fill="#d7e3e9" fontSize="6.5" fontWeight="700">VORDALI KITCHEN SERIES</text>
          <text x="8" y="18" fill="#7f96a5" fontSize="5.4">MODEL RV-K1 · RECOVERY VESSEL</text>
        </g>

        <g className="rv-hot-label" transform="translate(304 427)">
          <rect width="58" height="22" rx="4" fill="#161b20" stroke="#ffb54f" strokeOpacity=".75" />
          <path d="M9 16 L14 6 L19 16 Z" fill="none" stroke="#ffb54f" strokeWidth="1.5" />
          <text x="26" y="15" fill="#ffc46b" fontSize="7" fontWeight="800">HOT</text>
        </g>

        <g className="rv-kitchen-lighting">
          <rect x="151" y="137" width="218" height="5" rx="2.5" fill="#ffe0a1" opacity=".68" filter={`url(#${ids.glow})`} />
          <circle cx="176" cy="140" r="3" fill="#fff6d9" opacity=".92" />
          <circle cx="260" cy="140" r="3" fill="#fff6d9" opacity=".92" />
          <circle cx="344" cy="140" r="3" fill="#fff6d9" opacity=".92" />
        </g>

        <g className="rv-value-plaque" transform="translate(176 255)">
          <rect width="168" height="72" rx="14" fill="#06111f" fillOpacity=".9" stroke="var(--vessel-light)" strokeOpacity=".55" />
          <text x="84" y="20" textAnchor="middle" fill="#9cb2c7" fontSize="9">RECOVERED THIS MONTH</text>
          <text x="84" y="49" textAnchor="middle" fill="#ffffff" fontSize="25" fontWeight="800">{currency.format(recovered)}</text>
          <text x="84" y="63" textAnchor="middle" fill="#62dcff" fontSize="8">{progress}% TO GOAL</text>
        </g>
      </svg>

      <div className="restaurant-vessel-caption">
        <span className="restaurant-vessel-status"><i /> HEATED SYSTEM READY</span>
        <strong>Kitchen Series · Model RV-K1</strong>
      </div>
    </div>
  );
}
