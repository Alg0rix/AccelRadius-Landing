import { BRAND_ICON, BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand"

const nav = [
  { href: "#fitur", label: "Fitur" },
  { href: "#kontak", label: "Kontak" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={BRAND_ICON} alt={BRAND_NAME} className="size-9 object-contain" />
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-red">
              {BRAND_TAGLINE}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest">{BRAND_NAME}</p>
          </div>
        </a>
        <nav className="flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}