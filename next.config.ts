import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
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
