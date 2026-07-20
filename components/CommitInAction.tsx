"use client";

import { useEffect, useState } from "react";

const industries = [
  { type: "Pizza Restaurant", amount: "$42.18", purpose: "Order payment", customer: "Jordan Lee" },
  { type: "HVAC Company", amount: "$189.00", purpose: "Service deposit", customer: "Alex Morgan" },
  { type: "Auto Care Shop", amount: "$467.85", purpose: "Repair payment", customer: "Taylor Reed" },
  { type: "Dental Office", amount: "$125.00", purpose: "Patient balance", customer: "Casey Brooks" },
  { type: "Home Services", amount: "$275.00", purpose: "Project deposit", customer: "Jamie Cole" },
  { type: "Retail Store", amount: "$68.40", purpose: "Remote purchase", customer: "Riley Quinn" },
];

const captions = [
  "The business creates and sends a secure payment request.",
  "Commit delivers the payment link instantly by SMS.",
  "The customer pays securely from any smartphone—no app required.",
  "Both sides receive immediate payment confirmation.",
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
    }, 2400);
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

      <div className={`two-phone-demo step-${step}`} aria-live="polite">
        <div className="phone-column business-column">
          <span className="phone-role">Business</span>
          <div className="demo-phone business-phone">
            <div className="phone-speaker" />
            <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>

            <div className="business-app-head"><small>VORDALI COMMIT</small><strong>New Payment Request</strong></div>

            <div className="business-request-form">
              <label><span>Customer</span><strong>{industry.customer}</strong></label>
              <label><span>Payment for</span><strong>{industry.purpose}</strong></label>
              <label><span>Amount</span><strong>{industry.amount}</strong></label>
              <button type="button" className="business-send-button">Send Payment Request</button>
            </div>

            <div className="business-sent-state">
              <span className="sent-check">✓</span>
              <strong>Request sent</strong>
              <p>{industry.amount} · {industry.customer}</p>
              <em>Delivered securely</em>
            </div>

            <div className="business-paid-state">
              <span className="paid-check">✓</span>
              <small>PAYMENT VERIFIED</small>
              <strong>{industry.amount}</strong>
              <p>{industry.customer}</p>
              <em>Paid just now</em>
            </div>
          </div>
        </div>

        <div className="commit-connection" aria-hidden="true">
          <div className="commit-hub"><span>V</span><small>COMMIT</small></div>
          <div className="connection-line"><i /></div>
          <span className="connection-label send-label">Secure SMS</span>
          <span className="connection-label return-label">Confirmation</span>
        </div>

        <div className="phone-column customer-column">
          <span className="phone-role">Customer</span>
          <div className="demo-phone customer-phone">
            <div className="phone-speaker" />
            <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>

            <div className="customer-waiting-state">
              <div className="waiting-orb">•••</div>
              <strong>Ready for requests</strong>
              <p>No app is required.</p>
            </div>

            <div className="customer-sms-state">
              <span className="phone-notification-label">NEW MESSAGE</span>
              <div className="sms-notification">
                <small>VORDALI COMMIT</small>
                <strong>{industry.type}</strong>
                <p>Your secure payment request for {industry.purpose.toLowerCase()} is ready.</p>
                <div><span>{industry.amount}</span><button type="button">View payment</button></div>
              </div>
            </div>

            <div className="customer-pay-state">
              <small>SECURE CHECKOUT</small>
              <strong>{industry.amount}</strong>
              <p>{industry.purpose}</p>
              <div className="payment-card-row"><span>•••• 4242</span><i>VISA</i></div>
              <button type="button" className="payment-submit">Pay {industry.amount}</button>
              <span className="tap-ripple" />
            </div>

            <div className="customer-success-state">
              <span className="paid-check">✓</span>
              <strong>Payment complete</strong>
              <p>{industry.amount} paid securely</p>
              <em>Receipt delivered</em>
            </div>
          </div>
        </div>
      </div>

      <div className="action-step-guide">
        {captions.map((caption, index) => (
          <button key={caption} type="button" className={step === index ? "active" : ""} onClick={() => setStep(index)} aria-label={`Show step ${index + 1}`}>
            <span>{index + 1}</span><small>{caption}</small>
          </button>
        ))}
      </div>
      <p className="action-caption">{captions[step]}</p>
    </div>
  );
}
