// lib/wordpress/utils.ts
import { WordPressPost, BlogPost } from "./types";

/**
 * Format WordPress date to readable format
 */
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Extract excerpt from WordPress post
 * WordPress excerpt might contain HTML, so we clean it up
 */
export function extractExcerpt(excerpt: string, maxLength: number = 200): string {
  // Remove HTML tags
  const text = excerpt.replace(/<[^>]*>/g, "");
  
  // Remove extra whitespace
  const cleaned = text.replace(/\s+/g, " ").trim();
  
  // Truncate if needed
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  
  // Truncate at word boundary
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }
  
  return truncated + "...";
}

/**
 * Get featured image URL or fallback
 */
export function getFeaturedImageUrl(post: WordPressPost, fallback: string = "/placeholder.svg"): string {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  if (featuredMedia?.source_url) {
    return featuredMedia.source_url;
  }
  return fallback;
}

/**
 * Transform WordPress post to BlogPost format
 */
export function transformWordPressPostToBlogPost(post: WordPressPost): BlogPost {
  const slug = post.slug;
  const link = `/media/${slug}`;
  const image = getFeaturedImageUrl(post, `/media/${slug}.png`);
  const author = post._embedded?.author?.[0]?.name || "Connect Tech+Talent";
  const date = formatWordPressDate(post.date);
  const excerpt = extractExcerpt(post.excerpt?.rendered || "");

  return {
    id: post.id.toString(),
    title: post.title?.rendered || "Untitled",
    excerpt,
    link,
    image,
    author,
    date,
    slug,
    content: post.content?.rendered,
  };
}

/**
 * Transform array of WordPress posts to BlogPost format
 */
export function transformWordPressPosts(posts: WordPressPost[]): BlogPost[] {
  return posts.map(transformWordPressPostToBlogPost);
}

