"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="status-page status-page-standalone">
          <p className="kicker">Vordali</p>
          <h1>An unexpected error occurred.</h1>
          <p>Please retry the page or return to the homepage.</p>
          <div className="status-actions">
            <button className="button button-primary" onClick={reset}>Try again <span>→</span></button>
            <Link className="button button-secondary" href="/">Return home</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
