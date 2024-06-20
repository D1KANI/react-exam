import type { VitePWAOptions } from "vite-plugin-pwa";

export const vitePwaConfig: Partial<VitePWAOptions> = {
  registerType: "prompt",
  workbox: {
    globPatterns: ["**/*"],
  },
  includeAssets: ["**/*"],
  manifest: {
    name: "Task manager by DIKANI",
    short_name: "Task manager",
    description: "Task manager by DIKANI. Save your time.",
    icons: [
      {
        src: "/favicon/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/mstile-150.png",
        sizes: "150x150",
        type: "image/png",
      },
    ],
    theme_color: "#333333",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};
