import type { Metadata } from "next"
import { Suspense } from "react"
import MediaPageClient from "@/components/mediaPage"
import { getAllPosts } from "@/lib/all-posts"

export const metadata: Metadata = {
  title: "Media & Insights | Expert Articles on AI Talent, Tech Hiring & Workforce Trends - Connect Tech+Talent",
  description:
    "Browse the latest insights, hiring strategies, and thought leadership from Connect Tech+Talent. Discover expert articles on AI-driven recruitment, remote work, and the future of tech teams.",
  keywords: [
    "AI hiring insights",
    "tech recruitment articles",
    "AI workforce trends",
    "remote work research",
    "staffing agency guides",
    "Connect Tech+Talent media",
    "technology hiring strategies",
    "AI leadership perspectives",
  ],
  alternates: {
    canonical: "https://connecttechtalent.com/media",
  },
  openGraph: {
    title: "Media & Insights | Expert Articles on AI Talent, Tech Hiring & Workforce Trends - Connect Tech+Talent",
    description:
      "Explore our latest articles and research on AI talent acquisition, workforce transformation, and technology hiring trends — written by Connect Tech+Talent experts.",
    url: "https://connecttechtalent.com/media",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://connecttechtalent.com/og/media.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent Media & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Insights | Connect Tech+Talent",
    description:
      "Read expert-led insights on AI hiring, tech workforce trends, and digital transformation — powered by Connect Tech+Talent.",
    images: ["https://connecttechtalent.com/og/media.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function MediaPage() {
  const posts = await getAllPosts()
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <MediaPageClient posts={posts} />
    </Suspense>
  )
}
