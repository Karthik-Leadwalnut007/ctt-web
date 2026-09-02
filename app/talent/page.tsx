import type { Metadata } from "next"
import TalentClientPage from "./talent-client"

export const metadata: Metadata = {
  title: "AI Talent Matrix | Specialized AI Roles & Expertise - Connect Tech+Talent",
  description:
    "Explore Connect Tech+Talent’s comprehensive AI Talent Matrix featuring expert professionals in AI strategy, ML engineering, data science, and AI governance for enterprise transformation.",
  keywords: [
    "AI talent matrix",
    "AI experts",
    "machine learning engineers",
    "data scientists",
    "AI strategy consultants",
    "AI governance",
    "AI leadership",
    "AI compliance specialists",
    "AI infrastructure",
    "Connect Tech+Talent",
  ],
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/talent",
  },
  openGraph: {
    title: "AI Talent Matrix - Specialized AI Roles & Expertise | Connect Tech+Talent",
    description:
      "Discover top-tier AI professionals including ML engineers, AI strategists, data scientists, and governance experts. Accelerate your organization’s AI transformation.",
    url: "https://cttv2.manymangoes.com.au/talent",
    siteName: "Connect Tech+Talent",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "AI Talent Matrix - Connect Tech+Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Matrix | Connect Tech+Talent",
    description:
      "Explore specialized AI roles — from strategy and ML engineering to governance. Build your AI team with Connect Tech+Talent.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png"],
    creator: "@connecttechtalent",
  },
  authors: [{ name: "Connect Tech+Talent", url: "https://connecttechtalent.com" }],
  category: "Artificial Intelligence",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
}

export default function TalentPage() {
  return <TalentClientPage />
}
