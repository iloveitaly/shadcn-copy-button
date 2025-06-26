import { defineConfig } from "vite"

import path from "path"

import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  base: "/shadcn-registry-template-github-pages/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
