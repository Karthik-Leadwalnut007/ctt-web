// lib/blog-data.ts
// Shared type definitions for blog posts.
// All blog content is now authored exclusively via Decap CMS (content/blog/*.md).
// Legacy hardcoded posts have been removed — use the CMS to create posts.

export interface LocalBlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  /** Display date — e.g. "Nov 16, 2023" */
  date: string;
  /** Full date for SEO / og:article:published_time */
  dateISO: string;
  readTime: string;
  excerpt: string;
  image: string;
  link: string;
  /** Content string — Markdown for Decap CMS posts */
  content: string;
  /** Always 'markdown' for CMS posts */
  contentFormat?: "html" | "markdown";
  featured?: boolean;
  tags?: string[];
}
