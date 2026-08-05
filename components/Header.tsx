"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const commitLogin = "https://commit.vordali.com/entry";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header scrolled">
      <Link className="brand" href="/" aria-label="Vordali Inc. home">
        <img src="/assets/vordali-logo-orb.webp" alt="" />
        <span>VORDALI <small>INC.</small></span>
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label="Open navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span></span><span></span>
      </button>
      <nav id="site-nav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link href="/labs" onClick={closeMenu}>Labs</Link>
        <Link href="/why-vordali" onClick={closeMenu}>Why Vordali</Link>
        <Link href="/trust" onClick={closeMenu}>Trust</Link>
        <a className="nav-signin" href={commitLogin} onClick={closeMenu}>Sign In</a>
        <a className="nav-cta" href={`${commitLogin}?mode=signup`} onClick={closeMenu}>Launch Commit</a>
      </nav>
    </header>
  );
}
