export type FeatureLayout = "featured" | "tall" | "wide" | "compact"
export type FeatureListLayout =
  | "featured"
  | "tall"
  | "wide"
  | "compact"
  | "wide-end"
  | "banner"
export type FeatureAccent = "blue" | "red" | "dark" | "neutral"

export interface FeatureContent {
  number: string
  slug: string
  title: string
  description: string
  tags: string[]
  layout: FeatureLayout
  listLayout: FeatureListLayout
  accent: FeatureAccent
}

export const featuresContent: FeatureContent[] = [
  {
    number: "01",
    slug: "pelanggan",
    title: "Manajemen Pelanggan",
    description:
      "Profil lengkap, status layanan, riwayat perubahan, impor/ekspor massal, dan kontrol akses — semua tim melihat data yang sama secara realtime.",
    tags: ["Tambah", "Import", "Isolir"],
    layout: "featured",
    listLayout: "featured",
    accent: "blue",
  },
  {
    number: "02",
    slug: "tagihan",
    title: "Tagihan & Faktur",
    description:
      "Tagihan otomatis, faktur manual, prorata, dan pengingat pembayaran terjadwal.",
    tags: ["Buat Tagihan", "Kirim", "Reminder"],
    layout: "tall",
    listLayout: "tall",
    accent: "red",
  },
  {
    number: "03",
    slug: "pembayaran",
    title: "Pembayaran Online",
    description: "Gateway VA, QRIS, e-wallet — pencocokan transaksi otomatis.",
    tags: ["Tripay", "Duitku", "Lunas"],
    layout: "compact",
    listLayout: "compact",
    accent: "neutral",
  },
  {
    number: "04",
    slug: "jaringan",
    title: "Jaringan & RADIUS",
    description: "Profil internet, sesi PPPoE, autentikasi, dan putus sesi dari dashboard.",
    tags: ["RADIUS", "PPPoE", "Putus"],
    layout: "compact",
    listLayout: "compact",
    accent: "dark",
  },
  {
    number: "05",
    slug: "whatsapp",
    title: "Notifikasi WhatsApp",
    description: "Tagihan, reminder, dan broadcast ke ribuan pelanggan sekaligus.",
    tags: ["Template", "Broadcast"],
    layout: "compact",
    listLayout: "compact",
    accent: "blue",
  },
  {
    number: "06",
    slug: "tiket",
    title: "Tiket Dukungan",
    description: "Portal pelanggan terhubung langsung ke tim support dengan SLA dan penugasan.",
    tags: ["Balas", "Tugaskan", "Arsip"],
    layout: "wide",
    listLayout: "wide",
    accent: "red",
  },
  {
    number: "07",
    slug: "laporan",
    title: "Laporan & Analitik",
    description: "Pendapatan, pelanggan aktif, tungakan, dan tren — tanpa spreadsheet manual.",
    tags: ["CSV", "PDF", "Grafik"],
    layout: "wide",
    listLayout: "wide",
    accent: "blue",
  },
  {
    number: "08",
    slug: "portal",
    title: "Portal Klien",
    description: "Pelanggan cek tagihan, bayar, dan buat tiket dari HP kapan saja.",
    tags: ["Bayar", "Tiket", "24/7"],
    layout: "compact",
    listLayout: "wide-end",
    accent: "neutral",
  },
  {
    number: "09",
    slug: "admin",
    title: "Operasi & Administrasi",
    description: "Pengguna, audit log, branding, lisensi, dan pekerjaan latar belakang.",
    tags: ["Admin", "Audit", "Lisensi"],
    layout: "featured",
    listLayout: "banner",
    accent: "dark",
  },
]

export function featureGridClass(layout: FeatureLayout): string {
  switch (layout) {
    case "featured":
      return "md:col-span-7 lg:col-span-8"
    case "tall":
      return "md:col-span-5 lg:col-span-4 md:row-span-2"
    case "wide":
      return "md:col-span-6"
    case "compact":
      return "md:col-span-4"
  }
}

export function featureListGridClass(layout: FeatureListLayout): string {
  switch (layout) {
    case "featured":
      return "md:col-span-7 lg:col-span-8 md:row-span-2"
    case "tall":
      return "md:col-span-5 lg:col-span-4 md:row-span-2"
    case "wide":
      return "md:col-span-6"
    case "banner":
      return "md:col-span-12"
    case "compact":
      return "md:col-span-4"
    case "wide-end":
      return "md:col-span-6 md:col-start-7"
  }
}

const listAccentBorder: Record<FeatureAccent, string> = {
  blue: "hover:border-brand-blue/40",
  red: "hover:border-brand-red/40",
  dark: "hover:border-foreground/30",
  neutral: "hover:border-border",
}

const listAccentBadge: Record<FeatureAccent, string> = {
  blue: "bg-brand-blue text-white",
  red: "bg-brand-red text-white",
  dark: "bg-foreground text-background",
  neutral: "bg-muted text-foreground",
}

export function featureListCardClass(
  listLayout: FeatureListLayout,
  accent: FeatureAccent,
): string {
  const base = `group flex h-full rounded-2xl border border-border bg-background transition-all hover:shadow-md ${listAccentBorder[accent]}`

  switch (listLayout) {
    case "featured":
      return `${base} flex-col gap-5 p-6 md:p-8 lg:flex-row lg:items-start`
    case "tall":
      return `${base} flex-col gap-4 p-5 md:p-6`
    case "banner":
      return `${base} flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 md:p-6`
    case "wide":
    case "wide-end":
      return `${base} gap-4 p-5 md:p-6`
    case "compact":
      return `${base} gap-3 p-4 md:gap-4 md:p-5`
  }
}

export function featureListBadgeClass(
  listLayout: FeatureListLayout,
  accent: FeatureAccent,
): string {
  const badge = listAccentBadge[accent]
  const sizes: Record<FeatureListLayout, string> = {
    featured: "size-14 text-lg",
    tall: "size-12 text-base",
    banner: "size-11 text-sm",
    wide: "size-11 text-sm",
    "wide-end": "size-11 text-sm",
    compact: "size-10 text-sm",
  }
  return `flex shrink-0 items-center justify-center rounded-xl font-bold ${badge} ${sizes[listLayout]}`
}

export const audiences = [
  "ISP Fixed Wireless",
  "Fiber & Kabel",
  "Operator Hotspot",
  "Provider Komersial",
]