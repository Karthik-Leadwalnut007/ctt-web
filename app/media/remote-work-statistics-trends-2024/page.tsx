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
        slug="remote-work-statistics-trends-2024"
        title="Top 20 Remote Work Statistics and Trends for 2025"
        category="Remote Work"
        author="Connect Tech+Talent"
        date="September 21, 2025"
        readTime="7 min read"
        image="/media/remote-work-statistics.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
