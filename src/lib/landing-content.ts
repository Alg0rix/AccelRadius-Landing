export const howItWorksSteps = [
  {
    step: "01",
    title: "Pasang di server",
    description:
      "Jalankan installer di Ubuntu atau Debian. Layanan terdeteksi otomatis dan dikonfigurasi untuk produksi.",
  },
  {
    step: "02",
    title: "Konfigurasi awal",
    description:
      "Atur paket internet, gateway pembayaran, profil RADIUS, template WhatsApp, dan portal pelanggan dari dashboard.",
  },
  {
    step: "03",
    title: "Operasikan harian",
    description:
      "Tim sales, kasir, support, dan teknisi bekerja dari satu sistem — tagihan, sesi, tiket, dan laporan realtime.",
  },
]

export const compareBefore = [
  "Data pelanggan tersebar di spreadsheet",
  "Billing dan RADIUS di aplikasi terpisah",
  "Reminder WhatsApp dikirim manual",
  "Laporan disusun tiap akhir bulan",
  "Tim tidak punya satu sumber kebenaran",
]

export const compareAfter = [
  "Profil pelanggan terpusat dan realtime",
  "Tagihan terhubung langsung ke kontrol akses",
  "Notifikasi WhatsApp terjadwal & broadcast",
  "Dashboard pendapatan dan tungakan siap pakai",
  "Semua modul dalam satu platform",
]

export const integrations = [
  { name: "Tripay", category: "Pembayaran", description: "Virtual account & QRIS" },
  { name: "Duitku", category: "Pembayaran", description: "Multi-channel payment" },
  { name: "FreeRADIUS", category: "Jaringan", description: "Autentikasi PPPoE & hotspot" },
  { name: "MikroTik", category: "Jaringan", description: "NAS & profil bandwidth" },
  { name: "WhatsApp", category: "Notifikasi", description: "Tagihan, reminder, broadcast" },
  { name: "Systemd", category: "Infrastruktur", description: "Layanan API, worker, WA" },
]

export const testimonials = [
  {
    quote:
      "Tagihan dan isolir pelanggan akhirnya sinkron. Tim support tidak perlu bolak-balik cek tiga aplikasi berbeda.",
    role: "Operator FTTH",
    region: "Jawa Tengah",
    scale: "~180 pelanggan",
  },
  {
    quote:
      "Sesi PPPoE dan status pembayaran kami lihat dari satu dashboard. Onboarding pelanggan baru jauh lebih cepat.",
    role: "ISP Wireless",
    region: "Sumatera",
    scale: "~420 pelanggan",
  },
  {
    quote:
      "Reminder WhatsApp terjadwal mengurangi tunggakan bulanan. Laporan keuangan langsung siap untuk review manajemen.",
    role: "Provider Komersial",
    region: "Jabodetabek",
    scale: "~650 pelanggan",
  },
]

export const pricingTiers = [
  {
    name: "Evaluasi",
    price: "Gratis pasang",
    description: "Coba di server Anda sendiri sebelum komit lisensi produksi.",
    features: [
      "Installer & dashboard lengkap",
      "Semua 9 modul terintegrasi",
      "Cocok untuk lab & staging",
      "Dukungan email standar",
    ],
    cta: "Pasang sekarang",
    ctaHref: "#install",
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "Hubungi kami",
    description: "Lisensi produksi untuk ISP yang sudah berjalan dan butuh stabilitas.",
    features: [
      "Lisensi produksi & update berkala",
      "Dukungan prioritas",
      "Bantuan konfigurasi awal",
      "Branding portal pelanggan",
    ],
    cta: "Minta penawaran",
    ctaHref: "#kontak",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Kustom",
    description: "Untuk operator multi-site atau kebutuhan SLA dan onboarding khusus.",
    features: [
      "Skala besar & multi-tenant",
      "SLA & channel dukungan khusus",
      "Onboarding & migrasi data",
      "Kebutuhan integrasi kustom",
    ],
    cta: "Hubungi sales",
    ctaHref: "#kontak",
    highlighted: false,
  },
]

export const systemRequirements = [
  {
    title: "Sistem operasi",
    items: ["Ubuntu 20.04+ atau Debian 11+", "Akses root atau sudo", "Koneksi internet stabil"],
  },
  {
    title: "Spesifikasi minimum",
    items: ["2 vCPU", "4 GB RAM", "40 GB disk", "Port 80/443 terbuka"],
  },
  {
    title: "Rekomendasi produksi",
    items: ["4 vCPU", "8 GB RAM", "SSD 80 GB+", "Backup database terjadwal"],
  },
  {
    title: "Opsional",
    items: ["Domain & sertifikat TLS", "Gateway Tripay atau Duitku", "Akun WhatsApp Business"],
  },
]

export const faqItems = [
  {
    question: "Apakah kode sumber Accel Radius terbuka?",
    answer:
      "Tidak. Accel Radius adalah perangkat lunak berlisensi tertutup. Repositori publik berisi installer, rilis, dan dokumentasi instalasi.",
  },
  {
    question: "OS server apa yang didukung?",
    answer:
      "Installer dirancang untuk Ubuntu dan Debian di server Linux. Pastikan Anda memiliki akses sudo dan koneksi internet untuk mengunduh rilis terbaru.",
  },
  {
    question: "Bagaimana cara memperbarui ke versi terbaru?",
    answer:
      "Jalankan ulang perintah installer yang sama. Disarankan mencadangkan database sebelum update. Detail ada di halaman Changelog.",
  },
  {
    question: "Gateway pembayaran apa yang didukung?",
    answer:
      "Accel Radius terintegrasi dengan Tripay dan Duitku untuk virtual account, QRIS, dan kanal pembayaran lainnya. Pencocokan transaksi berjalan otomatis.",
  },
  {
    question: "Apakah RADIUS dan MikroTik didukung?",
    answer:
      "Ya. Platform mendukung autentikasi PPPoE/hotspot melalui FreeRADIUS dan integrasi NAS seperti MikroTik — profil bandwidth, sesi aktif, dan isolir dari dashboard.",
  },
  {
    question: "Bagaimana setup notifikasi WhatsApp?",
    answer:
      "Modul WhatsApp mendukung multi-akun, template pesan, reminder terjadwal, dan broadcast massal. Konfigurasi dilakukan dari panel admin setelah instalasi.",
  },
  {
    question: "Apakah pelanggan punya portal mandiri?",
    answer:
      "Ya. Portal klien memungkinkan pelanggan cek tagihan, bayar online, dan buat tiket dukungan dari perangkat mobile maupun desktop.",
  },
  {
    question: "Bagaimana model lisensi dan dukungan?",
    answer:
      "Evaluasi gratis via installer di server Anda. Untuk produksi, lisensi Profesional dan Enterprise tersedia dengan dukungan dan update — hubungi tim kami untuk penawaran.",
  },
]

export const resourceLinks = [
  {
    title: "Dokumentasi",
    description: "Panduan instalasi, persyaratan, dan ringkasan fitur di repositori rilis.",
    hrefKey: "docs" as const,
    label: "Buka dokumentasi",
  },
  {
    title: "Rilis & versi",
    description: "Unduh rilis terbaru dan lihat catatan perubahan setiap versi.",
    hrefKey: "releases" as const,
    label: "Lihat rilis",
  },
  {
    title: "Changelog",
    description: "Ringkasan pembaruan dan prosedur upgrade di situs ini.",
    hrefKey: "changelog" as const,
    label: "Buka changelog",
  },
]