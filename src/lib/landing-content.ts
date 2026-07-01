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
  { name: "RADIUS", category: "Jaringan", description: "Autentikasi PPPoE & hotspot" },
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

export const pricingSetupDisclaimer = "*Belum termasuk biaya setup"

export const pricingTiers = [
  {
    name: "Evaluasi",
    price: "Gratis",
    priceNote: "30 hari · 1 server · pelanggan tanpa batas",
    description: "Coba semua modul di server Anda sebelum komit lisensi produksi.",
    features: [
      "Installer & dashboard lengkap",
      "Semua 9 modul terintegrasi",
      "Pelanggan tanpa batas selama evaluasi",
      "Cocok untuk lab, staging, & POC",
      "Dukungan email (jam kerja)",
    ],
    cta: "Pasang sekarang",
    ctaHref: "#install",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "Rp 199.000",
    priceNote: "/bulan · 1 server · pelanggan tanpa batas",
    annualPrice: "Rp 1.990.000/tahun (hemat 2 bulan)",
    pricingDisclaimer: pricingSetupDisclaimer,
    description: "Lisensi produksi untuk ISP yang sudah go-live dan butuh update serta dukungan.",
    features: [
      "Pelanggan tanpa batas",
      "Semua 9 modul terintegrasi",
      "Update berkala & patch keamanan",
      "Dukungan prioritas (email + WhatsApp)",
      "Bantuan setup awal",
      "Branding portal pelanggan",
    ],
    cta: "Mulai berlangganan",
    ctaHref: "#kontak",
    highlighted: true,
  },
]

/** Ringkasan untuk kalkulator & asisten — bandingkan dengan SaaS per-pelanggan */
export const pricingComparisonNote =
  `Lisensi flat per server — tanpa batas pelanggan, tanpa biaya per-pelanggan. ${pricingSetupDisclaimer}. Biaya VPS/server ditanggung ISP sendiri.`

export const selfHostReasons = [
  {
    title: "Data tetap di infrastruktur Anda",
    description:
      "Profil pelanggan, tagihan, log sesi, dan riwayat pembayaran disimpan di server yang Anda kelola — bukan di cloud pihak ketiga yang tidak Anda kontrol.",
  },
  {
    title: "Dekat dengan jaringan & RADIUS",
    description:
      "Billing dan kontrol akses berjalan di lingkungan yang sama dengan NAS, MikroTik, dan RADIUS. Isolir pelanggan dan sinkronisasi sesi jadi lebih cepat dan andal.",
  },
  {
    title: "Operasi tidak bergantung SaaS eksternal",
    description:
      "Gangguan layanan cloud vendor tidak menghentikan operasi harian ISP. Anda tentukan jadwal maintenance, backup, dan kebijakan keamanan sendiri.",
  },
  {
    title: "Cocok dengan stack ISP yang sudah ada",
    description:
      "Kebanyakan operator sudah punya VPS atau dedicated server untuk panel, monitoring, atau RADIUS. Accel Radius masuk ke infrastruktur itu — tanpa migrasi ke platform baru.",
  },
  {
    title: "Evaluasi nyata sebelum komit lisensi",
    description:
      "Pasang di server lab atau staging, uji alur tagihan dan jaringan dengan data Anda sendiri, baru putuskan lisensi produksi setelah yakin cocok.",
  },
  {
    title: "Biaya skala lebih terprediksi",
    description:
      "Model lisensi + server sendiri menghindari biaya per-pelanggan SaaS yang membengkak seiring pertumbuhan. Infrastruktur mengikuti kebutuhan, bukan paket cloud tetap.",
  },
]

export const selfHostTopology = {
  cloud: {
    label: "SaaS cloud",
    subtitle: "Billing jauh dari jaringan operasi",
    flowNote: "Data naik ke internet · sinkron billing–RADIUS sering terputus",
    impacts: [
      { label: "Latency isolir", tone: "bad" as const },
      { label: "Uptime vendor", tone: "bad" as const },
      { label: "Data di luar ISP", tone: "bad" as const },
    ],
  },
  selfHosted: {
    label: "Self-hosted",
    subtitle: "Billing & RADIUS dalam satu lingkungan ISP",
    flowNote: "Alur lokal · isolir & sinkron tagihan berjalan realtime",
    impacts: [
      { label: "Isolir instan", tone: "good" as const },
      { label: "Data lokal", tone: "good" as const },
      { label: "Kontrol penuh", tone: "good" as const },
    ],
  },
}

export const selfHostContrast = {
  cloud: [
    "Data pelanggan di server vendor",
    "Ketergantungan uptime & kebijakan pihak ketiga",
    "Integrasi RADIUS bisa terpisah jauh dari billing",
    "Sulit uji menyeluruh sebelum kontrak tahunan",
  ],
  selfHosted: [
    "Data & backup di server Anda",
    "Kontrol penuh operasi, update, dan keamanan",
    "Billing & RADIUS dalam satu lingkungan jaringan",
    "Evaluasi gratis di server sendiri dulu",
  ],
}

export const systemRequirements = [
  {
    title: "Sistem operasi",
    items: ["Ubuntu 20.04+ atau Debian 11+", "Akses root atau sudo", "Koneksi internet stabil"],
  },
  {
    title: "Spesifikasi minimum",
    items: ["2 vCPU", "4 GB RAM", "40 GB disk SSD", "Port 80/443 terbuka"],
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

export const serverScalingGuide = [
  {
    scale: "Hingga ~200 pelanggan",
    specs: "2 vCPU · 4 GB RAM · 40 GB SSD",
    note: "Cocok untuk evaluasi, lab, atau ISP kecil",
  },
  {
    scale: "200 – 500 pelanggan",
    specs: "4 vCPU · 8 GB RAM · 80 GB SSD",
    note: "Spesifikasi produksi standar",
  },
  {
    scale: "500 – 1.000 pelanggan",
    specs: "4–8 vCPU · 16 GB RAM · SSD 120 GB+",
    note: "Pantau worker & antrian WhatsApp",
  },
  {
    scale: "1.000+ pelanggan",
    specs: "8+ vCPU · 16–32 GB RAM · SSD terpisah untuk DB",
    note: "Naikkan spesifikasi server & backup — hubungi tim jika butuh arsitektur multi-site",
  },
]

export const networkPorts = [
  { port: "80 / 443 (TCP)", purpose: "Dashboard admin, portal pelanggan, dan API — HTTPS disarankan" },
  { port: "1812 / 1813 (UDP)", purpose: "RADIUS autentikasi & accounting, jika NAS mengarah ke server ini" },
]

export const installSteps = [
  "Login ke server Linux (Ubuntu/Debian) dengan akses sudo",
  "Jalankan installer satu baris — arsitektur CPU terdeteksi otomatis (amd64/arm64)",
  "Installer mengunduh rilis terbaru dan menyiapkan layanan (API, worker, WhatsApp) via systemd",
  "Buka dashboard di browser sesuai URL yang muncul di terminal",
  "Lanjut konfigurasi awal: paket internet, gateway, profil RADIUS, template WA, portal",
]

export const postInstallChecklist = [
  "Buat pengguna admin & atur role tim (sales, kasir, support, teknisi)",
  "Definisikan paket internet & siklus tagihan",
  "Hubungkan gateway Tripay atau Duitku",
  "Konfigurasi profil RADIUS & NAS (MikroTik)",
  "Setup akun WhatsApp & template notifikasi",
  "Aktifkan domain + sertifikat TLS untuk portal pelanggan",
  "Jadwalkan backup database",
]

export const teamRoles = [
  { role: "Superadmin", desc: "Akses penuh — pengguna, lisensi, branding, audit log" },
  { role: "Sales", desc: "Tambah pelanggan, paket, dan onboarding" },
  { role: "Kasir", desc: "Catat pembayaran manual & verifikasi transaksi" },
  { role: "Support", desc: "Tangani tiket & komunikasi pelanggan" },
  { role: "Teknisi", desc: "Pantau sesi jaringan, isolir, dan profil bandwidth" },
]

export const licenseComparison = [
  {
    tier: "Evaluasi",
    summary: "Gratis 30 hari — semua 9 modul, pelanggan tanpa batas, 1 server",
    limits: "Bukan lisensi produksi jangka panjang",
  },
  {
    tier: "PRO",
    summary: "Rp 199.000/bulan — pelanggan tanpa batas, update, dukungan prioritas, branding portal",
    limits: "1 server · tahunan Rp 1.990.000 (hemat 2 bulan) · belum termasuk biaya setup",
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
      "Ya. Platform mendukung autentikasi PPPoE/hotspot melalui RADIUS dan integrasi NAS seperti MikroTik — profil bandwidth, sesi aktif, dan isolir dari dashboard.",
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
    question: "Berapa harganya?",
    answer:
      "Evaluasi gratis 30 hari. PRO Rp 199.000/bulan atau Rp 1.990.000/tahun (hemat 2 bulan). Satu lisensi per server, pelanggan tanpa batas. Belum termasuk biaya setup. Biaya VPS/server ditanggung ISP sendiri.",
  },
  {
    question: "Bagaimana model lisensi dan dukungan?",
    answer:
      "Evaluasi gratis 30 hari untuk uji di server Anda. PRO Rp 199.000/bulan (atau Rp 1.990.000/tahun) untuk produksi — pelanggan tanpa batas, update berkala, dan dukungan prioritas. Belum termasuk biaya setup. Butuh lebih dari satu server? Hubungi tim untuk lisensi tambahan.",
  },
  {
    question: "Kenapa harus install di server sendiri, bukan SaaS cloud?",
    answer:
      "Accel Radius dirancang self-hosted agar data pelanggan dan operasi billing–RADIUS tetap di infrastruktur ISP. Anda kontrol backup, keamanan, dan uptime sendiri; bisa evaluasi penuh di server lab sebelum komit lisensi produksi.",
  },
  {
    question: "Berapa spesifikasi server untuk 500 pelanggan?",
    answer:
      "Untuk ~500 pelanggan, rekomendasi produksi: 4 vCPU, 8 GB RAM, SSD 80 GB+, Ubuntu/Debian, port 80/443 terbuka, dan backup database terjadwal. Skala di atas 1.000 pelanggan biasanya butuh resource lebih besar — naikkan spesifikasi server sesuai panduan skala.",
  },
  {
    question: "Port apa yang harus dibuka di firewall?",
    answer:
      "Minimum: TCP 80 dan 443 untuk dashboard admin, portal pelanggan, dan API. Jika RADIUS di server yang sama: UDP 1812 (auth) dan 1813 (accounting). Pastikan NAS/MikroTik bisa menjangkau server RADIUS Anda.",
  },
  {
    question: "Apakah bisa dipasang di VPS?",
    answer:
      "Ya. Accel Radius cocok di VPS cloud (DigitalOcean, Vultr, IDCloudHost, dll.) atau dedicated server ISP. Yang penting: Linux Ubuntu/Debian, sudo, internet stabil, dan spesifikasi memenuhi minimum 2 vCPU / 4 GB RAM.",
  },
  {
    question: "Bagaimana cara backup database?",
    answer:
      "Backup database adalah tanggung jawab operator. Jadwalkan dump/backup rutin sebelum update atau perubahan besar. Jalankan ulang installer yang sama untuk upgrade — selalu backup dulu. Butuh bantuan migrasi? Hubungi tim dukungan.",
  },
  {
    question: "Apakah isolir pelanggan otomatis?",
    answer:
      "Ya. Tagihan dan kontrol akses terhubung — pelanggan menunggak bisa diisolir dari dashboard, dan sesi PPPoE/hotspot diputus lewat integrasi RADIUS. Tim teknisi memantau sesi aktif tanpa bolak-balik ke MikroTik manual.",
  },
  {
    question: "Bisakah migrasi dari billing lama?",
    answer:
      "Modul pelanggan mendukung impor/ekspor massal. Untuk migrasi besar dari sistem lain, hubungi tim dukungan — kami bantu scope dan jadwal sesuai kebutuhan.",
  },
  {
    question: "Role pengguna apa saja yang didukung?",
    answer:
      "Superadmin (akses penuh), Sales (onboarding pelanggan), Kasir (pembayaran), Support (tiket), dan Teknisi (jaringan & isolir). Semua role bekerja dari satu dashboard realtime.",
  },
  {
    question: "Apakah perlu domain dan SSL?",
    answer:
      "Tidak wajib untuk evaluasi awal, tetapi sangat disarankan untuk produksi: domain kustom + sertifikat TLS agar portal pelanggan aman dan terpercaya. Konfigurasi dari panel admin setelah instalasi.",
  },
  {
    question: "Bagaimana pasang versi rilis tertentu?",
    answer:
      'Set variabel ACCELRAD_RELEASE_BASE_URL ke URL rilis GitHub sebelum menjalankan installer, contoh: ACCELRAD_RELEASE_BASE_URL="https://github.com/Accel-Radius/radius/releases/download/v1.0.0" curl -fsSL .../install.sh | sudo bash. Detail di halaman Changelog.',
  },
  {
    question: "Apakah mendukung server ARM?",
    answer:
      "Ya. Installer mendeteksi arsitektur CPU secara otomatis (amd64 dan arm64) lalu mengunduh paket rilis yang sesuai.",
  },
  {
    question: "Bagaimana setup MikroTik dengan RADIUS?",
    answer:
      "Buat profil bandwidth & paket internet di dashboard, arahkan NAS MikroTik ke server RADIUS Accel Radius (UDP 1812/1813), lalu uji autentikasi PPPoE atau hotspot. Sesi aktif dan isolir dikelola dari modul Jaringan & RADIUS.",
  },
  {
    question: "Apa beda paket Evaluasi dan PRO?",
    answer:
      "Evaluasi: gratis 30 hari, semua modul, pelanggan tanpa batas — cocok lab/staging/POC. PRO: Rp 199.000/bulan, lisensi produksi, pelanggan tanpa batas, update berkala, dukungan prioritas, branding portal, dan bantuan setup awal. Belum termasuk biaya setup. Bayar tahunan Rp 1.990.000 menghemat 2 bulan.",
  },
  {
    question: "Bagaimana setup Tripay atau Duitku?",
    answer:
      "Daftar akun merchant di Tripay atau Duitku, lalu masukkan kredensial gateway di panel admin. Platform mendukung VA, QRIS, dan e-wallet dengan pencocokan transaksi otomatis ke tagihan pelanggan.",
  },
  {
    question: "Apa yang dilakukan setelah instalasi selesai?",
    answer:
      "Buat admin & role tim, definisikan paket internet, hubungkan gateway pembayaran, konfigurasi RADIUS/NAS, setup WhatsApp, aktifkan TLS/domain, dan jadwalkan backup database sebelum go-live produksi.",
  },
  {
    question: "Apakah Accel Radius sama dengan AccelLicense?",
    answer:
      "Tidak. Accel Radius adalah produk billing & operasi ISP yang di-install di server Anda. AccelLicense adalah server lisensi terpisah yang mengelola aktivasi lisensi produk — keduanya bekerja bersama untuk deployment produksi.",
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