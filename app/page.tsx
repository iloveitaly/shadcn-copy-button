import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { ShowSourceButton } from "@/components/show-source-button"
import { RegistryCommand } from "@/components/registry-command"
import HelloWorldExample from "@/app/examples/hello-world"
import ExampleFormExample from "@/app/examples/example-form"
import ComplexComponentExample from "@/app/examples/complex-component"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

interface ComponentDisplayProps {
  name: string;
  description: string;
  minHeight?: string;
  filePath: string;
  children: React.ReactNode;
}

function ComponentDisplay({ name, description, minHeight = "400px", filePath, children }: ComponentDisplayProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          {description}
        </h2>
        <div className="flex gap-2">
          <ShowSourceButton filePath={filePath} />
          <OpenInV0Button name={name} />
        </div>
      </div>
      <div className={`flex items-center justify-center min-h-[${minHeight}] relative`}>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1 space-y-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Custom ShadCN Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribing shadcn components using shadcn. I recommend using multiple registries for
          different types of components, so users can easily contribute back.
        </p>
        <RegistryCommand registryId="example-form" />
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <ComponentDisplay
          name="hello-world"
          description="A simple hello world component"
          filePath="app/examples/hello-world.tsx"
        >
          <HelloWorldExample />
        </ComponentDisplay>

        <ComponentDisplay
          name="example-form"
          description="A contact form with Zod validation."
          minHeight="500px"
          filePath="app/examples/example-form.tsx"
        >
          <ExampleFormExample />
        </ComponentDisplay>

        <ComponentDisplay
          name="complex-component"
          description="A complex component showing hooks, libs and components."
          filePath="app/examples/complex-component.tsx"
        >
          <ComplexComponentExample />
        </ComponentDisplay>
      </main>
    </div>
  )
}
