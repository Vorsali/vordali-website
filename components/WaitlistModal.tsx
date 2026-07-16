"use client";

import { FormEvent, useEffect, useState } from "react";

const labels: Record<string, string> = { approve: "Approve™", follow: "Follow™", verify: "Verify™" };

export function WaitlistModal({ initialProduct }: { initialProduct?: string }) {
  const [product, setProduct] = useState(initialProduct || "");
  const [open, setOpen] = useState(Boolean(initialProduct));
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      setProduct(slug);
      setOpen(true);
      setMessage("");
    };
    window.addEventListener("vordali:waitlist", handler);
    return () => window.removeEventListener("vordali:waitlist", handler);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (button) button.disabled = true;
    setMessage("Submitting...");
    setError(false);
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed.");
      setMessage(result.message);
      form.reset();
    } catch (err) {
      setError(true);
      setMessage(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      if (button) button.disabled = false;
    }
  }

  if (!open) return null;

  return (
    <div className="modal-shell">
      <div className="modal-backdrop" onClick={() => setOpen(false)}></div>
      <form className="waitlist-modal-card" onSubmit={submit}>
        <button className="modal-close" type="button" onClick={() => setOpen(false)}>×</button>
        <p className="kicker">Product research</p>
        <h2>Join the <span>{labels[product] || "Vordali"}</span> waitlist.</h2>
        <p>Tell us what this problem costs your business. Demand guides what Vordali builds next.</p>
        <input type="hidden" name="product_slug" value={product} />
        <label>Name<input name="name" required /></label>
        <label>Work email<input type="email" name="email" required /></label>
        <label>Business name<input name="business_name" /></label>
        <label>Business type<input name="business_type" placeholder="Restaurant, HVAC, retail..." /></label>
        <label className="full-field">What problem would this solve?<textarea name="problem" required rows={4}></textarea></label>
        <label>Estimated hours lost weekly<input name="hours_lost_weekly" type="number" min="0" step=".5" /></label>
        <label>Estimated monthly cost<input name="monthly_cost" type="number" min="0" step=".01" /></label>
        <button className="button button-primary full-field" type="submit">Join Waitlist <span>→</span></button>
        <p className={`form-message full-field ${error ? "form-error" : "form-success"}`}>{message}</p>
      </form>
    </div>
  );
}

export function WaitlistButton({ product, children }: { product: string; children: React.ReactNode }) {
  return <button className="button button-secondary" onClick={() => window.dispatchEvent(new CustomEvent("vordali:waitlist", { detail: product }))}>{children}</button>;
}
