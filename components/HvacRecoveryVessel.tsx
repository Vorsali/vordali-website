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
  const fill = Math.max(10, Math.min(90, progress));
  const sightTop = 352 - (fill / 100) * 150;
  const breakEvenPercent = recovered > 0 ? Math.min(90, Math.max(10, (annualCost / recovered) * 100)) : 0;
  const breakEvenY = 352 - (breakEvenPercent / 100) * 150;
  const style = {
    "--hvac-light": "#75edff",
    "--hvac-mid": "#1aa8e8",
    "--hvac-deep": "#07529a",
  } as CSSProperties;

  const bubbles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        cx: 240 + ((index * 17) % 42),
        cy: 344 - ((index * 23) % 118),
        r: 2 + (index % 3),
        delay: (index * 0.37) % 3,
        duration: 3.6 + (index % 3) * 0.6,
      })),
    [],
  );

  const boltAngles = Array.from({ length: 16 }, (_, index) => index * 22.5);
  const ids = {
    shell: `${uid}-shell`, dark: `${uid}-dark`, glass: `${uid}-glass`, liquid: `${uid}-liquid`,
    brass: `${uid}-brass`, copper: `${uid}-copper`, gauge: `${uid}-gauge`, glow: `${uid}-glow`,
    soft: `${uid}-soft`, clip: `${uid}-clip`, frost: `${uid}-frost`, fin: `${uid}-fin`,
  };

  return (
    <div className="hvac-vessel-stage" style={style} role="img" aria-label={`HVAC Recovery Cylinder showing ${currency.format(recovered)} recovered revenue at ${progress} percent`}>
      <div className="hvac-vessel-crown">
        <span>CLIMATE SERIES</span>
        <strong>Recovery Cylinder™</strong>
        <small>Pressure-rated commercial recovery unit</small>
      </div>

      <svg className="hvac-vessel-svg" viewBox="0 0 520 560" aria-hidden="true">
        <defs>
          <linearGradient id={ids.shell} x1="0" x2="1">
            <stop offset="0" stopColor="#07131f"/><stop offset=".1" stopColor="#60788a"/><stop offset=".2" stopColor="#dce7ec"/>
            <stop offset=".34" stopColor="#536b7d"/><stop offset=".5" stopColor="#f4f8fa"/><stop offset=".67" stopColor="#445e72"/>
            <stop offset=".84" stopColor="#c7d4db"/><stop offset="1" stopColor="#06111b"/>
          </linearGradient>
          <linearGradient id={ids.dark} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4b6070"/><stop offset=".35" stopColor="#142330"/><stop offset="1" stopColor="#02070b"/></linearGradient>
          <linearGradient id={ids.glass} x1="0" x2="1"><stop offset="0" stopColor="#efffff" stopOpacity=".22"/><stop offset=".3" stopColor="#8feaff" stopOpacity=".04"/><stop offset=".7" stopColor="#fff" stopOpacity=".02"/><stop offset="1" stopColor="#dffcff" stopOpacity=".18"/></linearGradient>
          <linearGradient id={ids.liquid} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--hvac-light)"/><stop offset=".4" stopColor="var(--hvac-mid)"/><stop offset="1" stopColor="var(--hvac-deep)"/></linearGradient>
          <linearGradient id={ids.brass} x1="0" x2="1"><stop offset="0" stopColor="#5b3a0b"/><stop offset=".18" stopColor="#e5c36c"/><stop offset=".42" stopColor="#8e6519"/><stop offset=".7" stopColor="#ffe39a"/><stop offset="1" stopColor="#61400e"/></linearGradient>
          <linearGradient id={ids.copper} x1="0" x2="1"><stop offset="0" stopColor="#5d2e19"/><stop offset=".18" stopColor="#e5a06d"/><stop offset=".45" stopColor="#8b4727"/><stop offset=".68" stopColor="#f2bd86"/><stop offset="1" stopColor="#61311c"/></linearGradient>
          <linearGradient id={ids.fin} x1="0" x2="1"><stop offset="0" stopColor="#0a141c"/><stop offset=".5" stopColor="#526a7a"/><stop offset="1" stopColor="#08121a"/></linearGradient>
          <radialGradient id={ids.gauge}><stop offset="0" stopColor="#17354a"/><stop offset=".72" stopColor="#07131e"/><stop offset="1" stopColor="#010609"/></radialGradient>
          <radialGradient id={ids.frost}><stop offset="0" stopColor="#fff" stopOpacity=".8"/><stop offset=".5" stopColor="#c9f7ff" stopOpacity=".32"/><stop offset="1" stopColor="#c9f7ff" stopOpacity="0"/></radialGradient>
          <filter id={ids.glow} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id={ids.soft} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="18"/></filter>
          <clipPath id={ids.clip}><rect x="220" y="190" width="80" height="174" rx="38"/></clipPath>
        </defs>

        <ellipse cx="260" cy="505" rx="155" ry="25" fill="var(--hvac-mid)" opacity=".16" filter={`url(#${ids.soft})`}/>

        {/* heat-exchanger backplate */}
        <g className="hvac-fixed-equipment">
          <rect x="137" y="154" width="246" height="298" rx="52" fill="#07121a" stroke="#354c5e" strokeWidth="8"/>
          {Array.from({ length: 17 }, (_, i) => <rect key={i} x="151" y={169 + i * 15} width="218" height="6" rx="3" fill={`url(#${ids.fin})`} opacity=".9"/>)}
          <path d="M120 467 V164 Q120 132 152 132 H368 Q400 132 400 164 V467" fill="none" stroke={`url(#${ids.dark})`} strokeWidth="14" strokeLinecap="round"/>
          <path d="M98 468 H422" stroke={`url(#${ids.shell})`} strokeWidth="15" strokeLinecap="round"/>
          {[136,384].map((x) => <g key={x}><circle cx={x} cy="488" r="18" fill="#04080c" stroke="#647d8f" strokeWidth="5"/><circle cx={x} cy="488" r="8" fill="#111d25"/><path d={`M${x-8} 488 H${x+8}`} stroke="#9bb1be" strokeWidth="2"/></g>)}
        </g>

        {/* fixed pressure instruments and manifold */}
        <g className="hvac-fixed-manifold">
          <rect x="214" y="102" width="92" height="39" rx="8" fill={`url(#${ids.brass})`} stroke="#f7df9a" strokeOpacity=".55"/>
          <rect x="232" y="112" width="18" height="19" rx="5" fill="#164975" stroke="#79dfff"/><rect x="270" y="112" width="18" height="19" rx="5" fill="#7d231e" stroke="#ff968b"/>
          <path d="M260 139 V160" stroke={`url(#${ids.copper})`} strokeWidth="11" strokeLinecap="round"/>
          <path d="M226 116 H190 Q180 116 180 98" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="8" strokeLinecap="round"/>
          <path d="M294 116 H330 Q340 116 340 98" fill="none" stroke={`url(#${ids.copper})`} strokeWidth="8" strokeLinecap="round"/>
          {[{x:180,label:"LOW",needle:-32},{x:340,label:"HIGH",needle:24}].map((g) => (
            <g key={g.label} transform={`translate(${g.x} 78)`} className="hvac-gauge">
              <circle r="40" fill={`url(#${ids.shell})`}/><circle r="32" fill={`url(#${ids.gauge})`} stroke="#7fe8ff" strokeOpacity=".42"/>
              {[-55,-28,0,28,55].map((a) => <line key={a} x1="0" y1="-26" x2="0" y2="-20" stroke="#a9d9e8" strokeWidth="2" transform={`rotate(${a})`}/>)}
              <line x1="0" y1="4" x2="0" y2="-22" stroke="var(--hvac-light)" strokeWidth="2.5" transform={`rotate(${g.needle})`}/><circle r="4" fill="#d9f8ff"/>
              <text y="19" textAnchor="middle" fill="#8fc7d9" fontSize="7" fontWeight="700">{g.label}</text>
            </g>
          ))}
          {/* service ports */}
          <g transform="translate(204 132)"><rect x="-13" y="0" width="26" height="18" rx="4" fill={`url(#${ids.brass})`}/><circle cy="9" r="5" fill="#1c73b8"/></g>
          <g transform="translate(316 132)"><rect x="-13" y="0" width="26" height="18" rx="4" fill={`url(#${ids.brass})`}/><circle cy="9" r="5" fill="#c84f45"/></g>
        </g>

        <g className="hvac-cylinder-body">
          {/* pressure vessel shell */}
          <path d="M184 176 Q184 148 212 148 H308 Q336 148 336 176 L350 205 V388 Q350 426 320 449 Q260 479 200 449 Q170 426 170 388 V205 Z" fill={`url(#${ids.shell})`} stroke="#abc0cb" strokeOpacity=".75" strokeWidth="2.5"/>
          <path d="M186 204 Q260 165 334 204" fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="3"/>
          <path d="M183 405 Q260 454 337 405" fill="none" stroke="#02070a" strokeOpacity=".48" strokeWidth="4"/>
          {/* welded seams */}
          <path d="M175 222 H345 M174 392 H346" stroke="#263c4d" strokeWidth="5" opacity=".9"/><path d="M178 220 H342 M178 390 H342" stroke="#d9e6eb" strokeWidth="1" opacity=".55"/>

          {/* compact oval inspection assembly */}
          <ellipse cx="260" cy="277" rx="73" ry="112" fill="#09131b" stroke="#02070b" strokeWidth="12"/>
          <ellipse cx="260" cy="277" rx="66" ry="105" fill={`url(#${ids.shell})`} opacity=".75"/>
          {boltAngles.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 260 + Math.cos(rad) * 64;
            const y = 277 + Math.sin(rad) * 101;
            return <g key={angle}><circle cx={x} cy={y} r="5.5" fill="#17242d" stroke="#d6e2e7" strokeWidth="1.5"/><path d={`M${x-2.5} ${y} H${x+2.5}`} stroke="#91a8b6" strokeWidth="1"/></g>;
          })}
          <rect x="216" y="186" width="88" height="182" rx="42" fill="#020a10" stroke="#06131d" strokeWidth="8"/>
          <g clipPath={`url(#${ids.clip})`}>
            <rect x="220" y={sightTop} width="80" height={364 - sightTop} fill={`url(#${ids.liquid})`}/>
            <path className="hvac-wave hvac-wave-back" d={`M208 ${sightTop + 3} Q234 ${sightTop - 6} 260 ${sightTop + 3} T312 ${sightTop + 3} V372 H208 Z`} fill="var(--hvac-light)" opacity=".45"/>
            <path className="hvac-wave hvac-wave-front" d={`M207 ${sightTop + 9} Q234 ${sightTop + 18} 260 ${sightTop + 8} T313 ${sightTop + 8} V372 H207 Z`} fill={`url(#${ids.liquid})`} opacity=".96"/>
            {bubbles.map((b, i) => <circle key={i} className="hvac-bubble" cx={b.cx} cy={Math.max(b.cy, sightTop + 14)} r={b.r} fill="#d8fbff" opacity=".75" style={{animationDelay:`${b.delay}s`,animationDuration:`${b.duration}s`}}/>)}
            <rect x="220" y="190" width="80" height="174" rx="38" fill={`url(#${ids.glass})`}/>
            <path className="hvac-glass-sweep" d="M239 199 Q224 277 239 354" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="9" strokeLinecap="round"/>
          </g>
          <rect x="220" y="190" width="80" height="174" rx="38" fill="none" stroke="#bff7ff" strokeOpacity=".65" strokeWidth="2.5"/>

          {/* frost only at cold points */}
          <ellipse className="hvac-frost" cx="224" cy="211" rx="30" ry="34" fill={`url(#${ids.frost})`} opacity=".35"/>
          <path className="hvac-frost" d="M208 188 l7 11 8-8 6 12 9-7" fill="none" stroke="#dffcff" strokeWidth="3" strokeLinecap="round" opacity=".45"/>

          {/* break-even marker across sight glass only */}
          <g className="hvac-break-even"><line x1="211" y1={breakEvenY} x2="309" y2={breakEvenY} stroke="#e3fbff" strokeOpacity=".9" strokeWidth="2" strokeDasharray="6 5"/><rect x="309" y={breakEvenY-12} width="70" height="24" rx="12" fill="#061521" stroke="#5fdff6" strokeOpacity=".55"/><text x="344" y={breakEvenY+3.5} textAnchor="middle" fill="#c8f3ff" fontSize="7.5" fontWeight="700">BREAK-EVEN</text></g>

          {/* recovery display */}
          <g className="hvac-control-panel"><rect x="205" y="416" width="110" height="52" rx="9" fill="#06111a" stroke="#8196a4"/><text x="219" y="434" fill="#8ddff0" fontSize="7" fontWeight="700">RECOVERY OUTPUT</text><text x="219" y="455" fill="#fff" fontSize="17" fontWeight="700">{currency.format(recovered)}</text><circle cx="298" cy="437" r="5" fill="#4fe399" filter={`url(#${ids.glow})`}/><text x="291" y="457" fill="#89a6b8" fontSize="6">READY</text></g>
        </g>

        {/* hoses remain outside the breathing vessel */}
        <g className="hvac-hoses">
          <path d="M201 141 C111 160 95 297 126 350" fill="none" stroke="#1e78c5" strokeWidth="11" strokeLinecap="round"/>
          <path d="M319 141 C409 160 425 297 394 350" fill="none" stroke="#d65b4f" strokeWidth="11" strokeLinecap="round"/>
          <rect x="111" y="341" width="29" height="22" rx="6" fill={`url(#${ids.brass})`} transform="rotate(-18 126 352)"/><rect x="380" y="341" width="29" height="22" rx="6" fill={`url(#${ids.brass})`} transform="rotate(18 394 352)"/>
          <path d="M199 143 C192 152 194 165 205 172" fill="none" stroke="#dffcff" strokeWidth="4" opacity=".35"/>
        </g>

        {/* equipment plate */}
        <g className="hvac-serial"><rect x="354" y="382" width="98" height="55" rx="4" fill="#16232d" stroke="#8096a5"/><text x="403" y="396" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">VORDALI</text><text x="403" y="408" textAnchor="middle" fill="#9fb8c6" fontSize="7">CLIMATE SERIES</text><line x1="364" y1="414" x2="442" y2="414" stroke="#5c7280"/><text x="403" y="425" textAnchor="middle" fill="#6fe5f5" fontSize="6.5">RC-410 PRO</text><text x="403" y="434" textAnchor="middle" fill="#8da5b3" fontSize="5.5">RECOVERY UNIT</text></g>
      </svg>

      <div className="hvac-vessel-caption"><span>Pressure-rated revenue recovery system</span><strong className="hvac-vessel-status"><i/> SYSTEM ONLINE</strong></div>
    </div>
  );
}
