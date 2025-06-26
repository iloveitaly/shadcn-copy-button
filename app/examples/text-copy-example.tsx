import { CopyButton } from "@/registry/new-york/copy-button/CopyButton"

export function TextCopyExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-center text-muted-foreground">
        Click the button below to copy some plain text
      </p>
      <CopyButton text="Hello! This is plain text copied to your clipboard. 🎉" />
    </div>
  )
}
