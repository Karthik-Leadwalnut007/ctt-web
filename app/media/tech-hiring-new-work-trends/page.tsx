import { Suspense } from "react"
import type { Metadata } from "next"
import TechHiringClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Tech Hiring in the Era of New Work Trends",
  description:
    "Explore the impact of generative AI, workplace trends like quiet cutting, and the rise of contract staffing on modern tech hiring.",
}

export default function TechHiringPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12">Loading...</div>}>
      <TechHiringClientPage />
    </Suspense>
  )
}
