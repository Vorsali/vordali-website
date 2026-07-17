"use client";
import { useEffect, useState } from "react";

export function SubscriptionSuccess() {
  const [status, setStatus] = useState("confirming");
  const [next, setNext] = useState("/onboarding/business");
  useEffect(() => {
    let attempts = 0;
    const check = async () => {
      attempts += 1;
      const response = await fetch("/api/billing/status", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        setStatus(data.status);
        setNext(data.next);
        if (["active", "trialing"].includes(data.status)) return;
      }
      if (attempts < 12) window.setTimeout(check, 1500);
    };
    check();
  }, []);
  const ready = ["active", "trialing"].includes(status);
  return <section className="subscription-result-card"><div className={ready ? "result-icon ready" : "result-icon"}>{ready ? "✓" : "…"}</div><h2>{ready ? "Subscription active." : "Confirming your subscription."}</h2><p>{ready ? "Stripe confirmed your plan. Continue to finish your business setup." : "Payment was received. We are waiting for Stripe’s secure confirmation before unlocking your account."}</p><div className="subscription-status-line"><span>Status</span><strong>{status}</strong></div>{ready ? <a className="button button-primary" href={next}>Continue business setup</a> : <button className="button button-secondary" onClick={() => window.location.reload()}>Check again</button>}</section>;
}
