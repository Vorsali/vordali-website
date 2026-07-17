"use client";
import { useState } from "react";

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function startCheckout() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/billing/checkout", { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to start checkout.");
      if (data.next) window.location.href = data.next;
      else if (data.url) window.location.href = data.url;
      else throw new Error("Checkout URL was not returned.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setLoading(false);
    }
  }
  return <><button className="button button-primary" onClick={startCheckout} disabled={loading}>{loading ? "Opening secure checkout…" : "Continue to secure checkout"}</button>{error && <p className="form-error checkout-error">{error}</p>}</>;
}
