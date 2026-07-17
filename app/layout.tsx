import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://www.vordali.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vordali — Business. Simplified.", template: "%s — Vordali" },
  description: "Vordali builds focused software around measurable business problems—protecting revenue, saving time, and removing operational friction.",
  applicationName: "Vordali",
  keywords: ["business software", "payment commitment", "text to pay", "small business automation", "Vordali Commit"],
  authors: [{ name: "Vordali" }],
  creator: "Vordali",
  publisher: "Vordali",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    apple: [{ url: "/assets/favicon.png", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vordali",
    title: "Vordali — Business. Simplified.",
    description: "Focused software around measurable business problems—protecting revenue, saving time, and removing operational friction.",
    images: [{ url: "/assets/vordali-hero.webp", width: 1200, height: 630, alt: "Vordali" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vordali — Business. Simplified.",
    description: "Focused software for measurable business problems.",
    images: ["/assets/vordali-hero.webp"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050914",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
