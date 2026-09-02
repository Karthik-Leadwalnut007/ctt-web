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
        slug="resume-modification-remote-it"
        title="How to Modify Your Resume for Remote IT Job Opportunities?"
        category="Career Advice"
        author="Connect Tech+Talent"
        date="April 11, 2025"
        readTime="5 min read"
        image="/media/resume-modification.png"
      >
        <ArticleBody />
      </PremiumArticleShell>
    </Suspense>
  )
}
