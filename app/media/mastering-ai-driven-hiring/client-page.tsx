"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  Calendar,
  Clock,
  Zap,
} from "lucide-react"
import { getRelatedPosts, getAdjacentPosts } from "@/lib/blog-data"

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLE_SLUG = "mastering-ai-driven-hiring"
const ARTICLE_IMAGE =
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=788&fit=crop&q=85"
const INITIAL_VISIBLE = 5

// ─────────────────────────────────────────────────────────────────────────────
// TOC Definition
// ─────────────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "section-1", label: "Understand Your Needs" },
  { id: "section-2", label: "Data Collection and Integration" },
  { id: "section-3", label: "Choose the Right AI Tools" },
  { id: "section-4", label: "Resume Screening" },
  { id: "section-5", label: "Automate Candidate Sourcing" },
  { id: "section-6", label: "Skill Assessment" },
  { id: "section-7", label: "Candidate Matching" },
  { id: "section-8", label: "Interview Automation" },
  { id: "section-9", label: "Reduce Bias and Enhance Diversity" },
  { id: "section-10", label: "Predictive Analytics" },
  { id: "section-11", label: "Feedback Loops and Continuous Learning" },
  { id: "section-12", label: "Compliance and Ethical Considerations" },
  { id: "section-13", label: "Training and Change Management" },
  { id: "section-14", label: "Measure Success" },
  { id: "conclusion", label: "Conclusion" },
]

// ─────────────────────────────────────────────────────────────────────────────
// Article sections data
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLE_SECTIONS = [
  {
    id: "section-1",
    num: "01",
    title: "Understand Your Needs",
    body: (
      <>
        Before diving into AI-driven hiring, it&apos;s crucial to pinpoint the challenges in your current process.
        Recognizing specific pain points that AI can address will set the foundation for a successful integration.
        For instance, a hiring agency might find that they&apos;re spending too much time on initial screenings — a
        task AI can expedite. Additionally, it&apos;s essential to determine which roles and skills will benefit most
        from AI-driven hiring, ensuring that the technology is used where it can offer the most value.
      </>
    ),
  },
  {
    id: "section-2",
    num: "02",
    title: "Data Collection and Integration",
    body: (
      <>
        Data is the backbone of any AI system. By gathering comprehensive information, including resumes, job
        descriptions, and interview feedback, you lay the groundwork for AI to operate effectively. For{" "}
        <strong>contract staffing services</strong>, this might mean consolidating data from various short-term roles.
        It&apos;s also vital to emphasize data quality and accuracy, ensuring that AI algorithms have the best
        possible information to make decisions.
      </>
    ),
  },
  {
    id: "section-3",
    num: "03",
    title: "Choose the Right AI Tools",
    body: (
      <>
        The market is flooded with AI-powered tools, from recruiting platforms to Applicant Tracking Systems (ATS).
        Select solutions that align with your hiring goals and integrate seamlessly with your existing systems. For
        example, a recruiting firm might benefit from an AI tool that emphasizes passive candidate outreach.
      </>
    ),
  },
  {
    id: "section-4",
    num: "04",
    title: "Resume Screening",
    body: (
      <>
        AI shines in automating the resume screening process. By parsing and analyzing resumes, AI can quickly
        identify candidates with the <strong>top IT skills required for a role</strong>. Furthermore, with the help
        of natural language processing (NLP) algorithms, these tools can adeptly pick out relevant keywords and
        phrases from resumes, ensuring a more accurate match.
      </>
    ),
  },
  {
    id: "section-5",
    num: "05",
    title: "Automate Candidate Sourcing",
    body: (
      <>
        AI can proactively source candidates from databases, social media platforms, and professional networks to
        find potential matches — especially valuable for <strong>contract tech staffing</strong>. Automated tools
        not only save time but can also uncover candidates who might not be on the active job market.
      </>
    ),
  },
  {
    id: "section-6",
    num: "06",
    title: "Skill Assessment",
    body: (
      <>
        Evaluating a candidate&apos;s skills is more than just looking at their resume. AI-driven tools can offer
        assessments that test both technical and soft skills. For instance, a coding challenge can be used to
        evaluate a developer&apos;s proficiency, ensuring they meet the job&apos;s requirements.
      </>
    ),
  },
  {
    id: "section-7",
    num: "07",
    title: "Candidate Matching",
    body: (
      <>
        AI algorithms can take the data from resumes and match candidates with job openings, considering factors
        like skills, experience, and cultural fit. For a <strong>contract staffing agency</strong>, this might mean
        finding a candidate who&apos;s not only skilled but also a good fit for a company&apos;s short-term needs.
      </>
    ),
  },
  {
    id: "section-8",
    num: "08",
    title: "Interview Automation",
    body: (
      <>
        Initial screenings and assessments can be conducted using AI-driven chatbots or virtual interview platforms.
        These tools can analyze interview responses, evaluating factors like sentiment, communication skills, and
        cultural fit, ensuring a more comprehensive assessment.
      </>
    ),
  },
  {
    id: "section-9",
    num: "09",
    title: "Reduce Bias and Enhance Diversity",
    body: (
      <>
        One of the standout features of AI in recruitment is its potential to reduce unconscious biases. By training
        AI algorithms on diverse datasets, you can ensure a more equitable hiring process, avoiding the pitfalls of
        human biases.
      </>
    ),
  },
  {
    id: "section-10",
    num: "10",
    title: "Predictive Analytics",
    body: (
      <>
        AI can forecast which candidates are likely to succeed in a role based on historical data. This predictive
        approach can be invaluable in identifying candidates with long-term potential, ensuring a more strategic
        hiring approach.
      </>
    ),
  },
  {
    id: "section-11",
    num: "11",
    title: "Feedback Loops and Continuous Learning",
    body: (
      <>
        Like any tool, AI-driven hiring solutions need regular feedback to improve. By monitoring performance and
        gathering feedback from both recruiters and candidates, you can refine the algorithms, ensuring they remain
        effective and efficient.
      </>
    ),
  },
  {
    id: "section-12",
    num: "12",
    title: "Compliance and Ethical Considerations",
    body: (
      <>
        AI-driven hiring should always adhere to legal and ethical standards. This includes complying with data
        privacy regulations and being transparent with candidates about how AI is used in the hiring process.
      </>
    ),
  },
  {
    id: "section-13",
    num: "13",
    title: "Training and Change Management",
    body: (
      <>
        Introducing AI into the hiring process requires a shift in mindset. It&apos;s essential to provide training
        and support to HR and recruitment teams, ensuring they can effectively use AI tools. This also means
        fostering a culture that views AI as a complement to human decision-making.
      </>
    ),
  },
  {
    id: "section-14",
    num: "14",
    title: "Measure Success",
    body: (
      <>
        Lastly, the success of AI-driven hiring should be measurable. By defining key performance indicators (KPIs),
        such as time-to-fill or diversity metrics, you can regularly evaluate the impact of AI on your hiring
        process, making necessary adjustments to continually optimize results.
      </>
    ),
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Premium TOC Sidebar (desktop)
// ─────────────────────────────────────────────────────────────────────────────

function DesktopTOC({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <aside
      className="hidden lg:block"
      style={{ position: "sticky", top: "120px", alignSelf: "start" }}
    >
      <div
        className="bg-white rounded-[18px] p-6"
        style={{
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          border: "1px solid #E5E7EB",
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-4 px-1">
          In This Article
        </p>
        <nav aria-label="Article table of contents">
          <ul className="list-none p-0 m-0 space-y-0.5">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
                    className="no-link-style block py-2 pl-4 pr-3 text-[12.5px] leading-snug rounded-lg transition-all duration-200"
                    style={{
                      borderLeft: isActive ? "3px solid #1b99a7" : "3px solid transparent",
                      color: isActive ? "#1b99a7" : "#6B7280",
                      fontWeight: isActive ? 600 : 400,
                      backgroundColor: isActive ? "rgba(27,153,167,0.07)" : "transparent",
                    }}
                  >
                    {item.label}
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

// ─────────────────────────────────────────────────────────────────────────────
// Mobile TOC (collapsible)
// ─────────────────────────────────────────────────────────────────────────────

function MobileTOC() {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden mb-8 border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        aria-expanded={open}
      >
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">In this article</span>
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && (
        <nav className="px-4 py-3 bg-white" aria-label="Article table of contents (mobile)">
          <ul className="space-y-1">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-[13px] text-gray-600 hover:text-primary py-1 no-link-style transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Related card (premium)
// ─────────────────────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: ReturnType<typeof getRelatedPosts>[number] }) {
  return (
    <article
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300 h-full"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
    >
      <Link href={post.link} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="relative w-full aspect-video bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-grow p-5">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2 block"
          style={{ color: "#1b99a7" }}
        >
          {post.category}
        </span>
        <Link href={post.link}>
          <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-gray-400 mb-3">
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
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 flex-grow mb-4">
          {post.excerpt}
        </p>
        <Link
          href={post.link}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold no-link-style group-hover:gap-2.5 transition-all duration-200 mt-auto"
          style={{ color: "#1b99a7" }}
        >
          Read Article <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function MasteringAIDrivenHiringClientPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  const [activeId, setActiveId] = useState("introduction")
  const [expanded, setExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  const relatedPosts = getRelatedPosts(ARTICLE_SLUG, 3)
  const { prev, next } = getAdjacentPosts(ARTICLE_SLUG)

  // ── Reading progress bar ───────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? Math.min(100, (scrollTop / docH) * 100) : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  // ── IntersectionObserver for active TOC section ────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    )
    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [expanded])

  // ── Share helpers ──────────────────────────────────────────────────────────
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = "Mastering AI-Driven Hiring in the Modern Era"

  const openLinkedIn = useCallback(() =>
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
      "_blank", "noopener,noreferrer"
    ), [shareUrl])

  const openTwitter = useCallback(() =>
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      "_blank", "noopener,noreferrer"
    ), [shareUrl])

  const openEmail = useCallback(() =>
    window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`, "_self"),
    [shareUrl])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard unavailable */ }
  }, [shareUrl])

  const visibleSections = expanded ? ARTICLE_SECTIONS : ARTICLE_SECTIONS.slice(0, INITIAL_VISIBLE)

  return (
    <div className="min-h-screen bg-white">

      {/* ── Reading progress bar ─────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-100" aria-hidden="true">
        <div
          className="h-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%`, background: "#1b99a7" }}
        />
      </div>

      {/* ── Hero / Header ────────────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-0">

        {/* Breadcrumb + back link */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-7">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-700 transition-colors no-link-style">Home</Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <Link href="/media" className="hover:text-gray-700 transition-colors no-link-style">Media &amp; Insights</Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <span className="text-gray-600 font-medium">AI Hiring</span>
          </nav>
          <Link
            href={backToMediaUrl}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-primary transition-colors no-link-style w-fit"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Media &amp; Insights
          </Link>
        </div>

        {/* Category badge */}
        <div className="mb-5">
          <span
            className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
            style={{ background: "rgba(27,153,167,0.1)", color: "#1b99a7" }}
          >
            AI Hiring
          </span>
        </div>

        {/* Large title */}
        <h1
          className="text-gray-900 font-bold leading-[1.13] mb-7 max-w-[900px]"
          style={{ fontSize: "clamp(30px, 4vw, 54px)" }}
        >
          Mastering AI-Driven Hiring in the Modern Era
        </h1>

        {/* Metadata row + share */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-gray-500">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1b99a7, #0d7a85)" }}
              >
                CT
              </div>
              <span className="font-medium text-gray-700">Connect Tech+Talent</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-gray-400" />
              <span>Nov 16, 2023</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              <span>14 min read</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 text-gray-400" />
              <span>3 min to skim</span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mr-1">Share</span>
            {[
              { icon: Linkedin, label: "Share on LinkedIn", fn: openLinkedIn },
              { icon: Twitter, label: "Share on X / Twitter", fn: openTwitter },
              { icon: Mail, label: "Share via Email", fn: openEmail },
            ].map(({ icon: Icon, label, fn }) => (
              <button
                key={label}
                onClick={fn}
                aria-label={label}
                title={label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
            <button
              onClick={handleCopy}
              aria-label="Copy link"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:scale-110"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero Image ───────────────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "16/9",
            borderRadius: "24px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.07)",
          }}
        >
          <Image
            src={ARTICLE_IMAGE}
            alt="Mastering AI-Driven Hiring — AI interface"
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            priority
            unoptimized
            style={{ animation: "heroReveal 0.9s cubic-bezier(0.22,1,0.36,1) both" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.14), transparent)" }}
          />
        </div>
      </div>

      {/* ── Article Content + TOC ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,760px)] lg:gap-[72px] lg:items-start">

          {/* TOC — left sticky column */}
          <DesktopTOC activeId={activeId} />

          {/* Article content column */}
          <div className="min-w-0">
            <MobileTOC />

            {/* Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-28">
              <h2
                className="font-bold text-gray-900 mb-5 leading-[1.2] tracking-tight"
                style={{ fontSize: "34px" }}
              >
                Introduction
              </h2>
              <div className="text-[18px] text-gray-700 leading-[1.9] space-y-6">
                <p>
                  In the dynamic world of recruitment, staying ahead means embracing innovation. Artificial
                  Intelligence (AI) has emerged as a transformative force, reshaping how organizations approach
                  hiring. From streamlining resume screenings to predicting candidate success, AI offers a suite of
                  tools that can revolutionize the recruitment process.
                </p>
                <p>
                  Whether you&apos;re a seasoned hiring agency or a business navigating the complexities of{" "}
                  <strong className="font-semibold text-gray-900">contract staffing</strong>, understanding how to harness the power of AI is crucial. This
                  guide delves into the 14 essential steps to master AI-driven hiring, ensuring you&apos;re equipped
                  to attract, assess, and onboard the best talent.
                </p>
              </div>
            </section>

            {/* Numbered sections */}
            {visibleSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-14 scroll-mt-28"
              >
                {/* Section heading with number badge */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[13px] font-bold"
                    style={{
                      background: "rgba(27,153,167,0.1)",
                      color: "#1b99a7",
                    }}
                  >
                    {section.num}
                  </div>
                  <h2
                    className="font-bold text-gray-900 leading-snug pt-1"
                    style={{ fontSize: "26px" }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="text-[18px] text-gray-700 leading-[1.9] pl-0 lg:pl-[60px]">
                  <p>{section.body}</p>
                </div>
                <div className="pl-0 lg:pl-[60px] mt-6">
                  <div className="h-px w-12 bg-primary/20" />
                </div>
              </section>
            ))}

            {/* Expand button */}
            {!expanded && ARTICLE_SECTIONS.length > INITIAL_VISIBLE && (
              <div className="relative mb-12">
                <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />
                <button
                  onClick={() => setExpanded(true)}
                  className="relative flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-all duration-200 hover:shadow-sm"
                >
                  <ChevronDown className="h-4 w-4" />
                  Read All 14 Steps
                </button>
              </div>
            )}

            {/* Conclusion */}
            {expanded && (
              <section id="conclusion" className="mb-12 scroll-mt-28">
                <h2
                  className="font-bold text-gray-900 mb-5 leading-[1.2] tracking-tight"
                  style={{ fontSize: "34px" }}
                >
                  Conclusion
                </h2>
                <div className="text-[18px] text-gray-700 leading-[1.9] space-y-6">
                  <p>
                    Mastering AI-driven hiring is more than just adopting new tools; it&apos;s about reimagining the
                    entire recruitment process. By understanding your needs, leveraging the right data, and choosing
                    the best AI solutions, you can transform hiring from a time-consuming task into a strategic
                    endeavor.
                  </p>
                  <p>
                    As the recruitment landscape continues to evolve, those who harness the power of AI will be best
                    positioned to attract top talent, ensuring their organizations remain competitive and
                    forward-thinking. Embrace these 14 steps, and you&apos;ll be on your way to a more efficient,
                    effective, and enlightened hiring journey.
                  </p>
                </div>
              </section>
            )}

            {/* Collapse button */}
            {expanded && (
              <button
                onClick={() => {
                  setExpanded(false)
                  document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center gap-2 mb-12 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-500 hover:border-gray-400 transition-colors duration-200"
              >
                <ChevronUp className="h-4 w-4" />
                Collapse
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Author Card ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:pl-[352px]">
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5"
            style={{ background: "#F8FAFC", border: "1px solid #E5E7EB" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-xl"
              style={{ background: "linear-gradient(135deg, #1b99a7, #0d7a85)" }}
            >
              CT
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">Written by</p>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Connect Tech+Talent</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Connect Tech+Talent is a specialized AI and technology staffing firm helping enterprise organizations
                build high-performing teams through intelligent hiring strategies and data-driven talent solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Newsletter CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1b99a7 0%, #0d7a85 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.22em] mb-3">Newsletter</p>
            <h2 className="text-white font-bold text-3xl sm:text-4xl mb-3 leading-tight">
              Enjoyed this article?
            </h2>
            <p className="text-white/75 text-[16px] mb-8 leading-relaxed">
              Subscribe for weekly AI hiring insights, workforce strategies, and talent intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40 border-0"
              />
              <button
                className="px-6 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-150 whitespace-nowrap"
                style={{ color: "#1b99a7" }}
              >
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="5" fill="#1b99a7" opacity="0.4" />
                  <circle cx="22" cy="10" r="5" fill="#1b99a7" opacity="0.6" />
                  <circle cx="16" cy="22" r="5" fill="#1b99a7" />
                </svg>
              </div>
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h2 className="text-gray-900 font-bold text-lg mb-2">Ready to build an AI-ready talent strategy?</h2>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Partner with our team to unlock the potential of AI-driven hiring and build high-performing teams for the future.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors no-link-style"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/talent"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-colors no-link-style"
              >
                Explore AI Talent <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Insights ────────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#1b99a7" }}>
                  Continue Reading
                </p>
                <h2 className="text-gray-900 font-bold text-2xl">Related Insights</h2>
              </div>
              <Link
                href="/media"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium no-link-style transition-all duration-150 hover:gap-2.5"
                style={{ color: "#1b99a7" }}
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((post) => (
                <RelatedCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next Navigation ───────────────────────────────────────────── */}
      {(prev || next) && (
        <div className="border-t border-gray-100 py-10 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">More Articles</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={prev.link}
                  className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 no-link-style"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:-translate-x-0.5 transition-all duration-150" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Previous Article</span>
                    <span className="font-semibold text-gray-900 text-[14px] leading-snug line-clamp-2 group-hover:text-primary transition-colors">{prev.title}</span>
                    {prev.readTime && <span className="text-[12px] text-gray-400 mt-1 block">{prev.readTime}</span>}
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={next.link}
                  className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 no-link-style sm:flex-row-reverse sm:text-right"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Next Article</span>
                    <span className="font-semibold text-gray-900 text-[14px] leading-snug line-clamp-2 group-hover:text-primary transition-colors">{next.title}</span>
                    {next.readTime && <span className="text-[12px] text-gray-400 mt-1 block">{next.readTime}</span>}
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
