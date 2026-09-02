"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Confirming your email and preparing your account…");

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const accessToken = hash.get("access_token");
    const expiresIn = hash.get("expires_in");
    const error = hash.get("error_description") || hash.get("error");
    if (error) {
      const frame = window.requestAnimationFrame(() => setMessage(error));
      return () => window.cancelAnimationFrame(frame);
    }
    if (!accessToken) {
      const frame = window.requestAnimationFrame(() => setMessage("Your email is confirmed. Return to Vordali and sign in to continue checkout."));
      return () => window.cancelAnimationFrame(frame);
    }
    fetch("/api/auth/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken, expiresIn })
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Unable to complete verification.");
        window.location.replace(result.next || "/checkout");
      })
      .catch((err) => setMessage(err instanceof Error ? err.message : "Unable to complete verification."));
  }, []);

  return (
    <main className="auth-callback-page">
      <div className="brand-orb brand-orb-small"><Image src="/assets/vordali-logo-orb.webp" alt="Vordali" width={36} height={36} /></div>
      <p className="kicker">Secure verification</p>
      <h1>One moment.</h1>
      <p>{message}</p>
      <a className="button button-secondary" href="/login">Return to sign in</a>
    </main>
  );
}
