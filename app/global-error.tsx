"use client";

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
            <a className="button button-secondary" href="/">Return home</a>
          </div>
        </main>
      </body>
    </html>
  );
}
