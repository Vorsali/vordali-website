"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page status-page-standalone">
      <p className="kicker">Something went wrong</p>
      <h1>We could not load this page.</h1>
      <p>Please try again. If the problem continues, return to the Vordali homepage.</p>
      <div className="status-actions">
        <button className="button button-primary" onClick={reset}>Try again <span>→</span></button>
        <a className="button button-secondary" href="/">Return home</a>
      </div>
    </main>
  );
}
