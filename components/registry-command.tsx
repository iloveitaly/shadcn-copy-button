import * as React from "react"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface RegistryCommandProps {
  registryId: string
}

export function RegistryCommand({ registryId }: RegistryCommandProps) {
  const repoUrl = import.meta.env.VITE_GITHUB_REPO_URL
  const command = `pnpx shadcn add ${repoUrl}/r/${registryId}.json`

  const [copied, setCopied] = React.useState(false)
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative">
      <pre className="mt-2 rounded-lg bg-slate-100 p-4 whitespace-pre-wrap break-words">
        <code className="text-sm text-slate-900">{command}</code>
      </pre>
      <TooltipProvider>
        <Tooltip open={copied || tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "Copied!" : "Copy to clipboard"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
