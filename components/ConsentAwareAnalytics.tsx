"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

const STORAGE_KEY = "vordali-cookie-consent";

type ConsentChoice = "accepted" | "rejected" | null;

export function ConsentAwareAnalytics() {
  const [choice, setChoice] = useState<ConsentChoice>(null);

  useEffect(() => {
    const readChoice = () => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        setChoice(stored === "accepted" || stored === "rejected" ? stored : null);
      } catch {
        setChoice(null);
      }
    };

    const onConsent = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setChoice(customEvent.detail === "accepted" ? "accepted" : "rejected");
    };

    readChoice();
    window.addEventListener("vordali-cookie-consent", onConsent);
    window.addEventListener("storage", readChoice);

    return () => {
      window.removeEventListener("vordali-cookie-consent", onConsent);
      window.removeEventListener("storage", readChoice);
    };
  }, []);

  if (choice !== "accepted") return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
