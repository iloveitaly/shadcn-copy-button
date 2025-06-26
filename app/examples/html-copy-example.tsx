import { useRef } from "react"
import { CopyButton } from "@/registry/new-york/copy-button/CopyButton"

export function HtmlCopyExample() {
  const htmlContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
      <div 
        ref={htmlContentRef}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 w-full"
      >
        <h3 className="text-xl font-bold text-blue-600 mb-3">🚀 Product Launch Announcement</h3>
        <p className="mb-4">
          We're excited to announce the release of our new <strong>CopyButton</strong> component! 
          This component supports both <em>plain text</em> and <strong>rich HTML</strong> copying.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>✅ Copy plain text</li>
          <li>✅ Copy HTML with formatting</li>
          <li>✅ Reference DOM elements</li>
          <li>✅ Automatic markdown conversion</li>
        </ul>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
          "This component makes copying content incredibly easy and user-friendly!"
        </blockquote>
        <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded">
          <code className="text-sm">npm install @your-org/copy-button</code>
        </div>
      </div>

      <div className="flex gap-4">
        <CopyButton 
          htmlRef={htmlContentRef}
          className="flex-1"
        />
        <CopyButton 
          text="Just the plain text version of the announcement above"
          className="flex-1"
        />
      </div>
      
      <p className="text-sm text-muted-foreground text-center">
        The left button copies the rich HTML content above, the right button copies plain text
      </p>
    </div>
  )
}
