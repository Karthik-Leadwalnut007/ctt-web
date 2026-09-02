import type { Metadata } from "next"
import { Suspense } from "react"
import MediaPageClient from "@/components/mediaPage"
import { getAllPosts } from "@/lib/all-posts"


export const metadata: Metadata = {
  title: "AI Talent Insights for CIOs | Strategic Research & Market Intelligence - Connect Tech+Talent",
  description:
    "Stay ahead in AI leadership. Explore expert research, hiring intelligence, and executive insights for CIOs and technology leaders shaping the AI talent landscape.",
  keywords: [
    "AI talent insights",
    "AI hiring research",
    "CIO talent strategy",
    "AI workforce planning",
    "AI market intelligence",
    "AI recruitment trends",
    "enterprise AI leadership",
    "Connect Tech+Talent insights",
  ],
  alternates: {
    canonical: "https://connecttechtalent.com/insights",
  },
  openGraph: {
    title: "AI Talent Insights for CIOs | Strategic Research & Market Intelligence - Connect Tech+Talent",
    description:
      "Research-backed perspectives and actionable insights on AI talent acquisition, governance, and enterprise hiring trends — built for CIOs and technology leaders.",
    url: "https://connecttechtalent.com/insights",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://connecttechtalent.com/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent AI Insights Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Insights for CIOs | Connect Tech+Talent",
    description:
      "Explore AI hiring research, governance insights, and executive briefings designed for CIOs and enterprise tech leaders.",
    images: ["https://connecttechtalent.com/images/design-mode/ctt-logo-horizontal.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function InsightsPage() {
  const posts = await getAllPosts()
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <MediaPageClient posts={posts} />
    </Suspense>
  )
}

