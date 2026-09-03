"use client"

/**
 * TocSidebar — precision match to media-insights-standalone.html
 *
 * Reference CSS:
 *   .toc { sticky, top:88px, hidden ≤1024px }
 *   .toc-card { bg:#f9fafb, border:#e5e7eb, radius:16px, padding:20/16px }
 *   .tl { "IN THIS ARTICLE", 10px, weight:700, tracking:0.18em, upper, #9ca3af }
 *   .ta { 13px, weight:400, #6b7280, left-border:2px transparent, radius:0 6px 6px 0 }
 *   .ta:hover { #374151, bg:#f3f4f6 }
 *   .ta.ac { #1b99a7, weight:600, left-border:#1b99a7, bg:rgba(27,153,167,0.06) }
 *
 * Scroll tracking: single requestAnimationFrame-throttled scroll listener.
 * A heading becomes "active" the moment its top edge passes 130px from page top.
 */

import { useState, useEffect, useRef } from "react"

interface TocItem {
  id: string
  label: string
}

// Exact colours from the reference — hardcoded to avoid CSS-var inheritance issues
const C = {
  inactive: "#6b7280",     // --g5
  inactiveHover: "#374151", // --g7
  active: "#1b99a7",        // --p
  activeBg: "rgba(27,153,167,0.06)",
  hoverBg: "#f3f4f6",       // --g1
  label: "#9ca3af",         // --g4
  cardBg: "#f9fafb",        // --g0
  cardBorder: "#e5e7eb",    // --g2
}

export default function TocSidebar({ headings }: { headings: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "")
  const [hoverId, setHoverId] = useState<string | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    const OFFSET = 130 // px from top — accounts for sticky nav + breathing room

    const tick = () => {
      const scrollY = window.scrollY + OFFSET
      let current = headings[0].id
      for (const { id } of headings) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActiveId(current)
      rafRef.current = null
    }

    const onScroll = () => {
      if (rafRef.current !== null) return           // already scheduled
      rafRef.current = requestAnimationFrame(tick)  // throttle to one frame
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    tick() // run once on mount to set correct initial active item

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [headings])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })
    setActiveId(id)
  }

  // Need ≥ 2 headings to show the sidebar
  if (headings.length < 2) return null

  return (
    <>
      {/* Scoped media-query — cannot use Tailwind here as we are inside a client island */}
      <style>{`
        .toc-rail { display: block; position: sticky; top: 88px; align-self: start; }
        @media (max-width: 1024px) { .toc-rail { display: none; } }
      `}</style>

      <aside className="toc-rail">
        {/* .toc-card */}
        <div style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}`, borderRadius: 16, padding: "20px 16px" }}>

          {/* .tl — "IN THIS ARTICLE" */}
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.label, marginBottom: 14, padding: "0 4px" }}>
            In This Article
          </p>

          <nav aria-label="Table of contents">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {headings.map(({ id, label }) => {
                const isActive = activeId === id
                const isHover = hoverId === id && !isActive
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                      onMouseEnter={() => setHoverId(id)}
                      onMouseLeave={() => setHoverId(null)}
                      style={{
                        display: "block",
                        padding: "7px 12px",
                        fontSize: 13,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? C.active : isHover ? C.inactiveHover : C.inactive,
                        borderLeft: `2px solid ${isActive ? C.active : "transparent"}`,
                        borderRadius: "0 6px 6px 0",
                        background: isActive ? C.activeBg : isHover ? C.hoverBg : "transparent",
                        transition: "color 0.15s, background 0.15s, border-color 0.15s",
                        lineHeight: 1.4,
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

        </div>
      </aside>
    </>
  )
}
