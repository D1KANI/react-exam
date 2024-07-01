import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { vitePwaConfig } from "./pwaManifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(vitePwaConfig)],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
