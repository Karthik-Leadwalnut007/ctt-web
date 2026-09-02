import { Suspense } from "react"
import NearshoreOutsourcingClientPage from "./client-page"

export const metadata = {
  title: "How Nearshore Outsourcing Can Help Your Business Grow | Connect Tech+Talent",
  description:
    "Explore the benefits of nearshore outsourcing including cost savings, access to talent, and faster turnaround times. Learn how to choose the right partner.",
}

export default function NearshoreOutsourcingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <NearshoreOutsourcingClientPage />
    </Suspense>
  )
}
