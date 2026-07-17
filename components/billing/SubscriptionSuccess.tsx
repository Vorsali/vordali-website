"use client";

import { useEffect, useState } from "react";

export function SubscriptionSuccess() {
  const [status, setStatus] = useState("confirming");
  const [next, setNext] = useState("/onboarding/business");
  const [message, setMessage] = useState(
    "Payment was received. We are securely confirming your subscription."
  );

  useEffect(() => {
    let canceled = false;
    let attempts = 0;

    const sessionId = new URLSearchParams(window.location.search).get("session_id");

    const reconcile = async () => {
      if (!sessionId) return;
      const response = await fetch("/api/billing/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setMessage(data.error || "Stripe confirmation is still pending.");
        return;
      }
      if (!canceled) {
        setStatus(data.status || "confirming");
        setNext(data.next || "/onboarding/business");
      }
    };

    const check = async () => {
      attempts += 1;
      const response = await fetch("/api/billing/status", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        if (!canceled) {
          setStatus(data.status);
          setNext(data.next);
        }
        if (["active", "trialing"].includes(data.status)) return;
      }
      if (!canceled && attempts < 20) window.setTimeout(check, 1500);
    };

    reconcile().finally(check);
    return () => {
      canceled = true;
    };
  }, []);

  const ready = ["active", "trialing"].includes(status);

  return (
    <section className="subscription-result-card">
      <div className={ready ? "result-icon ready" : "result-icon"}>
        {ready ? "✓" : "…"}
      </div>
      <h2>{ready ? "Subscription active." : "Confirming your subscription."}</h2>
      <p>
        {ready
          ? "Stripe confirmed your plan. Continue to finish your business setup."
          : message}
      </p>
      <div className="subscription-status-line">
        <span>Status</span>
        <strong>{status}</strong>
      </div>
      {ready ? (
        <a className="button button-primary" href={next}>
          Continue business setup
        </a>
      ) : (
        <button
          className="button button-secondary"
          onClick={() => window.location.reload()}
        >
          Check again
        </button>
      )}
    </section>
  );
}
