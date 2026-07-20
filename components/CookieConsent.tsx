"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected";
const STORAGE_KEY = "vordali-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(!window.localStorage.getItem(STORAGE_KEY));
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(choice: ConsentChoice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
      window.dispatchEvent(new CustomEvent("vordali-cookie-consent", { detail: choice }));
    } finally {
      setVisible(false);
    }
  }

  if (!visible) return null;

  return (
    <section className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <div className="cookie-consent-copy">
        <strong>Cookie preferences</strong>
        <p>
          Vordali Inc. uses essential cookies to keep the site secure and working. With your permission,
          optional analytics cookies help us improve performance and usability. Read our <Link href="/cookies">Cookie Policy</Link>.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button className="button button-secondary" type="button" onClick={() => choose("rejected")}>Reject optional</button>
        <button className="button button-primary" type="button" onClick={() => choose("accepted")}>Accept</button>
      </div>
    </section>
  );
}
