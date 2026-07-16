"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  return (
    <header className="site-header scrolled">
      <Link className="brand" href="/" aria-label="Vordali home">
        <img src="/assets/vordali-mark.webp" alt="" />
        <span>VORDALI</span>
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label="Open navigation"
        onClick={() => setOpen(v => !v)}
      >
        <span></span><span></span>
      </button>
      <nav id="site-nav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <Link href="/labs" onClick={() => setOpen(false)}>Labs</Link>
        <Link href="/why-vordali" onClick={() => setOpen(false)}>Why Vordali</Link>
        <Link href="/trust" onClick={() => setOpen(false)}>Trust</Link>
        <a className="nav-signin" href="https://commit.vordali.com/login">Sign In</a>
        <a className="nav-cta" href="https://commit.vordali.com/login">Launch Commit</a>
      </nav>
    </header>
  );
}
