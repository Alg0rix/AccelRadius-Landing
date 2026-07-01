import {
  assistantGreeting,
  faqKnowledge,
  knowledgeBase,
  type AssistantReply,
  type KnowledgeEntry,
} from "@/lib/assistant-knowledge"
import { faqItems } from "@/lib/landing-content"

const STOPWORDS = new Set([
  "yang",
  "dan",
  "atau",
  "dari",
  "untuk",
  "dengan",
  "apa",
  "bagaimana",
  "bisakah",
  "bisa",
  "kah",
  "tidak",
  "gak",
  "ga",
  "sih",
  "dong",
  "deh",
  "the",
  "is",
  "are",
  "di",
  "ke",
  "pada",
  "ini",
  "itu",
  "ada",
  "saya",
  "mau",
  "ingin",
  "tolong",
  "jelaskan",
  "tanya",
  "soal",
  "tentang",
])

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
}

function scoreEntry(message: string, entry: KnowledgeEntry): number {
  const normalized = normalize(message)
  const tokens = tokenize(message)
  let score = 0

  for (const keyword of entry.keywords) {
    const kw = normalize(keyword)
    if (kw.includes(" ")) {
      if (normalized.includes(kw)) score += 4
    } else if (tokens.includes(kw) || normalized.includes(kw)) {
      score += kw.length > 5 ? 2 : 1
    }
  }

  if (entry.patterns) {
    for (const pattern of entry.patterns) {
      if (pattern.test(normalized)) score += 6
    }
  }

  score += (entry.priority ?? 0) * 0.1

  return score
}

function scoreFaqQuestion(message: string, question: string): number {
  const msgTokens = new Set(tokenize(message))
  const qTokens = tokenize(question)
  if (qTokens.length === 0) return 0

  let overlap = 0
  for (const t of qTokens) {
    if (msgTokens.has(t)) overlap++
  }

  return overlap / qTokens.length
}

function pickReply(entry: KnowledgeEntry): AssistantReply {
  const replies = entry.replies
  return replies[Math.floor(Math.random() * replies.length)]
}

const fallbackReplies: AssistantReply[] = [
  {
    text: "Saya belum yakin memahami pertanyaan itu. Coba kata kunci seperti **spesifikasi server**, **install**, **port firewall**, **MikroTik**, **harga**, atau **isolir**.",
    suggestions: ["Spesifikasi server", "Cara install", "Setup MikroTik", "Hubungi sales"],
  },
  {
    text: "Hmm, pertanyaan tersebut belum ada di basis pengetahuan saya. Berikut topik yang sering ditanyakan operator ISP:",
    suggestions: [
      "500 pelanggan butuh server apa?",
      "Port firewall",
      "Beda Evaluasi vs Profesional?",
      "Setelah instalasi apa saja?",
    ],
  },
  {
    text: "Maaf, saya tidak menemukan jawaban pasti. Hubungi tim kami untuk pertanyaan spesifik, atau coba salah satu topik di bawah.",
    suggestions: ["Backup database", "Setup Tripay", "Migrasi data", "Dokumentasi"],
  },
]

export function getGreeting(): AssistantReply {
  return assistantGreeting
}

export function findReply(message: string): AssistantReply {
  const trimmed = message.trim()
  if (!trimmed) {
    return {
      text: "Silakan ketik pertanyaan Anda tentang Accel Radius.",
      suggestions: assistantGreeting.suggestions,
    }
  }

  const allEntries = [...knowledgeBase, ...faqKnowledge]

  let best: { entry: KnowledgeEntry; score: number } | null = null

  for (const entry of allEntries) {
    const score = scoreEntry(trimmed, entry)
    if (!best || score > best.score) {
      best = { entry, score }
    }
  }

  for (let i = 0; i < faqItems.length; i++) {
    const entry = faqKnowledge[i]
    if (!entry) continue
    const overlap = scoreFaqQuestion(trimmed, faqItems[i].question)
    if (overlap > 0.4) {
      const boosted = overlap * 12 + scoreEntry(trimmed, entry)
      if (!best || boosted > best.score) {
        best = { entry, score: boosted }
      }
    }
  }

  if (best && best.score >= 2) {
    return pickReply(best.entry)
  }

  // Partial token match across knowledge base
  const tokens = tokenize(trimmed)
  if (tokens.length > 0) {
    const partialMatches = allEntries
      .map((entry) => ({ entry, score: scoreEntry(trimmed, entry) }))
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)

    if (partialMatches.length > 0 && partialMatches[0].score >= 1) {
      return pickReply(partialMatches[0].entry)
    }
  }

  return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]
}

export function estimateTypingDelay(text: string): number {
  const base = 400
  const perChar = 8
  return Math.min(base + text.length * perChar, 1400)
}