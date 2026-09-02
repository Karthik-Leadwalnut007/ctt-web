/**
 * lib/all-posts.ts
 *
 * Server-only module. Merges Decap CMS markdown posts (content/blog/*.md)
 * with the legacy HTML posts from lib/blog-data.ts into a single sorted list.
 *
 * - Markdown posts take priority: if a CMS post has the same slug as a legacy
 *   post, the CMS version wins.
 * - Result is sorted newest-first by dateISO.
 *
 * Use this everywhere instead of importing localBlogPosts directly.
 */

import { localBlogPosts, type LocalBlogPost } from "./blog-data"
import { getMarkdownPosts } from "./markdown-posts"

/** All posts: CMS markdown + legacy HTML, merged and sorted newest-first */
export async function getAllPosts(): Promise<LocalBlogPost[]> {
  const markdownPosts = await getMarkdownPosts()

  // Legacy posts whose slugs aren't overridden by a CMS post
  const cmsSlugs = new Set(markdownPosts.map((p) => p.slug))
  const filteredLegacy = localBlogPosts.filter((p) => !cmsSlugs.has(p.slug))

  return [...markdownPosts, ...filteredLegacy].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  )
}

/** Find a single post by slug across both sources */
export async function getPostBySlug(slug: string): Promise<LocalBlogPost | null> {
  const posts = await getAllPosts()
  return posts.find((p) => p.slug === slug) ?? null
}

/** Related posts (excluding current), up to `limit` */
export async function getRelatedPostsAll(
  currentSlug: string,
  limit = 3
): Promise<LocalBlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

/** Previous and next posts relative to current slug */
export async function getAdjacentPostsAll(currentSlug: string): Promise<{
  prev: LocalBlogPost | null
  next: LocalBlogPost | null
}> {
  const posts = await getAllPosts()
  const idx = posts.findIndex((p) => p.slug === currentSlug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : null,
    next: idx > 0 ? posts[idx - 1] : null,
  }
}
