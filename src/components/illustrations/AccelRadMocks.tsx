import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IllustrationProps {
  className?: string
}

function MockShell({
  className,
  title,
  eyebrow,
  children,
}: {
  className?: string
  title: string
  eyebrow: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "ar-mock flex min-h-[220px] items-center justify-center p-4 text-left text-[11px]",
        className,
      )}
    >
      <div className="w-full max-w-md">
        <div className="mb-3 rounded-lg border border-white/10 bg-[#23232b] px-3 py-2.5 ring-1 ring-white/5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
            {eyebrow}
          </p>
          <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-white">
            {title}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}

function ArPill({
  label,
  tone = "stable",
}: {
  label: string
  tone?: "stable" | "attention" | "critical" | "neutral"
}) {
  const tones = {
    stable: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    attention: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    critical: "border-red-500/20 bg-red-500/10 text-red-400",
    neutral: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  }
  const dot = {
    stable: "bg-emerald-400",
    attention: "bg-amber-400",
    critical: "bg-red-400",
    neutral: "bg-sky-400",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[9px] font-medium",
        tones[tone],
      )}
    >
      <span className={cn("size-1.5 rounded-full", dot[tone])} />
      {label}
    </span>
  )
}

function ArButton({ label, variant = "default" }: { label: string; variant?: "default" | "outline" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md px-2 py-1 text-[9px] font-medium",
        variant === "default"
          ? "bg-violet-600 text-white"
          : "border border-white/15 bg-white/5 text-white/80",
      )}
    >
      {label}
    </span>
  )
}

function ArKpi({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub: string
  accent: string
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#23232b] p-2.5 ring-1 ring-white/5">
      <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", accent)} />
      <p className="relative text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45">
        {label}
      </p>
      <p className="relative mt-1 font-mono text-sm font-semibold text-white">{value}</p>
      <p className="relative text-[9px] text-white/45">{sub}</p>
    </div>
  )
}

function ArTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: ReactNode[][]
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <table className="w-full text-[9px]">
        <thead className="bg-white/5 text-white/50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-2 py-1.5 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 bg-[#1c1c24]">
          {rows.map((row, i) => (
            <tr key={i} className="text-white/85">
              {row.map((cell, j) => (
                <td key={j} className="px-2 py-1.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CustomerIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Operasi" title="Pelanggan">
      <div className="mb-2 flex gap-1.5">
        <ArButton label="Tambah" />
        <ArButton label="Import" variant="outline" />
        <ArButton label="Export" variant="outline" />
      </div>
      <ArTable
        headers={["Nama", "Paket", "Status", "Aksi"]}
        rows={[
          ["Budi Santoso", "50 Mbps", <ArPill label="Aktif" tone="stable" />, "Edit"],
          ["Siti Aminah", "100 Mbps", <ArPill label="Aktif" tone="stable" />, "Edit"],
          ["PT Jaya Net", "Dedicated", <ArPill label="Tunggak" tone="attention" />, "Isolir"],
        ]}
      />
    </MockShell>
  )
}

export function BillingIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Billing" title="Faktur">
      <div className="mb-2 flex gap-1.5">
        <ArButton label="Buat Tagihan" />
        <ArButton label="Reminder" variant="outline" />
      </div>
      <ArTable
        headers={["Invoice", "Pelanggan", "Total", "Status"]}
        rows={[
          ["INV-2026-0042", "Budi Santoso", "Rp 350.000", <ArPill label="Belum dibayar" tone="attention" />],
          ["INV-2026-0041", "Siti Aminah", "Rp 250.000", <ArPill label="Lunas" tone="stable" />],
          ["INV-2026-0040", "Rudi H.", "Rp 150.000", <ArPill label="Lewat tempo" tone="critical" />],
        ]}
      />
    </MockShell>
  )
}

export function PaymentIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Billing" title="Transaksi">
      <div className="mb-2 flex flex-wrap gap-1">
        {["BCA VA", "QRIS", "DANA"].map((m) => (
          <span key={m} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-white/70">
            {m}
          </span>
        ))}
      </div>
      <ArTable
        headers={["Pelanggan", "Metode", "Jumlah", "Status"]}
        rows={[
          ["Budi Santoso", "QRIS", "Rp 350.000", <ArPill label="Lunas" tone="stable" />],
          ["Ahmad Rizki", "BCA VA", "Rp 150.000", <ArPill label="Pending" tone="neutral" />],
        ]}
      />
    </MockShell>
  )
}

export function NetworkIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Jaringan" title="Sesi PPPoE">
      <div className="mb-2 grid grid-cols-2 gap-2">
        <ArKpi label="Sesi aktif" value="128" sub="NAS-01 online" accent="from-sky-500/15 to-sky-500/5" />
        <ArKpi label="Bandwidth" value="420/85" sub="DL / UL Mbps" accent="from-emerald-500/15 to-emerald-500/5" />
      </div>
      <ArTable
        headers={["Username", "IP", "Profil", "Status"]}
        rows={[
          ["budisantoso", "10.10.1.42", "50M", <ArPill label="Online" tone="stable" />],
          ["sitiaminah", "10.10.1.88", "100M", <ArPill label="Online" tone="stable" />],
          ["rudih", "10.10.1.15", "25M", <ArPill label="Isolir" tone="critical" />],
        ]}
      />
    </MockShell>
  )
}

export function WhatsAppIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Notifikasi" title="WhatsApp">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-[#1c1c24] p-2">
          <p className="mb-1.5 text-[9px] font-semibold text-white/45">Penerima</p>
          {["Budi Santoso", "Siti Aminah"].map((n) => (
            <div key={n} className="mb-1 flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-[9px] text-white/80">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              {n}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-emerald-500/20 bg-[#0f1f17] p-2">
          <p className="mb-1 text-[9px] font-semibold text-emerald-400/80">Pratinjau</p>
          <div className="rounded-md bg-[#1a2e23] p-2 text-[9px] leading-relaxed text-white/85">
            Halo <span className="text-emerald-200">Budi Santoso</span>, tagihan{" "}
            <span className="text-emerald-200">Jun 2026</span>:{" "}
            <span className="font-semibold text-amber-300">Rp 350.000</span>
          </div>
          <div className="mt-2">
            <ArButton label="Kirim" />
          </div>
        </div>
      </div>
    </MockShell>
  )
}

export function TicketIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Dukungan" title="Tiket">
      <ArTable
        headers={["ID", "Pelanggan", "Subjek", "Status"]}
        rows={[
          ["#1042", "Ahmad Rizki", "Internet lambat", <ArPill label="Baru" tone="attention" />],
          ["#1041", "Dewi Lestari", "Upgrade paket", <ArPill label="Proses" tone="neutral" />],
        ]}
      />
      <div className="mt-2 flex gap-1.5">
        <ArButton label="Balas" />
        <ArButton label="Tugaskan" variant="outline" />
      </div>
    </MockShell>
  )
}

export function ReportIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Laporan" title="Keuangan">
      <div className="mb-2 grid grid-cols-3 gap-2">
        <ArKpi label="Pendapatan" value="Rp 48,5jt" sub="Bulan ini" accent="from-violet-500/15 to-violet-500/5" />
        <ArKpi label="Aktif" value="247" sub="Pelanggan" accent="from-sky-500/15 to-sky-500/5" />
        <ArKpi label="Tunggak" value="Rp 3,2jt" sub="Outstanding" accent="from-amber-500/15 to-amber-500/5" />
      </div>
      <div className="flex h-16 items-end gap-1 rounded-lg border border-white/10 bg-[#1c1c24] px-2 pb-2 pt-3">
        {[40, 55, 48, 70, 62, 85].map((h, i) => (
          <div
            key={i}
            className={cn("flex-1 rounded-sm", i === 5 ? "bg-violet-500" : "bg-violet-500/40")}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </MockShell>
  )
}

export function PortalIllustration({ className = "" }: IllustrationProps) {
  return (
    <div className={cn("ar-mock flex min-h-[220px] items-center justify-center p-4", className)}>
      <div className="w-full max-w-[200px] rounded-2xl border border-white/10 bg-[#23232b] p-3 ring-1 ring-white/5">
        <div className="mb-2 flex items-center gap-2">
          <div className="grid size-6 place-items-center rounded-md bg-violet-500/15 text-[9px] font-bold text-violet-300">
            AR
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-white">
            Portal Pelanggan
          </span>
        </div>
        <p className="text-[10px] text-white/70">Halo, Budi Santoso</p>
        <div className="mt-2 rounded-lg border border-white/10 bg-[#1a1a20] p-2">
          <p className="text-[9px] text-white/45">Tagihan Jun 2026</p>
          <p className="font-mono text-sm font-semibold text-amber-400">Rp 350.000</p>
        </div>
        <div className="mt-2 space-y-1">
          <ArButton label="Bayar Sekarang" />
          <div className="pt-1">
            <ArButton label="Buat Tiket" variant="outline" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminIllustration({ className = "" }: IllustrationProps) {
  return (
    <MockShell className={className} eyebrow="Sistem" title="Pengguna Admin">
      <div className="mb-2 flex gap-1.5">
        <ArButton label="Tambah Admin" />
        <ArButton label="Audit Log" variant="outline" />
      </div>
      <ArTable
        headers={["Nama", "Role", "Status"]}
        rows={[
          ["Admin Utama", "Superadmin", <ArPill label="Aktif" tone="stable" />],
          ["Kasir Shift A", "Kasir", <ArPill label="Aktif" tone="stable" />],
          ["Teknisi", "Teknisi", <ArPill label="Nonaktif" tone="critical" />],
        ]}
      />
      <div className="mt-2 rounded-md border border-white/10 bg-black/30 px-2 py-1.5 font-mono text-[8px] text-white/50">
        14:32 audit · reset password kasir
      </div>
    </MockShell>
  )
}