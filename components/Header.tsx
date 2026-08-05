"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  useEffect(() => {
    function closeOnOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, []);

  function closeMenu() {
    setOpen(false);
    setProductsOpen(false);
  }

  return (
    <header className="site-header scrolled company-site-header">
      <Link className="brand" href="/" aria-label="Vordali Inc. home" onClick={closeMenu}>
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

      <nav id="site-nav" className={`site-nav company-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <div className={`products-dropdown ${productsOpen ? "open" : ""}`} ref={productsRef}>
          <button
            className="products-dropdown-trigger"
            type="button"
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen((value) => !value)}
          >
            Products <span aria-hidden="true">⌄</span>
          </button>
          <div className="products-dropdown-menu">
            <a className="product-menu-live" href="https://commit.vordali.com" onClick={closeMenu}>
              <span><b>Commit™</b><small>Secure text-to-pay</small></span><i>LIVE</i>
            </a>
            <Link href="/labs?product=approve" onClick={closeMenu}>
              <span><b>Approve™</b><small>Customer approvals</small></span><i>RESEARCH</i>
            </Link>
            <Link href="/labs?product=follow" onClick={closeMenu}>
              <span><b>Follow™</b><small>Accountable follow-up</small></span><i>RESEARCH</i>
            </Link>
            <Link href="/labs?product=verify" onClick={closeMenu}>
              <span><b>Verify™</b><small>Identity and risk</small></span><i>RESEARCH</i>
            </Link>
            <Link className="product-menu-labs" href="/labs" onClick={closeMenu}>
              <span><b>Vordali Labs</b><small>Help decide what we solve next</small></span><strong>→</strong>
            </Link>
          </div>
        </div>
        <Link href="/labs" onClick={closeMenu}>Labs</Link>
        <Link href="/why-vordali" onClick={closeMenu}>Why Vordali</Link>
        <Link href="/trust" onClick={closeMenu}>Trust</Link>
        <a href="mailto:hello@vordali.com" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}
