/**
 * lib/all-posts.ts
 *
 * Server-only module. Returns blog posts exclusively from Decap CMS
 * (content/blog/*.md). Hardcoded legacy posts have been removed.
 *
 * All content must be authored through the Decap CMS at /admin.
 */

import { getMarkdownPosts } from "./markdown-posts"
import type { LocalBlogPost } from "./blog-data"

/** All posts from Decap CMS, sorted newest-first */
export async function getAllPosts(): Promise<LocalBlogPost[]> {
  return await getMarkdownPosts()
}

/** Find a single post by slug */
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
