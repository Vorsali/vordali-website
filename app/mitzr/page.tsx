import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "MITZR",
  description: "Privacy, support, and account-management resources for MITZR by VORDALI."
};

export default function MitzrPage() {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">MITZR by VORDALI</p>
          <h1>Community, mapped with purpose.</h1>
          <p>
            MITZR is VORDALI&apos;s location-aware community app for discovering and
            interacting with real-world community resources. This page is the
            public home for MITZR support, privacy, and account-management resources.
          </p>
          <Link className="button primary" href="/mitzr/support">MITZR Support</Link>
        </section>

        <div className="policy-layout">
          <aside>
            <p>MITZR resources</p>
            <Link href="/mitzr/privacy">Privacy Policy</Link>
            <Link href="/mitzr/delete-account">Delete an account</Link>
            <Link href="/mitzr/support">Support</Link>
          </aside>

          <article className="policy-content">
            <section>
              <h2>Privacy</h2>
              <p>
                Read how MITZR handles account information, precise location,
                community activity, and cloud-saved game progress.
              </p>
              <p><Link href="/mitzr/privacy">Read the MITZR Privacy Policy →</Link></p>
            </section>

            <section>
              <h2>Account deletion</h2>
              <p>
                MITZR users can request deletion of their account and associated
                account-linked data through VORDALI&apos;s dedicated deletion page.
              </p>
              <p><Link href="/mitzr/delete-account">Request account deletion →</Link></p>
            </section>

            <section>
              <h2>Support</h2>
              <p>
                For app, account, privacy, or community-data questions, visit the
                MITZR support page or email support@vordali.com.
              </p>
              <p><Link href="/mitzr/support">Open MITZR Support →</Link></p>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
