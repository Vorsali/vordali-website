import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import IndustrialRecoveryVessel from "@/components/IndustrialRecoveryVessel";

export default function HomePage() {
  return (
    <PageShell>
      <main className="company-home">
        <section className="company-hero">
          <div className="company-hero-grid" aria-hidden="true"></div>
          <div className="company-hero-orb company-orb-one" aria-hidden="true"></div>
          <div className="company-hero-orb company-orb-two" aria-hidden="true"></div>
          <div className="company-hero-content">
            <p className="company-kicker">Focused systems · Measurable recovery</p>
            <h1>We build systems that recover <em>what businesses lose.</em></h1>
            <p>
              Vordali creates focused software products that eliminate operational friction,
              recover measurable value, and simplify the moments where businesses lose time,
              revenue, and opportunity.
            </p>
            <div className="company-hero-actions">
              <a className="button button-primary" href="#products">Explore Products <span>→</span></a>
              <Link className="button button-secondary" href="/why-vordali">Our Story</Link>
            </div>
            <div className="company-principles">
              <span><b>Problem first</b><small>Built around real operational pain</small></span>
              <span><b>Focused by design</b><small>One product, one measurable purpose</small></span>
              <span><b>Value made visible</b><small>Recovery you can understand</small></span>
            </div>
          </div>
        </section>

        <section className="company-tank-section">
          <div className="company-tank-copy">
            <p className="company-kicker">Signature Vordali technology</p>
            <h2>The Vordali Recovery Tank™</h2>
            <p>
              Every Vordali product exists to recover measurable value. The Recovery Tank turns
              that value into one recognizable visual language—revenue protected, time restored,
              opportunities recovered, and waste removed.
            </p>
            <div className="company-tank-metrics">
              <span><b>Revenue</b><small>Protected before it disappears</small></span>
              <span><b>Time</b><small>Returned to the operation</small></span>
              <span><b>Opportunity</b><small>Recovered before it is forgotten</small></span>
            </div>
            <p className="company-tank-note">One signature system. Different recovery metrics. Every Vordali product contributes.</p>
          </div>
          <div className="company-tank-machine">
            <div className="company-machine-plate">
              <span>VORDALI</span>
              <strong>RECOVERY TANK™</strong>
              <small>RT-100 · RECOVERY ENGINE CONNECTED</small>
            </div>
            <IndustrialRecoveryVessel
              recovered={18420}
              progress={72}
              paidCount={218}
              pending={4}
            />
          </div>
        </section>

        <section className="company-products-section" id="products">
          <div className="company-section-heading">
            <p className="company-kicker">The Vordali portfolio</p>
            <h2>Focused products. Shared purpose.</h2>
            <p>Each product earns its place by solving one painful, measurable business problem exceptionally well.</p>
          </div>
          <div className="company-product-grid">
            <a className="company-product-card company-product-live" href="https://commit.vordali.com">
              <div><span>LIVE</span><i>01</i></div>
              <h3>Commit™</h3>
              <strong>Secure text-to-pay</strong>
              <p>Recover revenue before work begins by turning verbal intent into verified payment.</p>
              <b>Explore Commit <em>→</em></b>
            </a>
            <Link className="company-product-card" href="/labs?product=approve">
              <div><span>RESEARCH</span><i>02</i></div>
              <h3>Approve™</h3>
              <strong>Track important customer decisions</strong>
              <p>Turn verbal approval into a clear, accountable decision before custom work begins.</p>
              <b>Join research <em>→</em></b>
            </Link>
            <Link className="company-product-card" href="/labs?product=follow">
              <div><span>RESEARCH</span><i>03</i></div>
              <h3>Follow™</h3>
              <strong>Make the next action happen</strong>
              <p>Recover opportunities that disappear when follow-up depends on memory.</p>
              <b>Join research <em>→</em></b>
            </Link>
            <Link className="company-product-card" href="/labs?product=verify">
              <div><span>RESEARCH</span><i>04</i></div>
              <h3>Verify™</h3>
              <strong>Reduce risk before commitment</strong>
              <p>Help businesses recognize costly uncertainty before expensive work begins.</p>
              <b>Join research <em>→</em></b>
            </Link>
          </div>
        </section>

        <section className="company-belief-section">
          <div>
            <p className="company-kicker">Why Vordali exists</p>
            <h2>Businesses do not need more software. They need fewer problems.</h2>
          </div>
          <div className="company-belief-copy">
            <p>
              Vordali does not begin with a feature list. We begin with the repeated moments that
              cost businesses money, time, customers, or confidence.
            </p>
            <blockquote>We do not build software because we can. We build it because the problem has earned a solution.</blockquote>
            <Link href="/why-vordali">Read the Vordali philosophy →</Link>
          </div>
        </section>

        <section className="company-labs-section">
          <div>
            <p className="company-kicker">Vordali Labs</p>
            <h2>The market helps decide what we solve next.</h2>
            <p>
              Labs collects business pain—not feature requests. Repeated, measurable problems become product research.
            </p>
            <Link className="button button-primary" href="/labs">Enter Vordali Labs <span>→</span></Link>
          </div>
          <div className="company-labs-console">
            <span>RESEARCH INTAKE</span>
            <div><b>Approve™</b><small>Customer decision friction</small><i>ACTIVE</i></div>
            <div><b>Follow™</b><small>Lost follow-up opportunities</small><i>ACTIVE</i></div>
            <div><b>Verify™</b><small>Costly identity uncertainty</small><i>ACTIVE</i></div>
            <footer>What is costing your business time or money?</footer>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
