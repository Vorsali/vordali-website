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
            <a href="#location">Location and mapping</a>
            <a href="#community">Community activity</a>
            <a href="#gameplay">Gameplay and local data</a>
            <a href="#purchases">Purchases and SDK data</a>
            <a href="#technical">Technical information</a>
            <a href="#use">How we use information</a>
            <a href="#providers">Service providers</a>
            <a href="#retention">Retention</a>
            <a href="#security">Security</a>
            <a href="#choices">Your choices</a>
            <a href="#deletion">Account deletion</a>
            <a href="#not-collected">Data not used by the current release</a>
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
                mobile application and the account, mapping, community, gameplay,
                and cloud services used by that application. It does not replace the
                separate privacy terms for other VORDALI products.
              </p>
            </section>

            <section id="account">
              <h2>Account information</h2>
              <p>
                MITZR can be used in guest mode or with an account. If you create or
                sign in to an account, we process your email address, a Supabase user
                identifier, authentication credentials, and authentication session
                information. Authentication is provided through Supabase.
              </p>
              <p>
                MITZR does not save your password in PlayerPrefs or in MITZR&apos;s
                first-party application tables. Access and refresh tokens are kept in
                memory for the active session and are not intentionally written to
                PlayerPrefs.
              </p>
            </section>

            <section id="location">
              <h2>Location and mapping</h2>
              <p>
                MITZR requests precise device location and uses latitude, longitude,
                accuracy, timestamp, speed, and heading information in memory to
                place you on the map, show nearby community resources, orient the
                map, calculate distance, and verify that certain real-world
                interactions occur near a selected location.
              </p>
              <p>
                When a signed-in user performs a proximity-gated action such as a
                discovery, gift deposit or claim, or community condition report,
                MITZR sends the current coordinates and accuracy to the backend for
                validation. The currently deployed core box-action backend validates
                those coordinates without storing them as a continuous GPS history.
              </p>
              <p>
                If you voluntarily submit a new community location, the submission
                may include the location name, address or landmark, city, region,
                postal code, country, notes, exact coordinates, GPS accuracy and
                source, request identifier, and timestamp. That submission data is
                designed to be stored privately for moderation before any approved
                location is added to the public community directory.
              </p>
              <p>
                MITZR uses Mapbox for mapping. Mapbox telemetry is enabled by default
                in the current integration and may transmit de-identified location,
                map usage, and SDK usage information to Mapbox. MITZR includes the
                Mapbox telemetry control so users can opt out of future Mapbox
                telemetry collection.
              </p>
            </section>

            <section id="community">
              <h2>Community activity and user-provided content</h2>
              <p>
                Signed-in users may submit condition selections such as stocked,
                low, empty, or damaged, along with an optional short note. These
                reports are associated with the account in the private backend for
                integrity, rate limiting, and abuse prevention, and the resulting
                condition or note may update the public community location record.
              </p>
              <p>
                MITZR also records signed-in visits, discoveries, request
                identifiers, gift deposits and claims, collectible ownership,
                journey events, and timestamps needed for cooldowns, retry
                protection, inventory, rewards, and shared collectible gameplay.
              </p>
            </section>

            <section id="gameplay">
              <h2>Gameplay progress and local data</h2>
              <p>
                For signed-in users, MITZR may store account-linked cloud data such
                as collection and inventory records, collectible ownership and
                transfers, journey events, visits, request identifiers, virtual coin
                balances, backpack capacity, reward ledger entries, owned cosmetics,
                vehicles and avatar items, and server-side entitlement state.
              </p>
              <p>
                Some appearance and loadout choices are stored only on the device in
                Unity PlayerPrefs, including avatar presentation and customization
                choices and selected vehicle or modification choices. These local
                preferences can be keyed by the signed-in account identifier.
              </p>
              <p>
                Guest-mode progress is not merged into a cloud account. Guest economy
                state can be stored locally on the device in PlayerPrefs, while some
                guest collectible inventory exists only for the current session.
              </p>
            </section>

            <section id="purchases">
              <h2>Purchases and SDK data</h2>
              <p>
                MITZR uses Google Play Billing through Unity IAP for in-app
                purchases. MITZR may process product identifiers, purchase or
                transaction tokens, Unity receipts, store environment information,
                and purchase-verification results. Purchase verification may involve
                Supabase backend services and Google Play. MITZR does not receive
                your payment-card or bank-account numbers.
              </p>
              <p>
                The Unity IAP SDK also declares collection of technical and
                transaction-related data needed to operate the store and its SDK,
                including player or installation identifiers, device information,
                session identifiers, country or approximate location, purchase
                history, crash logs, diagnostics, performance data, and other device
                identifiers. Unity&apos;s own processing and retention practices are
                governed by Unity&apos;s applicable privacy terms.
              </p>
            </section>

            <section id="technical">
              <h2>Technical and network information</h2>
              <p>
                MITZR and the services it relies on may process ordinary technical
                information needed to operate a connected mobile application, such
                as IP address, request timing, app or device platform information,
                network errors, diagnostics, and service logs. Map requests may also
                include map coordinates or tile identifiers and related Mapbox usage
                tokens needed to render and account for map service usage.
              </p>
              <p>
                First-party Unity runtime logs may contain operational details such
                as SDK failures, box identifiers, collectible names or rarity,
                counts, GPS accuracy, and error messages. The current code review did
                not identify first-party logging of raw coordinates, email
                addresses, passwords, bearer tokens, or raw purchase receipts.
              </p>
            </section>

            <section id="use">
              <h2>How we use information</h2>
              <p>
                We use information to authenticate accounts; provide maps and nearby
                resources; validate real-world proximity; review submitted community
                locations; save collections and account progress; operate community
                reports and shared-gift features; maintain the virtual economy;
                verify purchases; prevent duplicate, replayed, or fraudulent
                actions; troubleshoot and secure the service; respond to support and
                privacy requests; and comply with applicable law.
              </p>
            </section>

            <section id="providers">
              <h2>Service providers and disclosures</h2>
              <p>
                MITZR relies on service providers that process information for us,
                including Supabase for authentication and cloud application data,
                Mapbox for mapping and map telemetry, Unity IAP for in-app purchase
                functionality and SDK telemetry, and Google Play for billing and
                related Android platform services.
              </p>
              <p>
                We may disclose information when required by law, to protect users
                or the service, or in connection with a business transaction. We do
                not sell MITZR users&apos; personal information, and the current MITZR
                release does not include an advertising or rewarded-ad SDK.
              </p>
            </section>

            <section id="retention">
              <h2>Data retention</h2>
              <p>
                Account-linked gameplay, community, integrity, and purchase records
                may be retained while reasonably needed to provide MITZR, maintain
                accurate account and transaction state, prevent fraud or replay,
                protect the service, and meet legal obligations. MITZR does not
                currently publish a single fixed retention period for every backend
                record or for data retained independently by Supabase, Mapbox, Unity,
                or Google.
              </p>
              <p>
                If you submit a verified deletion request, we will delete or
                de-identify account-linked information that is not reasonably
                required for security, legal compliance, dispute resolution,
                financial recordkeeping, fraud prevention, or another permitted
                purpose. Limited data may remain temporarily in protected backups or
                provider logs before normal expiration.
              </p>
            </section>

            <section id="security">
              <h2>Security</h2>
              <p>
                MITZR uses authenticated access for account features and HTTPS/TLS
                when communicating with configured cloud and platform services.
                Access to application data is restricted through backend
                authorization controls. Some local preferences are stored in
                PlayerPrefs and should not be treated as encrypted secure storage.
                No online service can guarantee absolute security.
              </p>
            </section>

            <section id="choices">
              <h2>Your choices</h2>
              <p>
                Android lets you control MITZR&apos;s location permission. If precise
                location is unavailable, features that depend on your current
                position or verified proximity may not work. You may choose guest
                mode instead of creating an account, although guest progress is not
                cloud-saved.
              </p>
              <p>
                The current Mapbox integration includes a telemetry control that can
                stop future Mapbox telemetry collection. Clearing app data or
                uninstalling MITZR removes local PlayerPrefs and locally managed app
                cache, subject to normal Android behavior. These local actions do not
                by themselves delete cloud account records or data held by external
                providers.
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
                community directory, and some transaction, security, or legal
                records may be retained where permitted or required.
              </p>
              <p><Link href="/mitzr/delete-account">Request MITZR account deletion →</Link></p>
            </section>

            <section id="not-collected">
              <h2>Data not used by the current release</h2>
              <p>
                The current MITZR code review found no runtime collection of photos,
                videos, microphone audio, user files or documents, and no
                notification-token implementation. It also found no advertising SDK,
                rewarded-ad implementation, or Android advertising-ID permission.
                Planned features such as teams or circles, SOS or emergency data,
                and cash donations or withdrawals are not implemented in the current
                release.
              </p>
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
