/**
 * app/media/[slug]/article-client.tsx
 *
 * THE reusable BlogArticlePage template — mobile-optimised.
 * Every CMS blog post at /media/[slug] renders through this one component.
 *
 * TOC headings are extracted from the rendered DOM after mount via
 * querySelectorAll('.blog-prose h2[id]') — no serialisation issues.
 *
 * Responsive layout classes live in app/globals.css (art-* prefix).
 */
"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft, ArrowRight, Calendar, Clock, Zap,
  Linkedin, Twitter, Mail, Copy, Check,
  ChevronDown, ChevronUp, ChevronRight,
} from "lucide-react"
import type { LocalBlogPost } from "@/lib/blog-data"

interface ArticlePageProps {
  post: LocalBlogPost
  processedContent: string
  relatedPosts: LocalBlogPost[]
  prev: LocalBlogPost | null
  next: LocalBlogPost | null
  skimTime: string
  headings?: { id: string; label: string }[]
}

interface TocItem { id: string; label: string }

// ─── Desktop TOC Sidebar ─────────────────────────────────────────────────────
function TOCSidebar({
  headings, activeId, onLinkClick,
}: { headings: TocItem[]; activeId: string; onLinkClick: (id: string) => void }) {
  if (headings.length === 0) return null
  return (
    <aside className="toc-rail" aria-label="Table of contents">
      <div style={{ background:"#fff", border:"1px solid #E5E7EB", borderRadius:18, padding:"20px 16px", boxShadow:"0 4px 24px rgba(0,0,0,0.05)" }}>
        <p style={{ fontSize:10, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#9CA3AF", marginBottom:14, padding:"0 4px" }}>
          In This Article
        </p>
        <nav>
          <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:2 }}>
            {headings.map(({ id, label }) => {
              const isActive = activeId === id
              return (
                <li key={id}>
                  <a href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); onLinkClick(id) }}
                    style={{
                      display:"block", padding:"7px 12px", fontSize:13, lineHeight:1.4,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#1b99a7" : "#6B7280",
                      borderLeft:`2px solid ${isActive ? "#1b99a7" : "transparent"}`,
                      borderRadius:"0 6px 6px 0",
                      background: isActive ? "rgba(27,153,167,0.07)" : "transparent",
                      transition:"color 0.15s, background 0.15s, border-color 0.15s",
                      cursor:"pointer", textDecoration:"none",
                    }}>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

// ─── Mobile collapsible TOC ───────────────────────────────────────────────────
function MobileTOC({ headings }: { headings: TocItem[] }) {
  const [open, setOpen] = useState(false)
  if (headings.length === 0) return null
  return (
    <div className="mobile-toc" style={{ marginBottom:28, border:"1px solid #E5E7EB", borderRadius:12, overflow:"hidden" }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", background:"#F9FAFB", border:"none", cursor:"pointer" }}>
        <span style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"#6B7280" }}>In this article</span>
        {open
          ? <ChevronUp style={{ width:16, height:16, color:"#6B7280" }} />
          : <ChevronDown style={{ width:16, height:16, color:"#6B7280" }} />}
      </button>
      {open && (
        <nav style={{ padding:"12px 16px", background:"#fff" }}>
          <ul style={{ listStyle:"none", padding:0, margin:0 }}>
            {headings.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}
                  style={{ display:"block", fontSize:13, color:"#4B5563", padding:"6px 0", textDecoration:"none", borderBottom:"1px solid #F3F4F6" }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

// ─── Related article card ─────────────────────────────────────────────────────
function RelatedCard({ post }: { post: LocalBlogPost }) {
  return (
    <article className="related-card" style={{ display:"flex", flexDirection:"column", background:"#fff", border:"1px solid #E5E7EB", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", height:"100%" }}>
      <Link href={post.link} style={{ display:"block", overflow:"hidden", textDecoration:"none" }} tabIndex={-1} aria-hidden="true">
        <div style={{ position:"relative", width:"100%", aspectRatio:"16/9", background:"#F3F4F6" }}>
          <Image src={post.image || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=338&fit=crop"} alt={post.title} fill style={{ objectFit:"cover" }} sizes="(max-width:768px) 100vw, 33vw" unoptimized loading="lazy" />
        </div>
      </Link>
      <div style={{ display:"flex", flexDirection:"column", flex:1, padding:20 }}>
        <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"#1b99a7", marginBottom:8, display:"block" }}>{post.category}</span>
        <Link href={post.link} style={{ textDecoration:"none" }}>
          <h3 style={{ fontSize:15, fontWeight:700, color:"#111827", lineHeight:1.4, marginBottom:10 }}>{post.title}</h3>
        </Link>
        <div style={{ fontSize:12, color:"#9CA3AF", marginBottom:10, display:"flex", gap:6, flexWrap:"wrap" }}>
          <span>{post.author}</span>
          {post.date && <><span>·</span><span>{post.date}</span></>}
          {post.readTime && <><span>·</span><span>{post.readTime}</span></>}
        </div>
        <p style={{ fontSize:13, color:"#6B7280", lineHeight:1.65, flex:1, marginBottom:16 }}>
          {post.excerpt?.slice(0,120)}{(post.excerpt?.length ?? 0) > 120 ? "…" : ""}
        </p>
        <Link href={post.link} style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, fontWeight:600, color:"#1b99a7", textDecoration:"none" }}>
          Read Article <ArrowRight style={{ width:14, height:14 }} />
        </Link>
      </div>
    </article>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DynamicArticleContent({
  post, processedContent, relatedPosts, prev, next, skimTime,
}: ArticlePageProps) {
  const [progress,  setProgress ] = useState(0)
  const [copied,    setCopied   ] = useState(false)
  const [headings,  setHeadings ] = useState<TocItem[]>([])
  const [activeId,  setActiveId ] = useState("")

  // Extract headings from the rendered DOM after prose mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".blog-prose h2[id]")
      if (els.length === 0) return
      const items: TocItem[] = Array.from(els).map(el => ({
        id: el.id,
        label: el.textContent?.trim() ?? el.id,
      }))
      setHeadings(items)
      setActiveId(items[0]?.id ?? "")
    }, 300)
    return () => clearTimeout(timer)
  }, [processedContent])

  // IntersectionObserver — active heading tracking
  useEffect(() => {
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  // Reading progress bar
  useEffect(() => {
    const update = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })
  }, [])

  const shareUrl     = typeof window !== "undefined" ? window.location.href : ""
  const openLinkedIn = useCallback(() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`, "_blank", "noopener,noreferrer"), [shareUrl, post.title])
  const openTwitter  = useCallback(() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, "_blank", "noopener,noreferrer"), [shareUrl, post.title])
  const openEmail    = useCallback(() => window.open(`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`, "_self"), [shareUrl, post.title])
  const handleCopy   = useCallback(async () => {
    try { await navigator.clipboard.writeText(shareUrl); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { /* unavailable */ }
  }, [shareUrl])

  return (
    <div className="art-page">
      {/* Reading progress bar */}
      <div aria-hidden="true" style={{ position:"fixed", top:0, left:0, height:3, zIndex:200, background:"linear-gradient(90deg,#1b99a7,#157a86)", width:`${progress}%`, transition:"width 0.1s linear", pointerEvents:"none" }} />

      {/* ── Breadcrumb ── */}
      <div className="art-breadcrumb-bar">
        <div className="art-container art-breadcrumb-inner">
          <nav aria-label="Breadcrumb" style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"#6B7280", flexWrap:"wrap" }}>
            <Link href="/" style={{ color:"#6B7280", textDecoration:"none" }}>Home</Link>
            <ChevronRight style={{ width:12, height:12, color:"#9CA3AF" }} />
            <Link href="/media" style={{ color:"#6B7280", textDecoration:"none" }}>Media &amp; Insights</Link>
            {post.category && (<><ChevronRight style={{ width:12, height:12, color:"#9CA3AF" }} /><span style={{ color:"#374151", fontWeight:500 }}>{post.category}</span></>)}
          </nav>
          <Link href="/media" className="back-link" style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, fontWeight:500, color:"#9CA3AF", textDecoration:"none" }}>
            <ArrowLeft style={{ width:14, height:14 }} /> Back to Media &amp; Insights
          </Link>
        </div>
      </div>

      {/* ── Article header ── */}
      <div className="art-header">
        <div className="art-container">
          {post.category && (
            <div style={{ marginBottom:16 }}>
              <span style={{ display:"inline-flex", alignItems:"center", padding:"5px 14px", borderRadius:999, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", background:"rgba(27,153,167,0.1)", color:"#1b99a7" }}>
                {post.category}
              </span>
            </div>
          )}
          <h1 style={{ fontWeight:800, color:"#111827", lineHeight:1.13, fontSize:"clamp(26px,4vw,54px)", marginBottom:24, maxWidth:900 }}>
            {post.title}
          </h1>

          {/* Meta + share row */}
          <div className="art-meta-row">
            <div className="art-meta-left">
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#1b99a7,#0d7a85)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, color:"#fff", flexShrink:0 }}>CT</div>
                <span style={{ fontWeight:600, color:"#374151" }}>{post.author}</span>
              </div>
              {post.date && (<><span style={{ color:"#D1D5DB" }}>·</span><div style={{ display:"flex", alignItems:"center", gap:4 }}><Calendar style={{ width:13, height:13, color:"#9CA3AF" }} /><span>{post.date}</span></div></>)}
              {post.readTime && (<><span style={{ color:"#D1D5DB" }}>·</span><div style={{ display:"flex", alignItems:"center", gap:4 }}><Clock style={{ width:13, height:13, color:"#9CA3AF" }} /><span>{post.readTime}</span></div></>)}
              <><span style={{ color:"#D1D5DB" }}>·</span><div style={{ display:"flex", alignItems:"center", gap:4 }}><Zap style={{ width:13, height:13, color:"#9CA3AF" }} /><span>{skimTime}</span></div></>
            </div>
            <div className="art-share-row">
              <span className="share-label" style={{ fontSize:11, color:"#9CA3AF", fontWeight:500, letterSpacing:"0.05em", textTransform:"uppercase", marginRight:4 }}>Share</span>
              {([
                { icon: Linkedin, label: "LinkedIn", fn: openLinkedIn },
                { icon: Twitter,  label: "X",        fn: openTwitter  },
                { icon: Mail,     label: "Email",     fn: openEmail    },
              ] as const).map(({ icon: Icon, label, fn }) => (
                <button key={label} className="share-btn" onClick={fn} aria-label={`Share on ${label}`}
                  style={{ width:36, height:36, borderRadius:"50%", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", color:"#6B7280", background:"transparent", cursor:"pointer", transition:"all 0.2s" }}>
                  <Icon style={{ width:14, height:14 }} />
                </button>
              ))}
              <button className="share-btn" onClick={handleCopy} aria-label="Copy link"
                style={{ width:36, height:36, borderRadius:"50%", border:"1px solid #E5E7EB", display:"flex", alignItems:"center", justifyContent:"center", color:"#6B7280", background:"transparent", cursor:"pointer", transition:"all 0.2s" }}>
                {copied ? <Check style={{ width:14, height:14, color:"#22c55e" }} /> : <Copy style={{ width:14, height:14 }} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero image ── */}
      {post.image && (
        <div className="art-hero-wrap">
          <div className="art-container">
            <div className="art-hero-img">
              <Image src={post.image} alt={post.title} fill style={{ objectFit:"cover" }} priority unoptimized={post.image.startsWith("http")} />
              <div style={{ position:"absolute", inset:"auto 0 0 0", height:"25%", background:"linear-gradient(to top,rgba(0,0,0,0.14),transparent)", pointerEvents:"none" }} />
            </div>
          </div>
        </div>
      )}

      {/* ── Two-column body: sticky TOC + prose ── */}
      <div className="art-body-section">
        <div className="art-container">
          <div className="article-two-col">
            <TOCSidebar headings={headings} activeId={activeId} onLinkClick={scrollToId} />
            <div style={{ minWidth:0 }}>
              <MobileTOC headings={headings} />
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: processedContent }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Newsletter ── */}
      <section className="art-newsletter" style={{ background:"linear-gradient(135deg,#1b99a7 0%,#0d7a85 100%)" }}>
        <div className="art-container">
          <div style={{ maxWidth:560, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:12 }}>Newsletter</p>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:800, color:"#fff", marginBottom:12, lineHeight:1.2 }}>Enjoyed this article?</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.75)", marginBottom:28, lineHeight:1.7, fontWeight:300 }}>
              Subscribe for weekly AI hiring insights, workforce strategies, and talent intelligence.
            </p>
            <div className="art-newsletter-form">
              <input type="email" placeholder="Your email address" className="art-newsletter-input" />
              <button className="art-newsletter-btn">Subscribe →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="art-cta-section">
        <div className="art-container">
          <div className="art-cta-inner">
            <div style={{ width:56, height:56, borderRadius:14, background:"rgba(27,153,167,0.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="5" fill="#1b99a7" opacity="0.4"/>
                <circle cx="22" cy="10" r="5" fill="#1b99a7" opacity="0.6"/>
                <circle cx="16" cy="22" r="5" fill="#1b99a7"/>
              </svg>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <h2 style={{ fontSize:17, fontWeight:700, color:"#111827", marginBottom:6 }}>Ready to build an AI-ready talent strategy?</h2>
              <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.6, fontWeight:300 }}>Partner with our team to unlock the potential of AI-driven hiring.</p>
            </div>
            <div className="art-cta-btns">
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"11px 22px", background:"#1b99a7", color:"#fff", fontSize:13.5, fontWeight:600, borderRadius:8, textDecoration:"none" }}>
                Talk to Our Team <ArrowRight style={{ width:14, height:14 }} />
              </Link>
              <Link href="/talent" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"11px 22px", border:"1.5px solid #D1D5DB", color:"#374151", fontSize:13.5, fontWeight:600, borderRadius:8, textDecoration:"none" }}>
                Explore AI Talent <ArrowRight style={{ width:14, height:14 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related articles ── */}
      {relatedPosts.length > 0 && (
        <section className="art-related-section">
          <div className="art-container">
            <div className="art-related-header">
              <div>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1b99a7", marginBottom:6 }}>Continue Reading</p>
                <h2 style={{ fontSize:20, fontWeight:700, color:"#111827" }}>Related Insights</h2>
              </div>
              <Link href="/media" style={{ display:"flex", alignItems:"center", gap:6, fontSize:14, fontWeight:600, color:"#1b99a7", textDecoration:"none" }}>
                View all <ArrowRight style={{ width:14, height:14 }} />
              </Link>
            </div>
            <div className="related-3-col">
              {relatedPosts.map(rp => <RelatedCard key={rp.id} post={rp} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next ── */}
      {(prev || next) && (
        <div style={{ borderTop:"1px solid #F3F4F6", padding:"32px 0", background:"#F9FAFB" }}>
          <div className="art-container">
            <p style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"#9CA3AF", marginBottom:16 }}>More Articles</p>
            <div className="prev-next-grid">
              {prev ? (
                <Link href={prev.link} className="pn-card" style={{ display:"flex", alignItems:"flex-start", gap:14, padding:"18px 20px", background:"#fff", borderRadius:16, border:"1px solid #E5E7EB", textDecoration:"none", transition:"box-shadow 0.2s,border-color 0.2s" }}>
                  <div style={{ width:36, height:36, borderRadius:10, background:"#F3F4F6", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <ArrowLeft style={{ width:16, height:16, color:"#9CA3AF" }} />
                  </div>
                  <div style={{ minWidth:0 }}>
                    <span style={{ display:"block", fontSize:10, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:700, marginBottom:4 }}>Previous</span>
                    <span style={{ fontSize:13, fontWeight:600, color:"#111827", lineHeight:1.4, display:"block" }}>{prev.title}</span>
                    {prev.readTime && <span style={{ fontSize:11, color:"#9CA3AF", display:"block", marginTop:3 }}>{prev.readTime}</span>}
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={next.link} className="pn-card" style={{ display:"flex", alignItems:"flex-start", gap:14, flexDirection:"row-reverse", textAlign:"right", padding:"18px 20px", background:"#fff", borderRadius:16, border:"1px solid #E5E7EB", textDecoration:"none", transition:"box-shadow 0.2s,border-color 0.2s" }}>
                  <div style={{ width:36, height:36, borderRadius:10, background:"#F3F4F6", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <ArrowRight style={{ width:16, height:16, color:"#9CA3AF" }} />
                  </div>
                  <div style={{ minWidth:0 }}>
                    <span style={{ display:"block", fontSize:10, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:700, marginBottom:4 }}>Next</span>
                    <span style={{ fontSize:13, fontWeight:600, color:"#111827", lineHeight:1.4, display:"block" }}>{next.title}</span>
                    {next.readTime && <span style={{ fontSize:11, color:"#9CA3AF", display:"block", marginTop:3 }}>{next.readTime}</span>}
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
