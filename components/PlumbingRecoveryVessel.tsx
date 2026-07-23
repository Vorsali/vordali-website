"use client";

import { CSSProperties, useId } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type PlumbingRecoveryVesselProps = {
  recovered: number;
  annualCost: number;
  progress: number;
};

export function PlumbingRecoveryVessel({ recovered, annualCost, progress }: PlumbingRecoveryVesselProps) {
  const uid = useId().replace(/:/g, "");
  const fill = Math.max(10, Math.min(90, progress));
  const liquidTop = 350 - (fill / 100) * 132;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 350 - (breakEvenPercent / 100) * 132;
  const style = {
    "--flow-light": "#9cfbf2",
    "--flow-mid": "#29d0db",
    "--flow-deep": "#08768f",
  } as CSSProperties;

  const ids = {
    steel: `${uid}-steel`,
    darkSteel: `${uid}-dark-steel`,
    brass: `${uid}-brass`,
    copper: `${uid}-copper`,
    water: `${uid}-water`,
    glass: `${uid}-glass`,
    glow: `${uid}-glow`,
    soft: `${uid}-soft`,
    chamberClip: `${uid}-chamber-clip`,
    tubeClip: `${uid}-tube-clip`,
  };

  return (
    <div
      className="plumbing-vessel-stage plumbing-system-stage"
      style={style}
      role="img"
      aria-label={`Plumbing Flow Series booster assembly showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}
    >
      <div className="plumbing-vessel-crown">
        <span>FLOW SERIES</span>
        <strong>Commercial Revenue Booster™</strong>
        <small>Pressure, circulation, and revenue-flow recovery assembly</small>
      </div>

      <svg className="plumbing-vessel-svg" viewBox="0 0 560 560" aria-hidden="true">
        <defs>
          <linearGradient id={ids.steel} x1="0" x2="1">
            <stop offset="0" stopColor="#061116" />
            <stop offset=".13" stopColor="#607983" />
            <stop offset=".28" stopColor="#e8f1f2" />
            <stop offset=".45" stopColor="#758e96" />
            <stop offset=".62" stopColor="#f7fbfb" />
            <stop offset=".8" stopColor="#607a84" />
            <stop offset="1" stopColor="#071218" />
          </linearGradient>
          <linearGradient id={ids.darkSteel} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#35515a" />
            <stop offset=".55" stopColor="#10272f" />
            <stop offset="1" stopColor="#030a0e" />
          </linearGradient>
          <linearGradient id={ids.brass} x1="0" x2="1">
            <stop offset="0" stopColor="#5b3908" />
            <stop offset=".2" stopColor="#f2cf73" />
            <stop offset=".48" stopColor="#9a6b16" />
            <stop offset=".72" stopColor="#ffe89f" />
            <stop offset="1" stopColor="#65420d" />
          </linearGradient>
          <linearGradient id={ids.copper} x1="0" x2="1">
            <stop offset="0" stopColor="#542818" />
            <stop offset=".22" stopColor="#efa36b" />
            <stop offset=".5" stopColor="#9b4d2c" />
            <stop offset=".75" stopColor="#ffd0a0" />
            <stop offset="1" stopColor="#5e2e1b" />
          </linearGradient>
          <linearGradient id={ids.water} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--flow-light)" />
            <stop offset=".48" stopColor="var(--flow-mid)" />
            <stop offset="1" stopColor="var(--flow-deep)" />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".26" />
            <stop offset=".35" stopColor="#d7ffff" stopOpacity=".04" />
            <stop offset=".72" stopColor="#fff" stopOpacity=".02" />
            <stop offset="1" stopColor="#dfffff" stopOpacity=".2" />
          </linearGradient>
          <filter id={ids.glow} x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.soft} x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="20" /></filter>
          <clipPath id={ids.chamberClip}><rect x="242" y="210" width="76" height="146" rx="35" /></clipPath>
          <clipPath id={ids.tubeClip}><rect x="112" y="218" width="34" height="150" rx="15" /></clipPath>
        </defs>

        <ellipse cx="280" cy="510" rx="190" ry="26" fill="var(--flow-mid)" opacity=".14" filter={`url(#${ids.soft})`} />

        {/* fixed commercial manifold */}
        <g className="plumbing-fixed-frame">
          <path d="M72 392 H488" stroke={`url(#${ids.steel})`} strokeWidth="24" strokeLinecap="round" />
          <path d="M98 392 V180 H182" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M378 180 H462 V392" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M147 392 V462 M413 392 V462" stroke={`url(#${ids.darkSteel})`} strokeWidth="18" strokeLinecap="round" />
          <path d="M95 462 H465" stroke={`url(#${ids.steel})`} strokeWidth="17" strokeLinecap="round" />
          {[130, 430].map((x) => (
            <g key={x}>
              <circle cx={x} cy="485" r="19" fill="#040a0d" stroke="#647e87" strokeWidth="5" />
              <circle cx={x} cy="485" r="8" fill="#14262c" />
            </g>
          ))}
        </g>

        {/* large shutoff valves and unions */}
        <g className="plumbing-fixed-instruments">
          {[100, 460].map((x) => (
            <g key={x} transform={`translate(${x} 180)`}>
              <rect x="-21" y="-16" width="42" height="32" rx="7" fill={`url(#${ids.brass})`} />
              <path d="M0 -34 V34 M-17 -29 H17" stroke="#ddb85b" strokeWidth="9" strokeLinecap="round" />
            </g>
          ))}
          <g transform="translate(280 92)" className="plumbing-gauge">
            <circle r="46" fill={`url(#${ids.steel})`} />
            <circle r="36" fill="#06161b" stroke="#86eee7" strokeOpacity=".48" />
            {[-60, -30, 0, 30, 60].map((a) => <line key={a} x1="0" y1="-30" x2="0" y2="-22" stroke="#d4f0ed" strokeWidth="2" transform={`rotate(${a})`} />)}
            <line className="plumbing-gauge-needle" x1="0" y1="5" x2="0" y2="-26" stroke="var(--flow-light)" strokeWidth="3" />
            <circle r="4" fill="#effffd" />
            <text y="23" textAnchor="middle" fill="#8bc9c6" fontSize="7" fontWeight="700">PSI</text>
          </g>
          <path d="M280 137 V164" stroke={`url(#${ids.brass})`} strokeWidth="14" strokeLinecap="round" />
        </g>

        {/* transparent vertical flow tube */}
        <g className="plumbing-flow-tube">
          <rect x="101" y="205" width="56" height="178" rx="22" fill="#061419" stroke="#78959d" strokeWidth="3" />
          <rect x="112" y="218" width="34" height="150" rx="15" fill="#02090c" stroke="#8df5ed" strokeOpacity=".65" />
          <g clipPath={`url(#${ids.tubeClip})`}>
            <rect x="112" y="218" width="34" height="150" fill={`url(#${ids.glass})`} />
            {[0, 1, 2, 3].map((i) => <circle key={i} className="plumbing-tube-pulse" cx="129" cy={350 - i * 38} r={5 - (i % 2)} fill="var(--flow-light)" style={{ animationDelay: `${i * -.55}s` }} />)}
          </g>
          <text x="129" y="398" textAnchor="middle" fill="#89aaa9" fontSize="7">LIVE FLOW</text>
        </g>

        {/* regulator housing */}
        <g className="plumbing-regulator" transform="translate(435 292)">
          <circle r="43" fill={`url(#${ids.darkSteel})`} stroke="#718b94" strokeWidth="4" />
          <circle r="27" fill="#07171c" stroke="#72e9e1" strokeOpacity=".48" />
          <path d="M0 -19 V19 M-19 0 H19" stroke={`url(#${ids.brass})`} strokeWidth="7" strokeLinecap="round" />
          <text y="58" textAnchor="middle" fill="#8da6ac" fontSize="7">PRESSURE REGULATOR</text>
        </g>

        {/* center expansion vessel */}
        <g className="plumbing-vessel-body">
          <path d="M214 178 Q214 151 241 151 H319 Q346 151 346 178 L357 204 V360 Q357 389 337 410 Q280 440 223 410 Q203 389 203 360 V204 Z" fill={`url(#${ids.steel})`} stroke="#b7cbd0" strokeOpacity=".78" strokeWidth="2.5" />
          <path d="M211 208 H349 M208 363 H352" stroke="#183943" strokeWidth="7" />
          <path d="M213 205 H347 M210 360 H350" stroke="#ecf5f5" strokeWidth="1" opacity=".55" />
          <path d="M224 169 Q280 143 336 169" fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="3" />

          {/* smaller inspection chamber */}
          <rect x="228" y="194" width="104" height="178" rx="49" fill="#071217" stroke="#020709" strokeWidth="12" />
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            return <circle key={i} cx={280 + Math.cos(rad) * 48} cy={283 + Math.sin(rad) * 84} r="5" fill="#14262d" stroke="#dce9ea" strokeWidth="1.4" />;
          })}
          <rect x="242" y="210" width="76" height="146" rx="35" fill="#02090c" stroke="#0b2027" strokeWidth="7" />
          <g clipPath={`url(#${ids.chamberClip})`}>
            <rect x="242" y={liquidTop} width="76" height={356 - liquidTop} fill={`url(#${ids.water})`} />
            <path className="plumbing-wave plumbing-wave-back" d={`M232 ${liquidTop + 2} Q258 ${liquidTop - 7} 280 ${liquidTop + 2} T328 ${liquidTop + 2} V365 H232 Z`} fill="var(--flow-light)" opacity=".42" />
            <path className="plumbing-wave plumbing-wave-front" d={`M231 ${liquidTop + 9} Q256 ${liquidTop + 17} 280 ${liquidTop + 8} T329 ${liquidTop + 8} V365 H231 Z`} fill={`url(#${ids.water})`} opacity=".96" />
            {[0,1,2,3,4,5].map((i) => <circle key={i} className="plumbing-bubble" cx={254 + (i % 3) * 16} cy={338 - i * 22} r={2 + (i % 2)} fill="#e4fffc" opacity=".72" style={{ animationDelay: `${i * -.48}s` }} />)}
            <rect x="242" y="210" width="76" height="146" rx="35" fill={`url(#${ids.glass})`} />
            <path className="plumbing-glass-sweep" d="M258 220 Q246 284 258 346" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="8" strokeLinecap="round" />
          </g>
          <rect x="242" y="210" width="76" height="146" rx="35" fill="none" stroke="#c9fffb" strokeOpacity=".7" strokeWidth="2.4" />

          <g className="plumbing-break-even">
            <line x1="232" y1={breakEvenY} x2="328" y2={breakEvenY} stroke="#effffd" strokeWidth="2" strokeDasharray="6 5" />
            <rect x="327" y={breakEvenY - 12} width="72" height="24" rx="12" fill="#06171a" stroke="#67eae2" strokeOpacity=".65" />
            <text x="363" y={breakEvenY + 3.5} textAnchor="middle" fill="#d4fffb" fontSize="7.5" fontWeight="700">BREAK-EVEN</text>
          </g>

          {/* centrifugal pump base */}
          <g className="plumbing-pump" transform="translate(280 423)">
            <ellipse cx="0" cy="9" rx="72" ry="26" fill={`url(#${ids.darkSteel})`} stroke="#738b93" strokeWidth="3" />
            <circle cx="0" cy="4" r="31" fill={`url(#${ids.steel})`} stroke="#bfd0d3" strokeWidth="2" />
            <circle cx="0" cy="4" r="18" fill="#07161b" stroke="#72e9e1" strokeOpacity=".55" />
            <path className="plumbing-impeller" d="M0 -12 C8 -7 11 0 8 7 C2 14 -7 14 -13 8 C-5 6 0 2 0 -4 C0 -8 -2 -10 0 -12Z" fill="var(--flow-mid)" opacity=".82" />
            <path d="M-72 9 H-100 M72 9 H100" stroke={`url(#${ids.copper})`} strokeWidth="13" strokeLinecap="round" />
          </g>

          <g className="plumbing-control-panel">
            <rect x="224" y="448" width="112" height="52" rx="9" fill="#061419" stroke="#839ca3" />
            <text x="238" y="466" fill="#8deee7" fontSize="7" fontWeight="700">RECOVERY OUTPUT</text>
            <text x="238" y="488" fill="#fff" fontSize="17" fontWeight="700">{currency.format(recovered)}</text>
            <circle cx="319" cy="469" r="5" fill="#4fe399" filter={`url(#${ids.glow})`} />
            <text x="311" y="490" fill="#89a6ad" fontSize="6">READY</text>
          </g>
        </g>

        <g className="plumbing-serial">
          <rect x="385" y="394" width="105" height="59" rx="4" fill="#14262c" stroke="#78939b" />
          <text x="437.5" y="409" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">VORDALI</text>
          <text x="437.5" y="421" textAnchor="middle" fill="#a2bcc1" fontSize="7">FLOW SERIES</text>
          <line x1="395" y1="427" x2="480" y2="427" stroke="#5d777e" />
          <text x="437.5" y="439" textAnchor="middle" fill="#7cf1e8" fontSize="6.5">FB-420 PRO</text>
          <text x="437.5" y="448" textAnchor="middle" fill="#91aab0" fontSize="5.5">COMMERCIAL BOOSTER SYSTEM</text>
        </g>
      </svg>

      <div className="plumbing-vessel-caption">
        <span>Pressure-balanced commercial revenue circulation</span>
        <strong className="plumbing-vessel-status"><i /> SYSTEM ONLINE</strong>
      </div>
    </div>
  );
}
