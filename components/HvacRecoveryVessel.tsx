"use client";

import { CSSProperties, useId, useMemo } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type HvacRecoveryVesselProps = {
  recovered: number;
  annualCost: number;
  progress: number;
};

export function HvacRecoveryVessel({ recovered, annualCost, progress }: HvacRecoveryVesselProps) {
  const uid = useId().replace(/:/g, "");
  const fill = Math.max(8, Math.min(90, progress));
  const liquidTop = 394 - (fill / 100) * 238;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 394 - (breakEvenPercent / 100) * 238;
  const style = {
    "--hvac-light": "#75edff",
    "--hvac-mid": "#1aa8e8",
    "--hvac-deep": "#07529a",
    "--hvac-copper": "#c97945",
  } as CSSProperties;

  const bubbles = useMemo(
    () =>
      Array.from({ length: 11 }, (_, index) => ({
        cx: 212 + ((index * 31) % 118),
        cy: 354 - ((index * 27) % 165),
        r: 2.5 + (index % 4) * 1.15,
        delay: (index * 0.31) % 3.2,
        duration: 3.7 + (index % 4) * 0.55,
      })),
    [],
  );

  const ids = {
    shell: `${uid}-shell`,
    dark: `${uid}-dark`,
    glass: `${uid}-glass`,
    liquid: `${uid}-liquid`,
    copper: `${uid}-copper`,
    gauge: `${uid}-gauge`,
    glow: `${uid}-glow`,
    soft: `${uid}-soft`,
    clip: `${uid}-clip`,
  };

  return (
    <div
      className="hvac-vessel-stage"
      style={style}
      role="img"
      aria-label={`HVAC Recovery Vessel showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}
    >
      <div className="hvac-vessel-crown">
        <span>CLIMATE SERIES</span>
        <strong>Recovery Cylinder™</strong>
        <small>Commercial revenue recovery unit</small>
      </div>

      <svg className="hvac-vessel-svg" viewBox="0 0 520 560" aria-hidden="true">
        <defs>
          <linearGradient id={ids.shell} x1="0" x2="1">
            <stop offset="0" stopColor="#07131f" />
            <stop offset=".08" stopColor="#4e687b" />
            <stop offset=".18" stopColor="#d7e4ea" />
            <stop offset=".34" stopColor="#587184" />
            <stop offset=".5" stopColor="#f3f8fa" />
            <stop offset=".67" stopColor="#486174" />
            <stop offset=".86" stopColor="#c4d2da" />
            <stop offset="1" stopColor="#06111b" />
          </linearGradient>
          <linearGradient id={ids.dark} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#42586a" />
            <stop offset=".32" stopColor="#142331" />
            <stop offset="1" stopColor="#02080d" />
          </linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1">
            <stop offset="0" stopColor="#ddfbff" stopOpacity=".16" />
            <stop offset=".22" stopColor="#91e8ff" stopOpacity=".04" />
            <stop offset=".5" stopColor="#ffffff" stopOpacity=".015" />
            <stop offset=".78" stopColor="#a8eaff" stopOpacity=".07" />
            <stop offset="1" stopColor="#e5fcff" stopOpacity=".18" />
          </linearGradient>
          <linearGradient id={ids.liquid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--hvac-light)" />
            <stop offset=".36" stopColor="var(--hvac-mid)" />
            <stop offset="1" stopColor="var(--hvac-deep)" />
          </linearGradient>
          <linearGradient id={ids.copper} x1="0" x2="1">
            <stop offset="0" stopColor="#5d2e19" />
            <stop offset=".18" stopColor="#e5a06d" />
            <stop offset=".45" stopColor="#8b4727" />
            <stop offset=".68" stopColor="#f2bd86" />
            <stop offset="1" stopColor="#61311c" />
          </linearGradient>
          <radialGradient id={ids.gauge}>
            <stop offset="0" stopColor="#17354a" />
            <stop offset=".72" stopColor="#07131e" />
            <stop offset="1" stopColor="#010609" />
          </radialGradient>
          <filter id={ids.glow} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.soft} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="18" /></filter>
          <clipPath id={ids.clip}><rect x="179" y="145" width="162" height="260" rx="67" /></clipPath>
        </defs>

        <ellipse cx="260" cy="510" rx="154" ry="24" fill="var(--hvac-mid)" opacity=".18" filter={`url(#${ids.soft})`} />

        {/* service cart frame */}
        <g className="hvac-frame">
          <path d="M116 470 V162 Q116 130 148 130 H370 Q404 130 404 164 V470" fill="none" stroke={`url(#${ids.dark})`} strokeWidth="14" strokeLinecap="round" />
          <path d="M95 470 H425" stroke={`url(#${ids.shell})`} strokeWidth="15" strokeLinecap="round" />
          <circle cx="135" cy="490" r="17" fill="#050a0e" stroke="#60788a" strokeWidth="6" />
          <circle cx="385" cy="490" r="17" fill="#050a0e" stroke="#60788a" strokeWidth="6" />
        </g>

        {/* manifold gauges stay fixed while cylinder breathes */}
        <g className="hvac-fixed-manifold">
          <path d="M260 105 V137" stroke={`url(#${ids.copper})`} strokeWidth="10" strokeLinecap="round" />
          <path d="M260 112 H199 Q183 112 183 95" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="8" strokeLinecap="round" />
          <path d="M260 112 H321 Q337 112 337 95" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="8" strokeLinecap="round" />
          {[{x:183,label:"LOW",needle:-32},{x:337,label:"HIGH",needle:24}].map((g) => (
            <g key={g.label} transform={`translate(${g.x} 77)`} className="hvac-gauge">
              <circle r="39" fill={`url(#${ids.shell})`} />
              <circle r="31" fill={`url(#${ids.gauge})`} stroke="#7fe8ff" strokeOpacity=".42" />
              {[-55,-28,0,28,55].map((angle) => <line key={angle} x1="0" y1="-25" x2="0" y2="-20" stroke="#a9d9e8" strokeWidth="2" transform={`rotate(${angle})`} />)}
              <line x1="0" y1="4" x2="0" y2="-21" stroke="var(--hvac-light)" strokeWidth="2.5" transform={`rotate(${g.needle})`} />
              <circle r="4" fill="#d9f8ff" />
              <text y="18" textAnchor="middle" fill="#8fc7d9" fontSize="7" fontWeight="700">{g.label}</text>
            </g>
          ))}
        </g>

        <g className="hvac-cylinder-body">
          {/* top valve guard */}
          <path d="M198 142 V118 Q198 99 216 99 H304 Q322 99 322 118 V142" fill="none" stroke={`url(#${ids.shell})`} strokeWidth="12" strokeLinecap="round" />
          <rect x="236" y="113" width="48" height="31" rx="9" fill={`url(#${ids.dark})`} stroke="#8ba0ae" />
          <circle cx="250" cy="128" r="5" fill="#ef6a5b" />
          <circle cx="270" cy="128" r="5" fill="#55db94" />

          {/* main cylinder shell */}
          <rect x="154" y="132" width="212" height="324" rx="92" fill={`url(#${ids.shell})`} stroke="#a9c0cc" strokeOpacity=".66" strokeWidth="2" />
          <path d="M168 178 Q260 132 352 178" fill="none" stroke="rgba(255,255,255,.27)" strokeWidth="3" />
          <path d="M170 412 Q260 458 350 412" fill="none" stroke="rgba(0,0,0,.36)" strokeWidth="3" />

          {/* sight glass */}
          <rect x="179" y="145" width="162" height="260" rx="67" fill="#020b12" stroke="#06141f" strokeWidth="10" />
          <g clipPath={`url(#${ids.clip})`}>
            <rect x="179" y={liquidTop} width="162" height={405 - liquidTop} fill={`url(#${ids.liquid})`} />
            <path className="hvac-wave hvac-wave-back" d={`M160 ${liquidTop + 4} Q205 ${liquidTop - 8} 250 ${liquidTop + 4} T340 ${liquidTop + 4} T430 ${liquidTop + 4} V420 H160 Z`} fill="var(--hvac-light)" opacity=".45" />
            <path className="hvac-wave hvac-wave-front" d={`M155 ${liquidTop + 11} Q205 ${liquidTop + 24} 255 ${liquidTop + 9} T355 ${liquidTop + 9} T455 ${liquidTop + 9} V420 H155 Z`} fill={`url(#${ids.liquid})`} opacity=".96" />
            {bubbles.map((bubble, index) => (
              <circle key={index} className="hvac-bubble" cx={bubble.cx} cy={Math.max(bubble.cy, liquidTop + 18)} r={bubble.r} fill="#c9f7ff" opacity=".72" style={{ animationDelay: `${bubble.delay}s`, animationDuration: `${bubble.duration}s` }} />
            ))}
            <path className="hvac-frost" d="M188 162 C201 145 214 157 225 145 C239 162 250 148 261 159 C275 143 290 160 301 147 C315 161 328 149 334 166 V205 H188 Z" fill="#dffcff" opacity=".23" />
            <rect x="179" y="145" width="162" height="260" rx="67" fill={`url(#${ids.glass})`} />
            <path className="hvac-glass-sweep" d="M210 157 Q189 273 211 393" fill="none" stroke="#fff" strokeOpacity=".32" strokeWidth="16" strokeLinecap="round" />
          </g>
          <rect x="179" y="145" width="162" height="260" rx="67" fill="none" stroke="#bff7ff" strokeOpacity=".55" strokeWidth="3" />

          {/* break-even rail */}
          <g className="hvac-break-even">
            <line x1="170" y1={breakEvenY} x2="350" y2={breakEvenY} stroke="#d7f8ff" strokeOpacity=".82" strokeWidth="2" strokeDasharray="7 6" />
            <rect x="349" y={breakEvenY - 13} width="71" height="26" rx="13" fill="#061521" stroke="#5fdff6" strokeOpacity=".5" />
            <text x="384.5" y={breakEvenY + 4} textAnchor="middle" fill="#bfefff" fontSize="8" fontWeight="700">BREAK-EVEN</text>
          </g>

          {/* cooling fins */}
          <g className="hvac-fins" opacity=".92">
            {Array.from({ length: 7 }, (_, index) => <rect key={index} x="141" y={210 + index * 25} width="22" height="7" rx="3" fill={`url(#${ids.dark})`} />)}
            {Array.from({ length: 7 }, (_, index) => <rect key={index} x="357" y={210 + index * 25} width="22" height="7" rx="3" fill={`url(#${ids.dark})`} />)}
          </g>

          {/* lower control panel */}
          <g className="hvac-control-panel">
            <rect x="205" y="420" width="110" height="51" rx="10" fill="#07121c" stroke="#7993a4" />
            <text x="220" y="437" fill="#8ddff0" fontSize="7" fontWeight="700">RECOVERY OUTPUT</text>
            <text x="220" y="457" fill="#fff" fontSize="17" fontWeight="700">{currency.format(recovered)}</text>
            <circle cx="298" cy="439" r="5" fill="#4fe399" filter={`url(#${ids.glow})`} />
            <text x="292" y="458" fill="#89a6b8" fontSize="6">READY</text>
          </g>
        </g>

        {/* hoses and service ports */}
        <g className="hvac-hoses">
          <path d="M145 198 C83 206 80 302 118 341" fill="none" stroke="#1e78c5" strokeWidth="11" strokeLinecap="round" />
          <path d="M375 198 C438 210 441 305 401 342" fill="none" stroke="#d65b4f" strokeWidth="11" strokeLinecap="round" />
          <circle cx="145" cy="198" r="10" fill={`url(#${ids.shell})`} />
          <circle cx="375" cy="198" r="10" fill={`url(#${ids.shell})`} />
          <rect x="105" y="333" width="28" height="22" rx="7" fill={`url(#${ids.shell})`} transform="rotate(-17 119 344)" />
          <rect x="387" y="333" width="28" height="22" rx="7" fill={`url(#${ids.shell})`} transform="rotate(17 401 344)" />
        </g>

        <g className="hvac-serial">
          <rect x="365" y="385" width="83" height="38" rx="5" fill="#182530" stroke="#8096a5" />
          <text x="406.5" y="399" textAnchor="middle" fill="#d1e2e9" fontSize="7" fontWeight="700">VORDALI CLIMATE</text>
          <text x="406.5" y="411" textAnchor="middle" fill="#6fe5f5" fontSize="6">RCU-2400 · PRO</text>
        </g>
      </svg>

      <div className="hvac-vessel-caption">
        <span>Dual-pressure revenue recovery system</span>
        <strong className="hvac-vessel-status"><i /> SYSTEM ONLINE</strong>
      </div>
    </div>
  );
}
