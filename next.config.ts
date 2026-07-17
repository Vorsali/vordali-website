import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/products.html", destination: "/products", permanent: true },
      { source: "/pricing.html", destination: "/pricing", permanent: true },
      { source: "/labs.html", destination: "/labs", permanent: true },
      { source: "/manifesto.html", destination: "/why-vordali", permanent: true },
      { source: "/trust.html", destination: "/trust", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/sms-terms.html", destination: "/sms-terms", permanent: true },
      { source: "/cookies.html", destination: "/cookies", permanent: true },
      { source: "/acceptable-use.html", destination: "/acceptable-use", permanent: true },
      { source: "/security.html", destination: "/security", permanent: true }
    ];
  }
};

export default nextConfig;
