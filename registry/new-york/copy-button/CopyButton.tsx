/**
 * A customizable copy button component that can copy text, HTML, or content from a referenced element to the clipboard.
 * Supports both plain text and rich HTML content copying with automatic markdown conversion.
 *
 * @see https://github.com/shadcn-ui/ui/discussions/4052
 */
import { useState } from "react"
import TurndownService from "turndown"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { invariant } from "@epic-web/invariant"

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  /**
   * Plain text content to copy to clipboard. Takes precedence over HTML content if both are provided.
   */
  text?: string

  /**
   * HTML content to copy to clipboard. Will be converted to markdown for plain text format.
   * Used when text prop is not provided.
   */
  html?: string

  /**
   * React ref to an HTML element whose innerHTML will be copied.
   * Used as fallback when neither text nor html props are provided.
   */
  htmlRef?: React.RefObject<HTMLElement | null>
}

export function CopyButton({
  text,
  html,
  htmlRef,
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      if (!text && !html && !htmlRef?.current) {
        console.error("No text, HTML, or HTML reference to copy")
        return
      }

      const htmlContent = html || htmlRef?.current?.innerHTML || ""
      let textContent = text

      if (!textContent && htmlContent) {
        var turndownService = new TurndownService()
        textContent = turndownService.turndown(htmlContent)
      }

      invariant(
        textContent,
        "textContent should exist. If you are using htmlRef, make sure to pass a ref to the html element.",
      )

      if (htmlContent) {
        const clipboardData = new ClipboardItem({
          "text/plain": new Blob([textContent], { type: "text/plain" }),
          "text/html": new Blob([htmlContent], { type: "text/html" }),
        })
        await navigator.clipboard.write([clipboardData])
      } else {
        await navigator.clipboard.writeText(textContent)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={copyToClipboard}
      {...props}
    >
      <Copy className="mr-2 h-4 w-4" />
      {copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  )
}
