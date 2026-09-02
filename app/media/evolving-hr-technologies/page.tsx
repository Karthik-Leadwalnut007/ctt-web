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
        slug="evolving-hr-technologies"
        title="Evolving HR Technologies Reshaping the Workplace"
        category="HR Technology"
        author="Connect Tech+Talent"
        date="2023"
        readTime="7 min read"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
