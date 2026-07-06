/** Extended sections for pillar blog posts (2,000+ word target). */
export const blogPillarExtra: Record<string, { sections: { heading: string; paragraphs: string[] }[] }> = {
  "cara-mengelola-billing-isp": {
    sections: [
      {
        heading: "Masalah operasional tanpa sistem terpadu",
        paragraphs: [
          "ISP dengan 50–500 pelanggan sering mencapai titik di mana spreadsheet tidak lagi cukup. Sales menambah baris di Google Sheets; kasir mencatat pembayaran di buku terpisah; teknisi cek tunggakan lewat chat grup. Ketika ada selisih, tidak ada log perubahan yang jelas — hanya versi file terakhir yang di-email.",
          "Akibatnya waktu habis untuk rekonsiliasi, bukan pertumbuhan. Admin menghabiskan akhir pekan mencocokkan transfer bank dengan daftar pelanggan. Teknisi isolir pelanggan yang sebenarnya sudah bayar karena informasi telat masuk. Pelanggan frustrasi karena reminder tidak konsisten.",
          "Platform billing ISP yang terpadu menggantikan fragmen ini dengan satu database dan satu antarmuka. Setiap modul — pelanggan, tagihan, pembayaran, RADIUS, WhatsApp — membaca status yang sama. Perubahan di satu tempat langsung terlihat di modul lain.",
        ],
      },
      {
        heading: "Memilih siklus penagihan yang tepat",
        paragraphs: [
          "Operator wireless sering memakai siklus per 30 hari sejak aktivasi; FTTH komersial cenderung kalender bulanan. Sistem harus mendukung keduanya tanpa skrip manual. Prorata wajib ada saat pelanggan upgrade paket di pertengahan siklus — kesalahan prorata adalah sumber sengketa paling umum.",
          "Tanggal jatuh tempo yang konsisten membantu reminder otomatis. Kombinasikan dengan template WhatsApp: T-3 hari (informasi), H+1 (tegas), H+7 (peringatan isolir). Kebijakan koleksi tanpa teknologi hanya setengah efektif.",
        ],
      },
      {
        heading: "Gateway pembayaran untuk pasar Indonesia",
        paragraphs: [
          "Tripay dan Duitku adalah dua gateway yang paling umum di ekosistem ISP lokal. Virtual account multi-bank dan QRIS memungkinkan pelanggan bayar tanpa datang ke kantor. Yang kritis bukan hanya integrasi API — tetapi pencocokan transaksi ke tagihan yang benar.",
          "Sistem billing yang baik menandai tagihan lunas otomatis saat callback gateway masuk, memicu notifikasi ke pelanggan, dan — jika terintegrasi RADIUS — membuka blokir akses tanpa tiket ke teknisi.",
        ],
      },
      {
        heading: "Menghubungkan billing ke RADIUS dan MikroTik",
        paragraphs: [
          "ISP PPPoE tidak bisa memisahkan billing dari kontrol akses terlalu lama. Isolir manual di MikroTik tidak skala saat pelanggan ratusan. RADIUS terpusat memvalidasi kredensial terhadap status layanan: aktif, suspend, atau isolir.",
          "Accel Radius menempatkan billing dan RADIUS dalam satu lingkungan server — idealnya di VPS atau dedicated yang juga dijangkau NAS. Isolir dari dashboard memutus sesi atau menolak autentikasi berikutnya. Buka blokir setelah pelunasan berjalan dengan latency minimal dibanding SaaS cloud di luar negeri.",
        ],
      },
      {
        heading: "Laporan untuk keputusan manajemen",
        paragraphs: [
          "Pendapatan bulan berjalan, piutang per kolektor, pelanggan baru vs churn — manajemen butuh dashboard, bukan pivot table mingguan. Ekspor CSV/PDF untuk rapat investor atau koperasi.",
          "Data historis juga membantu perencanaan kapasitas: jika pertumbuhan 15% per kuartal, tim jaringan bisa mengantisipasi penambahan bandwidth uplink sebelum keluhan latency.",
        ],
      },
      {
        heading: "Self-hosted vs ketergantungan cloud",
        paragraphs: [
          "Banyak SaaS billing mengunci data di server vendor dan mengenakan biaya per pelanggan. Model self-hosted Accel Radius: lisensi flat per server, pelanggan tanpa batas, data tetap di infrastruktur ISP.",
          "Evaluasi 30 hari di server lab memungkinkan uji alur lengkap — impor pelanggan, generate tagihan, simulasi pembayaran, uji isolir RADIUS — sebelum komit lisensi PRO. Ini mengurangi risiko migrasi gagal di tengah operasi produksi.",
        ],
      },
    ],
  },
  "cara-setup-radius-mikrotik": {
    sections: [
      {
        heading: "Arsitektur NAS dan server RADIUS",
        paragraphs: [
          "Dalam topologi ISP kecil, satu MikroTik bisa menjadi NAS untuk PPPoE server dan sekaligus router edge. Dalam jaringan lebih besar, beberapa NAS mengarah ke satu server RADIUS. Yang penting: UDP 1812/1813 terbuka dari NAS ke server billing.",
          "Menempatkan RADIUS di server yang sama dengan billing — seperti deployment Accel Radius — menghilangkan sinkronisasi antar sistem. Status isolir di database langsung memengaruhi respons autentikasi.",
        ],
      },
      {
        heading: "Konfigurasi MikroTik step-by-step",
        paragraphs: [
          "Buat RADIUS client di MikroTik dengan alamat IP server dan shared secret. Aktifkan RADIUS pada PPPoE server profile atau hotspot sesuai layanan. Pastikan time zone dan NTP sinkron — accounting kadang gagal jika jam NAS dan server jauh berbeda.",
          "Uji dengan akun pelanggan dummy: login PPPoE, cek accounting masuk di dashboard, verifikasi rate-limit sesuai paket. Baru setelah uji berhasil, migrasi pelanggan produksi.",
        ],
      },
      {
        heading: "Accounting dan monitoring sesi",
        paragraphs: [
          "Accounting RADIUS mencatat start/stop sesi dan — jika dikonfigurasi — volume data. Teknisi melihat siapa online tanpa Winbox ke setiap router. Saat pelanggan komplain lambat, support bisa cek apakah sesi aktif atau ada abuse.",
          "Putus sesi dari dashboard berguna saat maintenance atau isolir darurat. CoA (Change of Authorization) tergantung dukungan NAS; MikroTik modern umumnya mendukung disconnect via RADIUS.",
        ],
      },
      {
        heading: "Isolir dan buka blokir otomatis",
        paragraphs: [
          "Alur ideal: tagihan jatuh tempo → reminder → status tunggak → isolir di RADIUS → pelanggan bayar → lunas → buka blokir. Tanpa RADIUS terintegrasi, langkah isolir dan buka blokir manual — rawan human error dan keluhan pelanggan.",
          "Accel Radius dirancang agar modul tagihan dan modul jaringan berbagi status pelanggan. Tim teknisi fokus ke jaringan fisik; status pembayaran tidak perlu dicek di aplikasi terpisah.",
        ],
      },
      {
        heading: "Troubleshooting umum",
        paragraphs: [
          "Secret tidak cocok: autentikasi gagal untuk semua user. Firewall: UDP 1812/1813 diblok — sesi tidak autentikasi. NAT ganda: pastikan NAS mengarah ke IP yang benar jika server di belakang DNAT.",
          "Billing terpisah dari RADIUS: isolir tidak otomatis — tim harus sinkron manual. Solusi jangka panjang: satukan dalam satu platform seperti Accel Radius daripada menjahit API sendiri.",
        ],
      },
    ],
  },
  "tips-mengurangi-tunggakan-pelanggan": {
    sections: [
      {
        heading: "Mengukur baseline tunggakan",
        paragraphs: [
          "Sebelum mengubah kebijakan, ukur piutang bulanan: berapa persen pelanggan terlambat, rata-rata hari keterlambatan, wilayah atau paket mana yang paling bermasalah. Tanpa baseline, tidak ada cara tahu apakah reminder atau isolir otomatis benar-benar berdampak.",
          "Dashboard laporan Accel Radius menampilkan tungakan per periode dan per paket — gunakan ini untuk rapat mingguan kasir dan manajemen.",
        ],
      },
      {
        heading: "Desain reminder yang tidak mengganggu",
        paragraphs: [
          "Reminder efektif konsisten dan jelas: nominal tagihan, tanggal jatuh tempo, cara bayar (VA/QRIS/portal), konsekuensi isolir. Hindari pesan informal yang tidak menyebut angka — pelanggan menunda karena tidak tahu berapa harus dibayar.",
          "Template WhatsApp yang disetujui platform Business memastikan deliverability lebih baik daripada broadcast dari nomor pribadi sales.",
        ],
      },
      {
        heading: "Portal pelanggan menurunkan friksi pembayaran",
        paragraphs: [
          "Setiap hambatan tambahan — harus chat admin, tunggu jam kerja, transfer tanpa kode unik — meningkatkan tunggakan. Portal 24/7 dengan link pembayaran langsung memotong langkah ini.",
          "Pelanggan muda dan UKM terbiasa bayar dari HP. ISP yang tidak menyediakan self-service kehilangan kompetisi dengan operator yang sudah modern.",
        ],
      },
      {
        heading: "Kebijakan isolir yang konsisten",
        paragraphs: [
          "Isolir yang tidak konsisten mengajarkan pelanggan bahwa menunggak tidak berkonsekuensi. Kebijakan tertulis + eksekusi otomatis lewat RADIUS membangun disiplin. Komunikasikan H-3 dan H+0 dengan jelas di kontrak layanan.",
          "Grace period 1–3 hari setelah jatuh tempo adalah praktik umum — tetap otomatiskan, bukan keputusan ad hoc kasir.",
        ],
      },
      {
        heading: "KPI koleksi untuk tim",
        paragraphs: [
          "Tetapkan target: persentase pelanggan lunas sebelum H+7, rata-rata hari tunggakan, jumlah tiket terkait tagihan. Review bulanan. Operator yang menurunkan tunggakan 20–40% dalam dua siklus biasanya kombinasi reminder + portal + isolir RADIUS — bukan hanya satu taktik.",
        ],
      },
    ],
  },
}