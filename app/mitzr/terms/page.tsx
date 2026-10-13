import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { mitzrTerms } from "@/lib/mitzr-terms";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "MITZR Terms of Use",
  description: "MITZR's rules for safe exploration, community resources, accounts, purchases, virtual items, submissions, and dispute resolution.",
  alternates: { canonical: "/mitzr/terms" },
  openGraph: { title: "MITZR Terms of Use", url: "/mitzr/terms", description: "Read the terms for MITZR by VORDALI Inc." }
};

export default function MitzrTermsPage() {
  return (
    <PageShell>
      <main className={styles.page} id="terms-top">
        <header className={styles.hero}>
          <Link href="/mitzr" className={styles.back}>← Back to MITZR</Link>
          <p className={styles.eyebrow}>MITZR BY VORDALI · PLAYER RESOURCES</p>
          <h1>Terms of Use</h1>
          <p className={styles.lead}>The rules for exploring, sharing community information, and playing MITZR.</p>
          <p className={styles.version}>Effective <time dateTime={mitzrTerms.version}>{mitzrTerms.effective}</time> · Version {mitzrTerms.version}</p>
          <nav className={styles.links} aria-label="Related MITZR policies">
            <Link href="/mitzr/privacy">Privacy policy</Link>
            <Link href="/mitzr/support">Support &amp; reports</Link>
            <Link href="/mitzr/delete-account">Account deletion</Link>
            <a href="/mitzr/terms/download" download>Download text copy</a>
          </nav>
        </header>
        <aside className={styles.summary} aria-label="Important terms at a glance">
          <h2>Before you explore</h2>
          <ul>
            <li>Play safely. A pin never gives permission to enter property or use the app while driving.</li>
            <li>Community listings and help requests are not guarantees of safe goods, access, or assistance.</li>
            <li>Coins and collectibles are digital game features. Store policies and mandatory refund rights still apply.</li>
            <li>Minimum age: 13, or higher where required. Minors need a parent or guardian’s agreement.</li>
          </ul>
          <p>This summary is a guide. Read the full terms, including liability limits and your protected rights in sections 19–22. There is no mandatory arbitration or class-action waiver in this version.</p>
        </aside>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="Terms table of contents">
            <details open>
              <summary>On this page</summary>
              <ol>{mitzrTerms.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a></li>)}</ol>
            </details>
          </nav>
          <article className={styles.content} aria-label="Full MITZR Terms of Use">
            {mitzrTerms.sections.map(section => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </section>
            ))}
            <p className={styles.end}><a href="mailto:support@vordali.com">support@vordali.com</a> · <a href="#terms-top">Back to top ↑</a></p>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
