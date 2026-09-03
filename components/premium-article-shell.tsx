"use client"

/**
 * PremiumArticleShell — v2 (reference-matched)
 *
 * Visual layout now exactly matches the approved media-insights-standalone.html
 * reference design. All interactive behaviors (progress bar, TOC IntersectionObserver,
 * smooth-scroll, share intents, related posts, prev/next) are preserved from v1.
 *
 * Usage:
 *   <PremiumArticleShell
 *     slug="behavioral-interviewing-techniques"
 *     title="5 Ways to Leverage Behavioral Interviewing..."
 *     category="Tech Hiring"
 *     author="Kannan Kaliyur"
 *     date="April 26, 2025"
 *     readTime="8 min read"
 *     image="/media/behavioral-interviewing.png"
 *     tocItems={[{ id: "section-1", label: "1. Evaluating Commitment" }, ...]}
 *   >
 *     <p>Article body JSX goes here…</p>
 *   </PremiumArticleShell>
 */

import { useState, useEffect, useCallback, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import type { LocalBlogPost } from "@/lib/blog-data"

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface TocItem {
  id: string
  label: string
}

export interface PremiumArticleShellProps {
  /** Slug used for related-posts / prev-next lookups */
  slug: string
  title: string
  category?: string
  author?: string
  date?: string
  readTime?: string
  /** Skim time shown in metadata row (default: auto-derived from readTime) */
  skimTime?: string
  /** Hero image — absolute URL or /public path */
  image?: string
  /** Table-of-contents entries shown in the sticky sidebar */
  tocItems?: TocItem[]
  /** Article body content */
  children: ReactNode
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG icons (match reference exactly)
// ─────────────────────────────────────────────────────────────────────────────

function IconCalendar() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-[13.5px] h-[13.5px]" style={{ color: "var(--blog-g4)" }}>
      <rect x="2" y="2" width="12" height="12" rx="2" /><path d="M5 1v2M11 1v2M2 6h12" strokeLinecap="round" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-[13.5px] h-[13.5px]" style={{ color: "var(--blog-g4)" }}>
      <circle cx="8" cy="8" r="6" /><path d="M8 5v3.5l2 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconZap() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-[13.5px] h-[13.5px]" style={{ color: "var(--blog-g4)" }}>
      <path d="M2 8l5 5 7-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-[14px] h-[14px]">
      <path d="M13.5 1h-11A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1zM5.5 13H3.5V6.5h2V13zM4.5 5.5a1 1 0 110-2 1 1 0 010 2zM13 13h-2v-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V13h-2V6.5h2V7.6c.52-.77 1.4-1.1 2.2-1.1C12.2 6.5 13 7.5 13 9V13z" />
    </svg>
  )
}
function IconTwitter() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-[14px] h-[14px]">
      <path d="M12.6 1h2.3L9.7 7 16 15h-4.1l-3.7-4.9L3.9 15H1.6l5.5-6.4L1 1h4.2l3.4 4.5L12.6 1zm-.8 12.6h1.3L4.2 2.4H2.8l9 11.2z" />
    </svg>
  )
}
function IconEmail() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[14px] h-[14px]">
      <rect x="1" y="3" width="14" height="10" rx="1.5" /><path d="M1 4l7 5 7-5" strokeLinecap="round" />
    </svg>
  )
}
function IconCopy({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg viewBox="0 0 16 16" fill="none" stroke="#22c55e" strokeWidth={1.8} className="w-[14px] h-[14px]">
        <path d="M2.5 8l4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[14px] h-[14px]">
      <rect x="6" y="1" width="9" height="11" rx="1.5" /><path d="M10 12v2a1.5 1.5 0 01-1.5 1.5H1.5A1.5 1.5 0 010 14V5a1.5 1.5 0 011.5-1.5H4" strokeLinecap="round" />
    </svg>
  )
}
function IconArrowLeft() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
      <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// TOC Sidebar (reference: .toc / .toc-card / .tlist / .ta)
// ─────────────────────────────────────────────────────────────────────────────

function TocSidebar({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "")

  useEffect(() => {
    if (items.length === 0) return

    const handleScroll = () => {
      // scrollY + 120px offset accounts for the sticky nav + a little breathing room
      const scrollY = window.scrollY + 120
      let current = items[0].id

      for (const { id } of items) {
        const el = document.getElementById(id)
        if (!el) continue
        // Keep updating as long as the heading's top is above the scroll position
        if (el.offsetTop <= scrollY) current = id
      }

      setActiveId(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // set correct active item on initial render
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  if (items.length < 2) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })
  }

  return (
    /* Reference: .toc — sticky, top:88px, hidden at ≤1024px */
    <aside
      className="toc-sidebar"
      style={{ position: "sticky", top: 88, alignSelf: "start" }}
    >
      {/* Reference: .toc-card */}
      <div
        style={{
          background: "var(--blog-g0)",
          border: "1px solid var(--blog-g2)",
          borderRadius: 16,
          padding: "20px 16px",
        }}
      >
        {/* Reference: .tl */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--blog-g4)",
            marginBottom: 14,
            padding: "0 4px",
          }}
        >
          In This Article
        </p>
        <nav aria-label="Article table of contents">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map((item) => {
              const isActive = activeId === item.id
              const displayLabel = item.label.replace(/^\d+\s+/, "")
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.id); setActiveId(item.id) }}
                    className={`blog-toc-link${isActive ? " active" : ""} no-link-style`}
                  >
                    {displayLabel}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Responsive: hide TOC at ≤1024px */}
      <style jsx>{`
        .toc-sidebar { display: block; }
        @media (max-width: 1024px) { .toc-sidebar { display: none; } }
      `}</style>
    </aside>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Related Card (same .bc2 style as listing cards)
// ─────────────────────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: LocalBlogPost }) {
  return (
    <Link href={post.link} className="no-link-style group">
      <article className="blog-card h-full">
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--blog-g1)" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="blog-card-img"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <span
            style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blog-p)", marginBottom: 8, display: "block" }}
          >
            {post.category}
          </span>
          <h3
            style={{ fontSize: 14, fontWeight: 700, color: "var(--blog-g9)", lineHeight: 1.4, marginBottom: 8, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {post.title}
          </h3>
          <div style={{ fontSize: 11, color: "var(--blog-g4)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span>{post.author}</span><span>•</span><span>{post.date}</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--blog-g5)", lineHeight: 1.6, fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1, marginBottom: 16 }}>
            {post.excerpt}
          </p>
          <span
            className="inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-150"
            style={{ fontSize: 12.5, fontWeight: 600, color: "var(--blog-p)" }}
          >
            Learn More
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
              <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Shell
// ─────────────────────────────────────────────────────────────────────────────

export default function PremiumArticleShell({
  slug,
  title,
  category,
  author = "Connect Tech+Talent",
  date,
  readTime,
  skimTime,
  image,
  tocItems = [],
  children,
}: PremiumArticleShellProps) {
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  // Related posts / prev / next are now handled server-side via article-client.tsx
  // for CMS-driven posts. This shell is kept for backward compatibility.
  const relatedPosts: LocalBlogPost[] = []
  const prev = null as LocalBlogPost | null
  const next = null as LocalBlogPost | null

  // ── Auto-build TOC from h2 headings when tocItems not supplied ────────────
  const [autoToc, setAutoToc] = useState<TocItem[]>([])
  useEffect(() => {
    if (tocItems.length >= 2) return
    const prose = document.querySelector(".article-prose-static")
    if (!prose) return
    const detected: TocItem[] = Array.from(prose.querySelectorAll("h2"))
      .map((h2, i) => {
        const el = h2 as HTMLElement
        // Assign a stable id if the heading lacks one
        if (!el.id) {
          el.id = `section-${i + 1}`
          el.style.scrollMarginTop = "100px"
        }
        return {
          id: el.id,
          label: (el.textContent ?? "").replace(/^\d+\s+/, "").trim(),
        }
      })
      .filter((item) => item.label.length > 0)
    setAutoToc(detected)
  }, [tocItems])
  // Prefer explicit tocItems; fall back to auto-detected headings
  const effectiveToc = tocItems.length >= 2 ? tocItems : autoToc

  // Reading progress
  useEffect(() => {
    const update = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  // Strip leading numeric prefixes from h2 headings in static article body
  useEffect(() => {
    const prose = document.querySelector(".article-prose-static")
    if (!prose) return
    prose.querySelectorAll("h2").forEach((h2) => {
      const firstText = h2.childNodes[0]
      if (firstText?.nodeType === Node.TEXT_NODE) {
        firstText.textContent = (firstText.textContent ?? "").replace(/^\d+\s+/, "")
      }
    })
  }, [])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const openLinkedIn = useCallback(() =>
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer"),
    [shareUrl, title])

  const openTwitter = useCallback(() =>
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer"),
    [shareUrl, title])

  const openEmail = useCallback(() =>
    window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`, "_self"),
    [shareUrl, title])

  const handleCopy = useCallback(async () => {
    try { await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { /* unavailable */ }
  }, [shareUrl])

  // Auto-derive skim time
  const derivedSkimTime = skimTime ?? (() => {
    const m = readTime?.match(/(\d+)/)
    const mins = m ? Math.max(1, Math.ceil(parseInt(m[1]) / 4)) : null
    return mins ? `${mins} min` : null
  })()

  return (
    <div className="blog-layout" style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ── Reading progress bar ─────────────────────────────────────────────── */}
      {/* Reference: #progress-bar — position:fixed, top:0, height:3px, gradient */}
      <div
        className="blog-progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* ── Breadcrumb bar ───────────────────────────────────────────────────── */}
      {/* Reference: .bb / .bbi / .bc-nav / .bl */}
      <div style={{ borderBottom: "1px solid var(--blog-g1)", background: "var(--blog-g0)", padding: "10px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5" style={{ fontSize: 12, color: "var(--blog-g5)" }}>
              <Link href="/" className="no-link-style" style={{ color: "var(--blog-g5)", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blog-g8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blog-g5)")}
              >Home</Link>
              <span style={{ fontSize: 10, color: "var(--blog-g4)" }}>›</span>
              <Link href="/media" className="no-link-style" style={{ color: "var(--blog-g5)", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blog-g8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blog-g5)")}
              >Media &amp; Insights</Link>
              {category && (
                <>
                  <span style={{ fontSize: 10, color: "var(--blog-g4)" }}>›</span>
                  <span style={{ color: "var(--blog-g7)", fontWeight: 500 }}>{category}</span>
                </>
              )}
            </nav>

            {/* Back link */}
            <Link href="/media" className="no-link-style flex items-center gap-1" style={{ fontSize: 12, color: "var(--blog-g5)", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blog-g8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blog-g5)")}
            >
              <IconArrowLeft />
              Back to Media &amp; Insights
            </Link>
          </div>
        </div>
      </div>

      {/* ── Article header (category + title + meta + share) ─────────────────── */}
      {/* Reference: .art-wrap / .ahs / .acat-badge / .at / .amr / .am / .sr */}
      <div className="max-w-[1280px] mx-auto px-8 md:px-4" style={{ paddingTop: 28 }}>

        {/* Category badge — reference: .acat-badge */}
        {category && (
          <div style={{ marginBottom: 20 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "5px 14px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "rgba(27,153,167,0.1)",
                color: "var(--blog-p)",
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* Title — reference: .at */}
        <h1
          style={{
            fontWeight: 800,
            color: "var(--blog-g9)",
            lineHeight: 1.13,
            marginBottom: 28,
            maxWidth: 900,
            fontSize: "clamp(30px, 4vw, 54px)",
            textWrap: "balance",
          } as React.CSSProperties}
        >
          {title}
        </h1>

        {/* Meta row + share — reference: .amr */}
        <div
          className="flex flex-wrap items-center justify-between gap-3"
          style={{ paddingBottom: 32, borderBottom: "1px solid var(--blog-g1)" }}
        >
          {/* Author + date + readTime + skimTime */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5" style={{ fontSize: 13, color: "var(--blog-g5)" }}>
            {/* Author avatar — reference: .av */}
            <div
              className="flex items-center gap-2"
            >
              <div
                style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "linear-gradient(135deg,#1b99a7,#0d7a85)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700, color: "#fff", flexShrink: 0,
                }}
              >
                CT
              </div>
              <span style={{ fontWeight: 600, color: "var(--blog-g7)" }}>{author}</span>
            </div>

            {date && (
              <>
                <span style={{ color: "var(--blog-g3)" }}>•</span>
                <span className="flex items-center gap-1"><IconCalendar />{date}</span>
              </>
            )}
            {readTime && (
              <>
                <span style={{ color: "var(--blog-g3)" }}>•</span>
                <span className="flex items-center gap-1"><IconClock />{readTime}</span>
              </>
            )}
            {derivedSkimTime && (
              <>
                <span style={{ color: "var(--blog-g3)" }}>•</span>
                <span className="flex items-center gap-1"><IconZap />{derivedSkimTime} to skim</span>
              </>
            )}
          </div>

          {/* Share buttons — reference: .sr / .sb */}
          <div className="flex items-center gap-1.5">
            <span
              style={{ fontSize: 11, color: "var(--blog-g4)", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginRight: 4 }}
            >
              Share
            </span>
            {[
              { icon: <IconLinkedIn />, label: "Share on LinkedIn", fn: openLinkedIn },
              { icon: <IconTwitter />, label: "Share on X / Twitter", fn: openTwitter },
              { icon: <IconEmail />, label: "Share via Email", fn: openEmail },
            ].map(({ icon, label, fn }) => (
              <button
                key={label}
                onClick={fn}
                aria-label={label}
                title={label}
                className="blog-share-btn"
              >
                {icon}
              </button>
            ))}
            <button onClick={handleCopy} aria-label="Copy link" className="blog-share-btn">
              <IconCopy copied={copied} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero image — reference: .hw ──────────────────────────────────────── */}
      {image && (
        <div className="max-w-[1280px] mx-auto px-8 md:px-4" style={{ marginTop: 32 }}>
          <div className="blog-hero-img-wrap">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-700"
              unoptimized={image.startsWith("http")}
            />
            {/* Reference: .hw-grad */}
            <div
              style={{
                position: "absolute", inset: "auto 0 0 0", height: "25%",
                background: "linear-gradient(to top, rgba(0,0,0,0.14), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* ── Two-column body (TOC + prose) — reference: .acs / .abg ─────────── */}
      <div style={{ padding: "48px 0 64px" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          {/* Grid only when TOC has ≥2 entries; otherwise single-column prose */}
          <div className={effectiveToc.length >= 2 ? "article-body-grid" : ""}>
            {/* TOC sidebar — only rendered when headings exist */}
            {effectiveToc.length >= 2 && <TocSidebar items={effectiveToc} />}

            {/* Article prose — reference: .prose */}
            <div className="blog-prose article-prose-static">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Banner — reference: .ctas / .ctai ───────────────────────────── */}
      <section style={{ background: "var(--blog-g0)", borderTop: "1px solid var(--blog-g1)", padding: "56px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <div
            className="flex flex-wrap items-center gap-8"
            style={{ maxWidth: 960, margin: "0 auto" }}
          >
            {/* Icon */}
            <div
              style={{ width: 64, height: 64, borderRadius: 16, background: "var(--blog-pl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="5" fill="#1b99a7" opacity="0.4" />
                <circle cx="22" cy="10" r="5" fill="#1b99a7" opacity="0.6" />
                <circle cx="16" cy="22" r="5" fill="#1b99a7" />
              </svg>
            </div>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--blog-g9)", marginBottom: 6 }}>
                Ready to build an AI-ready talent strategy?
              </h2>
              <p style={{ fontSize: 14, color: "var(--blog-g5)", lineHeight: 1.6, fontWeight: 300 }}>
                Partner with our team to unlock the potential of AI-driven hiring and build high-performing teams for the future.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-2.5" style={{ flexShrink: 0 }}>
              <Link
                href="/contact"
                className="no-link-style inline-flex items-center gap-1.5 cta-btn-primary"
                style={{ padding: "10px 20px", background: "var(--blog-p)", color: "#fff", fontSize: 13.5, fontWeight: 600, borderRadius: 8, transition: "background 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blog-pd)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blog-p)")}
              >
                Talk to Our Team
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/talent"
                className="no-link-style inline-flex items-center gap-1.5"
                style={{ padding: "10px 20px", border: "1.5px solid var(--blog-g3)", color: "var(--blog-g7)", fontSize: 13.5, fontWeight: 600, borderRadius: 8, transition: "all 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--blog-p)"; e.currentTarget.style.color = "var(--blog-p)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--blog-g3)"; e.currentTarget.style.color = "var(--blog-g7)" }}
              >
                Explore AI Talent
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts — reference: .rs / .rg ─────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "56px 0", background: "#fff", borderTop: "1px solid var(--blog-g1)" }}>
          <div className="max-w-[1280px] mx-auto px-8 md:px-4">
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--blog-g9)", marginBottom: 28 }}>
              Related Insights
            </h2>
            <div className="related-grid">
              {relatedPosts.map((post) => <RelatedCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next — reference: .pn / .pni / .pl2 / .nx ───────────────── */}
      {(prev || next) && (
        <div style={{ borderTop: "1px solid var(--blog-g1)", padding: "32px 0" }}>
          <div className="max-w-[1280px] mx-auto px-8 md:px-4">
            <div className="flex items-center justify-between gap-4">
              {/* Previous */}
              {prev ? (
                <Link
                  href={prev.link}
                  className="no-link-style flex items-center gap-3 prev-next-link"
                  style={{ fontSize: 13, color: "var(--blog-g6)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blog-p)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blog-g6)")}
                >
                  <IconArrowLeft />
                  <div>
                    <span style={{ fontSize: 10, color: "var(--blog-g4)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 2 }}>
                      Previous Article
                    </span>
                    <span style={{ fontWeight: 600, lineHeight: 1.3, maxWidth: 280, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {prev.title}
                    </span>
                  </div>
                </Link>
              ) : <div />}

              {/* Next */}
              {next ? (
                <Link
                  href={next.link}
                  className="no-link-style flex items-center gap-3 prev-next-link"
                  style={{ fontSize: 13, color: "var(--blog-g6)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blog-p)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blog-g6)")}
                >
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 10, color: "var(--blog-g4)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 2 }}>
                      Next Article
                    </span>
                    <span style={{ fontWeight: 600, lineHeight: 1.3, maxWidth: 280, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {next.title}
                    </span>
                  </div>
                  <IconArrowRight />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
