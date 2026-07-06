export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export const mainNav: NavLink[] = [
  { href: "/fitur", label: "Fitur" },
  { href: "/harga", label: "Harga" },
  { href: "/blog", label: "Blog" },
  { href: "/#install", label: "Install" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontak", label: "Kontak" },
]

export const footerNav: NavLink[] = [
  { href: "/fitur", label: "Fitur" },
  { href: "/harga", label: "Harga" },
  { href: "/blog", label: "Blog" },
  { href: "/dokumentasi", label: "Dokumentasi" },
  { href: "/tentang-kami", label: "Tentang kami" },
  { href: "/#install", label: "Install" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontak", label: "Kontak" },
]

export const resourceLinks: NavLink[] = [
  { href: "/dokumentasi", label: "Dokumentasi" },
  { href: "/changelog", label: "Changelog" },
  { href: "/blog", label: "Blog" },
]