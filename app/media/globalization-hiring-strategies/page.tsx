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
        slug="globalization-hiring-strategies"
        title="7 Strategies for Effective Hiring in the Age of Globalization"
        category="Workforce Strategy"
        author="Connect Tech+Talent"
        date="January 18, 2025"
        readTime="6 min read"
        image="/media/globalization-hiring.jpeg"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
