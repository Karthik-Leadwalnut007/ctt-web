"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { LocalBlogPost } from "@/lib/blog-data"
import TocSidebar from "./toc-sidebar"

interface TocItem { id: string; label: string }

interface DynamicArticleContentProps {
  post: LocalBlogPost
  processedContent: string
  headings: TocItem[]
  relatedPosts: LocalBlogPost[]
  prev: LocalBlogPost | null
  next: LocalBlogPost | null
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
      <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DynamicArticleContent({
  post,
  processedContent,
  headings,
  relatedPosts,
  prev,
  next,
}: DynamicArticleContentProps) {
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const update = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const openLinkedIn = useCallback(() =>
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`, "_blank", "noopener,noreferrer"),
    [shareUrl, post.title])

  const openTwitter = useCallback(() =>
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, "_blank", "noopener,noreferrer"),
    [shareUrl, post.title])

  const openEmail = useCallback(() =>
    window.open(`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`, "_self"),
    [shareUrl, post.title])

  const handleCopy = useCallback(async () => {
    try { await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { /* unavailable */ }
  }, [shareUrl])

  const wordCount = post.content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length
  const skimMinutes = Math.max(1, Math.ceil(wordCount / 500))

  return (
    <div className="blog-layout" style={{ minHeight: "100vh", background: "#fff" }}>

      {/* Reading progress bar */}
      <div className="blog-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* Breadcrumb bar */}
      <div style={{ borderBottom: "1px solid var(--blog-g1)", background: "var(--blog-g0)", padding: "10px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5" style={{ fontSize: 12, color: "var(--blog-g5)" }}>
              <Link href="/" className="no-link-style" style={{ color: "var(--blog-g5)" }}>Home</Link>
              <span style={{ fontSize: 10, color: "var(--blog-g4)" }}>›</span>
              <Link href="/media" className="no-link-style" style={{ color: "var(--blog-g5)" }}>Media &amp; Insights</Link>
              {post.category && (
                <>
                  <span style={{ fontSize: 10, color: "var(--blog-g4)" }}>›</span>
                  <span style={{ color: "var(--blog-g7)", fontWeight: 500 }}>{post.category}</span>
                </>
              )}
            </nav>
            <Link href="/media" className="no-link-style flex items-center gap-1" style={{ fontSize: 12, color: "var(--blog-g5)" }}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Back to Media &amp; Insights
            </Link>
          </div>
        </div>
      </div>

      {/* Article header */}
      <div className="max-w-[1280px] mx-auto px-8 md:px-4" style={{ paddingTop: 28 }}>
        {post.category && (
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", background: "rgba(27,153,167,0.1)", color: "var(--blog-p)" }}>
              {post.category}
            </span>
          </div>
        )}

        <h1 style={{ fontWeight: 800, color: "var(--blog-g9)", lineHeight: 1.13, marginBottom: 28, maxWidth: 900, fontSize: "clamp(30px, 4vw, 54px)" }}>
          {post.title}
        </h1>

        {/* Meta row + share */}
        <div className="flex flex-wrap items-center justify-between gap-3" style={{ paddingBottom: 32, borderBottom: "1px solid var(--blog-g1)" }}>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5" style={{ fontSize: 13, color: "var(--blog-g5)" }}>
            <div className="flex items-center gap-2">
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#1b99a7,#0d7a85)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff" }}>CT</div>
              <span style={{ fontWeight: 600, color: "var(--blog-g7)" }}>{post.author}</span>
            </div>
            {post.date && <><span style={{ color: "var(--blog-g3)" }}>•</span><span>{post.date}</span></>}
            {post.readTime && <><span style={{ color: "var(--blog-g3)" }}>•</span><span>{post.readTime}</span></>}
            <><span style={{ color: "var(--blog-g3)" }}>•</span><span>{skimMinutes} min to skim</span></>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-1.5">
            <span style={{ fontSize: 11, color: "var(--blog-g4)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginRight: 4 }}>Share</span>
            {[
              { label: "LinkedIn", fn: openLinkedIn, icon: <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5"><path d="M13.5 1h-11A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1zM5.5 13H3.5V6.5h2V13zM4.5 5.5a1 1 0 110-2 1 1 0 010 2zM13 13h-2v-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V13h-2V6.5h2V7.6c.52-.77 1.4-1.1 2.2-1.1C12.2 6.5 13 7.5 13 9V13z"/></svg> },
              { label: "Twitter", fn: openTwitter, icon: <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5"><path d="M12.6 1h2.3L9.7 7 16 15h-4.1l-3.7-4.9L3.9 15H1.6l5.5-6.4L1 1h4.2l3.4 4.5L12.6 1zm-.8 12.6h1.3L4.2 2.4H2.8l9 11.2z"/></svg> },
              { label: "Email", fn: openEmail, icon: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 4l7 5 7-5" strokeLinecap="round"/></svg> },
            ].map(({ label, fn, icon }) => (
              <button key={label} onClick={fn} aria-label={label} className="blog-share-btn">{icon}</button>
            ))}
            <button onClick={handleCopy} aria-label="Copy link" className="blog-share-btn">
              {copied
                ? <svg viewBox="0 0 16 16" fill="none" stroke="#22c55e" strokeWidth={1.8} className="w-3.5 h-3.5"><path d="M2.5 8l4 4 7-8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5"><rect x="6" y="1" width="9" height="11" rx="1.5"/><path d="M10 12v2a1.5 1.5 0 01-1.5 1.5H1.5A1.5 1.5 0 010 14V5a1.5 1.5 0 011.5-1.5H4" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {post.image && (
        <div className="max-w-[1280px] mx-auto px-8 md:px-4" style={{ marginTop: 32 }}>
          <div className="blog-hero-img-wrap">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" unoptimized={post.image.startsWith("http")} />
            <div style={{ position: "absolute", inset: "auto 0 0 0", height: "25%", background: "linear-gradient(to top, rgba(0,0,0,0.14), transparent)", pointerEvents: "none" }} />
          </div>
        </div>
      )}

      {/* Two-column body */}
      <div style={{ padding: "48px 0 64px" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <div className="article-body-grid">
            <TocSidebar headings={headings} />
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section style={{ background: "var(--blog-g0)", borderTop: "1px solid var(--blog-g1)", padding: "56px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-4">
          <div className="flex flex-wrap items-center gap-8" style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "var(--blog-pl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="10" cy="10" r="5" fill="#1b99a7" opacity="0.4"/><circle cx="22" cy="10" r="5" fill="#1b99a7" opacity="0.6"/><circle cx="16" cy="22" r="5" fill="#1b99a7"/></svg>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--blog-g9)", marginBottom: 6 }}>Ready to build an AI-ready talent strategy?</h2>
              <p style={{ fontSize: 14, color: "var(--blog-g5)", lineHeight: 1.6, fontWeight: 300 }}>Partner with our team to unlock the potential of AI-driven hiring and build high-performing teams for the future.</p>
            </div>
            <div className="flex flex-wrap gap-2.5" style={{ flexShrink: 0 }}>
              <Link href="/contact" className="no-link-style inline-flex items-center gap-1.5" style={{ padding: "10px 20px", background: "var(--blog-p)", color: "#fff", fontSize: 13.5, fontWeight: 600, borderRadius: 8 }}>
                Talk to Our Team <ArrowIcon />
              </Link>
              <Link href="/talent" className="no-link-style inline-flex items-center gap-1.5" style={{ padding: "10px 20px", border: "1.5px solid var(--blog-g3)", color: "var(--blog-g7)", fontSize: 13.5, fontWeight: 600, borderRadius: 8 }}>
                Explore AI Talent <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "56px 0", background: "#fff", borderTop: "1px solid var(--blog-g1)" }}>
          <div className="max-w-[1280px] mx-auto px-8 md:px-4">
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--blog-g9)", marginBottom: 28 }}>Related Insights</h2>
            <div className="related-grid">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={rp.link} className="no-link-style group">
                  <article className="blog-card h-full">
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--blog-g1)" }}>
                      <Image src={rp.image} alt={rp.title} fill className="blog-card-img" sizes="33vw" unoptimized loading="lazy" />
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--blog-p)", marginBottom: 8, display: "block" }}>{rp.category}</span>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--blog-g9)", lineHeight: 1.4, marginBottom: 8, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{rp.title}</h3>
                      <div style={{ fontSize: 11, color: "var(--blog-g4)", marginBottom: 10 }}>{rp.author} • {rp.date}</div>
                      <p style={{ fontSize: 13, color: "var(--blog-g5)", lineHeight: 1.6, fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1, marginBottom: 16 }}>{rp.excerpt}</p>
                      <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-150" style={{ fontSize: 12.5, fontWeight: 600, color: "var(--blog-p)" }}>
                        Learn More <ArrowIcon />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      {(prev || next) && (
        <div style={{ borderTop: "1px solid var(--blog-g1)", padding: "32px 0" }}>
          <div className="max-w-[1280px] mx-auto px-8 md:px-4">
            <div className="flex items-center justify-between gap-4">
              {prev ? (
                <Link href={prev.link} className="no-link-style flex items-center gap-3" style={{ fontSize: 13, color: "var(--blog-g6)" }}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0"><path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <span style={{ fontSize: 10, color: "var(--blog-g4)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 2 }}>Previous Article</span>
                    <span style={{ fontWeight: 600, lineHeight: 1.3 }}>{prev.title}</span>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={next.link} className="no-link-style flex items-center gap-3" style={{ fontSize: 13, color: "var(--blog-g6)" }}>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 10, color: "var(--blog-g4)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 2 }}>Next Article</span>
                    <span style={{ fontWeight: 600, lineHeight: 1.3 }}>{next.title}</span>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0"><path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
