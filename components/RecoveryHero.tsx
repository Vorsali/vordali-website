"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { BUSINESS_TYPES, dashboardLanguage } from "@/lib/merchant/adaptiveProfile";
import { RECOVERY_THEMES, RecoveryTheme } from "@/components/RevenueRecoveryTank";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const BUSINESS_DEFAULTS: Record<string, { riskModel: string; events: number; ticket: number; recoveryRate: number; particle: string; proof: string }> = {
  restaurant: { riskModel: "prepared_order_loss", events: 5, ticket: 42, recoveryRate: 70, particle: "▤", proof: "Prepared orders protected" },
  bakery_catering: { riskModel: "deposit_required", events: 3, ticket: 125, recoveryRate: 75, particle: "◫", proof: "Deposits secured" },
  automotive: { riskModel: "unpaid_invoice", events: 2, ticket: 480, recoveryRate: 68, particle: "⚙", proof: "Repair revenue secured" },
  home_services: { riskModel: "deposit_required", events: 2, ticket: 650, recoveryRate: 72, particle: "⌁", proof: "Service deposits secured" },
  professional_services: { riskModel: "unpaid_invoice", events: 2, ticket: 375, recoveryRate: 65, particle: "▱", proof: "Invoices protected" },
  appointments: { riskModel: "appointment_no_show", events: 6, ticket: 85, recoveryRate: 78, particle: "✦", proof: "No-show losses prevented" },
  retail: { riskModel: "phone_order_abandonment", events: 4, ticket: 68, recoveryRate: 70, particle: "◇", proof: "Orders secured" },
  other: { riskModel: "custom", events: 3, ticket: 100, recoveryRate: 70, particle: "$", proof: "Revenue protected" },
};

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

export function RecoveryHero() {
  const [businessType, setBusinessType] = useState("restaurant");
  const [riskModel, setRiskModel] = useState(BUSINESS_DEFAULTS.restaurant.riskModel);
  const [events, setEvents] = useState(BUSINESS_DEFAULTS.restaurant.events);
  const [ticket, setTicket] = useState(BUSINESS_DEFAULTS.restaurant.ticket);
  const [recoveryRate, setRecoveryRate] = useState(BUSINESS_DEFAULTS.restaurant.recoveryRate);
  const [theme, setTheme] = useState<RecoveryTheme>("vordali");
  const [previewTheme, setPreviewTheme] = useState<RecoveryTheme | null>(null);
  const [changing, setChanging] = useState(false);

  const activeTheme = previewTheme ?? theme;
  const themeData = RECOVERY_THEMES.find((item) => item.value === activeTheme) ?? RECOVERY_THEMES[0];
  const defaults = BUSINESS_DEFAULTS[businessType] ?? BUSINESS_DEFAULTS.other;
  const language = dashboardLanguage(riskModel);
  const businessLabel = BUSINESS_TYPES.find((item) => item.value === businessType)?.label ?? "Your business";
  const annualRisk = Math.max(0, events * ticket * 52);
  const protectedRevenue = annualRisk * recoveryRate / 100;
  const annualCost = 39.99 * 12;
  const netGain = Math.max(0, protectedRevenue - annualCost);
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

  function updateBusiness(value: string) {
    const next = BUSINESS_DEFAULTS[value] ?? BUSINESS_DEFAULTS.other;
    setChanging(true);
    window.setTimeout(() => {
      setBusinessType(value);
      setRiskModel(next.riskModel);
      setEvents(next.events);
      setTicket(next.ticket);
      setRecoveryRate(next.recoveryRate);
      window.setTimeout(() => setChanging(false), 180);
    }, 180);
  }

  function changeNumber(setter: (value: number) => void, value: number) {
    setChanging(true);
    setter(value);
    window.setTimeout(() => setChanging(false), 360);
  }

  return (
    <section className="recovery-hero" style={style}>
      <div className="recovery-atmosphere" aria-hidden="true">
        <span className="aurora aurora-one"></span><span className="aurora aurora-two"></span>
        <span className="energy-ribbon ribbon-one"></span><span className="energy-ribbon ribbon-two"></span>
        <span className="hero-grid"></span>
        {Array.from({ length: 12 }, (_, index) => <i key={index} className={`ambient-star star-${index + 1}`}></i>)}
      </div>

      <div className="recovery-hero-inner">
        <div className="recovery-hero-copy">
          <p className="recovery-kicker">Stop losing money on unpaid orders</p>
          <h1>Fill Your<br /><span>Recovery Tank™</span></h1>
          <h2>Secure payments. Protect revenue.</h2>
          <p className="hero-description">Vordali Commit sends secure payment links by text so you get paid before the order leaves, the appointment begins, or costly work starts.</p>
          <div className="recovery-benefits">
            <div><b>▣</b><span>Text-to-Pay</span></div>
            <div><b>◇</b><span>Stop No-Shows</span></div>
            <div><b>ϟ</b><span>Get Paid Faster</span></div>
            <div><b>▥</b><span>Grow Revenue</span></div>
          </div>
          <div className="recovery-hero-actions">
            <a className="button button-primary" href="#recovery-controls">See What You Could Recover <span>→</span></a>
            <Link className="button button-secondary" href="/choose-plan">Launch Commit</Link>
          </div>
        </div>

        <div className={`signature-tank-stage ${changing ? "is-changing" : ""}`} aria-label={`Recovery Tank showing ${currency.format(protectedRevenue)} estimated annual protected revenue`}>
          <div className="tank-value-crown">
            <small>Estimated Annual Revenue Protected</small>
            <strong>{currency.format(animatedProtected)}</strong>
            <span>+{Math.round(valueRatio * 10)}% value</span>
          </div>
          <div className="cylinder-tank">
            <div className="tank-top-rim"></div>
            <div className="cylinder-glass">
              <div className="cylinder-liquid">
                <div className="liquid-surface surface-back"></div>
                <div className="liquid-surface surface-front"></div>
                <div className="liquid-foam"></div>
                {particles.map((particle) => (
                  <span key={particle.id} className="business-particle" style={{ left: `${particle.left}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s`, fontSize: `${particle.size}px` }}>{defaults.particle}</span>
                ))}
                {Array.from({ length: 6 }, (_, index) => <i key={index} className={`liquid-bubble liquid-bubble-${index + 1}`}></i>)}
              </div>
              <div className="glass-reflection reflection-one"></div>
              <div className="glass-reflection reflection-two"></div>
              <div className="glass-sweep"></div>
              <div className="break-even-line"><span>Commit breaks even</span></div>
            </div>
            <div className="tank-bottom-rim"></div>
            <div className="tank-pedestal" aria-hidden="true">
              <div className="pedestal-top-collar"></div>
              <div className="pedestal-body">
                <div className="pedestal-metal-sheen"></div>
                <div className="tank-plaque-large">
                  <i className="plaque-screw screw-tl"></i>
                  <i className="plaque-screw screw-tr"></i>
                  <i className="plaque-screw screw-bl"></i>
                  <i className="plaque-screw screw-br"></i>
                  <strong>Recovery Tank™</strong><small>◉ Powered by Commit</small>
                </div>
              </div>
              <div className="pedestal-lower-bevel"></div>
              <div className="pedestal-light-strip"></div>
            </div>
          </div>
          <p className="tank-proof-line">{defaults.proof} · {recoveryRate}% estimated recovery</p>
        </div>

        <aside className="recovery-control-panel" id="recovery-controls">
          <div className="control-heading"><span>Interactive simulator</span><h3>See Your Recovery Potential</h3><p>Customize your business and watch the tank respond.</p></div>
          <label>Business type
            <select value={businessType} onChange={(event) => updateBusiness(event.target.value)}>
              {BUSINESS_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label>{language.eventLabel} per week
            <div className="stepper"><input type="number" min="0" value={events} onChange={(event) => changeNumber(setEvents, Number(event.target.value))} /><button type="button" onClick={() => changeNumber(setEvents, Math.max(0, events - 1))}>−</button><button type="button" onClick={() => changeNumber(setEvents, events + 1)}>+</button></div>
          </label>
          <label>{language.valueLabel}
            <div className="stepper money-stepper"><span>$</span><input type="number" min="0" value={ticket} onChange={(event) => changeNumber(setTicket, Number(event.target.value))} /><button type="button" onClick={() => changeNumber(setTicket, Math.max(0, ticket - 5))}>−</button><button type="button" onClick={() => changeNumber(setTicket, ticket + 5)}>+</button></div>
          </label>
          <label>Estimated recovery rate: <b>{recoveryRate}%</b>
            <input type="range" min="10" max="100" value={recoveryRate} onChange={(event) => changeNumber(setRecoveryRate, Number(event.target.value))} />
          </label>
          <fieldset className="hero-theme-picker"><legend>Recovery Theme</legend><div>
            {RECOVERY_THEMES.filter((item) => item.tier === "starter").map((item) => <button type="button" key={item.value} className={theme === item.value ? "selected" : ""} onMouseEnter={() => setPreviewTheme(item.value)} onMouseLeave={() => setPreviewTheme(null)} onFocus={() => setPreviewTheme(item.value)} onBlur={() => setPreviewTheme(null)} onClick={() => setTheme(item.value)}><i style={{ background: `linear-gradient(135deg,${item.colors[0]},${item.colors[1]} 55%,${item.colors[2]})` }}></i><span>{item.label}</span></button>)}
          </div></fieldset>
          <div className="hero-result-grid"><div><span>Annual revenue at risk</span><strong>{currency.format(annualRisk)}</strong></div><div><span>Commit cost</span><strong>{currency.format(annualCost)}</strong></div><div><span>Estimated net gain</span><strong>{currency.format(netGain)}</strong></div></div>
          <p className="control-assurance">◈ Real results. No long-term contracts.</p>
        </aside>
      </div>
      <div className="recovery-trust-strip"><span>◇ PCI-conscious workflow</span><span>▣ Secure Stripe payments</span><span>◌ Simple for your team</span><span>▱ Works with any phone</span><span>◷ Live in minutes</span></div>
    </section>
  );
}
