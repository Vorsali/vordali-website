"use client";

import { useEffect, useMemo, useState } from "react";

const scenarios = [
  { type: "Pizza Restaurant", amount: "$32.48", purpose: "Large pepperoni order", customer: "Jordan Lee" },
  { type: "HVAC Company", amount: "$184.50", purpose: "Service call", customer: "Alex Morgan" },
  { type: "Auto Repair", amount: "$427.15", purpose: "Brake service", customer: "Taylor Reed" },
  { type: "Dental Office", amount: "$96.00", purpose: "Today's visit", customer: "Casey Brooks" },
  { type: "Veterinary Clinic", amount: "$138.25", purpose: "Wellness exam", customer: "Jamie Cole" },
  { type: "Landscaping", amount: "$275.00", purpose: "Spring cleanup", customer: "Riley Quinn" },
];

const phases = [
  { key: "business-create", duration: 4200, step: 0, subtitle: "Creating a secure payment request..." },
  { key: "sms-flight", duration: 1700, step: 1, subtitle: "Sending the secure SMS..." },
  { key: "customer-message", duration: 4000, step: 1, subtitle: "The customer receives the payment link instantly." },
  { key: "customer-pay", duration: 5000, step: 2, subtitle: "The customer completes payment securely." },
  { key: "confirm-flight", duration: 1700, step: 3, subtitle: "Returning verified payment confirmation..." },
  { key: "business-paid", duration: 4300, step: 3, subtitle: "Payment confirmed. The business can move forward." },
] as const;

const steps = ["Create Request", "SMS Delivered", "Customer Pays", "Payment Confirmed"];

type PhaseKey = (typeof phases)[number]["key"];

export function CommitFlow() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phase = phases[phaseIndex];
  const scenario = scenarios[scenarioIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPhaseIndex((current) => {
        const next = (current + 1) % phases.length;
        if (next === 0) setScenarioIndex((value) => (value + 1) % scenarios.length);
        return next;
      });
    }, phase.duration);
    return () => window.clearTimeout(timer);
  }, [phase.duration, phaseIndex]);

  const role = useMemo(() => {
    if (phase.key === "customer-message" || phase.key === "customer-pay" || phase.key === "confirm-flight") return "Customer";
    return "Business";
  }, [phase.key]);

  const jumpToStep = (step: number) => {
    const index = phases.findIndex((item) => item.step === step && !item.key.includes("flight"));
    setPhaseIndex(index >= 0 ? index : 0);
  };

  return (
    <div className="commit-flow-stage">
      <div className="commit-flow-brand">
        <p className="kicker">The Commit Flow™</p>
        <strong>{phase.subtitle}</strong>
      </div>

      <div className="industry-rail" aria-label="Business examples">
        {scenarios.map((item, index) => (
          <span key={item.type} className={index === scenarioIndex ? "active" : ""}>{item.type}</span>
        ))}
      </div>

      <div className={`commit-flow-theater phase-${phase.key}`} aria-live="polite">
        <div key={`line-${phase.key}-${scenarioIndex}`} className="flow-travel-line" aria-hidden="true" />
        <div key={`sms-${phase.key}-${scenarioIndex}`} className="flying-sms" aria-hidden="true"><span>•••</span></div>
        <div key={`confirm-${phase.key}-${scenarioIndex}`} className="flying-confirmation" aria-hidden="true">✓</div>

        <div key={`phone-${phase.key}-${scenarioIndex}`} className="flow-phone-wrap">
          <span className="flow-phone-role">{role}</span>
          <div className="demo-phone flow-phone">
            <div className="phone-speaker" />
            <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>

            <div className="flow-screen business-create-screen">
              <div className="business-app-head"><small>VORDALI COMMIT</small><strong>New Payment Request</strong></div>
              <div className="business-request-form">
                <label><span>Customer</span><strong>{scenario.customer}</strong></label>
                <label><span>Payment for</span><strong>{scenario.purpose}</strong></label>
                <label><span>Amount</span><strong>{scenario.amount}</strong></label>
                <button type="button" className="business-send-button">Send Payment Request</button>
              </div>
            </div>

            <div className="flow-screen customer-message-screen">
              <span className="phone-notification-label">NEW MESSAGE</span>
              <div className="sms-notification">
                <small>VORDALI COMMIT</small>
                <strong>{scenario.type}</strong>
                <p>Your secure payment request for {scenario.purpose.toLowerCase()} is ready.</p>
                <div><span>{scenario.amount}</span><button type="button">View payment</button></div>
              </div>
            </div>

            <div className="flow-screen customer-pay-screen">
              <div className="customer-pay-state">
                <small>SECURE CHECKOUT</small>
                <strong>{scenario.amount}</strong>
                <p>{scenario.purpose}</p>
                <div className="payment-card-row"><span>•••• 4242</span><i>VISA</i></div>
                <button type="button" className="payment-submit">Pay {scenario.amount}</button>
                <span className="tap-ripple" />
              </div>
              <div className="flow-payment-success">
                <span className="paid-check">✓</span>
                <strong>Payment complete</strong>
                <p>{scenario.amount} paid securely</p>
              </div>
            </div>

            <div className="flow-screen business-paid-screen">
              <div className="business-paid-state">
                <span className="paid-check">✓</span>
                <small>PAYMENT VERIFIED</small>
                <strong>{scenario.amount}</strong>
                <p>{scenario.customer}</p>
                <em>Paid just now</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="commit-flow-progress" aria-label="Commit Flow steps">
        {steps.map((label, index) => (
          <button key={label} type="button" className={phase.step === index ? "active" : phase.step > index ? "complete" : ""} onClick={() => jumpToStep(index)}>
            <span>{phase.step > index ? "✓" : index + 1}</span><small>{label}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
