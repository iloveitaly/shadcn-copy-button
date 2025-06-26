import { useRef } from "react"
import { CopyButton } from "@/registry/new-york/copy-button/CopyButton"

export function AdvancedCopyExample() {
  const richContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div 
        ref={richContentRef}
        className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg w-full"
      >
        <article className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-green-600 mb-4">📊 Weekly Report Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200">✅ Completed Tasks</h4>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">🔄 In Progress</h4>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Implemented new <strong>copy-to-clipboard</strong> functionality</li>
            <li>Added support for <em>HTML content preservation</em></li>
            <li>Enhanced user experience with visual feedback</li>
            <li>Integrated with existing design system</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-sm">
              <strong>💡 Pro Tip:</strong> This component automatically converts HTML to markdown 
              when copying, making it perfect for documentation and content management.
            </p>
          </div>

          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Plain Text Copy</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Complete</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">HTML Copy</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Complete</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">DOM Reference</td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Complete</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <CopyButton 
        htmlRef={richContentRef}
        className="w-full max-w-xs"
      />
      
      <p className="text-sm text-muted-foreground text-center">
        This button copies the entire rich content above, including tables, styling, and formatting
      </p>
    </div>
  )
}
