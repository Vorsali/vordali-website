import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer platform-footer company-footer">
      <Link className="footer-brand" href="/">VORDALI <small>INC.</small></Link>
      <p>We build systems that recover what businesses lose.</p>
      <div className="footer-link-groups">
        <span><b>Products</b><a href="https://commit.vordali.com">Commit</a><Link href="/labs">Vordali Labs</Link><Link href="/products">Product Portfolio</Link></span>
        <span><b>Company</b><Link href="/why-vordali">Why Vordali</Link><Link href="/trust">Trust Center</Link><a href="mailto:hello@vordali.com">Contact</a></span>
        <span><b>Legal</b><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link></span>
      </div>
      <small>© {new Date().getFullYear()} Vordali Inc. All rights reserved.</small>
    </footer>
  );
}
