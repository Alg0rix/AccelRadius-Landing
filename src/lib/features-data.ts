import type { ComponentType } from "react"
import {
  AdminIllustration,
  BillingIllustration,
  CustomerIllustration,
  NetworkIllustration,
  PaymentIllustration,
  PortalIllustration,
  ReportIllustration,
  TicketIllustration,
  WhatsAppIllustration,
} from "@/components/illustrations/AccelRadMocks"
import {
  type FeatureAccent,
  type FeatureContent,
  type FeatureLayout,
  audiences,
  featureGridClass,
  featuresContent,
} from "@/lib/features-content"

export type { FeatureAccent, FeatureLayout }
export { audiences, featureGridClass, featuresContent }

const illustrations: Record<string, ComponentType<{ className?: string }>> = {
  pelanggan: CustomerIllustration,
  tagihan: BillingIllustration,
  pembayaran: PaymentIllustration,
  jaringan: NetworkIllustration,
  whatsapp: WhatsAppIllustration,
  tiket: TicketIllustration,
  laporan: ReportIllustration,
  portal: PortalIllustration,
  admin: AdminIllustration,
}

export interface FeatureItem extends FeatureContent {
  Illustration: ComponentType<{ className?: string }>
}

export const features: FeatureItem[] = featuresContent.map((feature) => ({
  ...feature,
  Illustration: illustrations[feature.slug],
}))