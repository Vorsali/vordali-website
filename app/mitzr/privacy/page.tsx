import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "MITZR Privacy Policy",
  description: "How VORDALI Inc. handles information in the MITZR mobile application."
};

const effective = "September 20, 2026";

export default function MitzrPrivacyPage() {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">MITZR by VORDALI</p>
          <h1>Privacy Policy</h1>
          <p>
            How VORDALI Inc. collects, uses, protects, and discloses information
            when you use the MITZR mobile application.
          </p>
          <span>Effective {effective}</span>
        </section>

        <div className="policy-layout">
          <aside>
            <p>On this page</p>
            <a href="#scope">Scope</a>
            <a href="#account">Account information</a>
            <a href="#location">Precise location</a>
            <a href="#community">Community activity</a>
            <a href="#gameplay">Gameplay and virtual items</a>
            <a href="#technical">Technical information</a>
            <a href="#use">How we use information</a>
            <a href="#providers">Service providers</a>
            <a href="#retention">Retention</a>
            <a href="#security">Security</a>
            <a href="#choices">Your choices</a>
            <a href="#deletion">Account deletion</a>
            <a href="#children">Children&apos;s privacy</a>
            <a href="#changes">Changes</a>
            <a href="#contact">Contact</a>
            <Link href="/mitzr">← MITZR</Link>
          </aside>

          <article className="policy-content">
            <section id="scope">
              <h2>Scope</h2>
              <p>
                VORDALI Inc. (&quot;VORDALI,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates MITZR. This policy applies to the MITZR
                mobile application and the account, mapping, community, and cloud
                services used by that application. It does not replace the separate
                privacy terms for other VORDALI products.
              </p>
            </section>

            <section id="account">
              <h2>Account information</h2>
              <p>
                MITZR can be used in guest mode or with an account. If you create or
                sign in to an account, we process your email address, an internal
                account identifier, authentication credentials, and authentication
                session information. Authentication is provided through Supabase.
                MITZR does not save your password in the app&apos;s local preference
                storage, and the current app keeps authentication tokens in memory
                for the active session.
              </p>
            </section>

            <section id="location">
              <h2>Precise location and direction</h2>
              <p>
                MITZR uses precise device location and location accuracy to place
                you on the map, show nearby community resources, calculate distance,
                and verify that certain real-world interactions occur near the
                selected location. The app also reads compass or movement heading
                information to orient the map experience.
              </p>
              <p>
                When a signed-in user performs a proximity-gated action such as
                discovering an item, leaving or collecting a shared gift, or
                submitting a community condition report, MITZR sends the current
                latitude, longitude, and reported accuracy to the backend so the
                server can verify proximity. The current MITZR backend uses those
                submitted coordinates for validation and does not write them into
                the app&apos;s user activity tables as a continuous location history.
              </p>
            </section>

            <section id="community">
              <h2>Community activity and user-provided content</h2>
              <p>
                Signed-in users may submit activity associated with a community
                location, including condition selections, short notes, gift
                deposits or claims, and related interaction identifiers. A submitted
                condition and note may update the community location&apos;s current
                status or notes shown to other MITZR users. Private backend records
                may also associate the submission with the account for security,
                rate limiting, integrity, and abuse prevention.
              </p>
            </section>

            <section id="gameplay">
              <h2>Gameplay progress and virtual items</h2>
              <p>
                For signed-in users, MITZR may store cloud-saved collection and
                gameplay information such as discovered virtual items, item
                ownership and transfers, journey events, visits, request identifiers,
                virtual coin balances, backpack capacity, owned cosmetics or
                vehicles, equipped items, and related account progress. Guest-mode
                progress is designed to remain local to the current app session and
                is not merged into a cloud account.
              </p>
            </section>

            <section id="technical">
              <h2>Technical and network information</h2>
              <p>
                MITZR and the services it relies on may process ordinary technical
                information needed to operate a connected mobile application, such
                as IP address, request timing, app or device platform information,
                network errors, and service logs. Map requests also include the map
                information needed to provide the requested map area. The current
                MITZR release does not use personal information for behavioral
                advertising.
              </p>
            </section>

            <section id="use">
              <h2>How we use information</h2>
              <p>
                We use information to authenticate accounts; provide maps and nearby
                resources; validate real-world proximity; save collections and
                account progress; operate community reports and shared-gift
                features; maintain the virtual economy; prevent duplicate or
                fraudulent actions; troubleshoot and secure the service; respond to
                support and privacy requests; and comply with applicable law.
              </p>
            </section>

            <section id="providers">
              <h2>Service providers and disclosures</h2>
              <p>
                MITZR relies on service providers that process information for us,
                including Supabase for authentication and cloud data services and
                Mapbox for mapping. Android and Google platform services may also
                support device location and networking. We may disclose information
                when required by law, to protect users or the service, or in
                connection with a business transaction. We do not sell MITZR users&apos;
                personal information.
              </p>
            </section>

            <section id="retention">
              <h2>Data retention</h2>
              <p>
                Account-linked gameplay and community-integrity records are retained
                while reasonably needed to provide MITZR, protect the service, and
                maintain accurate account state. If you submit a verified deletion
                request, we will delete or de-identify account-linked information
                that is not reasonably required for security, legal compliance,
                dispute resolution, or another permitted purpose. Limited data may
                remain temporarily in protected backups or service logs before
                normal expiration.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                MITZR uses authenticated access for account features and encrypted
                network connections when communicating with configured cloud
                services. Access to application data is restricted through backend
                authorization controls. No online service can guarantee absolute
                security.
              </p>
            </section>

            <section id="choices">
              <h2>Your choices</h2>
              <p>
                Android lets you control MITZR&apos;s location permission. If precise
                location is unavailable, features that depend on your current
                position or verified proximity may not work. You may choose guest
                mode instead of creating an account, although guest progress is not
                cloud-saved. You may contact us to ask about access, correction, or
                deletion of account-linked personal information.
              </p>
            </section>

            <section id="deletion">
              <h2>Account and data deletion</h2>
              <p>
                You can request deletion of a MITZR account and associated
                account-linked data at our dedicated deletion page. We will verify
                account ownership before processing a request. Public community
                status information that no longer identifies the reporting account
                may be retained where needed to preserve the integrity of the
                community directory.
              </p>
              <p><Link href="/mitzr/delete-account">Request MITZR account deletion →</Link></p>
            </section>

            <section id="children">
              <h2>Children&apos;s privacy</h2>
              <p>
                We do not knowingly collect personal information from a child in a
                manner that violates applicable law. A parent or guardian who
                believes a child has provided personal information to MITZR may
                contact us so we can review and take appropriate action.
              </p>
            </section>

            <section id="changes">
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy as MITZR features, service providers, or
                legal requirements change. We will post the revised policy at this
                URL and update the effective date. Material changes may also be
                communicated in the app or by another appropriate method.
              </p>
            </section>

            <section id="contact">
              <h2>Contact us</h2>
              <p>
                For MITZR privacy questions or requests, email
                {" "}<a href="mailto:support@vordali.com">support@vordali.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
