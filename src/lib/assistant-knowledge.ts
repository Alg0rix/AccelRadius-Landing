import {
  DOCS_URL,
  INSTALL_SCRIPT,
  RELEASES_URL,
  SALES_EMAIL,
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/brand"
import { audiences, featuresContent } from "@/lib/features-content"
import {
  compareAfter,
  compareBefore,
  faqItems,
  howItWorksSteps,
  installSteps,
  integrations,
  licenseComparison,
  networkPorts,
  postInstallChecklist,
  pricingTiers,
  selfHostReasons,
  serverScalingGuide,
  systemRequirements,
  teamRoles,
  testimonials,
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

const scalingList = serverScalingGuide
  .map((g) => `• **${g.scale}** — ${g.specs}\n  _${g.note}_`)
  .join("\n")

const portsList = networkPorts
  .map((p) => `• **${p.port}** — ${p.purpose}`)
  .join("\n")

const installStepsList = installSteps.map((s, i) => `${i + 1}. ${s}`).join("\n")

const postInstallList = postInstallChecklist.map((s) => `• ${s}`).join("\n")

const rolesList = teamRoles.map((r) => `• **${r.role}** — ${r.desc}`).join("\n")

const licenseList = licenseComparison
  .map((l) => `**${l.tier}:** ${l.summary}`)
  .join("\n\n")

const audienceList = audiences.map((a) => `• ${a}`).join("\n")

const selfHostList = selfHostReasons
  .map((r) => `• **${r.title}** — ${r.description}`)
  .join("\n")

const compareBeforeList = compareBefore.map((s) => `• ${s}`).join("\n")
const compareAfterList = compareAfter.map((s) => `• ${s}`).join("\n")

export const assistantGreeting: AssistantReply = {
  text: `Halo! Saya asisten Accel Radius — siap bantu jawab pertanyaan seputar platform billing & operasi ISP.\n\nSaya bisa jelaskan fitur, spesifikasi server, instalasi, lisensi, RADIUS, gateway pembayaran, dan hal teknis lainnya. Pilih topik di bawah atau ketik pertanyaan Anda.`,
  suggestions: [
    "Apa itu Accel Radius?",
    "Spesifikasi server",
    "Cara install",
    "Port firewall",
    "Berapa harganya?",
    "Setup MikroTik",
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
        text: `Sama-sama! Jika butuh bantuan lebih lanjut, tim kami siap via WhatsApp ${WHATSAPP_DISPLAY} atau email.`,
        links: [
          { label: `WhatsApp ${WHATSAPP_DISPLAY}`, href: WHATSAPP_URL, external: true },
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
        text: `**Accel Radius** adalah platform billing & operasi all-in-one untuk ISP Indonesia.\n\nMenyatukan manajemen pelanggan, tagihan, pembayaran, kontrol akses (RADIUS), WhatsApp, tiket dukungan, laporan, dan portal pelanggan — dalam satu dashboard realtime.\n\n**Cocok untuk:**\n${audienceList}\n\nBukan SaaS cloud — di-install di server Linux Anda sendiri.`,
        links: [{ label: "Lihat fitur", href: "#fitur" }],
        suggestions: ["9 modul apa saja?", "Kenapa self-hosted?", "Spesifikasi server"],
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
    keywords: [
      "pelanggan",
      "customer",
      "import",
      "isolir",
      "profil pelanggan",
      "manajemen pelanggan",
      "ekspor",
      "onboarding",
    ],
    replies: [
      {
        text: "Modul **Manajemen Pelanggan** mencakup profil lengkap, status layanan, riwayat perubahan, impor/ekspor massal, dan kontrol akses. Semua tim melihat data yang sama secara realtime.",
        links: [{ label: "Lihat modul pelanggan", href: "#fitur-01" }],
        suggestions: ["Migrasi data", "Isolir otomatis?"],
      },
    ],
  },
  {
    id: "isolir",
    keywords: [
      "isolir",
      "suspend",
      "blokir",
      "putus sesi",
      "tunggakan",
      "nonaktif",
      "matikan",
      "disconnect",
    ],
    patterns: [/isolir\s+(otomatis|pelanggan)/, /putus\s+sesi/],
    priority: 2,
    replies: [
      {
        text: "**Isolir terintegrasi billing–RADIUS:**\n\n• Pelanggan menunggak bisa diisolir dari dashboard\n• Sesi PPPoE/hotspot diputus via RADIUS\n• Teknisi pantau sesi aktif tanpa login MikroTik manual\n• Setelah bayar, akses bisa diaktifkan kembali\n\nIni salah satu keunggulan utama vs billing terpisah dari RADIUS.",
        links: [{ label: "Modul jaringan", href: "#fitur-04" }],
        suggestions: ["Setup MikroTik", "Modul tagihan"],
      },
    ],
  },
  {
    id: "migrasi",
    keywords: ["migrasi", "pindah", "import data", "billing lama", "excel", "csv", "data lama"],
    replies: [
      {
        text: "Modul pelanggan mendukung **impor/ekspor massal** untuk onboarding cepat.\n\nUntuk migrasi besar dari sistem billing lain, paket **Enterprise** mencakup bantuan onboarding & migrasi data — tim kami bantu scope, jadwal, dan validasi data.",
        links: [{ label: "Hubungi sales", href: "#kontak" }],
        suggestions: ["Paket Enterprise", "Impor pelanggan"],
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
    keywords: [
      "pembayaran",
      "payment",
      "tripay",
      "duitku",
      "qris",
      "virtual account",
      "va",
      "gateway",
      "e-wallet",
      "ewallet",
      "merchant",
    ],
    replies: [
      {
        text: "Modul **Pembayaran Online** terintegrasi dengan **Tripay** dan **Duitku** — VA, QRIS, e-wallet. Pencocokan transaksi berjalan otomatis ke tagihan pelanggan.\n\n**Setup:** daftar merchant di Tripay/Duitku → masukkan API key/kredensial di panel admin → uji transaksi dari portal pelanggan.",
        links: [{ label: "Lihat modul pembayaran", href: "#fitur-03" }],
        suggestions: ["Portal pelanggan", "Modul tagihan"],
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
      "autentikasi",
      "routeros",
    ],
    replies: [
      {
        text: "Modul **Jaringan & RADIUS** mengatur profil internet, sesi PPPoE, autentikasi, dan putus sesi dari dashboard. Terintegrasi **RADIUS** & **MikroTik**.",
        links: [{ label: "Lihat modul jaringan", href: "#fitur-04" }],
        suggestions: ["Setup MikroTik", "Port RADIUS"],
      },
    ],
  },
  {
    id: "mikrotik-setup",
    keywords: ["mikrotik", "routeros", "nas", "setup mikrotik", "konfigurasi mikrotik"],
    patterns: [/setup\s+mikrotik/, /mikrotik\s+(radius|pppoe)/],
    priority: 2,
    replies: [
      {
        text: "**Setup MikroTik + RADIUS:**\n\n1. Buat paket internet & profil bandwidth di dashboard Accel Radius\n2. Catat IP server RADIUS dan secret dari panel admin\n3. Di MikroTik: tambah RADIUS client → arahkan ke server (UDP 1812/1813)\n4. Uji autentikasi PPPoE atau hotspot dengan akun pelanggan\n5. Pantau sesi aktif & isolir dari modul Jaringan\n\nPastikan firewall mengizinkan UDP 1812/1813 dari NAS ke server.",
        links: [
          { label: "Modul jaringan", href: "#fitur-04" },
          { label: "Port firewall", href: "#persyaratan" },
        ],
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
        text: `**Instalasi satu perintah** (Ubuntu/Debian):\n\n\`${INSTALL_SCRIPT}\`\n\n**Alur:**\n${installStepsList}\n\nButuh: sudo, internet stabil, spesifikasi minimum 2 vCPU / 4 GB RAM.`,
        links: [
          { label: "Section install", href: "#install" },
          { label: "Dokumentasi", href: DOCS_URL, external: true },
        ],
        suggestions: ["Setelah instalasi", "Spesifikasi server", "Pasang versi tertentu"],
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
      "ssd",
      "disk",
      "hardware",
      "infra",
      "infrastruktur",
    ],
    patterns: [/spec\s+server/, /spesifikasi\s+server/, /berapa\s+ram/],
    priority: 3,
    replies: [
      {
        text: `**Persyaratan sistem:**\n\n${requirementsList}\n\n**Panduan skala pelanggan:**\n${scalingList}`,
        links: [{ label: "Detail persyaratan", href: "#persyaratan" }],
        suggestions: ["Port firewall", "Bisa di VPS?", "500 pelanggan butuh apa?"],
      },
    ],
  },
  {
    id: "scaling",
    keywords: [
      "skala",
      "500 pelanggan",
      "1000 pelanggan",
      "ribuan",
      "besar",
      "enterprise scale",
      "berapa vcpu",
      "berapa ram",
    ],
    patterns: [
      /\d+\s*(pelanggan|customer)/,
      /server\s+untuk\s+\d+/,
      /butuh\s+berapa\s+(ram|vcpu)/,
    ],
    priority: 2,
    replies: [
      {
        text: `**Panduan spesifikasi per skala:**\n\n${scalingList}\n\n**Minimum absolut:** 2 vCPU, 4 GB RAM, 40 GB SSD, Ubuntu/Debian.\n**Produksi umum:** 4 vCPU, 8 GB RAM, SSD 80 GB+, backup terjadwal.`,
        links: [{ label: "Persyaratan", href: "#persyaratan" }],
        suggestions: ["Paket Enterprise", "Port firewall"],
      },
    ],
  },
  {
    id: "vps",
    keywords: ["vps", "cloud", "digitalocean", "vultr", "idcloudhost", "dedicated", "vm", "virtual"],
    replies: [
      {
        text: "Accel Radius **cocok di VPS** maupun dedicated server.\n\nYang penting:\n• Ubuntu 20.04+ atau Debian 11+\n• Akses sudo\n• Internet stabil\n• Spesifikasi sesuai skala pelanggan\n• Port 80/443 (dan UDP 1812/1813 jika RADIUS di server yang sama)\n\nBanyak ISP sudah punya VPS untuk panel/RADIUS — Accel Radius masuk ke stack itu.",
        suggestions: ["Spesifikasi server", "Port firewall"],
      },
    ],
  },
  {
    id: "ports",
    keywords: [
      "port",
      "firewall",
      "1812",
      "1813",
      "udp",
      "tcp",
      "443",
      "80",
      "iptables",
      "ufw",
    ],
    patterns: [/port\s+(apa|berapa)/, /buka\s+port/, /firewall/],
    priority: 2,
    replies: [
      {
        text: `**Port yang perlu dibuka:**\n\n${portsList}\n\nPastikan NAS/MikroTik bisa reach server RADIUS. Dashboard & portal pelanggan memakai HTTP/HTTPS (80/443).`,
        links: [{ label: "Persyaratan", href: "#persyaratan" }],
        suggestions: ["Setup MikroTik", "Domain & SSL"],
      },
    ],
  },
  {
    id: "tls",
    keywords: [
      "ssl",
      "tls",
      "https",
      "sertifikat",
      "domain",
      "subdomain",
      "letsencrypt",
      "certbot",
    ],
    replies: [
      {
        text: "**Domain & TLS** tidak wajib untuk evaluasi awal, tapi **sangat disarankan produksi**.\n\nPortal pelanggan dengan HTTPS meningkatkan kepercayaan saat bayar tagihan online. Konfigurasi domain dan sertifikat dari panel admin setelah instalasi.",
        suggestions: ["Setup Tripay", "Portal pelanggan"],
      },
    ],
  },
  {
    id: "backup",
    keywords: ["backup", "cadangan", "restore", "dump", "database", "pg_dump", "recovery"],
    replies: [
      {
        text: "**Backup database** adalah tanggung jawab operator ISP.\n\n• Jadwalkan backup rutin (harian/mingguan)\n• **Selalu backup sebelum update** — jalankan ulang installer yang sama untuk upgrade\n• Simpan cadangan di lokasi terpisah dari server produksi\n\nPaket Enterprise bisa bantu prosedur migrasi & recovery.",
        links: [{ label: "Changelog & upgrade", href: "/changelog" }],
        suggestions: ["Cara update", "Paket Enterprise"],
      },
    ],
  },
  {
    id: "postinstall",
    keywords: [
      "setelah install",
      "setelah instalasi",
      "first setup",
      "konfigurasi awal",
      "go live",
      "produksi",
      "checklist",
    ],
    patterns: [/setelah\s+(install|instalasi|pasang)/, /langkah\s+selanjutnya/],
    priority: 2,
    replies: [
      {
        text: `**Checklist setelah instalasi:**\n\n${postInstallList}`,
        links: [{ label: "Alur cara kerja", href: "#cara-kerja" }],
        suggestions: ["Setup MikroTik", "Setup Tripay", "Role pengguna"],
      },
    ],
  },
  {
    id: "roles",
    keywords: ["role", "peran", "kasir", "sales", "teknisi", "superadmin", "pengguna", "tim", "akses"],
    replies: [
      {
        text: `**Role pengguna yang didukung:**\n\n${rolesList}\n\nSemua role bekerja dari satu dashboard — tidak perlu akun terpisah per aplikasi.`,
        links: [{ label: "Modul admin", href: "#fitur-09" }],
      },
    ],
  },
  {
    id: "arm",
    keywords: ["arm", "arm64", "aarch64", "raspberry", "oracle arm", "graviton"],
    replies: [
      {
        text: "Installer **mendeteksi arsitektur CPU otomatis** — mendukung **amd64** dan **arm64**. Server ARM (mis. Oracle Ampere, AWS Graviton) bisa dipakai selama OS Ubuntu/Debian dan spesifikasi memadai.",
        suggestions: ["Cara install", "Spesifikasi server"],
      },
    ],
  },
  {
    id: "release-version",
    keywords: [
      "versi tertentu",
      "rilis tertentu",
      "accelrad_release",
      "downgrade",
      "pin version",
      "v1",
    ],
    patterns: [/versi\s+(tertentu|spesifik)/, /accelrad_release_base_url/],
    replies: [
      {
        text: 'Pasang **versi rilis tertentu** dengan set variabel sebelum installer:\n\n`ACCELRAD_RELEASE_BASE_URL="https://github.com/Accel-Radius/radius/releases/download/v1.0.0" curl -fsSL https://raw.githubusercontent.com/Accel-Radius/radius/main/install.sh | sudo bash`\n\nGanti URL ke tag rilis yang diinginkan. Backup database dulu.',
        links: [
          { label: "Changelog", href: "/changelog" },
          { label: "Semua rilis", href: RELEASES_URL, external: true },
        ],
      },
    ],
  },
  {
    id: "services",
    keywords: [
      "systemd",
      "worker",
      "background",
      "antrian",
      "queue",
      "layanan",
      "service",
      "api",
      "proses latar",
    ],
    replies: [
      {
        text: "Accel Radius berjalan sebagai **layanan systemd** di server Anda:\n\n• **API** — dashboard admin & portal\n• **Worker** — tagihan terjadwal, isolir, antrian\n• **WhatsApp** — notifikasi & broadcast\n\nInstaller menyiapkan semua ini otomatis. Pantau status dari server Linux (`systemctl`) atau panel admin.",
        links: [{ label: "Integrasi", href: "#integrasi" }],
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
        suggestions: ["Beda Evaluasi vs Profesional?", "Paket Enterprise", "Hubungi sales"],
      },
    ],
  },
  {
    id: "license-tiers",
    keywords: [
      "evaluasi",
      "profesional",
      "enterprise",
      "beda paket",
      "perbedaan paket",
      "trial",
      "demo",
    ],
    patterns: [/beda\s+(evaluasi|profesional|paket)/, /evaluasi\s+vs/],
    priority: 2,
    replies: [
      {
        text: `**Perbandingan paket lisensi:**\n\n${licenseList}`,
        links: [{ label: "Lihat harga", href: "#harga" }],
        suggestions: ["Evaluasi gratis?", "Hubungi sales"],
      },
    ],
  },
  {
    id: "evaluasi",
    keywords: ["evaluasi gratis", "coba gratis", "trial", "staging", "lab", "poc"],
    replies: [
      {
        text: "**Evaluasi gratis:** pasang di server Anda dengan installer — semua 9 modul aktif, cocok untuk lab/staging/POC.\n\nBukan lisensi produksi jangka panjang. Setelah yakin, upgrade ke **Profesional** atau **Enterprise** untuk dukungan, update berkala, dan go-live resmi.",
        links: [{ label: "Pasang sekarang", href: "#install" }],
        suggestions: ["Beda dengan Profesional?", "Spesifikasi server"],
      },
    ],
  },
  {
    id: "enterprise",
    keywords: [
      "enterprise",
      "multi site",
      "multisite",
      "multi-tenant",
      "sla",
      "onboarding",
      "skala besar",
      "operator besar",
    ],
    replies: [
      {
        text: "**Paket Enterprise** untuk operator multi-site atau skala besar:\n\n• Multi-tenant & multi-site\n• SLA & channel dukungan khusus\n• Onboarding & migrasi data\n• Integrasi custom sesuai kebutuhan\n• Arsitektur server disesuaikan skala\n\nHarga kustom — hubungi tim sales untuk penawaran.",
        links: [{ label: "Form kontak", href: "#kontak" }],
      },
    ],
  },
  {
    id: "accellicense",
    keywords: [
      "accellicense",
      "accel license",
      "server lisensi",
      "aktivasi",
      "license server",
      "lisensi server",
    ],
    replies: [
      {
        text: "**Accel Radius** = produk billing & operasi ISP (di-install di server Anda).\n\n**AccelLicense** = server lisensi terpisah yang mengelola aktivasi & kepatuhan lisensi produk.\n\nKeduanya bekerja bersama untuk deployment produksi — Radius menjalankan operasi harian, AccelLicense mengelola lisensi.",
      },
    ],
  },
  {
    id: "audience",
    keywords: ["ftth", "fiber", "wireless", "hotspot", "fixed wireless", "kabel", "komersial"],
    replies: [
      {
        text: `Accel Radius ditujukan untuk:\n\n${audienceList}\n\nPlatform menangani PPPoE, hotspot, tagihan berkala, gateway lokal (Tripay/Duitku), dan komunikasi WhatsApp — pola operasi umum ISP Indonesia.`,
        suggestions: ["Fitur lengkap", "Setup MikroTik"],
      },
    ],
  },
  {
    id: "testimonials",
    keywords: ["testimoni", "review", "pengalaman", "operator lain", "case study", "bukti"],
    replies: [
      {
        text: testimonials
          .map(
            (t) =>
              `_"${t.quote}"_\n— ${t.role}, ${t.region} (${t.scale})`,
          )
          .join("\n\n"),
        suggestions: ["Kenapa self-hosted?", "Fitur apa saja?"],
      },
    ],
  },
  {
    id: "selfhost",
    keywords: [
      "server sendiri",
      "self host",
      "self-hosted",
      "saas",
      "cloud",
      "kenapa install",
      "mengapa install",
      "harus install",
      "di server",
      "on premise",
      "on-premise",
      "infrastruktur sendiri",
    ],
    patterns: [
      /kenapa\s+(harus\s+)?install/,
      /mengapa\s+(harus\s+)?(install|pasang)/,
      /server\s+sendiri/,
      /bukan\s+saas/,
    ],
    priority: 3,
    replies: [
      {
        text: `**Accel Radius bukan SaaS cloud** — dirancang di-install di server ISP Anda.\n\n${selfHostList}`,
        links: [{ label: "Mengapa self-hosted", href: "#mengapa-self-host" }],
        suggestions: ["Spesifikasi server", "Pasang sekarang", "Model lisensi"],
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
        text: `**Tanpa Accel Radius:**\n${compareBeforeList}\n\n**Dengan Accel Radius:**\n${compareAfterList}`,
        links: [{ label: "Bandingkan", href: "#bandingkan" }],
        suggestions: ["Fitur lengkap", "Isolir otomatis?"],
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
        text: `Tim siap bantu evaluasi, demo, dan lisensi.\n\n• WhatsApp: ${WHATSAPP_DISPLAY}\n• Sales: ${SALES_EMAIL}\n• Support: ${SUPPORT_EMAIL}`,
        links: [
          { label: "Form kontak", href: "#kontak" },
          { label: `WhatsApp ${WHATSAPP_DISPLAY}`, href: WHATSAPP_URL, external: true },
        ],
        suggestions: ["Spesifikasi server", "Paket Enterprise"],
      },
    ],
  },
  {
    id: "docs",
    keywords: ["dokumentasi", "docs", "panduan", "manual"],
    replies: [
      {
        text: "Dokumentasi instalasi, persyaratan, dan ringkasan fitur ada di repositori GitHub. Changelog & prosedur upgrade ada di situs ini.",
        links: [
          { label: "Dokumentasi", href: DOCS_URL, external: true },
          { label: "Rilis", href: RELEASES_URL, external: true },
          { label: "Changelog", href: "/changelog" },
        ],
      },
    ],
  },
  {
    id: "branding",
    keywords: ["branding", "logo", "warna", "white label", "kustomisasi", "tampilan"],
    replies: [
      {
        text: "Paket **Profesional** dan **Enterprise** mendukung **branding portal pelanggan** — sesuaikan tampilan portal agar selaras dengan brand ISP Anda. Konfigurasi dari modul Operasi & Administrasi.",
        links: [{ label: "Paket harga", href: "#harga" }],
      },
    ],
  },
  {
    id: "troubleshoot",
    keywords: [
      "error",
      "gagal",
      "tidak bisa",
      "masalah",
      "troubleshoot",
      "debug",
      "installer gagal",
    ],
    replies: [
      {
        text: "**Tips troubleshooting instalasi:**\n\n• Pastikan OS Ubuntu 20.04+ / Debian 11+ dengan sudo\n• Cek koneksi internet server (installer unduh rilis)\n• Pastikan port 80/443 tidak dipakai layanan lain\n• Cek spesifikasi minimum (2 vCPU, 4 GB RAM)\n• Lihat log installer di terminal untuk pesan error\n\nJika masih gagal, hubungi support dengan screenshot log + spesifikasi server.",
        links: [
          { label: "WhatsApp support", href: WHATSAPP_URL, external: true },
          { label: "Dokumentasi", href: DOCS_URL, external: true },
        ],
      },
    ],
  },
  {
    id: "legal",
    keywords: ["lisensi tertutup", "hak cipta", "syarat", "kebijakan", "privasi", "legal"],
    replies: [
      {
        text: "Accel Radius adalah **perangkat lunak berlisensi tertutup** — kode sumber tidak dibuka. Penggunaan produksi memerlukan lisensi valid.\n\nOperator bertanggung jawab atas backup data, kepatuhan regulasi, dan konfigurasi infrastruktur server.",
        links: [
          { label: "Syarat penggunaan", href: "/terms" },
          { label: "Kebijakan privasi", href: "/privacy" },
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