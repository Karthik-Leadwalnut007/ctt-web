import { Suspense } from "react"
import type { Metadata } from "next"
import MasteringAIDrivenHiringClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Mastering AI-Driven Hiring in the Modern Era | Media & Insights - Connect Tech+Talent",
  description:
    "Discover the 14 essential steps to master AI-driven hiring — from data collection and resume screening to predictive analytics and compliance. A comprehensive guide for modern recruiting and contract staffing.",
  openGraph: {
    title: "Mastering AI-Driven Hiring in the Modern Era",
    description:
      "Discover the 14 essential steps to master AI-driven hiring — from data collection and resume screening to predictive analytics and compliance.",
    type: "article",
    publishedTime: "2023-11-16T00:00:00Z",
    authors: ["Connect Tech+Talent"],
  },
}

export default function MasteringAIDrivenHiringPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MasteringAIDrivenHiringClientPage />
    </Suspense>
  )
}

