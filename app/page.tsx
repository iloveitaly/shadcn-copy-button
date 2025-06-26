import * as React from "react"
import { RegistryCommand } from "@/components/registry-command"
import { ComponentDisplay } from "./examples/component-display"
import { TextCopyExample } from "./examples/text-copy-example"
import { HtmlCopyExample } from "./examples/html-copy-example"
import { AdvancedCopyExample } from "./examples/advanced-copy-example"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

function CopyButtonExample() {
  return (
    <div className="space-y-8">
      <ComponentDisplay
        name="copy-button-text"
        description="Copy plain text to clipboard"
        filePath="app/examples/text-copy-example.tsx"
      >
        <TextCopyExample />
      </ComponentDisplay>

      <ComponentDisplay
        name="copy-button-html"
        description="Copy rich HTML content to clipboard"
        filePath="app/examples/html-copy-example.tsx"
      >
        <HtmlCopyExample />
      </ComponentDisplay>

      <ComponentDisplay
        name="copy-button-advanced"
        description="Copy complex HTML content with styling"
        filePath="app/examples/advanced-copy-example.tsx"
      >
        <AdvancedCopyExample />
      </ComponentDisplay>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1 space-y-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">CopyButton Component Showcase</h1>
        <p className="text-muted-foreground">
          A powerful copy button component that can copy text, HTML, or content from DOM elements. 
          This component supports both plain text and rich HTML content copying to the clipboard.
        </p>
        <RegistryCommand registryId="copy-button" />
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <CopyButtonExample />
      </main>
    </div>
  )
}
