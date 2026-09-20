import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "MITZR Support",
  description: "Support, privacy, account, location, and community-data help for MITZR."
};

export default function MitzrSupportPage() {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">MITZR by VORDALI</p>
          <h1>Support</h1>
          <p>
            Get help with MITZR accounts, location access, community information,
            cloud progress, privacy requests, or account deletion.
          </p>
          <a className="button primary" href="mailto:support@vordali.com">
            Email support@vordali.com
          </a>
        </section>

        <div className="policy-layout">
          <aside>
            <p>On this page</p>
            <a href="#contact">Contact support</a>
            <a href="#account">Account help</a>
            <a href="#location">Location help</a>
            <a href="#community">Community information</a>
            <a href="#privacy">Privacy and deletion</a>
            <Link href="/mitzr/privacy">Privacy Policy</Link>
            <Link href="/mitzr/delete-account">Delete an account</Link>
            <Link href="/mitzr">← MITZR</Link>
          </aside>

          <article className="policy-content">
            <section id="contact">
              <h2>Contact support</h2>
              <p>
                Email <a href="mailto:support@vordali.com">support@vordali.com</a>
                {" "}for MITZR support. Include a short description of the problem,
                your device type, and the account email if the issue involves a
                signed-in account.
              </p>
              <p>
                Never email your password, authentication token, private API key, or
                payment-card information.
              </p>
            </section>

            <section id="account">
              <h2>Account help</h2>
              <p>
                MITZR supports guest play and email-based accounts. Signed-in
                accounts can restore cloud-saved progress. If sign-in, email
                confirmation, or cloud progress is not working, contact support from
                the account email when possible.
              </p>
            </section>

            <section id="location">
              <h2>Location help</h2>
              <p>
                MITZR uses precise location for map positioning and proximity-gated
                interactions. If the map cannot locate you, confirm that Android
                location services and MITZR&apos;s location permission are enabled and
                try again where the device has a clear GPS signal.
              </p>
            </section>

            <section id="community">
              <h2>Community information</h2>
              <p>
                MITZR community locations may include addresses, availability or
                condition information, and notes. If a location is missing,
                inaccurate, unsafe, or should be removed from the directory, email
                support with the location name and enough detail for us to review it.
              </p>
            </section>

            <section id="privacy">
              <h2>Privacy and account deletion</h2>
              <p>
                Read the <Link href="/mitzr/privacy">MITZR Privacy Policy</Link> for
                details about account, location, and gameplay information. To request
                account deletion, use the dedicated
                {" "}<Link href="/mitzr/delete-account">MITZR account deletion page</Link>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
