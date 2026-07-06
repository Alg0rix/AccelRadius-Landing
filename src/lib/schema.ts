import {
  BRAND_NAME,
  RELEASE_REPO,
  SITE_URL,
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "./brand"
import { faqItems, pricingTiers, testimonials } from "./landing-content"
import { absoluteUrl } from "./seo"

export function softwareApplicationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux",
    description,
    url: SITE_URL,
    downloadUrl: RELEASE_REPO,
    offers: pricingOffersSchema(),
  }
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function pricingOffersSchema() {
  return pricingTiers.map((tier) => {
    const isFree = tier.price === "Gratis"
    return {
      "@type": "Offer",
      name: `${BRAND_NAME} — ${tier.name}`,
      description: tier.description,
      price: isFree ? "0" : "199000",
      priceCurrency: "IDR",
      priceSpecification: isFree
        ? {
            "@type": "UnitPriceSpecification",
            price: "0",
            priceCurrency: "IDR",
            unitText: "evaluasi 30 hari",
          }
        : {
            "@type": "UnitPriceSpecification",
            price: "199000",
            priceCurrency: "IDR",
            unitText: "per bulan per server",
          },
      url: absoluteUrl("/harga/"),
      availability: "https://schema.org/InStock",
    }
  })
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: BRAND_NAME,
    description:
      "Platform billing dan operasi ISP self-hosted — sembilan modul terintegrasi untuk operator internet Indonesia.",
    brand: { "@type": "Brand", name: BRAND_NAME },
    offers: pricingOffersSchema(),
  }
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: BRAND_NAME,
    review: testimonials.map((item) => ({
      "@type": "Review",
      reviewBody: item.quote,
      author: {
        "@type": "Organization",
        name: item.role,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: String(testimonials.length),
      bestRating: "5",
    },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        availableLanguage: ["Indonesian"],
        areaServed: "ID",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: WHATSAPP_DISPLAY,
        url: WHATSAPP_URL,
        availableLanguage: ["Indonesian"],
        areaServed: "ID",
      },
    ],
  }
}