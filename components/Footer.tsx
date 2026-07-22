import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer platform-footer">
      <Link className="footer-brand" href="/">VORDALI <small>INC.</small></Link>
      <p>Focused software for measurable business problems.</p>
      <div className="footer-link-groups">
        <span><b>Explore</b><Link href="/products">Products</Link><Link href="/pricing">Pricing</Link><Link href="/labs">Labs</Link><Link href="/trust">Trust</Link></span>
        <span><b>Legal & Compliance</b><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link><Link href="/sms-consent">SMS Consent</Link></span>
      </div>
      <small>© {new Date().getFullYear()} Vordali Inc. All rights reserved.</small>
    </footer>
  );
}
