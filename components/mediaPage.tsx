"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useCallback } from "react"
import type { LocalBlogPost } from "@/lib/blog-data"

// ─── Arrow icon (matches reference svg) ──────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-3 h-3"
    >
      <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ post }: { post: LocalBlogPost }) {
  const href = post.link.startsWith("/") ? post.link : `/${post.link}`

  return (
    <Link href={href} className="block no-link-style group">
      <article className="blog-card h-full">
        {/* Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9", background: "var(--blog-g1)" }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="blog-card-img"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={post.image?.startsWith("http")}
            loading="lazy"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          {/* Category */}
          {post.category && (
            <span
              className="inline-block mb-2"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--blog-p)",
              }}
            >
              {post.category}
            </span>
          )}

          {/* Title */}
          <h2
            className="mb-2"
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "var(--blog-g9)",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h2>

          {/* Meta: author • date • readTime */}
          <div
            className="flex items-center gap-1.5 mb-2.5"
            style={{ fontSize: 11, color: "var(--blog-g4)" }}
          >
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          {/* Excerpt */}
          <p
            className="flex-1 mb-4"
            style={{
              fontSize: 13,
              color: "var(--blog-g5)",
              lineHeight: 1.6,
              fontWeight: 300,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>

          {/* Learn More */}
          <span
            className="inline-flex items-center gap-1 transition-all duration-150 group-hover:gap-2"
            style={{ fontSize: 12.5, fontWeight: 600, color: "var(--blog-p)" }}
          >
            Learn More <ArrowIcon />
          </span>
        </div>
      </article>
    </Link>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface MediaPageClientProps {
  posts: LocalBlogPost[]
}

export default function MediaPageClient({ posts }: MediaPageClientProps) {
  const [query, setQuery] = useState("")

  const filtered = useCallback(
    () =>
      query.trim()
        ? posts.filter(
            (p) =>
              p.title.toLowerCase().includes(query.toLowerCase()) ||
              p.category.toLowerCase().includes(query.toLowerCase())
          )
        : posts,
    [posts, query]
  )

  const visiblePosts = filtered()

  return (
    <div className="blog-layout">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "48px 0 32px",
          background: "linear-gradient(135deg, var(--blog-g0) 0%, #fff 60%)",
          borderBottom: "1px solid var(--blog-g1)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "var(--blog-g9)",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Media &amp; Insights
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--blog-g5)",
              fontWeight: 300,
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Expert perspectives on AI hiring, contract staffing, workforce strategy, and the future
            of talent acquisition.
          </p>
        </div>
      </section>

      {/* ── Card Grid ────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 0 64px" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          {visiblePosts.length === 0 ? (
            <p style={{ color: "var(--blog-g5)", textAlign: "center", padding: "48px 0" }}>
              No articles found.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 28,
              }}
              className="blog-grid"
            >
              {visiblePosts.map((post) => (
                <BlogCard key={post.id || post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Responsive grid styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-layout .max-w-\\[1280px\\] { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </div>
  )
}
