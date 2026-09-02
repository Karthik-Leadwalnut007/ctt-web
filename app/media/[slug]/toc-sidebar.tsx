"use client"

import { useState, useEffect } from "react"

interface TocItem {
  id: string
  label: string
}

export default function TocSidebar({ headings }: { headings: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "")

  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      // scrollY + 120px offset accounts for the sticky nav + a little breathing room
      const scrollY = window.scrollY + 120
      let current = headings[0].id

      for (const { id } of headings) {
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
  }, [headings])

  if (headings.length < 2) return null

  return (
    <aside className="toc-sidebar" style={{ position: "sticky", top: 88, alignSelf: "start" }}>
      {/* Reference: .toc-card */}
      <div style={{ background: "var(--blog-g0)", border: "1px solid var(--blog-g2)", borderRadius: 16, padding: "20px 16px" }}>
        {/* Reference: .tl */}
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blog-g4)", marginBottom: 14, padding: "0 4px" }}>
          In This Article
        </p>
        <nav aria-label="Article table of contents">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {headings.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById(item.id)
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })
                      setActiveId(item.id)
                    }}
                    className={`blog-toc-link no-link-style${isActive ? " active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .toc-sidebar { display: block; }
        @media (max-width: 1024px) { .toc-sidebar { display: none; } }
      `}</style>
    </aside>
  )
}
