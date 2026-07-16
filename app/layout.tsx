import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Vordali — Business. Simplified.", template: "%s — Vordali" },
  description: "Vordali builds focused software around measurable business problems—protecting revenue, saving time, and removing operational friction.",
  icons: { icon: "/assets/favicon.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
