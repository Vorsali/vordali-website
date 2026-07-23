import { PageShell } from "@/components/PageShell";
import { RoiCalculator } from "@/components/RoiCalculator";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <PageShell>
      <main className="platform-page">
        <section className="platform-hero">
          <p className="kicker">Commit Pricing</p>
          <h1>Protect more revenue<br /><em>than the plan costs.</em></h1>
          <p>Simple business-level pricing. Start focused and move up when additional insight creates value.</p>
        </section>
        <section className="pricing-page-grid">
          <article className="pricing-card">
            <span>Starter</span><h2>$39.99<small>/month</small></h2>
            <p>For independent businesses that need fast, secure text-to-pay.</p>
            <ul><li>Secure payment requests</li><li>Transactional SMS delivery</li><li>Stripe Connect payments</li><li>Live payment status</li><li>Search and basic dashboard</li><li>Payment receipts and history</li></ul>
            <a className="button button-secondary" href="/register?plan=starter">Choose Starter</a>
          </article>
          <article className="pricing-card featured">
            <div className="pricing-ribbon">Recommended</div>
            <span>Pro</span><h2>$69.99<small>/month</small></h2>
            <p>For businesses that want Commit to prove and improve its own value.</p>
            <ul><li>Everything in Starter</li><li>Revenue Protected™ analytics</li><li>Beacon™ operational visibility</li><li>Pulse™ performance insights</li><li>Advanced reports and trends</li><li>Custom business branding</li><li>Priority support and releases</li></ul>
            <a className="button button-primary" href="/register?plan=pro">Choose Pro <span>→</span></a>
          </article>
          <article className="pricing-card">
            <span>Enterprise</span><h2>Contact<small> for pricing</small></h2>
            <p>For groups, chains, franchises, and businesses requiring custom deployment.</p>
            <ul><li>Everything in Pro</li><li>Multiple locations</li><li>Consolidated reporting</li><li>API and custom integrations</li><li>Dedicated onboarding</li><li>Custom controls and support</li></ul>
            <a className="button button-secondary" href="mailto:hello@vordali.com?subject=Vordali%20Enterprise">Contact Sales</a>
          </article>
        </section>
        <section className="roi-calculator-section" id="roi-calculator">
          <div className="roi-calculator-copy"><p className="kicker">ROI calculator</p><h2>How much revenue is currently exposed?</h2><p>This estimate turns order volume, average value, and no-show risk into a simple annual opportunity. It is a planning estimate, not a guarantee.</p></div>
          <RoiCalculator />
        </section>
        <section className="pricing-foundation">
          <p className="kicker">Subscription foundation</p><h2>Built for a clean path from trial to paid access.</h2>
          <div>
            <article><strong>Plan-aware access</strong><p>Starter, Pro, and Enterprise feature flags are represented in the database foundation.</p></article>
            <article><strong>Stripe Billing ready</strong><p>Subscription records, billing status, trial dates, and provider IDs have a place before checkout is wired.</p></article>
            <article><strong>Easy evolution</strong><p>Features can move between plans as real customers teach us what creates the most value.</p></article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
