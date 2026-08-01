import { PageShell } from "@/components/PageShell";
import { RoiCalculator } from "@/components/RoiCalculator";

export const metadata = {
  title: "Pricing",
  description: "Simple monthly pricing for Vordali Commit secure text-to-pay software.",
  alternates: { canonical: "/pricing" }
};

const signupUrl = (plan: "starter" | "pro") =>
  `https://commit.vordali.com/login?mode=signup&plan=${plan}`;

export default function PricingPage() {
  return (
    <PageShell>
      <main className="platform-page">
        <section className="platform-hero">
          <p className="kicker">Commit Pricing</p>
          <h1>Protect more revenue<br /><em>than the plan costs.</em></h1>
          <p>Simple business-level pricing. Start focused and move up when deeper operational insight creates value.</p>
        </section>
        <section className="pricing-page-grid pricing-page-grid-two">
          <article className="pricing-card">
            <span>Starter</span><h2>$39.99<small>/month</small></h2>
            <p>For independent businesses that need fast, secure text-to-pay.</p>
            <ul><li>Secure payment requests</li><li>Transactional SMS delivery</li><li>Stripe Connect payments</li><li>Live payment status</li><li>Search and dashboard access</li><li>Payment receipts and history</li></ul>
            <a className="button button-secondary" href={signupUrl("starter")}>Choose Starter</a>
          </article>
          <article className="pricing-card featured">
            <div className="pricing-ribbon">Recommended</div>
            <span>Pro</span><h2>$69.99<small>/month</small></h2>
            <p>For businesses that want Commit to prove and improve its own value.</p>
            <ul><li>Everything in Starter</li><li>Revenue Protected™ analytics</li><li>Beacon™ operational visibility</li><li>Pulse™ performance insights</li><li>Advanced reports and trends</li><li>Custom business branding</li><li>Priority support and releases</li></ul>
            <a className="button button-primary" href={signupUrl("pro")}>Choose Pro <span>→</span></a>
          </article>
        </section>
        <section className="roi-calculator-section" id="roi-calculator">
          <div className="roi-calculator-copy"><p className="kicker">ROI calculator</p><h2>How much revenue is currently exposed?</h2><p>This estimate turns order volume, average value, and no-show risk into a simple annual opportunity. It is a planning estimate, not a guarantee.</p></div>
          <RoiCalculator />
        </section>
        <section className="pricing-foundation">
          <p className="kicker">Built for daily use</p><h2>One workspace from payment request to verified payment.</h2>
          <div>
            <article><strong>Live payment workflow</strong><p>Create secure requests, send transactional SMS links, and see verified payment status in one place.</p></article>
            <article><strong>Stripe-powered payments</strong><p>Businesses connect through Stripe for card processing, balances, and payouts without Vordali storing card or bank credentials.</p></article>
            <article><strong>Room to grow</strong><p>Start with the plan that fits today and move up as reporting, branding, and operational insight become more valuable.</p></article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
