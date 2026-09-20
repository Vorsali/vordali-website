"use client";

import { useEffect } from "react";

const trackingParameters = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content"
];

export function CleanMitzrUrl() {
  useEffect(() => {
    const url = new URL(window.location.href);
    let changed = false;

    for (const parameter of trackingParameters) {
      if (url.searchParams.has(parameter)) {
        url.searchParams.delete(parameter);
        changed = true;
      }
    }

    if (!changed) return;

    const cleanUrl =
      url.pathname +
      (url.searchParams.size ? `?${url.searchParams.toString()}` : "") +
      url.hash;

    window.history.replaceState(window.history.state, "", cleanUrl);
  }, []);

  return null;
}
