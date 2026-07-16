import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Trust Center" };

const cards = [
  ["Privacy Policy","How personal information is collected, used, protected, and shared.","/privacy","01"],
  ["Terms of Service","The rules and responsibilities governing use of Vordali.","/terms","02"],
  ["SMS Terms","Transactional messaging consent, frequency, STOP, and HELP terms.","/sms-terms","03"],
  ["Cookie Policy","How cookies and similar technologies support the website.","/cookies","04"],
  ["Acceptable Use","Activities prohibited across Vordali services.","/acceptable-use","05"],
  ["Security","Vordali’s approach to payment, account, and data security.","/security","06"]
];

export default function TrustPage() {
  return (
    <PageShell>
      <main className="trust-main">
        <section className="trust-hero">
          <div className="trust-orb" aria-hidden="true"></div>
          <p className="kicker">Trust & compliance</p>
          <h1>Transparent by design.<br /><em>Secure at every step.</em></h1>
          <p>Clear policies and responsible platform practices help businesses and customers use Vordali with confidence.</p>
          <div className="trust-badges"><span>Stripe-secured payments</span><span>Transactional messaging</span><span>HTTPS/TLS</span></div>
        </section>
        <section className="trust-grid">
          {cards.map(([title,desc,href,n]) => <Link className="trust-card" href={href} key={href}><span>{n}</span><h2>{title}</h2><p>{desc}</p><b>Read document →</b></Link>)}
        </section>
        <section className="trust-note"><div><p className="kicker">A living foundation</p><h2>Trust grows with the platform.</h2></div><p>These documents describe Vordali’s current services and will evolve as products, legal requirements, and operational practices develop.</p></section>
      </main>
    </PageShell>
  );
}
