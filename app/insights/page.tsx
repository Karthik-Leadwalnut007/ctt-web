import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, Calendar, ChevronRight, Home, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Talent Insights for CIOs | Strategic Research & Market Intelligence - Connect Tech+Talent",
  description:
    "Stay ahead in AI leadership. Explore expert research, hiring intelligence, and executive insights for CIOs and technology leaders shaping the AI talent landscape.",
  keywords: [
    "AI talent insights",
    "AI hiring research",
    "CIO talent strategy",
    "AI workforce planning",
    "AI market intelligence",
    "AI recruitment trends",
    "enterprise AI leadership",
    "Connect Tech+Talent insights",
  ],
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/insights",
  },
  openGraph: {
    title: "AI Talent Insights for CIOs | Strategic Research & Market Intelligence - Connect Tech+Talent",
    description:
      "Research-backed perspectives and actionable insights on AI talent acquisition, governance, and enterprise hiring trends — built for CIOs and technology leaders.",
    url: "https://cttv2.manymangoes.com.au/insights",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent AI Insights Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Insights for CIOs | Connect Tech+Talent",
    description:
      "Explore AI hiring research, governance insights, and executive briefings designed for CIOs and enterprise tech leaders.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const insights = [
  {
    slug: "cio-ai-staffing-guide",
    title: "What Every CIO Should Know About Staffing for AI in 2025",
    excerpt:
      "The AI talent landscape has fundamentally shifted. Traditional hiring approaches won't work for AI-first organizations.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Featured Research",
    image: "/ai-human-collaboration.png",
    isFeatured: true,
    isPublished: true,
  },
  {
    slug: "ai-vs-traditional-devs",
    title: "Why Generic Devs Won't Cut It in an AI-Driven World",
    excerpt:
      "The skills gap between traditional developers and AI specialists is widening rapidly across enterprise organizations.",
    date: "Jan 10, 2025",
    category: "Strategic Analysis",
    isPublished: true,
  },
  {
    slug: "ai-governance-teams",
    title: "AI Governance: Building Responsible AI Teams",
    excerpt:
      "As AI regulations evolve, organizations need specialized governance talent to ensure compliant deployment.",
    date: "Jan 5, 2025",
    category: "Compliance",
    isPublished: true,
  },
]

const categories = ["All", "Featured Research", "Strategic Analysis", "Compliance", "Market Data", "Technical Strategy"]

export default function InsightsPage() {
  const publishedInsights = insights.filter((insight) => insight.isPublished)
  const featuredArticle = publishedInsights.find((insight) => insight.isFeatured)
  const regularArticles = publishedInsights.filter((insight) => !insight.isFeatured)

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "AI Talent Insights",
            description: "Strategic research and insights on AI talent acquisition for enterprise leaders and CIOs",
            url: "https://connecttechtalent.com/insights",
            publisher: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            blogPost: publishedInsights.map((insight) => ({
              "@type": "BlogPosting",
              headline: insight.title,
              description: insight.excerpt,
              datePublished: insight.date,
              url: `https://connecttechtalent.com/insights/${insight.slug}`,
              author: {
                "@type": "Organization",
                name: "Connect Tech+Talent",
              },
            })),
          }),
        }}
      />

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Insights</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Strategic AI Talent Insights for Enterprise Leaders
            </h1>
            <p className="text-lg text-gray-600">
              Research-backed perspectives on AI talent acquisition, governance, and strategic implementation for CIOs
              and technology executives.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded mb-4 badge-text">
                    {featuredArticle.category}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 metadata-text text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    {featuredArticle.readTime && (
                      <>
                        <span>•</span>
                        <span>{featuredArticle.readTime}</span>
                      </>
                    )}
                  </div>
                  <Button variant="outline" className="w-fit bg-transparent" asChild>
                    <Link href={`/insights/${featuredArticle.slug}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest Research & Insights</h2>
            <p className="text-gray-600">
              Strategic perspectives on AI talent acquisition and management for enterprise leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regularArticles.map((insight) => (
              <Card key={insight.slug} className="border border-gray-200 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <div className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded mb-3 badge-text">
                    {insight.category}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{insight.title}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-gray-600 mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{insight.date}</span>
                    </div>
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="text-sm font-medium text-gray-900 hover:text-gray-700 inline-flex items-center"
                    >
                      Read More <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border border-gray-200">
            <CardContent className="p-8">
              <div className="text-center space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Executive Briefing Subscription</h3>
                <p className="text-sm text-gray-600">
                  Receive monthly executive briefings on AI talent trends, regulatory developments, and strategic hiring
                  insights.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your business email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                  aria-label="Business email for newsletter"
                />
                <Button type="submit" variant="default" className="bg-gray-900 hover:bg-gray-800 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="caption text-gray-500 text-center mt-4">
                Join 5,000+ CIOs and technology executives. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
