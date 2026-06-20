import type { ReactNode } from "react"

type Segment = { type: "text" | "bold" | "code"; value: string }

function parseSegments(line: string): Segment[] {
  const segments: Segment[] = []
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: line.slice(lastIndex, match.index) })
    }
    const token = match[0]
    if (token.startsWith("**")) {
      segments.push({ type: "bold", value: token.slice(2, -2) })
    } else {
      segments.push({ type: "code", value: token.slice(1, -1) })
    }
    lastIndex = match.index + token.length
  }

  if (lastIndex < line.length) {
    segments.push({ type: "text", value: line.slice(lastIndex) })
  }

  return segments.length > 0 ? segments : [{ type: "text", value: line }]
}

function renderSegments(segments: Segment[]): ReactNode[] {
  return segments.map((seg, i) => {
    if (seg.type === "bold") {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {seg.value}
        </strong>
      )
    }
    if (seg.type === "code") {
      return (
        <code
          key={i}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8em] text-foreground"
        >
          {seg.value}
        </code>
      )
    }
    return <span key={i}>{seg.value}</span>
  })
}

export function FormattedAssistantText({ text }: { text: string }) {
  const lines = text.split("\n")

  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {lines.map((line, lineIndex) => {
        if (!line.trim()) {
          return <div key={lineIndex} className="h-1" aria-hidden />
        }

        const isBullet = line.startsWith("• ")
        const content = isBullet ? line.slice(2) : line

        if (isBullet) {
          return (
            <div key={lineIndex} className="flex gap-2 pl-0.5">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-red" aria-hidden />
              <span>{renderSegments(parseSegments(content))}</span>
            </div>
          )
        }

        return (
          <p key={lineIndex} className="text-foreground/90">
            {renderSegments(parseSegments(content))}
          </p>
        )
      })}
    </div>
  )
}