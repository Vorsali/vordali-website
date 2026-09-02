import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Support",
  description: "Technical help, account assistance, privacy requests, and account deletion for Vordali Commit."
};

export default function SupportPage() {
  return (
    <PageShell>
      <main className="policy-shell">
        <section className="policy-hero">
          <p className="kicker">Vordali Commit</p>
          <h1>Support</h1>
          <p>Get technical help, account assistance, or help with a privacy or deletion request.</p>
          <a className="button primary" href="mailto:support@vordali.com">Email support@vordali.com</a>
        </section>

        <div className="policy-layout">
          <aside>
            <p>On this page</p>
            <a href="#contact">Contact support</a>
            <a href="#account-access">Account access</a>
            <a href="#payment-requests">Payment requests</a>
            <a href="#notifications">Notifications</a>
            <a href="#account-deletion">Account or data deletion</a>
            <a href="#customer-requests">Customer information requests</a>
            <Link href="/privacy">Read the Privacy Policy</Link>
          </aside>

          <article className="policy-content support-content">
            <section id="contact">
              <h2>Contact support</h2>
              <p>Email <a href="mailto:support@vordali.com">support@vordali.com</a> for technical help, account assistance, privacy questions, or deletion requests. Include your organization name, the email address used for your Vordali account, a brief description, and the approximate time the issue occurred. Screenshots should have customer names, telephone numbers, payment links, and other sensitive information removed.</p>
              <p className="support-warning">Never email passwords, full payment-card numbers, security codes, private API keys, or payment links.</p>
            </section>

            <section id="account-access">
              <h2>Account access</h2>
              <p>Vordali Commit requires an authorized merchant account. If your account is not connected to the correct organization or you cannot sign in, contact support from the email address associated with the account.</p>
            </section>

            <section id="payment-requests">
              <h2>Payment-request help</h2>
              <p>Before sending a transactional payment text, confirm that the customer agreed to receive it. If a request cannot be created or sent, verify your internet connection and retry once. Contact support if the issue continues. Vordali support will never ask for a customer&apos;s full payment-card number.</p>
            </section>

            <section id="notifications">
              <h2>Notifications</h2>
              <p>Payment notifications require Android notification permission and an active signed-in session. Notification permission can be changed in Android system settings. Sensitive notification content is hidden from the lock screen by default.</p>
            </section>

            <section id="account-deletion">
              <h2>Request account or data deletion</h2>
              <p>Email <a href="mailto:support@vordali.com?subject=Account%20deletion%20request">support@vordali.com</a> with the subject “Account deletion request.” Include the organization name and email address associated with the Vordali account. We will verify that you are authorized to make the request before processing it.</p>
              <p>After verification, we will close the account and delete or de-identify associated profile, device, and other account information when reasonably possible. Transaction, tax, accounting, fraud-prevention, audit, security, backup, or legal records may need to be retained. Transaction and accounting records may be retained for up to seven years when legally or operationally required. We will explain any required retention that applies to the request.</p>
            </section>

            <section id="customer-requests">
              <h2>Customer information requests</h2>
              <p>If you received a Vordali payment request from a business and have a question about the request or your information, contact the business that sent it. You may also email <a href="mailto:support@vordali.com">support@vordali.com</a> if you need help directing a privacy request.</p>
            </section>
          </article>
        </div>
      </main>
    </PageShell>
  );
}
