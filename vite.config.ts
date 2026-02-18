import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { readFileSync, existsSync } from "fs";

// Check if mkcert certificates exist (only for local development)
const useHttps = process.env.NODE_ENV === "development" && existsSync(path.join(process.cwd(), "certs/localhost+2.pem"));

const httpsConfig = useHttps ? {
  https: {
    cert: readFileSync(path.join(process.cwd(), "certs/localhost+2.pem")),
    key: readFileSync(path.join(process.cwd(), "certs/localhost+2-key.pem")),
  },
} : {};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
  server: {
    host: "localhost",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    ...httpsConfig,
  },
});
