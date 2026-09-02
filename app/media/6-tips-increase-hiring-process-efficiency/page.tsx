/**
 * Static route for: /media/6-tips-increase-hiring-process-efficiency
 *
 * Wraps the shared [slug] page component with a hardcoded slug so this
 * route never depends on the WordPress REST API — identical pattern to
 * app/media/mastering-ai-driven-hiring/.
 */
import BlogPostPage from "@/app/media/[slug]/page"
import type { Metadata } from "next"

const SLUG = "6-tips-increase-hiring-process-efficiency"

export const metadata: Metadata = {
  title: "6 Tips to Increase Your Hiring Process Efficiency | Media & Insights - Connect Tech+Talent",
  description:
    "Slow hiring costs you the best candidates. These six expert-level strategies will help your team reduce time-to-fill, improve quality of hire, and build a process that scales without sacrificing the human element.",
  openGraph: {
    title: "6 Tips to Increase Your Hiring Process Efficiency",
    description:
      "Slow hiring costs you the best candidates. Six expert-level strategies to reduce time-to-fill and improve quality of hire.",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop&q=80",
    ],
    type: "article",
    publishedTime: "2023-08-18T00:00:00Z",
    authors: ["Connect Tech+Talent"],
  },
}

export default function HiringEfficiencyPage() {
  return <BlogPostPage params={{ slug: SLUG }} />
}
