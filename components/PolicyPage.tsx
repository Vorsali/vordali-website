import Link from "next/link";
import { PageShell } from "./PageShell";
import type { Policy } from "@/lib/policies";

export function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">{policy.eyebrow}</p>
          <h1>{policy.title}</h1>
          <p>{policy.summary}</p>
          <span>Effective {policy.effective}</span>
        </section>
        <div className="policy-layout">
          <aside>
            <p>On this page</p>
            {policy.sections.map((section, index) => <a href={`#s${index + 1}`} key={section.title}>{section.title}</a>)}
            <Link href="/trust">← Trust Center</Link>
          </aside>
          <article className="policy-content">
            {policy.sections.map((section, index) => <section id={`s${index + 1}`} key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
          </article>
        </div>
      </main>
    </PageShell>
  );
}
