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

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

export function buildSeo(input: SeoInput = {}) {
  const title = input.title ?? `${BRAND_FULL} — Platform Billing & Operasi ISP`
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
  }
}