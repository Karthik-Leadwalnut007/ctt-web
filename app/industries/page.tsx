import type { Metadata } from "next"
import IndustriesClientPage from "./IndustriesClientPage"

export const metadata: Metadata = {
  title: "AI Talent Solutions by Industry | Connect Tech+Talent",
  description:
    "Discover industry-specific AI talent solutions for Financial Services, Healthcare, Manufacturing, and more. We provide domain experts with compliance knowledge and hands-on experience to accelerate AI adoption in your sector.",
  keywords: [
    "AI talent solutions",
    "industry AI experts",
    "AI recruitment",
    "financial services AI",
    "healthcare AI",
    "manufacturing AI",
    "AI staffing",
    "AI consultants",
    "Connect Tech+Talent",
  ],
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/industries",
  },
  openGraph: {
    title: "AI Talent Solutions by Industry - Connect Tech+Talent",
    description:
      "Hire specialized AI professionals for your industry. From finance to healthcare and manufacturing, we connect you with domain experts ready to deploy impactful AI solutions.",
    url: "https://cttv2.manymangoes.com.au/industries",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "AI talent solutions across industries - Connect Tech+Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Solutions by Industry | Connect Tech+Talent",
    description:
      "Explore industry-focused AI hiring solutions for finance, healthcare, and manufacturing sectors. Hire AI experts who understand your compliance and business landscape.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function IndustriesPage() {
  return <IndustriesClientPage />
}
