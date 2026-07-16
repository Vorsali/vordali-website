import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return <>
    <div className="page-noise" aria-hidden="true"></div>
    <Header />
    {children}
    <Footer />
  </>;
}
