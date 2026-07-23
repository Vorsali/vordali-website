import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "SMS Consent & Messaging Policy | Vordali",
  description: "How Vordali Commit obtains customer consent and delivers transactional SMS payment requests."
};

const steps = [
  ["01", "Customer starts a transaction", "The customer places an order, requests service, receives an invoice, or begins another legitimate transaction with a participating business."],
  ["02", "Customer requests SMS delivery", "The business asks whether the customer would like the secure payment link sent by text. The customer affirmatively requests delivery to their mobile number."],
  ["03", "Merchant enters the number", "The merchant enters the mobile number supplied by the customer into the Vordali Commit payment request form."],
  ["04", "Merchant records consent", "The merchant checks a required acknowledgment confirming that the customer requested the transactional SMS. The acknowledgment is unchecked by default."],
  ["05", "Commit sends the request", "Only after consent is recorded does Commit send the secure transactional payment request."],
];

export default function SmsConsentPage() {
  return <PageShell>
    <main className="sms-policy-page">
      <nav className="legal-center-nav"><span>Legal & Compliance Center</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link><Link className="active" href="/sms-consent">SMS Consent</Link></div></nav>
      <section className="sms-policy-hero">
        <p className="kicker">Vordali Commit · Transactional Messaging</p>
        <h1>SMS Consent &amp;<br/><em>Messaging Policy</em></h1>
        <p>Vordali Commit allows participating businesses to send secure transactional payment requests only after a customer specifically requests delivery by text message.</p>
        <div className="sms-policy-badges"><span><span aria-hidden="true">✓</span>Transactional only</span><span><span aria-hidden="true">✓</span>Customer requested</span><span><span aria-hidden="true">✉</span>STOP &amp; HELP supported</span></div>
      </section>

      <section className="sms-summary-grid">
        <article><span className="policy-icon" aria-hidden="true">✓</span><h2>Customer requested</h2><p>Messages are sent only after the customer asks for a transaction-related text.</p></article>
        <article><span className="policy-icon" aria-hidden="true">✉</span><h2>Transactional use</h2><p>Commit is limited to payment requests, confirmations, reminders, and related status updates.</p></article>
        <article><span className="policy-icon" aria-hidden="true">▣</span><h2>Merchant confirmation</h2><p>The merchant must record the customer’s request before the send action becomes available.</p></article>
        <article><span className="policy-icon" aria-hidden="true">✓</span><h2>Customer control</h2><p>Recipients may reply STOP to opt out or HELP for assistance.</p></article>
      </section>

      <section className="sms-policy-section" id="workflow">
        <p className="kicker">Verifiable call to action</p><h2>How customers opt in</h2><p className="section-lead">Consent is obtained before a transactional message is sent. The primary current workflow is an affirmative verbal request during the customer’s transaction.</p>
        <div className="consent-flow">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="sms-policy-section consent-product-demo">
        <div><p className="kicker">Inside Vordali Commit</p><h2>Consent is part of the product</h2><p>Merchants cannot automatically text a payment request until they affirm that the customer requested SMS delivery. The acknowledgment is intentionally unchecked by default and is recorded with the order.</p><div className="compliance-note"><span aria-hidden="true">✓</span>Send remains disabled until consent is confirmed.</div></div>
        <div className="consent-ui-card">
          <div className="consent-ui-head"><span aria-hidden="true">▯</span><span>New Secure Order</span></div>
          <label>Customer name<input readOnly value="Jordan Smith"/></label>
          <label>Mobile number<input readOnly value="(270) 555-0123"/></label>
          <label>Order total<input readOnly value="$42.18"/></label>
          <div className="consent-checkbox"><span>✓</span><p><b>I confirm the customer requested to receive a secure transactional SMS payment request for this purchase.</b><small>This acknowledgment is recorded with the order.</small></p></div>
          <button type="button">Send Secure Payment Request</button>
        </div>
      </section>

      <section className="sms-policy-section message-example-section"><div><p className="kicker">Customer experience</p><h2>Example transactional message</h2><p>Message content varies by merchant and transaction, but remains tied to the customer’s requested transaction.</p></div><div className="sms-phone"><span>VORDALI Commit</span><p><b>[Business Name]</b>: Your secure payment request for $42.18 is ready. Pay here: [Secure Link]</p><small>Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out or HELP for help.</small></div></section>

      <section className="sms-policy-section two-column-policy"><article><h2>Commit may send</h2><ul><li>Secure payment requests</li><li>Payment confirmations</li><li>Reminders for an existing request</li><li>Order or transaction status updates</li><li>Customer-requested support messages</li></ul></article><article className="not-sent"><h2>Commit does not send</h2><ul><li>Unsolicited advertisements</li><li>Promotional campaigns</li><li>Purchased or rented-list messages</li><li>Affiliate or third-party marketing</li><li>Messages unrelated to the transaction</li></ul></article></section>

      <section className="sms-policy-section command-grid"><article><b>STOP</b><p>Reply STOP to opt out. A final opt-out confirmation may be sent.</p></article><article><b>HELP</b><p>Reply HELP for assistance or contact support@vordali.com.</p></article><article><b>MESSAGE CHARGES</b><p>Message frequency varies. Message and data rates may apply.</p></article></section>

      <section className="sms-policy-section responsibilities"><p className="kicker">Participating businesses</p><h2>Merchant responsibilities</h2><div className="responsibility-list">{["Obtain the customer’s affirmative request before sending an SMS.","Use only a phone number supplied by the customer for the transaction.","Confirm the required consent acknowledgment before sending.","Use Commit only for permitted transactional messages.","Never use purchased, scraped, rented, or shared contact lists.","Honor STOP requests and never use Commit for promotional messaging."].map(x=><p key={x}><span aria-hidden="true">✓</span>{x}</p>)}</div><div className="enforcement-warning">Misuse of Commit messaging may result in suspension or termination of messaging access.</div></section>

      <section className="sms-policy-section data-section"><div><p className="kicker">Privacy and documentation</p><h2>How mobile information is used</h2><p>Customer mobile numbers are used to deliver requested transactional messages, maintain consent and delivery records, prevent abuse, and provide support. Vordali does not sell or rent customer mobile numbers. SMS consent information is not shared with third parties for their independent promotional use.</p><p>Commit may record whether consent was confirmed, the confirmation time, the authenticated merchant user, the associated transaction, and message delivery or opt-out activity.</p></div><aside><h3>Operational providers</h3><p>Vordali may use messaging, hosting, database, security, and payment providers solely to operate Commit.</p><Link href="/privacy">Read the Privacy Policy →</Link></aside></section>

      <section className="sms-policy-contact"><p className="kicker">Questions about messaging</p><h2>Contact Vordali</h2><p>For questions about consent, privacy, opt-outs, or transactional messaging, contact <a href="mailto:support@vordali.com">support@vordali.com</a>.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/sms-terms">SMS Terms</Link><Link href="/cookies">Cookie Policy</Link></div></section>
    </main>
  </PageShell>;
}
