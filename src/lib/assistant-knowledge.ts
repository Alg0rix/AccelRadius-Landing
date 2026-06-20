import {
  DOCS_URL,
  INSTALL_SCRIPT,
  RELEASES_URL,
  SALES_EMAIL,
  SUPPORT_EMAIL,
  WHATSAPP_URL,
} from "@/lib/brand"
import { featuresContent } from "@/lib/features-content"
import {
  faqItems,
  howItWorksSteps,
  integrations,
  pricingTiers,
  systemRequirements,
} from "@/lib/landing-content"

export interface AssistantLink {
  label: string
  href: string
  external?: boolean
}

export interface AssistantReply {
  text: string
  links?: AssistantLink[]
  suggestions?: string[]
}

export interface KnowledgeEntry {
  id: string
  keywords: string[]
  patterns?: RegExp[]
  replies: AssistantReply[]
  priority?: number
}

const featureList = featuresContent
  .map((f) => `• **${f.title}** — ${f.description}`)
  .join("\n")

const pricingList = pricingTiers
  .map(
    (t) =>
      `**${t.name}** (${t.price}): ${t.description}. Termasuk: ${t.features.join(", ")}.`,
  )
  .join("\n\n")

const requirementsList = systemRequirements
  .map((g) => `**${g.title}:** ${g.items.join(", ")}`)
  .join("\n")

const stepsList = howItWorksSteps
  .map((s) => `${s.step}. **${s.title}** — ${s.description}`)
  .join("\n")

const integrationList = integrations
  .map((i) => `• **${i.name}** (${i.category}) — ${i.description}`)
  .join("\n")

export const assistantGreeting: AssistantReply = {
  text: `Halo! Saya asisten Accel Radius — siap bantu jawab pertanyaan seputar platform billing & operasi ISP.\n\nSaya bisa jelaskan fitur, instalasi, lisensi, integrasi, dan hal teknis lainnya. Pilih topik di bawah atau ketik pertanyaan Anda.`,
  suggestions: [
    "Apa itu Accel Radius?",
    "Cara install",
    "Berapa harganya?",
    "Fitur apa saja?",
    "Syarat server",
    "Hubungi sales",
  ],
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["halo", "hai", "hello", "hi", "pagi", "siang", "sore", "malam", "permisi"],
    patterns: [/^(halo|hai|hello|hi)\b/],
    priority: 1,
    replies: [
      {
        text: "Halo! Senang bisa membantu. Ada yang ingin Anda ketahui tentang Accel Radius?",
        suggestions: ["Fitur lengkap", "Cara install", "Model lisensi"],
      },
    ],
  },
  {
    id: "thanks",
    keywords: ["terima kasih", "makasih", "thanks", "thx", "oke siap"],
    replies: [
      {
        text: "Sama-sama! Jika butuh bantuan lebih lanjut, tim kami juga siap via WhatsApp atau email.",
        links: [
          { label: "WhatsApp", href: WHATSAPP_URL, external: true },
          { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
        ],
      },
    ],
  },
  {
    id: "about",
    keywords: [
      "apa itu",
      "accel radius",
      "accelradius",
      "tentang",
      "platform",
      "untuk apa",
      "apa fungsi",
      "billing operasi",
      "isp",
      "penyedia internet",
    ],
    patterns: [/apa\s+itu/, /accel\s*radius/, /platform\s+(apa|untuk)/],
    priority: 3,
    replies: [
      {
        text: `**Accel Radius** adalah platform billing & operasi all-in-one untuk ISP Indonesia.\n\nMenyatukan manajemen pelanggan, tagihan, pembayaran, kontrol akses (RADIUS), WhatsApp, tiket dukungan, laporan, dan portal pelanggan — dalam satu dashboard realtime.\n\nCocok untuk ISP fixed wireless, fiber, hotspot, dan provider komersial.`,
        links: [{ label: "Lihat fitur", href: "#fitur" }],
        suggestions: ["9 modul apa saja?", "Kenapa pakai Accel Radius?", "Cara install"],
      },
    ],
  },
  {
    id: "features",
    keywords: [
      "fitur",
      "modul",
      "fungsi",
      "kemampuan",
      "ada apa",
      "bisa apa",
      "keunggulan",
      "feature",
    ],
    priority: 3,
    replies: [
      {
        text: `Accel Radius punya **9 modul terintegrasi**:\n\n${featureList}`,
        links: [{ label: "Detail setiap fitur", href: "#fitur-detail" }],
        suggestions: ["RADIUS & MikroTik", "Pembayaran online", "Portal pelanggan"],
      },
    ],
  },
  {
    id: "pelanggan",
    keywords: ["pelanggan", "customer", "import", "isolir", "profil pelanggan", "manajemen pelanggan"],
    replies: [
      {
        text: "Modul **Manajemen Pelanggan** mencakup profil lengkap, status layanan, riwayat perubahan, impor/ekspor massal, dan kontrol akses. Semua tim melihat data yang sama secara realtime.",
        links: [{ label: "Lihat modul pelanggan", href: "#fitur-01" }],
      },
    ],
  },
  {
    id: "billing",
    keywords: ["tagihan", "faktur", "invoice", "billing", "reminder", "tunggak", "prorata"],
    replies: [
      {
        text: "Modul **Tagihan & Faktur** mendukung tagihan otomatis, faktur manual, prorata, dan pengingat pembayaran terjadwal.",
        links: [{ label: "Lihat modul tagihan", href: "#fitur-02" }],
      },
    ],
  },
  {
    id: "payment",
    keywords: ["pembayaran", "payment", "tripay", "duitku", "qris", "virtual account", "va", "gateway"],
    replies: [
      {
        text: "Modul **Pembayaran Online** terintegrasi dengan **Tripay** dan **Duitku** — VA, QRIS, e-wallet. Pencocokan transaksi berjalan otomatis.",
        links: [{ label: "Lihat modul pembayaran", href: "#fitur-03" }],
      },
    ],
  },
  {
    id: "network",
    keywords: [
      "radius",
      "pppoe",
      "mikrotik",
      "jaringan",
      "nas",
      "hotspot",
      "sesi",
      "bandwidth",
      "freeradius",
      "autentikasi",
    ],
    replies: [
      {
        text: "Modul **Jaringan & RADIUS** mengatur profil internet, sesi PPPoE, autentikasi, dan putus sesi dari dashboard. Terintegrasi **FreeRADIUS** & **MikroTik**.",
        links: [{ label: "Lihat modul jaringan", href: "#fitur-04" }],
      },
    ],
  },
  {
    id: "whatsapp",
    keywords: ["whatsapp", "wa", "notifikasi", "broadcast", "template", "reminder wa"],
    replies: [
      {
        text: "Modul **WhatsApp** mendukung multi-akun, template pesan, reminder tagihan, dan broadcast massal. Konfigurasi dari panel admin.",
        links: [{ label: "Lihat modul WhatsApp", href: "#fitur-05" }],
      },
    ],
  },
  {
    id: "ticket",
    keywords: ["tiket", "support", "dukungan", "keluhan", "helpdesk", "sla"],
    replies: [
      {
        text: "Modul **Tiket Dukungan** menghubungkan portal pelanggan ke tim support — status, penugasan, dan riwayat percakapan.",
        links: [{ label: "Lihat modul tiket", href: "#fitur-06" }],
      },
    ],
  },
  {
    id: "report",
    keywords: ["laporan", "report", "analitik", "pendapatan", "grafik", "csv", "pdf"],
    replies: [
      {
        text: "Modul **Laporan & Analitik** menampilkan pendapatan, pelanggan aktif, tungakan, dan tren — ekspor CSV/PDF.",
        links: [{ label: "Lihat modul laporan", href: "#fitur-07" }],
      },
    ],
  },
  {
    id: "portal",
    keywords: ["portal", "klien", "pelanggan bayar", "self service", "cek tagihan"],
    replies: [
      {
        text: "**Portal Klien** — pelanggan cek tagihan, bayar online, dan buat tiket dari HP/desktop kapan saja.",
        links: [{ label: "Lihat portal klien", href: "#fitur-08" }],
      },
    ],
  },
  {
    id: "admin",
    keywords: ["admin", "pengguna", "audit", "branding", "role", "kasir", "superadmin"],
    replies: [
      {
        text: "Modul **Operasi & Administrasi** — kelola pengguna, audit log, branding, lisensi, dan worker latar belakang.",
        links: [{ label: "Lihat modul admin", href: "#fitur-09" }],
      },
    ],
  },
  {
    id: "install",
    keywords: [
      "install",
      "pasang",
      "instalasi",
      "setup",
      "deploy",
      "cara pasang",
      "cara install",
      "unduh",
      "download",
    ],
    patterns: [/cara\s+(install|pasang|setup)/, /bagaimana\s+(install|pasang)/],
    priority: 3,
    replies: [
      {
        text: `Pasang Accel Radius dengan satu perintah di Ubuntu/Debian:\n\n\`${INSTALL_SCRIPT}\`\n\nInstaller mendeteksi CPU, mengunduh rilis terbaru, dan menyiapkan layanan. Butuh sudo + internet.`,
        links: [
          { label: "Section install", href: "#install" },
          { label: "Dokumentasi", href: DOCS_URL, external: true },
        ],
        suggestions: ["Syarat server", "Cara update"],
      },
    ],
  },
  {
    id: "requirements",
    keywords: [
      "syarat",
      "requirement",
      "spesifikasi",
      "server",
      "ram",
      "vcpu",
      "ubuntu",
      "debian",
      "linux",
      "minimum",
      "rekomendasi",
    ],
    priority: 2,
    replies: [
      {
        text: `**Persyaratan sistem:**\n\n${requirementsList}`,
        links: [{ label: "Detail persyaratan", href: "#persyaratan" }],
      },
    ],
  },
  {
    id: "pricing",
    keywords: [
      "harga",
      "biaya",
      "lisensi",
      "paket",
      "berapa",
      "pricing",
      "enterprise",
      "profesional",
      "evaluasi",
      "gratis",
    ],
    patterns: [/berapa\s+harga/, /model\s+lisensi/],
    priority: 3,
    replies: [
      {
        text: `**Paket lisensi:**\n\n${pricingList}`,
        links: [
          { label: "Lihat harga", href: "#harga" },
          { label: "Minta penawaran", href: "#kontak" },
        ],
        suggestions: ["Hubungi sales", "Evaluasi gratis?"],
      },
    ],
  },
  {
    id: "opensource",
    keywords: ["open source", "terbuka", "kode sumber", "source code"],
    replies: [
      {
        text: "Accel Radius **berlisensi tertutup** — kode sumber tidak dibuka. Repo publik berisi installer, rilis, dan dokumentasi.",
        links: [{ label: "Repositori", href: DOCS_URL, external: true }],
      },
    ],
  },
  {
    id: "update",
    keywords: ["update", "upgrade", "pembaruan", "versi terbaru", "changelog"],
    replies: [
      {
        text: "Update: jalankan ulang installer yang sama. **Backup database** dulu disarankan.",
        links: [
          { label: "Changelog", href: "/changelog" },
          { label: "Rilis", href: RELEASES_URL, external: true },
        ],
      },
    ],
  },
  {
    id: "integration",
    keywords: ["integrasi", "systemd", "ekosistem", "stack"],
    replies: [
      {
        text: `**Integrasi:**\n\n${integrationList}`,
        links: [{ label: "Section integrasi", href: "#integrasi" }],
      },
    ],
  },
  {
    id: "howto",
    keywords: ["cara kerja", "alur", "langkah", "proses", "workflow"],
    replies: [
      {
        text: `**Alur singkat:**\n\n${stepsList}`,
        links: [{ label: "Lihat alur", href: "#cara-kerja" }],
      },
    ],
  },
  {
    id: "compare",
    keywords: ["kenapa", "mengapa", "beda", "banding", "spreadsheet", "alternatif", "vs", "lebih baik"],
    replies: [
      {
        text: "Tanpa platform terpadu, ISP kelola spreadsheet + billing + RADIUS + WA terpisah. Accel Radius menyatukan semuanya dalam satu dashboard realtime dengan isolir otomatis dan laporan siap pakai.",
        links: [{ label: "Bandingkan", href: "#bandingkan" }],
      },
    ],
  },
  {
    id: "contact",
    keywords: [
      "kontak",
      "hubungi",
      "sales",
      "dukungan",
      "support",
      "email",
      "demo",
      "konsultasi",
      "penawaran",
    ],
    priority: 2,
    replies: [
      {
        text: `Tim siap bantu evaluasi & lisensi.\n\n• Sales: ${SALES_EMAIL}\n• Support: ${SUPPORT_EMAIL}`,
        links: [
          { label: "Form kontak", href: "#kontak" },
          { label: "WhatsApp", href: WHATSAPP_URL, external: true },
        ],
      },
    ],
  },
  {
    id: "docs",
    keywords: ["dokumentasi", "docs", "panduan", "manual"],
    replies: [
      {
        text: "Dokumentasi instalasi ada di repositori GitHub.",
        links: [
          { label: "Dokumentasi", href: DOCS_URL, external: true },
          { label: "Rilis", href: RELEASES_URL, external: true },
        ],
      },
    ],
  },
]

export const faqKnowledge: KnowledgeEntry[] = faqItems.map((faq, i) => ({
  id: `faq-${i}`,
  keywords: faq.question
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 3),
  replies: [{ text: faq.answer, suggestions: ["Pertanyaan lain", "Hubungi sales"] }],
}))