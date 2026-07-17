import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <main className="status-page">
        <p className="kicker">404 — Page not found</p>
        <h1>This route does not exist.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <div className="status-actions">
          <Link className="button button-primary" href="/">Return home <span>→</span></Link>
          <Link className="button button-secondary" href="/products">Explore products</Link>
        </div>
      </main>
    </PageShell>
  );
}
