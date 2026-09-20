import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Delete a MITZR Account",
  description: "Request deletion of a MITZR account and associated account-linked data."
};

export default function MitzrDeleteAccountPage() {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">MITZR by VORDALI</p>
          <h1>Delete your MITZR account</h1>
          <p>
            Use this page to request deletion of your MITZR account and the
            account-linked personal data associated with it.
          </p>
          <a
            className="button primary"
            href="mailto:support@vordali.com?subject=MITZR%20account%20deletion%20request"
          >
            Request account deletion
          </a>
        </section>

        <div className="policy-layout">
          <aside>
            <p>Deletion guide</p>
            <a href="#request">How to request deletion</a>
            <a href="#deleted">What we delete</a>
            <a href="#retained">What may be retained</a>
            <a href="#guest">Guest mode</a>
            <a href="#partial">Delete specific data</a>
            <Link href="/mitzr/privacy">Privacy Policy</Link>
            <Link href="/mitzr">← MITZR</Link>
          </aside>

          <article className="policy-content">
            <section id="request">
              <h2>How to request deletion</h2>
              <p>
                Email <a href="mailto:support@vordali.com?subject=MITZR%20account%20deletion%20request">support@vordali.com</a>
                {" "}with the subject <strong>MITZR account deletion request</strong>.
                Send the request from the email address associated with your MITZR
                account when possible and include that account email in the message.
              </p>
              <p>
                Do not send your password, authentication tokens, payment-card
                information, or other sensitive credentials. We may ask for
                reasonable information needed to verify that you control the
                account before processing the request.
              </p>
            </section>

            <section id="deleted">
              <h2>What we delete</h2>
              <p>
                After verification, VORDALI will process deletion of the MITZR
                authentication account and account-linked application records that
                are no longer needed. Depending on the features you used, those
                records may include cloud-saved collection or inventory data,
                virtual-item ownership and transfers, journey and visit records,
                account-linked community report records, virtual coin and upgrade
                state, owned or equipped cosmetics or vehicles, and request records
                used to prevent duplicate actions.
              </p>
            </section>

            <section id="retained">
              <h2>What may be retained</h2>
              <p>
                We may retain limited information when reasonably necessary for
                security, fraud or abuse prevention, legal compliance, dispute
                resolution, or protected backup operation. A community location&apos;s
                current status or note may also remain after the account-linking
                portion of a report is deleted or de-identified when retaining that
                non-identifying community information is appropriate.
              </p>
            </section>

            <section id="guest">
              <h2>Guest mode</h2>
              <p>
                Guest mode does not create a MITZR cloud account. Guest collection
                progress is designed to stay in the current app session rather than
                being uploaded as account-owned progress. If you never created an
                account, there may be no MITZR authentication account to delete.
              </p>
            </section>

            <section id="partial">
              <h2>Request deletion of specific data</h2>
              <p>
                If you do not want to delete the entire account but want us to
                review deletion or correction of particular account-linked personal
                information, email <a href="mailto:support@vordali.com?subject=MITZR%20privacy%20request">support@vordali.com</a>
                {" "}with the subject <strong>MITZR privacy request</strong>.
              </p>
              <p>
                We will confirm the outcome of a verified deletion request using the
                contact information associated with the request.
              </p>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
