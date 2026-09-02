import { Suspense } from "react"
import type { Metadata } from "next"
import CriticalSkillsClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Decoding Recruitment: Critical Skills vs. Regular Skills Showdown",
  description:
    "Distinguishing between critical skill hiring and regular skill hiring is more than just understanding two different recruitment terminologies. Learn the key differences in approach, criteria, and strategy.",
}

export default function CriticalSkillsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <CriticalSkillsClientPage />
    </Suspense>
  )
}
