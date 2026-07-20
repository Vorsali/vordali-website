"use client";

import { useEffect, useState } from "react";

const industries = [
  { type: "Pizza Restaurant", amount: "$42.18", purpose: "Order payment" },
  { type: "HVAC Company", amount: "$189.00", purpose: "Service deposit" },
  { type: "Auto Care Shop", amount: "$467.85", purpose: "Repair payment" },
  { type: "Dental Office", amount: "$125.00", purpose: "Patient balance" },
  { type: "Home Services", amount: "$275.00", purpose: "Project deposit" },
  { type: "Retail Store", amount: "$68.40", purpose: "Remote purchase" },
];

export function CommitInAction() {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => {
        const next = (current + 1) % 4;
        if (next === 0) setIndustryIndex((industry) => (industry + 1) % industries.length);
        return next;
      });
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  const industry = industries[industryIndex];

  return (
    <div className="commit-action-stage">
      <div className="industry-rail" aria-label="Business examples">
        {industries.map((item, index) => (
          <span key={item.type} className={index === industryIndex ? "active" : ""}>{item.type}</span>
        ))}
      </div>

      <div className="action-demo-grid">
        <div className={`demo-phone step-${step}`} aria-live="polite">
          <div className="phone-speaker" />
          <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>

          <div className="phone-step phone-request-sent">
            <span className="phone-step-icon">↗</span>
            <small>VORDALI COMMIT</small>
            <strong>Request sent</strong>
            <p>{industry.purpose} for {industry.amount}</p>
            <em>Delivered securely</em>
          </div>

          <div className="phone-step phone-sms-received">
            <span className="phone-notification-label">NEW MESSAGE</span>
            <div className="sms-notification">
              <small>VORDALI COMMIT</small>
              <strong>{industry.type}</strong>
              <p>Your secure payment request for {industry.purpose.toLowerCase()} is ready.</p>
              <div><span>{industry.amount}</span><button type="button">Pay securely</button></div>
            </div>
          </div>

          <div className="phone-step phone-customer-pays">
            <small>SECURE CHECKOUT</small>
            <strong>{industry.amount}</strong>
            <p>{industry.purpose}</p>
            <div className="payment-card-row"><span>•••• 4242</span><i>VISA</i></div>
            <button type="button" className="payment-submit">Pay {industry.amount}</button>
            <span className="tap-ripple" aria-hidden="true" />
          </div>

          <div className="phone-step phone-success">
            <span>✓</span>
            <strong>Payment complete</strong>
            <small>Confirmation sent instantly</small>
          </div>
        </div>

        <div className={`demo-dashboard step-${step}`}>
          <div className="demo-dashboard-head"><div><small>Vordali Commit</small><strong>Payment Requests</strong></div><span>Live</span></div>
          <div className="demo-request">
            <div><small>Request #4827</small><strong>{industry.type}</strong><span>{industry.purpose}</span></div>
            <b>{industry.amount}</b>
            <em>{step < 2 ? "Pending" : step === 2 ? "Processing" : "Paid ✓"}</em>
          </div>
          <div className="demo-stats"><div><small>Protected today</small><strong>{step === 3 ? "$684" : "$642"}</strong></div><div><small>Paid requests</small><strong>{step === 3 ? "18" : "17"}</strong></div></div>
          <div className="demo-flow-labels"><span className={step >= 0 ? "active" : ""}>Request sent</span><span className={step >= 1 ? "active" : ""}>SMS received</span><span className={step >= 2 ? "active" : ""}>Customer pays</span><span className={step >= 3 ? "active" : ""}>Verified</span></div>
        </div>
      </div>
    </div>
  );
}
