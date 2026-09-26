import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "MITZR | Explore. Discover. Give.",
  description: "MITZR turns real-world Blessing Box exploration into a community adventure with collectibles, rewards, customization, friends, and gifting."
};

export default function MitzrPage() {
  return (
    <PageShell>
      <main className="mitzr-page">
        <section className="mitzr-hero">
          <div className="mitzr-hero-art" aria-hidden="true"></div>
          <div className="mitzr-hero-shade" aria-hidden="true"></div>
          <div className="mitzr-hero-copy">
            <p className="mitzr-kicker"><span></span> MITZR by VORDALI</p>
            <h1>Explore your world.<br/><em>Leave it better.</em></h1>
            <p className="mitzr-lede">
              A real-world community adventure built around discovering Blessing Boxes,
              collecting unique finds, earning rewards, customizing your journey, and giving back.
            </p>
            <div className="mitzr-actions">
              <Link className="mitzr-button primary" href="/mitzr/support">Get MITZR Support</Link>
              <Link className="mitzr-button ghost" href="/mitzr/privacy">Privacy &amp; Safety</Link>
            </div>
          </div>
          <div className="mitzr-hero-stats" aria-label="MITZR highlights">
            <div><strong>REAL WORLD</strong><span>Location-based exploration</span></div>
            <div><strong>COLLECT</strong><span>Discover, gift &amp; grow</span></div>
            <div><strong>COMMUNITY</strong><span>Purpose built into play</span></div>
          </div>
        </section>

        <section className="mitzr-story">
          <div className="mitzr-story-heading">
            <p className="mitzr-kicker"><span></span> THE ADVENTURE</p>
            <h2>The map is real.<br/>The reason to explore is new.</h2>
            <p>MITZR layers a playful discovery experience over real community Blessing Boxes—turning everyday places into destinations worth finding, checking, sharing, and caring for.</p>
          </div>
          <div className="mitzr-feature-grid">
            <article><b>01</b><h3>Explore</h3><p>Move through a stylized live map, discover nearby Blessing Boxes, and see what is around you.</p></article>
            <article><b>02</b><h3>Discover</h3><p>Interact near real boxes, find collectible toys, report box conditions, and build your collection.</p></article>
            <article><b>03</b><h3>Progress</h3><p>Earn coins and XP through gameplay, level up, expand your backpack, and shape your own adventure.</p></article>
            <article><b>04</b><h3>Give</h3><p>Leave collectibles for other explorers or send gifts to accepted friends—without exposing your location.</p></article>
          </div>
        </section>

        <section className="mitzr-world-band">
          <div>
            <p className="mitzr-kicker"><span></span> BUILT DIFFERENT</p>
            <h2>A game with a useful world underneath it.</h2>
            <p>Customize your avatar. Build your garage. Collect rare finds. Connect with friends. MITZR makes exploration fun while keeping real community resources at the center of the experience.</p>
          </div>
          <div className="mitzr-world-orb" aria-hidden="true"><span>M</span><i></i></div>
        </section>

        <section className="mitzr-resources">
          <div className="mitzr-resources-head">
            <p className="mitzr-kicker"><span></span> PLAYER RESOURCES</p>
            <h2>Support, privacy &amp; account controls.</h2>
          </div>
          <div className="mitzr-resource-grid">
            <Link href="/mitzr/support"><span>SUPPORT</span><h3>Need a hand?</h3><p>Get help with MITZR, your account, gameplay, or community data.</p><b>Open support →</b></Link>
            <Link href="/mitzr/privacy"><span>PRIVACY</span><h3>Your data, clearly explained.</h3><p>See how MITZR handles account information, location, activity, and cloud progress.</p><b>Read privacy policy →</b></Link>
            <Link href="/mitzr/delete-account"><span>ACCOUNT</span><h3>You stay in control.</h3><p>Request deletion of your MITZR account and associated account-linked data.</p><b>Account deletion →</b></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
