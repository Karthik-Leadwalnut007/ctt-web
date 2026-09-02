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
        slug="digital-team-building-remote-workspace"
        title="The Future of Digital Team Building and Remote Workspace"
        category="Remote Work"
        author="Connect Tech+Talent"
        date="May 21, 2025"
        readTime="6 min read"
        image="/media/digital-team-building.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
