import { Suspense } from "react"
import type { Metadata } from "next"
import SalaryNegotiationClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Comprehensive Salary Negotiation Tips for a Winning Offer",
  description:
    "Master the art of salary negotiation with strategic insights from Kannan Kaliyur. Learn how to recognize and communicate your worth for better compensation packages.",
}

export default function SalaryNegotiationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SalaryNegotiationClientPage />
    </Suspense>
  )
}
