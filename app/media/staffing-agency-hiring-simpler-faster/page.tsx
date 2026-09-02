"use client"

import { Suspense } from "react"
import PremiumArticleShell from "@/components/premium-article-shell"

function ArticleBody() {
  return (
    <>
  {/* TODO: add article content */}
    </>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PremiumArticleShell
        slug="staffing-agency-hiring-simpler-faster"
        title="How Does a Staffing Agency Make Hiring Simpler and Faster?"
        category="Contract Staffing"
        author="Connect Tech+Talent"
        date="September 9, 2025"
        readTime="6 min read"
        image="/media/staffing-agency-hiring.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
