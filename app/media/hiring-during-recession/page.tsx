import { Suspense } from "react"
import HiringDuringRecessionClientPage from "./client-page"

export const metadata = {
  title: "Hiring During A Recession: Why It's a Great Opportunity | Connect Tech+Talent",
  description:
    "Discover why hiring during a recession can be a strategic advantage for your business. Learn about contract staffing benefits and how to navigate economic downturns.",
}

export default function HiringDuringRecessionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <HiringDuringRecessionClientPage />
    </Suspense>
  )
}
