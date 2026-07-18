import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { RecoveryHero } from "@/components/RecoveryHero";

export default function HomePage() {
  return (
    <PageShell>
      <main className="home-main">
        <RecoveryHero />

        <section className="problem-strip">
          <div className="problem-strip-inner">
            <p className="kicker">The Vordali question</p>
            <h2>What problem is costing your business money today?</h2>
            <p>We do not start with features. We start with measurable pain—and build the simplest system that removes it.</p>
            <div>
              <Link className="button button-primary" href="/labs#submit-problem">Submit a Problem <span>→</span></Link>
              <Link className="button button-secondary" href="/products">Explore Products</Link>
            </div>
          </div>
        </section>

        <section className="section intro" id="platform">
          <div className="section-heading">
            <p className="kicker">The parent company</p>
            <h2>Focused products.<br />Shared philosophy.</h2>
            <p>Vordali creates separate, focused systems under one trusted company. Each product must solve one measurable operational problem exceptionally well.</p>
          </div>
          <div className="platform-grid">
            <article className="feature-card feature-card-large">
              <div className="card-topline"><span className="status-dot"></span> Flagship product</div>
              <div className="dashboard-preview">
                <div className="dashboard-sidebar"><div className="mini-logo">V</div><span className="active"></span><span></span><span></span><span></span></div>
                <div className="dashboard-main">
                  <div className="dashboard-head"><div><small>Vordali Commit</small><strong>Revenue commitment at a glance.</strong></div></div>
                  <div className="metric-row">
                    <div><small>Revenue protected</small><strong>$684</strong><span className="metric-up">Today</span></div>
                    <div><small>Paid requests</small><strong>18</strong><span>Verified</span></div>
                    <div><small>Collection rate</small><strong>96%</strong><span className="metric-up">Improved</span></div>
                  </div>
                </div>
              </div>
              <div className="card-copy"><h3>Commit makes uncertainty measurable.</h3><p>Secure payment before costly preparation or work begins, then show the business what was protected.</p></div>
            </article>
            <article className="feature-card"><div className="icon-shell">◎</div><h3>Problem first</h3><p>Every product begins with a painful, repeated operational problem—not a feature wishlist.</p></article>
            <article className="feature-card"><div className="icon-shell">✦</div><h3>ROI visible</h3><p>Products should make the saved time, protected revenue, or reduced mistakes understandable.</p></article>
          </div>
        </section>

        <section className="section commit-section" id="commit">
          <div className="commit-panel">
            <div className="commit-copy">
              <p className="kicker">Now live</p>
              <h2>Meet Vordali Commit.</h2>
              <p>Secure customer commitment before work begins. Create a Secure Order, send a customer payment link, and wait for verified payment before preparing the order or doing the work.</p>
              <div className="commit-points">
                <div><span>01</span><p><strong>Create a Secure Order</strong> with the customer, mobile number, and amount.</p></div>
                <div><span>02</span><p><strong>Send a secure payment link</strong> by transactional SMS.</p></div>
                <div><span>03</span><p><strong>Begin after confirmation</strong> when Stripe verifies payment.</p></div>
              </div>
              <div className="commit-actions">
                <a className="button button-primary" href="/login">Launch Commit <span>→</span></a>
                <Link className="button button-secondary" href="/pricing">View pricing</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section product-future-section">
          <div className="section-heading">
            <p className="kicker">A focused product company</p>
            <h2>Commit is live. The market helps decide what comes next.</h2>
            <p>Future products remain in research until enough businesses confirm the problem is painful, measurable, and worth solving.</p>
          </div>
          <div className="future-product-grid">
            <article className="future-product-card live"><span>Live</span><h3>Commit™</h3><p>Secure payment commitment before work begins.</p><a href="/login">Launch Commit →</a></article>
            <article className="future-product-card"><span>Research</span><h3>Approve™</h3><p>Track customer approval for estimates and scope changes.</p><Link href="/labs?product=approve">Join waitlist →</Link></article>
            <article className="future-product-card"><span>Research</span><h3>Follow™</h3><p>Make sure valuable follow-ups do not get lost.</p><Link href="/labs?product=follow">Join waitlist →</Link></article>
            <article className="future-product-card"><span>Research</span><h3>Verify™</h3><p>Reduce identity and transaction risk before work begins.</p><Link href="/labs?product=verify">Join waitlist →</Link></article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
