"use client";

import { CSSProperties, useId, useMemo } from "react";

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
  const liquidTop = 363 - (fill / 100) * 172;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 363 - (breakEvenPercent / 100) * 172;
  const style = {
    "--flow-light": "#8ff7ee",
    "--flow-mid": "#25c8d4",
    "--flow-deep": "#08728e",
  } as CSSProperties;

  const bubbles = useMemo(
    () => Array.from({ length: 10 }, (_, index) => ({
      cx: 237 + ((index * 19) % 48),
      cy: 354 - ((index * 29) % 130),
      r: 2 + (index % 3),
      delay: (index * 0.31) % 3,
      duration: 3.8 + (index % 4) * 0.45,
    })),
    [],
  );

  const ids = {
    shell: `${uid}-shell`,
    shellDark: `${uid}-shell-dark`,
    brass: `${uid}-brass`,
    copper: `${uid}-copper`,
    glass: `${uid}-glass`,
    liquid: `${uid}-liquid`,
    gauge: `${uid}-gauge`,
    glow: `${uid}-glow`,
    soft: `${uid}-soft`,
    clip: `${uid}-clip`,
    pipe: `${uid}-pipe`,
  };

  return (
    <div
      className="plumbing-vessel-stage"
      style={style}
      role="img"
      aria-label={`Plumbing Flow Series vessel showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}
    >
      <div className="plumbing-vessel-crown">
        <span>FLOW SERIES</span>
        <strong>Revenue Pressure Vessel™</strong>
        <small>Commercial flow and pressure recovery system</small>
      </div>

      <svg className="plumbing-vessel-svg" viewBox="0 0 520 560" aria-hidden="true">
        <defs>
          <linearGradient id={ids.shell} x1="0" x2="1">
            <stop offset="0" stopColor="#061017" />
            <stop offset=".12" stopColor="#4c6874" />
            <stop offset=".25" stopColor="#dce9ec" />
            <stop offset=".42" stopColor="#6b858f" />
            <stop offset=".58" stopColor="#f4fbfb" />
            <stop offset=".76" stopColor="#506d79" />
            <stop offset=".9" stopColor="#c5d8dc" />
            <stop offset="1" stopColor="#071218" />
          </linearGradient>
          <linearGradient id={ids.shellDark} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#314b56" />
            <stop offset=".5" stopColor="#10242c" />
            <stop offset="1" stopColor="#03090d" />
          </linearGradient>
          <linearGradient id={ids.brass} x1="0" x2="1">
            <stop offset="0" stopColor="#5b3b0c" />
            <stop offset=".2" stopColor="#f1cf72" />
            <stop offset=".43" stopColor="#9c701e" />
            <stop offset=".7" stopColor="#ffe59b" />
            <stop offset="1" stopColor="#674611" />
          </linearGradient>
          <linearGradient id={ids.copper} x1="0" x2="1">
            <stop offset="0" stopColor="#542a19" />
            <stop offset=".23" stopColor="#f0aa73" />
            <stop offset=".48" stopColor="#9d5331" />
            <stop offset=".75" stopColor="#ffd0a2" />
            <stop offset="1" stopColor="#60301c" />
          </linearGradient>
          <linearGradient id={ids.pipe} x1="0" x2="1">
            <stop offset="0" stopColor="#11242d" />
            <stop offset=".22" stopColor="#879da5" />
            <stop offset=".5" stopColor="#e9f2f3" />
            <stop offset=".78" stopColor="#718993" />
            <stop offset="1" stopColor="#0e2028" />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".24" />
            <stop offset=".32" stopColor="#b9ffff" stopOpacity=".04" />
            <stop offset=".72" stopColor="#ffffff" stopOpacity=".02" />
            <stop offset="1" stopColor="#d9ffff" stopOpacity=".2" />
          </linearGradient>
          <linearGradient id={ids.liquid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--flow-light)" />
            <stop offset=".42" stopColor="var(--flow-mid)" />
            <stop offset="1" stopColor="var(--flow-deep)" />
          </linearGradient>
          <radialGradient id={ids.gauge}>
            <stop offset="0" stopColor="#173b42" />
            <stop offset=".72" stopColor="#07171d" />
            <stop offset="1" stopColor="#020709" />
          </radialGradient>
          <filter id={ids.glow} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.soft} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="18" /></filter>
          <clipPath id={ids.clip}><rect x="217" y="184" width="86" height="184" rx="42" /></clipPath>
        </defs>

        <ellipse cx="260" cy="507" rx="160" ry="26" fill="var(--flow-mid)" opacity=".15" filter={`url(#${ids.soft})`} />

        {/* fixed plumbing frame and pipework */}
        <g className="plumbing-fixed-frame">
          <path d="M120 470 V178 Q120 146 152 146 H368 Q400 146 400 178 V470" fill="none" stroke={`url(#${ids.shellDark})`} strokeWidth="14" strokeLinecap="round" />
          <path d="M98 470 H422" stroke={`url(#${ids.shell})`} strokeWidth="15" strokeLinecap="round" />
          {[136, 384].map((x) => (
            <g key={x}>
              <circle cx={x} cy="490" r="18" fill="#04090c" stroke="#607c87" strokeWidth="5" />
              <circle cx={x} cy="490" r="8" fill="#14242b" />
            </g>
          ))}
          <path d="M88 208 H168" stroke={`url(#${ids.pipe})`} strokeWidth="22" strokeLinecap="round" />
          <path d="M352 208 H432" stroke={`url(#${ids.pipe})`} strokeWidth="22" strokeLinecap="round" />
          <path d="M99 208 H78 V322 H121" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M421 208 H444 V322 H399" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          <g className="plumbing-flow-pulses">
            <circle cx="88" cy="208" r="5" fill="var(--flow-light)" />
            <circle cx="432" cy="208" r="5" fill="var(--flow-light)" />
            <circle cx="79" cy="280" r="4" fill="var(--flow-light)" />
            <circle cx="443" cy="280" r="4" fill="var(--flow-light)" />
          </g>
        </g>

        {/* pressure gauge, regulator and valves stay fixed */}
        <g className="plumbing-fixed-instruments">
          <g transform="translate(260 88)" className="plumbing-gauge">
            <circle r="43" fill={`url(#${ids.shell})`} />
            <circle r="34" fill={`url(#${ids.gauge})`} stroke="#87f5ee" strokeOpacity=".45" />
            {[-60, -30, 0, 30, 60].map((a) => <line key={a} x1="0" y1="-28" x2="0" y2="-21" stroke="#b9e8e5" strokeWidth="2" transform={`rotate(${a})`} />)}
            <line x1="0" y1="5" x2="0" y2="-24" stroke="var(--flow-light)" strokeWidth="2.7" transform="rotate(18)" />
            <circle r="4" fill="#e6fffd" />
            <text y="21" textAnchor="middle" fill="#8bc9c6" fontSize="7" fontWeight="700">PSI</text>
          </g>
          <path d="M260 130 V151" stroke={`url(#${ids.brass})`} strokeWidth="13" strokeLinecap="round" />
          <rect x="220" y="137" width="80" height="28" rx="8" fill={`url(#${ids.brass})`} />
          <circle cx="238" cy="151" r="7" fill="#0c6c75" stroke="#8ff7ee" />
          <circle cx="282" cy="151" r="7" fill="#7d2e22" stroke="#ff9e90" />
          <g transform="translate(120 208)">
            <rect x="-19" y="-14" width="38" height="28" rx="6" fill={`url(#${ids.brass})`} />
            <path d="M0 -29 V29 M-14 -24 H14" stroke="#d9b758" strokeWidth="8" strokeLinecap="round" />
          </g>
          <g transform="translate(400 208)">
            <rect x="-19" y="-14" width="38" height="28" rx="6" fill={`url(#${ids.brass})`} />
            <path d="M0 -29 V29 M-14 -24 H14" stroke="#d9b758" strokeWidth="8" strokeLinecap="round" />
          </g>
        </g>

        <g className="plumbing-vessel-body">
          {/* expansion tank silhouette */}
          <path d="M181 186 Q181 151 216 151 H304 Q339 151 339 186 L351 218 V398 Q351 435 321 458 Q260 488 199 458 Q169 435 169 398 V218 Z" fill={`url(#${ids.shell})`} stroke="#b5c9ce" strokeOpacity=".75" strokeWidth="2.5" />
          <path d="M182 220 H338 M176 401 H344" stroke="#1b3943" strokeWidth="6" opacity=".95" />
          <path d="M183 218 H337 M179 399 H341" stroke="#e1f0f1" strokeWidth="1" opacity=".55" />
          <path d="M190 177 Q260 145 330 177" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="3" />

          {/* bolted sight chamber */}
          <ellipse cx="260" cy="278" rx="74" ry="113" fill="#081318" stroke="#020709" strokeWidth="12" />
          <ellipse cx="260" cy="278" rx="67" ry="106" fill={`url(#${ids.shell})`} opacity=".78" />
          {Array.from({ length: 14 }, (_, i) => {
            const angle = (i * 360) / 14;
            const rad = (angle * Math.PI) / 180;
            const x = 260 + Math.cos(rad) * 65;
            const y = 278 + Math.sin(rad) * 101;
            return <circle key={angle} cx={x} cy={y} r="5.5" fill="#14252b" stroke="#d7e6e8" strokeWidth="1.5" />;
          })}
          <rect x="213" y="180" width="94" height="192" rx="46" fill="#02090c" stroke="#07171c" strokeWidth="8" />
          <g clipPath={`url(#${ids.clip})`}>
            <rect x="217" y={liquidTop} width="86" height={368 - liquidTop} fill={`url(#${ids.liquid})`} />
            <path className="plumbing-wave plumbing-wave-back" d={`M204 ${liquidTop + 3} Q232 ${liquidTop - 7} 260 ${liquidTop + 3} T316 ${liquidTop + 3} V376 H204 Z`} fill="var(--flow-light)" opacity=".45" />
            <path className="plumbing-wave plumbing-wave-front" d={`M203 ${liquidTop + 10} Q232 ${liquidTop + 18} 260 ${liquidTop + 8} T317 ${liquidTop + 8} V376 H203 Z`} fill={`url(#${ids.liquid})`} opacity=".96" />
            {bubbles.map((b, i) => <circle key={i} className="plumbing-bubble" cx={b.cx} cy={Math.max(b.cy, liquidTop + 14)} r={b.r} fill="#e3fffc" opacity=".72" style={{ animationDelay: `${b.delay}s`, animationDuration: `${b.duration}s` }} />)}
            <rect x="217" y="184" width="86" height="184" rx="42" fill={`url(#${ids.glass})`} />
            <path className="plumbing-glass-sweep" d="M238 194 Q222 278 238 358" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="9" strokeLinecap="round" />
          </g>
          <rect x="217" y="184" width="86" height="184" rx="42" fill="none" stroke="#c3fffa" strokeOpacity=".68" strokeWidth="2.5" />

          <g className="plumbing-break-even">
            <line x1="208" y1={breakEvenY} x2="312" y2={breakEvenY} stroke="#eafffd" strokeWidth="2" strokeDasharray="6 5" />
            <rect x="311" y={breakEvenY - 12} width="71" height="24" rx="12" fill="#06171a" stroke="#67eae2" strokeOpacity=".6" />
            <text x="346.5" y={breakEvenY + 3.5} textAnchor="middle" fill="#d4fffb" fontSize="7.5" fontWeight="700">BREAK-EVEN</text>
          </g>

          {/* flow meter */}
          <g className="plumbing-flow-meter" transform="translate(110 300)">
            <rect x="-30" y="-55" width="60" height="110" rx="17" fill="#08171c" stroke="#7d9ba3" strokeWidth="2" />
            <rect x="-18" y="-42" width="36" height="62" rx="14" fill="#051014" stroke="#86eee6" strokeOpacity=".6" />
            <path className="plumbing-meter-flow" d="M0 15 C-13 3 13 -7 0 -19 C-13 -31 13 -39 0 -47" fill="none" stroke="var(--flow-light)" strokeWidth="4" strokeLinecap="round" />
            <text y="42" textAnchor="middle" fill="#8faaaF" fontSize="7">FLOW</text>
          </g>

          {/* regulator */}
          <g className="plumbing-regulator" transform="translate(410 300)">
            <circle r="34" fill={`url(#${ids.shellDark})`} stroke="#6c8993" strokeWidth="3" />
            <circle r="21" fill="#07161b" stroke="#65e7df" strokeOpacity=".5" />
            <path d="M0 -15 V15 M-15 0 H15" stroke={`url(#${ids.brass})`} strokeWidth="6" strokeLinecap="round" />
            <text y="50" textAnchor="middle" fill="#8da5ad" fontSize="7">REGULATOR</text>
          </g>

          {/* drain assembly */}
          <g className="plumbing-drain">
            <path d="M260 458 V486" stroke={`url(#${ids.brass})`} strokeWidth="13" strokeLinecap="round" />
            <rect x="240" y="475" width="40" height="22" rx="7" fill={`url(#${ids.brass})`} />
            <path d="M260 486 H301" stroke={`url(#${ids.copper})`} strokeWidth="10" strokeLinecap="round" />
            <circle cx="310" cy="486" r="10" fill="#133139" stroke="#88eee7" />
          </g>

          <g className="plumbing-control-panel">
            <rect x="204" y="414" width="112" height="52" rx="9" fill="#061419" stroke="#839ca3" />
            <text x="218" y="432" fill="#8deee7" fontSize="7" fontWeight="700">RECOVERY OUTPUT</text>
            <text x="218" y="454" fill="#fff" fontSize="17" fontWeight="700">{currency.format(recovered)}</text>
            <circle cx="299" cy="435" r="5" fill="#4fe399" filter={`url(#${ids.glow})`} />
            <text x="291" y="456" fill="#89a6ad" fontSize="6">READY</text>
          </g>
        </g>

        {/* equipment plate */}
        <g className="plumbing-serial">
          <rect x="354" y="383" width="100" height="56" rx="4" fill="#14262c" stroke="#78939b" />
          <text x="404" y="397" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">VORDALI</text>
          <text x="404" y="409" textAnchor="middle" fill="#a2bcc1" fontSize="7">FLOW SERIES</text>
          <line x1="364" y1="415" x2="444" y2="415" stroke="#5d777e" />
          <text x="404" y="426" textAnchor="middle" fill="#7cf1e8" fontSize="6.5">FS-300 PRO</text>
          <text x="404" y="435" textAnchor="middle" fill="#91aab0" fontSize="5.5">REVENUE FLOW SYSTEM</text>
        </g>
      </svg>

      <div className="plumbing-vessel-caption">
        <span>Pressure-balanced revenue flow recovery</span>
        <strong className="plumbing-vessel-status"><i /> SYSTEM ONLINE</strong>
      </div>
    </div>
  );
}
