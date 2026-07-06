import {
  BRAND_FULL,
  BRAND_NAME,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_IMAGE,
} from "./brand"

export interface SeoInput {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  twitterImage?: string
  type?: "website" | "article"
}

/** Canonical paths use trailing slashes (except homepage) to match served URLs. */
export function normalizeCanonicalPath(path: string) {
  if (!path || path === "/") return "/"
  const withLeading = path.startsWith("/") ? path : `/${path}`
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`
}

export function absoluteUrl(path: string) {
  const normalized = normalizeCanonicalPath(path)
  return new URL(normalized, SITE_URL).toString()
}

export const DEFAULT_TITLE = `${BRAND_FULL} — Platform Billing & Operasi ISP Indonesia`

export function buildSeo(input: SeoInput = {}) {
  const title = input.title ?? DEFAULT_TITLE
  const description = input.description ?? SITE_DESCRIPTION
  const path = input.path ?? "/"
  const canonicalUrl = absoluteUrl(path)
  const ogImage = absoluteUrl(input.ogImage ?? OG_IMAGE)
  const twitterImage = absoluteUrl(input.twitterImage ?? TWITTER_IMAGE)
  const type = input.type ?? "website"

  return {
    siteName: BRAND_NAME,
    title,
    description,
    canonicalUrl,
    ogImage,
    twitterImage,
    ogImageAlt: OG_IMAGE_ALT,
    type,
    locale: "id_ID",
    hreflang: "id",
    alternateHreflang: "x-default" as const,
  }
}