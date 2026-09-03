/**
 * lib/all-posts.ts
 *
 * Server-only module. Returns blog posts exclusively from Decap CMS
 * (content/blog/*.md). Single source of truth for the listing page,
 * article page, related articles, and prev/next navigation.
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

/**
 * Related posts — same category first, then backfill with latest.
 * Excludes the current article. Returns up to `limit` posts.
 */
export async function getRelatedPostsAll(
  currentSlug: string,
  limit = 3,
  currentCategory?: string
): Promise<LocalBlogPost[]> {
  const posts = await getAllPosts()
  const others = posts.filter((p) => p.slug !== currentSlug)

  if (!currentCategory) return others.slice(0, limit)

  // Prefer same-category posts, then fill remaining slots with others
  const sameCategory = others.filter((p) => p.category === currentCategory)
  const different = others.filter((p) => p.category !== currentCategory)
  return [...sameCategory, ...different].slice(0, limit)
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
