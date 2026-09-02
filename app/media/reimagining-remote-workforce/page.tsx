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
        slug="reimagining-remote-workforce"
        title="Reimagining the Future of Workplace for a Remote Workforce"
        category="Remote Work"
        author="Connect Tech+Talent"
        date="May 16, 2025"
        readTime="6 min read"
        image="/media/hybrid-office-workspace.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
