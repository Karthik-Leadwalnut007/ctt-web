/**
 * lib/markdown-posts.ts
 *
 * Server-only module. Reads all Markdown files from content/blog/ at build time
 * using Node.js `fs` + `gray-matter`. Returns typed LocalBlogPost[].
 *
 * Called by lib/all-posts.ts — never imported directly by client components.
 */

import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { LocalBlogPost } from "./blog-data"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

/** Parse a display date string from an ISO date or date object */
function formatDisplayDate(raw: unknown): string {
  if (!raw) return ""
  try {
    return new Date(String(raw)).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return String(raw)
  }
}

/** Parse an ISO date string from various date formats */
function toISO(raw: unknown): string {
  if (!raw) return new Date().toISOString()
  try {
    return new Date(String(raw)).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

/**
 * Read all .md files from content/blog/ and return as LocalBlogPost[].
 * Returns [] if the directory doesn't exist yet (safe to call on first run).
 */
export async function getMarkdownPosts(): Promise<LocalBlogPost[]> {
  let files: string[]
  try {
    files = await fs.readdir(CONTENT_DIR)
  } catch {
    // Directory doesn't exist yet — no CMS posts
    return []
  }

  const mdFiles = files.filter((f) => f.endsWith(".md") && !f.startsWith("."))
  if (mdFiles.length === 0) return []

  const posts = await Promise.all(
    mdFiles.map(async (filename): Promise<LocalBlogPost | null> => {
      try {
        const filepath = path.join(CONTENT_DIR, filename)
        const raw = await fs.readFile(filepath, "utf8")
        const { data, content } = matter(raw)

        // Slug: prefer frontmatter > filename without extension
        const slug: string = data.slug || filename.replace(/\.md$/, "")

        return {
          id: slug,
          slug,
          title: data.title || "Untitled",
          category: data.category || "",
          author: data.author || "Connect Tech+Talent",
          date: formatDisplayDate(data.date),
          dateISO: toISO(data.date),
          readTime: data.readTime || data.read_time || "",
          excerpt: data.excerpt || content.slice(0, 160).replace(/[#*`]/g, "").trim(),
          image: data.image || "",
          link: `/media/${slug}`,
          content: content.trim(),
          contentFormat: "markdown",
          featured: data.featured || false,
          tags: data.tags || [],
        }
      } catch {
        return null
      }
    })
  )

  return (posts.filter(Boolean) as LocalBlogPost[]).sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  )
}
