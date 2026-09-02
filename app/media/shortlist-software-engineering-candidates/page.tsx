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
        slug="shortlist-software-engineering-candidates"
        title="7 Tips to Shortlist Software Engineering Candidates & Reduce Hiring Time"
        category="Tech Hiring"
        author="Connect Tech+Talent"
        date="March 31, 2025"
        readTime="6 min read"
        image="/media/shortlist-candidates.jpg"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
