import { StrictMode } from "react"

import App from "./App"
import "./globals.css"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
