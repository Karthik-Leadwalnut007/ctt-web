/**
 * lib/readingTime.ts
 *
 * Automatically calculate reading time from article content.
 * Used when the CMS `readTime` frontmatter field is empty.
 *
 * Reading speed: 238 wpm (average adult)
 * Skim speed:    500 wpm
 */

/** Strip HTML tags and Markdown syntax to get raw word content */
function stripMarkup(content: string): string {
  return content
    .replace(/<[^>]+>/g, " ")          // strip HTML tags
    .replace(/```[\s\S]*?```/g, " ")    // strip fenced code blocks
    .replace(/`[^`]+`/g, " ")           // strip inline code
    .replace(/!\[.*?\]\(.*?\)/g, " ")   // strip images
    .replace(/\[.*?\]\(.*?\)/g, " ")    // strip links (keep text)
    .replace(/[#*_~>|]/g, " ")          // strip Markdown symbols
    .replace(/\s+/g, " ")               // collapse whitespace
    .trim()
}

/** Count words in a string */
function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/**
 * Calculate reading time from article content string (Markdown or HTML).
 * @returns e.g. "8 min read"
 */
export function calcReadingTime(content: string): string {
  const words = wordCount(stripMarkup(content))
  const minutes = Math.max(1, Math.round(words / 238))
  return `${minutes} min read`
}

/**
 * Calculate skim time (faster scan read) from article content.
 * @returns e.g. "2 min to skim"
 */
export function calcSkimTime(content: string): string {
  const words = wordCount(stripMarkup(content))
  const minutes = Math.max(1, Math.ceil(words / 500))
  return `${minutes} min to skim`
}
