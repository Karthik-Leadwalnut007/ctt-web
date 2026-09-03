/**
 * app/media/[slug]/page.tsx
 *
 * Server component — the single dynamic route for every CMS blog post.
 *
 * Data flow:
 *   content/blog/*.md  →  getMarkdownPosts()  →  getPostBySlug()
 *   →  markdownToHtml()  →  extractAndInjectHeadings()  →  DynamicArticleContent
 *
 * All heading IDs are slug-based (e.g. "understand-your-needs") so the TOC
 * labels and anchor links are always human-readable and in sync.
 *
 * Auto-refresh: Next.js re-validates every 60 s so new CMS posts appear
 * without a full rebuild. dynamicParams = true allows new slugs on-demand.
 */

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Suspense } from "react"
import { unstable_noStore as noStore } from "next/cache"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import { getAllPosts, getPostBySlug, getRelatedPostsAll, getAdjacentPostsAll } from "@/lib/all-posts"
import { extractAndInjectHeadings } from "@/lib/slugify"
import { calcReadingTime, calcSkimTime } from "@/lib/readingTime"
import DynamicArticleContent from "./article-client"

// Auto-refresh every 60 seconds — new CMS posts appear without full rebuild
export const revalidate = 60
// Allow new slugs (added via CMS) to be rendered on-demand without rebuild
export const dynamicParams = true

// ─── Static params — one page per post ───────────────────────────────────────

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

// ─── Per-article SEO metadata ─────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Media & Insights - Connect Tech+Talent`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 675, alt: post.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://connecttechtalent.com/media/${slug}`,
    },
  }
}

// ─── Markdown → HTML converter ────────────────────────────────────────────────

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return String(result)
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // Force fresh markdown read — Next.js does not watch content/ files in dev
  noStore()

  const post = await getPostBySlug(slug)
  if (!post) notFound()

  // ── Convert Markdown → HTML (CMS posts are always Markdown) ──────────────
  const rawHtml =
    post.contentFormat === "markdown"
      ? await markdownToHtml(post.content)
      : post.content || post.excerpt || ""

  // ── Extract H2 headings, assign slug-based IDs, inject into HTML ──────────
  // e.g. "Understand Your Needs" → id="understand-your-needs"
  const { processedContent, headings } = extractAndInjectHeadings(rawHtml)

  // ── Reading time: use CMS field if set, otherwise auto-calculate ──────────
  const readTime = post.readTime || calcReadingTime(post.content)
  const skimTime = calcSkimTime(post.content)

  // ── Related posts — same category first ──────────────────────────────────
  const relatedPosts = await getRelatedPostsAll(slug, 3, post.category)
  const { prev, next } = await getAdjacentPostsAll(slug)

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DynamicArticleContent
        post={{ ...post, readTime }}
        processedContent={processedContent}
        relatedPosts={relatedPosts}
        prev={prev}
        next={next}
        skimTime={skimTime}
      />
    </Suspense>
  )
}
