import { useState } from "react"
import SplitText from "@/components/SplitText"
import FadeContent from "@/components/FadeContent"
import { INSTALL_SCRIPT, RELEASE_REPO } from "@/lib/brand"

const hooks = [
  "Installer otomatis — deteksi CPU & deploy layanan",
  "Dashboard siap pakai setelah satu perintah",
  "Cocok untuk Ubuntu & Debian di server produksi",
]

export default function Install() {
  const [copied, setCopied] = useState(false)

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(INSTALL_SCRIPT)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="install" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="install-cta relative overflow-hidden rounded-3xl border border-violet-500/20 bg-[#14141a] px-6 py-10 text-white md:px-12 md:py-14">
          <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-brand-red/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
                Evaluasi di server Anda
              </p>
              <SplitText
                text="Pasang dari server Linux Anda."
                tag="h2"
                className="text-left text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                splitType="words"
                delay={55}
                textAlign="left"
              />
              <FadeContent delay={200}>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                  Installer mendeteksi arsitektur server, mengunduh rilis terbaru, dan
                  menyiapkan layanan billing, RADIUS, WhatsApp, serta portal pelanggan.
                </p>
              </FadeContent>
              <FadeContent delay={300}>
                <ul className="mt-6 space-y-2.5">
                  {hooks.map((hook) => (
                    <li key={hook} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                      {hook}
                    </li>
                  ))}
                </ul>
              </FadeContent>
              <FadeContent delay={400}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={copyScript} className="modern-btn-primary">
                    {copied ? "Perintah disalin!" : "Salin & pasang sekarang"}
                  </button>
                  <a
                    href={RELEASE_REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn-ghost-on-dark"
                  >
                    Lihat rilis
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </FadeContent>
            </div>

            <FadeContent delay={250}>
              <div className="rounded-2xl border border-white/10 bg-black/40 shadow-2xl ring-1 ring-white/5">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#ff5f57]" />
                    <span className="size-3 rounded-full bg-[#febc2e]" />
                    <span className="size-3 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-xs text-white/40">root@isp-server</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyScript}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {copied ? "Disalin!" : "Salin"}
                  </button>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-[#e6edf3] sm:p-6 sm:text-sm">
                  <code className="block whitespace-pre-wrap break-all">
                    <span className="text-[#79c0ff]">$</span> {INSTALL_SCRIPT}
                  </code>
                </pre>
                <p className="border-t border-white/10 px-4 py-3 text-center text-[11px] text-white/40">
                  Paste di terminal Linux · sudo diperlukan
                </p>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  )
}