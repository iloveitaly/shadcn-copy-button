import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ShowSourceButton({
  filePath,
  className,
}: {
  filePath: string
  className?: string
}) {
  const baseUrl = import.meta.env.VITE_GITHUB_REPO_URL
  const branch = import.meta.env.VITE_GITHUB_BRANCH || "master"
  const url = `${baseUrl}/blob/${branch}/${filePath}`

  return (
    <Button
      variant="outline"
      className={`h-7 gap-1 rounded-lg px-3 text-xs ${className}`}
      onClick={() => window.open(url, "_blank")}
    >
      <ExternalLink className="h-4 w-4" />
      Show Source
    </Button>
  )
}
