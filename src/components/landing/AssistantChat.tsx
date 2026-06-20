import { FormattedAssistantText } from "@/lib/assistant-format"
import {
  estimateTypingDelay,
  findReply,
  getGreeting,
} from "@/lib/assistant-engine"
import type { AssistantLink } from "@/lib/assistant-knowledge"
import { BRAND_ICON, BRAND_NAME } from "@/lib/brand"
import { cn } from "@/lib/utils"
import { Bot, ExternalLink, MessageCircle, Send, X } from "lucide-react"
import { useCallback, useEffect, useId, useRef, useState } from "react"

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  text: string
  links?: AssistantLink[]
  suggestions?: string[]
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 px-4 py-3"
      role="status"
      aria-label="Asisten sedang mengetik"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 rounded-full bg-muted-foreground/50 motion-safe:animate-bounce"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  )
}

function MessageLinks({ links }: { links: AssistantLink[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand-red/40 hover:text-brand-red"
        >
          {link.label}
          {link.external && <ExternalLink className="size-3" aria-hidden />}
        </a>
      ))}
    </div>
  )
}

function AssistantBubble({
  message,
  onSuggestion,
}: {
  message: ChatMessage
  onSuggestion: (text: string) => void
}) {
  return (
    <div className="flex gap-2.5">
      <div
        className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red"
        aria-hidden
      >
        <Bot className="size-3.5" />
      </div>
      <div className="min-w-0 max-w-[92%] rounded-2xl rounded-tl-md border border-border bg-muted/50 px-4 py-3">
        <FormattedAssistantText text={message.text} />
        {message.links && message.links.length > 0 && (
          <MessageLinks links={message.links} />
        )}
        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {message.suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSuggestion(s)}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-brand-red/30 hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-brand-red px-4 py-2.5 text-sm leading-relaxed text-white">
        {text}
      </div>
    </div>
  )
}

export default function AssistantChat() {
  const panelId = useId()
  const inputId = useId()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pendingRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, scrollToBottom])

  useEffect(() => {
    if (open && !greeted) {
      const greeting = getGreeting()
      setMessages([
        {
          id: uid(),
          role: "assistant",
          text: greeting.text,
          suggestions: greeting.suggestions,
        },
      ])
      setGreeted(true)
    }
  }, [open, greeted])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 120)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (pendingRef.current) clearTimeout(pendingRef.current)
    }
  }, [])

  const respond = useCallback((userText: string) => {
    const reply = findReply(userText)
    const delay = prefersReducedMotion() ? 0 : estimateTypingDelay(reply.text)

    setTyping(true)

    pendingRef.current = setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          text: reply.text,
          links: reply.links,
          suggestions: reply.suggestions,
        },
      ])
    }, delay)
  }, [])

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || typing) return

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "user", text: trimmed },
      ])
      setInput("")
      respond(trimmed)
    },
    [typing, respond],
  )

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") setOpen(false)
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 sm:p-6">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <div
          id={panelId}
          role="dialog"
          aria-label={`Asisten ${BRAND_NAME}`}
          aria-hidden={!open}
          className={cn(
            "flex origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300",
            open
              ? "pointer-events-auto h-[min(560px,calc(100dvh-7rem))] w-[min(400px,calc(100vw-2rem))] scale-100 opacity-100"
              : "pointer-events-none h-0 w-0 scale-95 opacity-0",
          )}
        >
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img
              src={BRAND_ICON}
              alt=""
              className="size-8 rounded-lg object-cover"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                Asisten {BRAND_NAME}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Tutup chat"
            >
              <X className="size-4" />
            </button>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg) =>
              msg.role === "user" ? (
                <UserBubble key={msg.id} text={msg.text} />
              ) : (
                <AssistantBubble
                  key={msg.id}
                  message={msg}
                  onSuggestion={sendMessage}
                />
              ),
            )}
            {typing && <TypingIndicator />}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border p-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-1.5 focus-within:border-brand-red/40 focus-within:ring-2 focus-within:ring-brand-red/15">
              <label htmlFor={inputId} className="sr-only">
                Ketik pertanyaan
              </label>
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya tentang fitur, harga, install..."
                disabled={typing}
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white transition-all hover:bg-foreground disabled:opacity-40"
                aria-label="Kirim pesan"
              >
                <Send className="size-3.5" />
              </button>
            </div>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "group flex items-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-foreground hover:shadow-xl motion-safe:hover:scale-[1.02]",
            open && "rounded-full",
          )}
        >
          {open ? (
            <X className="size-5" aria-hidden />
          ) : (
            <>
              <MessageCircle className="size-5" aria-hidden />
              <span className="hidden sm:inline">Tanya asisten</span>
            </>
          )}
          <span className="sr-only">
            {open ? "Tutup asisten" : "Buka asisten"}
          </span>
        </button>
      </div>
    </div>
  )
}