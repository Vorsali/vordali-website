import type { MetadataRoute } from "next";

const routes = [
  "",
  "/products",
  "/pricing",
  "/labs",
  "/why-vordali",
  "/trust",
  "/privacy",
  "/terms",
  "/sms-terms", "/sms-consent",
  "/cookies",
  "/acceptable-use",
  "/security"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `https://www.vordali.com${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/products" || route === "/pricing" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" || route === "/pricing" ? 0.8 : 0.5
  }));
}
