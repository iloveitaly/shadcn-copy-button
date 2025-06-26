import { defineConfig } from "vite"

import path from "path"

import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_GITHUB_PAGES_URL,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
