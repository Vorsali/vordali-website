import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Why Vordali" };

export default function WhyVordaliPage() {
  return (
    <PageShell>
      <main className="manifesto-page">
        <section className="manifesto-hero">
          <p className="kicker">Why Vordali exists</p>
          <h1>Businesses do not need more software.<br /><em>They need fewer problems.</em></h1>
        </section>
        <section className="manifesto-copy">
          <p className="lead">Every day, businesses lose time, money, customers, and confidence because important work depends on friction, memory, disconnected systems, or uncertain commitment.</p>
          <p>Vordali builds focused software around those measurable problems.</p>
          <blockquote>We do not build software because we can. We build software because businesses need it.</blockquote>
          <div className="manifesto-rules">
            <article><span>01</span><h2>If the problem is not painful, we do not build it.</h2></article>
            <article><span>02</span><h2>If the value cannot be measured, we question it.</h2></article>
            <article><span>03</span><h2>If simplicity is lost, we redesign it.</h2></article>
            <article><span>04</span><h2>If it forces businesses to replace everything, it probably does not fit.</h2></article>
            <article><span>05</span><h2>If customers reveal a better solution, the product evolves.</h2></article>
          </div>
          <div className="vordali-promise">
            <p className="kicker">The Vordali promise</p>
            <h2>Every product must save time, reduce mistakes, protect revenue, or clearly earn its place.</h2>
            <Link className="button button-primary" href="/labs#submit-problem">Tell us what to solve next <span>→</span></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
