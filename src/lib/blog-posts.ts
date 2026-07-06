export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  readTime: string
  paragraphs: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cara-mengelola-billing-isp",
    title: "Cara Mengelola Billing ISP Tanpa Spreadsheet",
    description:
      "Panduan praktis menyatukan pelanggan, tagihan, pembayaran, dan isolir dalam satu sistem billing ISP — untuk operator kecil hingga menengah.",
    publishedAt: "2026-06-15",
    readTime: "6 menit",
    paragraphs: [
      "Operator ISP yang masih mengandalkan spreadsheet untuk daftar pelanggan sering menghadapi masalah yang sama: data tidak sinkron antar tim, tagihan terlewat, dan status pembayaran tidak terhubung ke kontrol akses jaringan. Setiap akhir bulan, kasir dan admin sibuk merekapitulasi manual — padahal waktu itu bisa dipakai untuk penjualan atau perbaikan jaringan.",
      "Langkah pertama menuju billing yang rapi adalah memusatkan profil pelanggan. Setiap pelanggan perlu punya satu identitas: paket aktif, siklus tagihan, riwayat pembayaran, dan status layanan (aktif, isolir, suspend). Ketika data ini hidup di satu database, sales bisa menambah pelanggan baru, kasir mencatat pembayaran tunai, dan teknisi melihat siapa yang menunggak tanpa bertanya ke admin.",
      "Kedua, otomatisasi pembuatan tagihan. Sistem billing ISP yang baik menghasilkan faktur berdasarkan siklus (bulanan, per 30 hari, atau kustom), mendukung prorata saat upgrade paket, dan mengirim pengingat sebelum jatuh tempo. Integrasi gateway pembayaran seperti Tripay atau Duitku memungkinkan pelanggan membayar lewat VA atau QRIS; transaksi yang masuk dicocokkan otomatis ke tagihan yang benar.",
      "Ketiga, hubungkan billing ke kontrol akses. Di ISP berbasis PPPoE atau hotspot, status tunggakan seharusnya memicu isolir lewat RADIUS — bukan prosedur manual di MikroTik. Ketika tagihan dan RADIUS dalam satu platform, isolir dan buka blokir berjalan realtime dari dashboard.",
      "Keempat, laporan yang siap pakai. Pendapatan bulanan, pelanggan aktif, tungakan per wilayah, dan tren churn seharusnya tersedia tanpa pivot table. Manajemen butuh angka ini untuk keputusan harga paket, promosi, dan kapasitas jaringan.",
      "Accel Radius dirancang untuk keempat lapisan ini dalam satu instalasi self-hosted. Evaluasi 30 hari di server Anda memungkinkan tim menguji alur lengkap sebelum migrasi data produksi — tanpa mengunci kontrak tahunan di SaaS cloud.",
    ],
  },
  {
    slug: "cara-setup-radius-mikrotik",
    title: "Cara Setup RADIUS MikroTik untuk Billing ISP",
    description:
      "Langkah menghubungkan MikroTik sebagai NAS ke server RADIUS Accel Radius — autentikasi PPPoE, accounting, dan isolir dari dashboard billing.",
    publishedAt: "2026-06-22",
    readTime: "7 menit",
    paragraphs: [
      "Integrasi RADIUS adalah tulang punggung ISP yang menagih berbasis PPPoE atau hotspot. MikroTik bertindak sebagai NAS (Network Access Server): menerima koneksi pelanggan, meneruskan kredensial ke server RADIUS, dan menerapkan profil bandwidth sesuai respons autentikasi. Tanpa RADIUS terpusat, setiap perubahan paket atau isolir harus dilakukan per router.",
      "Sebelum konfigurasi, pastikan server RADIUS dapat dijangkau dari MikroTik lewat UDP 1812 (autentikasi) dan 1813 (accounting). Jika billing dan RADIUS berjalan di server yang sama — seperti pada deployment Accel Radius — latency isolir minimal karena tidak ada hop cloud eksternal.",
      "Di sisi Accel Radius, definisikan paket internet dan profil bandwidth yang sesuai kebijakan ISP Anda. Setiap pelanggan dikaitkan ke paket; kredensial PPPoE atau voucher hotspot divalidasi terhadap status layanan dan tagihan. Pelanggan menunggak dapat ditandai isolir; sesi aktif diputus lewat CoA atau prosedur disconnect yang didukung NAS.",
      "Di MikroTik, tambahkan entri RADIUS client yang mengarah ke IP server Accel Radius. Aktifkan RADIUS pada profil PPPoE server atau hotspot sesuai topologi jaringan. Gunakan secret yang kuat dan konsisten. Setelah link RADIUS hidup, uji login dengan akun pelanggan uji — pastikan accounting masuk dan profil rate-limit diterapkan.",
      "Accounting RADIUS memberi visibilitas sesi: siapa online, dari NAS mana, berapa lama, dan konsumsi data jika dikonfigurasi. Tim teknisi memantau ini dari modul Jaringan tanpa SSH ke setiap router. Saat pelanggan melunasi tunggakan, buka blokir dari dashboard; MikroTik menerima respons autentikasi berikutnya sebagai pelanggan aktif.",
      "Kesalahan umum: secret tidak cocok, firewall memblokir UDP 1812/1813, atau billing terpisah dari RADIUS sehingga isolir tidak otomatis. Menyatukan keduanya dalam satu platform billing ISP menghilangkan sinkronisasi manual yang rawan human error.",
    ],
  },
  {
    slug: "tips-mengurangi-tunggakan-pelanggan",
    title: "5 Tips Mengurangi Tunggakan Pelanggan ISP",
    description:
      "Strategi operasional dan teknis untuk menurunkan piutang bulanan — dari reminder WhatsApp terjadwal hingga isolir otomatis terhubung RADIUS.",
    publishedAt: "2026-06-28",
    readTime: "5 menit",
    paragraphs: [
      "Tunggakan pelanggan adalah masalah operasional sekaligus arus kas. ISP yang menagih manual lewat chat sering kehilangan ritme: pengingat tidak konsisten, kasir kewalahan, dan isolir tertunda sehingga pelanggan tetap online tanpa bayar. Berikut lima praktik yang terbukti menurunkan piutang.",
      "1. Tagihan otomatis dengan tanggal jatuh tempo yang jelas. Pelanggan yang menerima faktur terstruktur — bukan pesan informal — lebih mudah merencanakan pembayaran. Sertakan link portal atau VA/QRIS langsung di notifikasi.",
      "2. Reminder bertingkat sebelum dan sesudah jatuh tempo. T-3 hari: pengingat ramah. H+1: tegas dengan opsi bayar. H+7: peringatan isolir. Otomasi lewat WhatsApp Business dengan template disetujui mengurangi beban tim support.",
      "3. Portal pelanggan mandiri. Beri akses 24/7 untuk cek tagihan dan bayar online. Banyak tunggakan terjadi karena pelanggan tidak tahu jumlah atau merasa repot menghubungi admin.",
      "4. Isolir terhubung ke jaringan. Kebijakan tanpa teknologi tidak efektif. Hubungkan status tunggakan ke RADIUS sehingga isolir otomatis atau semi-otomatis — konsisten dan tidak bergantung ingatan teknisi.",
      "5. Laporan tungakan per wilayah atau kolektor. Identifikasi pola: pelanggan tertentu, area tertentu, atau paket murah dengan churn tinggi. Data ini membantu keputusan deposit, paket prabayar, atau penyesuaian siklus tagihan.",
      "Operator yang menerapkan keempat lapisan pertama biasanya melihat penurunan tunggakan signifikan dalam dua siklus tagihan. Accel Radius menyediakan modul tagihan, WhatsApp, portal, dan RADIUS dalam satu dashboard — sehingga kebijakan koleksi bisa dieksekusi tanpa lima aplikasi terpisah.",
    ],
  },
  {
    slug: "migrasi-spreadsheet-ke-sistem-billing",
    title: "Migrasi dari Spreadsheet ke Sistem Billing Terpadu",
    description:
      "Checklist migrasi data pelanggan ISP dari Excel/Google Sheets ke platform billing — minim downtime dan tanpa kehilangan riwayat.",
    publishedAt: "2026-07-01",
    readTime: "6 menit",
    paragraphs: [
      "Migrasi dari spreadsheet menakutkan karena data puluhan hingga ratusan pelanggan terasa rapuh. Namun menunda migrasi berarti biaya kesalahan manual terus bertambah: tagihan salah alamat, paket tidak update, dan isolir tidak konsisten. Perencanaan yang baik membuat cutover bisa selesai dalam satu akhir pekan.",
      "Audit data terlebih dahulu. Standarkan kolom: nama, kontak, alamat instalasi, paket, username PPPoE, tanggal aktivasi, dan status. Bersihkan duplikat dan entri kosong. Spreadsheet yang kotor menghasilkan migrasi yang kotor.",
      "Tentukan cutover window. Banyak ISP memilih akhir bulan setelah penagihan siklus lama ditutup. Bekukan perubahan di spreadsheet 48 jam sebelum impor. Komunikasikan ke tim: satu sumber kebenaran baru mulai tanggal X.",
      "Gunakan impor massal ke sistem billing baru. Accel Radius mendukung impor/ekspor pelanggan — map kolom spreadsheet ke field sistem. Setelah impor, validasi sampel acak: 10–20 pelanggan dengan paket, tagihan, dan kredensial jaringan.",
      "Parallel run singkat jika memungkinkan: satu minggu di mana tim masih bisa cek spreadsheet lama sebagai referensi, tetapi semua operasi baru masuk ke sistem. Setelah yakin, arsipkan spreadsheet dan cabut akses edit.",
      "Untuk migrasi besar (500+ pelanggan) atau integrasi kompleks dari billing lama, tim dukungan Accel Radius dapat membantu scope dan jadwal. Self-hosted memungkinkan uji migrasi di server staging sebelum sentuh produksi.",
    ],
  },
  {
    slug: "self-hosted-vs-saas-billing-isp",
    title: "Self-Hosted vs SaaS: Billing ISP Mana yang Tepat?",
    description:
      "Perbandingan model deployment untuk sistem billing ISP — kontrol data, latency isolir, biaya skala, dan kapan memilih install di server sendiri.",
    publishedAt: "2026-07-04",
    readTime: "5 menit",
    paragraphs: [
      "Pasar billing ISP di Indonesia didominasi dua model: SaaS cloud berlangganan per pelanggan, dan self-hosted yang di-install di VPS atau server dedicated operator. Keduanya punya tempat; pilihan tepat bergantung pada skala, kebutuhan kontrol data, dan topologi jaringan.",
      "SaaS cloud menawarkan setup cepat tanpa urusan server. Cocok untuk ISP sangat kecil yang belum punya infrastruktur. Kekurangannya: data pelanggan di server vendor, isolir bergantung latency internet ke cloud, biaya per pelanggan membengkak saat skala naik, dan downtime vendor menghentikan operasi billing.",
      "Self-hosted menempatkan billing dan seringkali RADIUS di lingkungan yang sama dengan NAS dan MikroTik. Data tetap di ISP; isolir dan sinkronisasi sesi lebih cepat; biaya lisensi flat per server tanpa batas pelanggan; operator kontrol backup, update, dan kebijakan keamanan sendiri.",
      "ISP dengan 200–1.000+ pelanggan umumnya lebih untung secara total cost of ownership dengan self-hosted — terutama jika sudah memiliki VPS untuk panel atau monitoring. Investasi awal adalah spesifikasi server (mulai 2 vCPU / 4 GB RAM) dan waktu setup, bukan biaya cloud yang naik linear.",
      "Accel Radius mengambil jalur self-hosted dengan evaluasi gratis 30 hari: pasang di server lab atau produksi, uji semua modul, baru commit lisensi PRO. Ini mengurangi risiko kontrak tahunan sebelum yakin sistem cocok dengan alur operasional tim Anda.",
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}