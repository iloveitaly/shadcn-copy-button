import * as React from "react"

import { OpenInV0Button } from "@/components/open-in-v0-button"
import { ShowSourceButton } from "@/components/show-source-button"

interface ComponentDisplayProps {
  name: string
  description: string
  minHeight?: string
  filePath: string
  children: React.ReactNode
}

export function ComponentDisplay({
  name,
  description,
  minHeight = "400px",
  filePath,
  children,
}: ComponentDisplayProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{description}</h2>
        <div className="flex gap-2">
          <ShowSourceButton filePath={filePath} />
          <OpenInV0Button name={name} />
        </div>
      </div>
      <div
        className={`flex items-center justify-center min-h-[${minHeight}] relative`}
      >
        {children}
      </div>
    </div>
  )
}
