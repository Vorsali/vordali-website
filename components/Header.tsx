"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SessionState = "loading" | "authenticated" | "anonymous";

export function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<SessionState>("loading");

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/session", { cache: "no-store", credentials: "same-origin" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Session lookup failed");
        return response.json() as Promise<{ authenticated?: boolean }>;
      })
      .then((data) => {
        if (active) setSession(data.authenticated ? "authenticated" : "anonymous");
      })
      .catch(() => {
        if (active) setSession("anonymous");
      });
    return () => {
      active = false;
    };
  }, []);

  function closeMenu() {
    setOpen(false);
  }

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
        {session === "authenticated" ? (
          <>
            <Link className="nav-signin" href="/dashboard" onClick={closeMenu}>Dashboard</Link>
            <form className="nav-signout-form" action="/api/auth/logout" method="post">
              <button className="nav-cta" type="submit" onClick={closeMenu}>Sign Out</button>
            </form>
          </>
        ) : (
          <>
            <Link className="nav-signin" href="/login" onClick={closeMenu}>Sign In</Link>
            <Link className="nav-cta" href="/choose-plan" onClick={closeMenu}>Launch Commit</Link>
          </>
        )}
      </nav>
    </header>
  );
}
