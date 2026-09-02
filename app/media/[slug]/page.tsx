import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Suspense } from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import { getAllPosts, getPostBySlug, getRelatedPostsAll, getAdjacentPostsAll } from "@/lib/all-posts"
import DynamicArticleContent from "./article-client"

// ─── Static params — one page per post from ALL sources ──────────────────────

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
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  // Convert markdown → HTML if this is a CMS post
  const rawContent =
    post.contentFormat === "markdown"
      ? await markdownToHtml(post.content)
      : post.content || post.excerpt || ""

  // Parse h2 headings, assign IDs, inject into HTML (works for both HTML and converted markdown)
  interface TocItem { id: string; label: string }
  const headings: TocItem[] = []
  let sectionIndex = 0

  const processedContent = rawContent.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_match, attrs: string, inner: string) => {
      const rawText = inner.replace(/<[^>]+>/g, "").trim()
      const text = rawText.replace(/^\d+\s+/, "")
      const cleanInner = inner.replace(/^(\s*)(\d+\s+)/, "$1")
      let id: string
      if (text.toLowerCase().startsWith("intro")) {
        id = "introduction"
      } else if (text.toLowerCase().startsWith("conclusion")) {
        id = "conclusion"
      } else {
        sectionIndex += 1
        id = `section-${sectionIndex}`
      }
      headings.push({ id, label: text })
      return `<h2${attrs} id="${id}" style="scroll-margin-top:100px">${cleanInner}</h2>`
    }
  )

  const relatedPosts = await getRelatedPostsAll(slug, 3)
  const { prev, next } = await getAdjacentPostsAll(slug)

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DynamicArticleContent
        post={post}
        processedContent={processedContent}
        headings={headings}
        relatedPosts={relatedPosts}
        prev={prev}
        next={next}
      />
    </Suspense>
  )
}
