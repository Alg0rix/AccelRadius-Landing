import { BRAND_FULL, BRAND_ICON, BRAND_NAME } from "@/lib/brand"

export default function Footer() {
  return (
    <footer className="border-t border-foreground bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={BRAND_ICON}
            alt={BRAND_NAME}
            className="size-10 object-contain brightness-0 invert"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              {BRAND_FULL}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-background/50">
              Server Lisensi & Konsol Admin
            </p>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-background/40">
          © {new Date().getFullYear()} Accel Radius · MIT License
        </p>
      </div>
    </footer>
  )
}