import { featuresContent } from "./features-content"

export interface FeaturePageSection {
  heading: string
  paragraphs: string[]
}

export interface FeaturePageContent {
  slug: string
  metaDescription: string
  intro: string
  sections: FeaturePageSection[]
  relatedSlugs: string[]
}

const pageContent: Record<string, Omit<FeaturePageContent, "slug">> = {
  pelanggan: {
    metaDescription:
      "Modul manajemen pelanggan ISP — profil terpusat, impor massal, status layanan, dan isolir terhubung billing Accel Radius.",
    intro:
      "Manajemen pelanggan adalah fondasi setiap sistem billing ISP. Tanpa profil terpusat, tim sales, kasir, support, dan teknisi bekerja dari data yang berbeda — tagihan salah, isolir terlambat, dan onboarding lambat.",
    sections: [
      {
        heading: "Profil pelanggan lengkap dalam satu database",
        paragraphs: [
          "Setiap pelanggan disimpan dengan identitas tunggal: kontak, alamat instalasi, paket aktif, username PPPoE, tanggal aktivasi, dan status layanan. Perubahan dicatat sehingga audit internal dan penyelesaian sengketa tagihan lebih mudah.",
          "Role sales menambah pelanggan baru; kasir melihat riwayat pembayaran; teknisi memeriksa status isolir — semua dari dashboard yang sama tanpa mengekspor spreadsheet.",
        ],
      },
      {
        heading: "Impor dan ekspor massal",
        paragraphs: [
          "Migrasi dari billing lama atau spreadsheet dimulai dengan impor CSV. Map kolom ke field sistem, validasi sampel, lalu go-live. Ekspor massal membantu backup data pelanggan atau integrasi dengan tools analitik eksternal.",
        ],
      },
      {
        heading: "Isolir terhubung status layanan",
        paragraphs: [
          "Status tunggakan atau suspend langsung memengaruhi akses jaringan ketika modul RADIUS aktif. Teknisi tidak perlu cek billing terpisah — status di profil pelanggan adalah sumber kebenaran untuk operasi harian.",
        ],
      },
    ],
    relatedSlugs: ["tagihan", "jaringan", "portal"],
  },
  tagihan: {
    metaDescription:
      "Modul tagihan dan faktur ISP — siklus otomatis, prorata, reminder, dan integrasi pembayaran dalam platform billing Accel Radius.",
    intro:
      "Tagihan adalah denyut operasional ISP. Modul ini mengotomatiskan pembuatan faktur, mengelola siklus penagihan, dan memastikan pelanggan menerima pengingat sebelum jatuh tempo.",
    sections: [
      {
        heading: "Siklus tagihan fleksibel",
        paragraphs: [
          "Dukungan tagihan bulanan, per 30 hari, atau kustom sesuai kebijakan ISP. Prorata otomatis saat upgrade paket di tengah siklus — menghindarkan perhitungan manual yang rawan salah.",
        ],
      },
      {
        heading: "Faktur manual dan massal",
        paragraphs: [
          "Selain tagihan rutin, admin dapat membuat faktur manual untuk biaya instalasi, denda, atau penyesuaian khusus. Kirim notifikasi lewat WhatsApp atau arahkan pelanggan ke portal untuk pembayaran.",
        ],
      },
      {
        heading: "Reminder terjadwal",
        paragraphs: [
          "Pengingat T-3 hari, H+1, dan H+7 dapat diotomatisasi. Kombinasi dengan modul WhatsApp menurunkan tunggakan tanpa menambah beban tim support.",
        ],
      },
    ],
    relatedSlugs: ["pembayaran", "whatsapp", "pelanggan"],
  },
  pembayaran: {
    metaDescription:
      "Pembayaran online ISP — integrasi Tripay dan Duitku, virtual account, QRIS, dan pencocokan transaksi otomatis Accel Radius.",
    intro:
      "Modul pembayaran menghubungkan tagihan ke kanal digital yang dipakai pelanggan Indonesia: virtual account, QRIS, dan e-wallet melalui gateway Tripay atau Duitku.",
    sections: [
      {
        heading: "Pencocokan transaksi otomatis",
        paragraphs: [
          "Setiap pembayaran masuk dicocokkan ke tagihan yang benar. Kasir tidak perlu verifikasi manual satu per satu — status lunas terupdate realtime dan memicu buka blokir jaringan jika sebelumnya isolir.",
        ],
      },
      {
        heading: "Multi-channel payment",
        paragraphs: [
          "Dukungan VA berbagai bank, QRIS, dan kanal e-wallet sesuai konfigurasi merchant gateway. Pelanggan membayar dari HP; admin memantau dari dashboard.",
        ],
      },
    ],
    relatedSlugs: ["tagihan", "portal", "laporan"],
  },
  jaringan: {
    metaDescription:
      "Modul jaringan dan billing RADIUS MikroTik — autentikasi PPPoE, accounting, profil bandwidth, dan isolir dari dashboard ISP.",
    intro:
      "Integrasi RADIUS adalah pembeda platform billing ISP yang serius. Modul jaringan Accel Radius menghubungkan status tagihan ke autentikasi PPPoE dan hotspot di MikroTik.",
    sections: [
      {
        heading: "RADIUS terintegrasi billing",
        paragraphs: [
          "Server RADIUS berjalan dalam lingkungan yang sama dengan billing — isolir pelanggan menunggak tidak bergantung sinkronisasi cloud eksternal. Latency lebih rendah, kebijakan lebih konsisten.",
        ],
      },
      {
        heading: "Profil bandwidth dan sesi aktif",
        paragraphs: [
          "Definisikan paket internet dan rate-limit dari dashboard. Pantau sesi PPPoE aktif, putus sesi, dan arahkan NAS MikroTik ke server RADIUS dengan UDP 1812/1813.",
        ],
      },
    ],
    relatedSlugs: ["pelanggan", "tagihan", "admin"],
  },
  whatsapp: {
    metaDescription:
      "Notifikasi WhatsApp untuk ISP — template tagihan, reminder terjadwal, dan broadcast massal dari Accel Radius.",
    intro:
      "WhatsApp adalah kanal utama komunikasi ISP dengan pelanggan di Indonesia. Modul ini mendukung multi-akun, template pesan, dan pengiriman terjadwal.",
    sections: [
      {
        heading: "Template dan reminder",
        paragraphs: [
          "Buat template untuk tagihan baru, pengingat jatuh tempo, dan konfirmasi pembayaran. Jadwalkan pengiriman otomatis sesuai siklus penagihan.",
        ],
      },
      {
        heading: "Broadcast massal",
        paragraphs: [
          "Umumkan maintenance jaringan, promosi paket, atau perubahan kebijakan ke ribuan pelanggan sekaligus — tanpa copy-paste manual di chat pribadi.",
        ],
      },
    ],
    relatedSlugs: ["tagihan", "portal", "tiket"],
  },
  tiket: {
    metaDescription:
      "Tiket dukungan ISP — portal pelanggan, penugasan tim support, SLA, dan arsip dari Accel Radius.",
    intro:
      "Modul tiket menghubungkan keluhan pelanggan dari portal ke tim support dengan penugasan, status, dan riwayat percakapan.",
    sections: [
      {
        heading: "Dari portal ke support",
        paragraphs: [
          "Pelanggan membuat tiket dari HP; support membalas dari dashboard. Semua komunikasi terarsip per pelanggan — tidak hilang di chat personal.",
        ],
      },
    ],
    relatedSlugs: ["portal", "whatsapp", "pelanggan"],
  },
  laporan: {
    metaDescription:
      "Laporan dan analitik ISP — pendapatan, pelanggan aktif, tungakan, ekspor CSV/PDF dari Accel Radius.",
    intro:
      "Manajemen ISP butuh angka realtime: pendapatan bulanan, pertumbuhan pelanggan, tungakan per wilayah, dan tren churn — tanpa rekapitulasi spreadsheet.",
    sections: [
      {
        heading: "Dashboard siap pakai",
        paragraphs: [
          "Grafik pendapatan, pelanggan aktif, dan piutang tersedia untuk review harian atau mingguan. Ekspor CSV/PDF untuk laporan ke investor atau mitra.",
        ],
      },
    ],
    relatedSlugs: ["tagihan", "pembayaran", "admin"],
  },
  portal: {
    metaDescription:
      "Portal pelanggan ISP — cek tagihan, bayar online, dan buat tiket dukungan 24/7 dari Accel Radius.",
    intro:
      "Portal klien memberi pelanggan akses mandiri: lihat tagihan, bayar lewat VA/QRIS, dan buat tiket — mengurangi beban admin dan menurunkan tunggakan.",
    sections: [
      {
        heading: "Self-service 24/7",
        paragraphs: [
          "Pelanggan tidak perlu chat admin untuk nominal tagihan. Link pembayaran langsung dari portal; status lunas terupdate otomatis setelah gateway mengonfirmasi transaksi.",
        ],
      },
    ],
    relatedSlugs: ["pembayaran", "tiket", "tagihan"],
  },
  admin: {
    metaDescription:
      "Administrasi platform ISP — pengguna, role, audit log, branding portal, dan lisensi Accel Radius.",
    intro:
      "Modul administrasi mengatur siapa boleh melakukan apa: superadmin, sales, kasir, support, teknisi — dengan audit log untuk jejak perubahan data sensitif.",
    sections: [
      {
        heading: "Role dan audit",
        paragraphs: [
          "Setiap role punya cakupan akses berbeda. Audit log mencatat login, perubahan paket, dan operasi isolir — penting untuk tim multi-orang dan compliance internal.",
        ],
      },
      {
        heading: "Branding dan lisensi",
        paragraphs: [
          "Kustomisasi logo dan warna portal pelanggan. Panel lisensi menampilkan status evaluasi atau PRO untuk deployment produksi.",
        ],
      },
    ],
    relatedSlugs: ["pelanggan", "laporan", "jaringan"],
  },
}

export const featurePages: FeaturePageContent[] = featuresContent.map((feature) => {
  const content = pageContent[feature.slug]
  return {
    slug: feature.slug,
    ...content,
  }
})

export function getFeaturePage(slug: string) {
  const feature = featuresContent.find((f) => f.slug === slug)
  const content = pageContent[slug]
  if (!feature || !content) return undefined
  return { feature, page: { slug, ...content } as FeaturePageContent }
}