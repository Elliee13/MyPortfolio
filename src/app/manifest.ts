import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "/images/brand/apple-touch-icon.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/images/brand/apple-touch-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/images/brand/apple-touch-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/images/screenshots/screenshot-mobile-light.png",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/images/screenshots/screenshot-mobile-dark.png",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
    ],
  };
}
