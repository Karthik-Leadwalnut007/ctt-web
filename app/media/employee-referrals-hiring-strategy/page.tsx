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
        slug="employee-referrals-hiring-strategy"
        title="Impact of Employee Referrals on Your Hiring Strategy"
        category="Hiring Strategy"
        author="Connect Tech+Talent"
        date="September 16, 2025"
        readTime="5 min read"
        image="/media/employee-referrals.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
