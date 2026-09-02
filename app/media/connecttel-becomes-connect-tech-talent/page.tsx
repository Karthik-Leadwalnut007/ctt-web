import { Suspense } from "react"
import ConnectTelClientPage from "./client-page"

export const metadata = {
  title: "ConnectTel Becomes Connect Tech+Talent | Connect Tech+Talent",
  description:
    "Learn about our rebranding from ConnectTel to Connect Tech+Talent and how it reflects our evolution in the tech hiring space.",
}

export default function ConnectTelRebrandingPost() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ConnectTelClientPage />
    </Suspense>
  )
}
