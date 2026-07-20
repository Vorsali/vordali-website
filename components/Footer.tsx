import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer platform-footer">
      <Link className="footer-brand" href="/">VORDALI <small>INC.</small></Link>
      <p>Focused software for measurable business problems.</p>
      <div>
        <Link href="/products">Products</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/labs">Labs</Link>
        <Link href="/why-vordali">Manifesto</Link>
        <Link href="/trust">Trust</Link>
      </div>
      <small>© {new Date().getFullYear()} Vordali Inc. All rights reserved.</small>
    </footer>
  );
}
