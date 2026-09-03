/**
 * lib/slugify.ts
 *
 * Converts a heading string to a URL-safe, lowercase, hyphen-separated ID.
 * Used by page.tsx to generate consistent heading IDs for the TOC.
 *
 * Examples:
 *   "Understand Your Needs"              → "understand-your-needs"
 *   "Data Collection and Integration"    → "data-collection-and-integration"
 *   "AI/ML Tools & Frameworks"          → "aiml-tools-frameworks"
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")   // strip non-word chars (keep hyphens)
    .replace(/\s+/g, "-")        // spaces → hyphens
    .replace(/-+/g, "-")         // collapse consecutive hyphens
    .replace(/^-|-$/g, "")       // trim leading/trailing hyphens
}

/**
 * Extract H2 headings from HTML string, assign unique slugified IDs,
 * inject them into the HTML, and return both the patched HTML and the TOC items.
 *
 * @param html - HTML string output from Markdown parser
 * @returns `{ processedContent, headings }`
 */
export function extractAndInjectHeadings(html: string): {
  processedContent: string
  headings: { id: string; label: string }[]
} {
  const headings: { id: string; label: string }[] = []
  const usedIds = new Map<string, number>()

  const processedContent = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_match, attrs: string, inner: string) => {
      // Strip any existing HTML tags from the inner text for the label
      const rawText = inner.replace(/<[^>]+>/g, "").trim()
      // Strip leading numeric prefixes like "01 ", "14 "
      const label = rawText.replace(/^\d+\s+/, "")

      // Generate a slug-based ID
      let baseId = slugify(label) || "section"

      // Resolve duplicates
      const count = usedIds.get(baseId) ?? 0
      usedIds.set(baseId, count + 1)
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`

      headings.push({ id, label })

      // Clean numeric prefix from rendered heading too
      const cleanInner = inner.replace(/^(\s*)(\d+\s+)/, "$1")

      return `<h2${attrs} id="${id}" style="scroll-margin-top:100px">${cleanInner}</h2>`
    }
  )

  return { processedContent, headings }
}
