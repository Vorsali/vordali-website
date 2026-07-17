"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function PlanChooser({ signedIn = false }: { signedIn?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function choose(plan: "starter" | "pro") {
    if (!signedIn) {
      router.push(`/register?plan=${plan}`);
      return;
    }

    setBusy(plan);
    setError("");
    try {
      const response = await fetch("/api/merchant/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
        cache: "no-store"
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to choose plan.");
      window.location.assign(result.next || "/checkout");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to choose plan.");
      setBusy(null);
    }
  }

  return (
    <>
      <div className="merchant-plan-grid">
        <article>
          <span>Starter</span>
          <h2>$39.99<small>/month</small></h2>
          <p>Fast, secure text-to-pay for independent businesses.</p>
          <ul>
            <li>Secure payment requests</li>
            <li>Transactional SMS</li>
            <li>Live payment status</li>
            <li>Basic dashboard</li>
          </ul>
          <button className="button button-secondary" onClick={() => choose("starter")} disabled={busy !== null}>
            {busy === "starter" ? "Opening checkout…" : "Choose Starter"}
          </button>
        </article>
        <article className="featured">
          <div className="pricing-ribbon">Recommended</div>
          <span>Pro</span>
          <h2>$69.99<small>/month</small></h2>
          <p>Advanced visibility, analytics, and business branding.</p>
          <ul>
            <li>Everything in Starter</li>
            <li>Revenue Protected™</li>
            <li>Beacon™ and Pulse™</li>
            <li>Priority support</li>
          </ul>
          <button className="button button-primary" onClick={() => choose("pro")} disabled={busy !== null}>
            {busy === "pro" ? "Opening checkout…" : "Choose Pro →"}
          </button>
        </article>
      </div>
      {error && <p className="form-error">{error}</p>}
    </>
  );
}
