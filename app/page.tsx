import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Talent Services: Strategy, Infrastructure & Compliance | Connect Tech and Talent",
  description:
    "Specialized AI talent solutions for enterprise transformation. Access ML engineers, AI strategists, MLOps specialists, and compliance experts. Strategic consulting, infrastructure development, and governance expertise.",
  keywords: [
    "AI strategy consulting",
    "ML infrastructure engineers",
    "AI compliance specialists",
    "machine learning talent",
    "MLOps engineers",
    "AI governance experts",
    "Chief AI Officer recruitment",
    "AI platform architects",
    "data engineering talent",
    "AI ethics officers",
    "model risk management",
    "AI transformation services",
  ],
  authors: [{ name: "Connect Tech and Talent" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cttv2.manymangoes.com.au/services",
    title: "AI Talent Services: Strategy, Infrastructure & Compliance Solutions",
    description:
      "Comprehensive AI talent solutions including strategic consulting, infrastructure development, and compliance expertise. Connect with specialized professionals for enterprise AI transformation.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech and Talent AI Services - Strategy, Infrastructure and Compliance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Services: Strategy, Infrastructure & Compliance",
    description:
      "Specialized AI talent solutions for enterprise transformation. Access ML engineers, AI strategists, and compliance experts with proven track records.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/services",
  },
}

export default function Page() {
  return <ClientPage />
}
