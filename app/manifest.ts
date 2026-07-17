import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vordali",
    short_name: "Vordali",
    description: "Focused software for measurable business problems.",
    start_url: "/",
    display: "standalone",
    background_color: "#050914",
    theme_color: "#050914",
    icons: [{ src: "/assets/favicon.png", sizes: "any", type: "image/png" }]
  };
}
