import { useState, type FormEvent } from "react"
import { SALES_EMAIL, SUPPORT_EMAIL, WHATSAPP_URL } from "@/lib/brand"
import { cn } from "@/lib/utils"

const customerRanges = [
  "Kurang dari 100",
  "100 – 500",
  "500 – 1.000",
  "Lebih dari 1.000",
]

interface ContactFormProps {
  variant?: "light" | "dark"
}

export default function ContactForm({ variant = "light" }: ContactFormProps) {
  const isLight = variant === "light"
  const [name, setName] = useState("")
  const [isp, setIsp] = useState("")
  const [email, setEmail] = useState("")
  const [scale, setScale] = useState(customerRanges[1])
  const [message, setMessage] = useState("")

  const labelClass = isLight
    ? "text-xs font-semibold text-muted-foreground"
    : "text-xs font-semibold text-background/70"

  const fieldClass = cn(
    "w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors",
    isLight
      ? "border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:border-brand-blue/50"
      : "border-white/15 bg-white/5 text-background placeholder:text-background/30 focus:border-white/30",
  )

  function buildBody() {
    return [
      `Nama: ${name}`,
      `ISP: ${isp}`,
      `Email: ${email}`,
      `Skala pelanggan: ${scale}`,
      "",
      message,
    ].join("\n")
  }

  function handleEmailSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`[Accel Radius] Permintaan dari ${isp || name}`)
    const body = encodeURIComponent(buildBody())
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(
      `Halo tim Accel Radius,\n\nSaya ${name || "(nama)"} dari ${isp || "(ISP)"}.\nSkala: ${scale}\n\n${message || "Ingin konsultasi lisensi Accel Radius."}`,
    )
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className={labelClass}>Nama</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Nama lengkap"
          />
        </label>
        <label className="block space-y-1.5">
          <span className={labelClass}>Nama ISP</span>
          <input
            type="text"
            required
            value={isp}
            onChange={(e) => setIsp(e.target.value)}
            className={fieldClass}
            placeholder="PT / brand ISP"
          />
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className={labelClass}>Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          placeholder="nama@isp-anda.id"
        />
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Jumlah pelanggan</span>
        <select
          value={scale}
          onChange={(e) => setScale(e.target.value)}
          className={fieldClass}
        >
          {customerRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Pesan</span>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(fieldClass, "resize-none")}
          placeholder="Kebutuhan lisensi, demo, atau migrasi data..."
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button type="submit" className="modern-btn-primary w-full justify-center sm:flex-1">
          Kirim via email
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className={cn(
            "w-full justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-all sm:flex-1",
            isLight
              ? "border-border bg-background hover:border-foreground hover:bg-muted"
              : "modern-btn-ghost-on-dark",
          )}
        >
          Chat WhatsApp
        </button>
      </div>

      <p
        className={cn(
          "text-center text-[11px]",
          isLight ? "text-muted-foreground" : "text-background/40",
        )}
      >
        Atau email langsung ke{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className={cn(
            "underline",
            isLight ? "text-brand-blue hover:text-brand-blue/80" : "hover:text-background/60",
          )}
        >
          {SUPPORT_EMAIL}
        </a>
      </p>
    </form>
  )
}