import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, ChevronRight, Home, Brain, Target, Users, TrendingUp, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chief AI Officer & AI Strategy Leadership Talent | Connect Tech and Talent",
  description:
    "Hire executive AI leadership talent including Chief AI Officers, AI strategists, and transformation leaders. Drive enterprise AI adoption with proven strategic expertise. 29 years in tech staffing.",
  keywords: [
    "Chief AI Officer recruitment",
    "AI strategy consulting",
    "AI transformation leaders",
    "AI product managers",
    "AI organizational design",
    "enterprise AI strategy",
    "AI roadmap development",
    "AI governance framework",
    "AI change management",
    "CAIO hiring",
    "AI executive search",
    "AI leadership talent",
  ],
  authors: [{ name: "Connect Tech and Talent" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cttv2.manymangoes.com.au/services/ai-strategy",
    title: "Chief AI Officer & AI Strategy Leadership Talent Acquisition",
    description:
      "Executive AI leadership talent including Chief AI Officers, strategists, and transformation leaders. Develop comprehensive AI roadmaps and drive organizational change with proven experts.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/ai-strategy-roadmap.jpg",
        width: 1200,
        height: 630,
        alt: "AI Strategy and Leadership Services - Chief AI Officer and Strategic AI Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chief AI Officer & AI Strategy Leadership Talent",
    description:
      "Hire executive AI leaders including Chief AI Officers and strategists. Drive enterprise transformation with proven AI leadership expertise.",
    images: ["https://cttv2.manymangoes.com.au/ai-strategy-roadmap.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/services/ai-strategy",
  },
}

const strategicCapabilities = [
  {
    icon: Target,
    title: "AI Transformation Roadmapping",
    description:
      "Develop comprehensive AI strategies aligned with business objectives, including use case prioritization, ROI modeling, and implementation timelines.",
  },
  {
    icon: Users,
    title: "Organizational Design & Change Management",
    description:
      "Design AI-ready organizational structures, establish centers of excellence, and manage cultural transformation for AI adoption.",
  },
  {
    icon: TrendingUp,
    title: "Business Value Realization",
    description:
      "Translate AI capabilities into measurable business outcomes with clear KPIs, success metrics, and continuous optimization strategies.",
  },
  {
    icon: Shield,
    title: "AI Governance & Ethics Framework",
    description:
      "Establish responsible AI practices, ethical guidelines, and governance structures that ensure compliant and trustworthy AI deployment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Use Case Development",
    description:
      "Identify high-impact AI opportunities, validate business cases, and develop proof-of-concepts that demonstrate tangible value.",
  },
  {
    icon: Brain,
    title: "AI Product Strategy & Management",
    description:
      "Define AI product vision, manage development lifecycles, and ensure successful market introduction of AI-powered solutions.",
  },
]

const useCases = [
  {
    title: "Fortune 500 Financial Services AI Transformation",
    challenge:
      "Global bank needed comprehensive AI strategy to modernize operations and improve customer experience while ensuring regulatory compliance.",
    solution:
      "Deployed Chief AI Officer and strategic team to develop 3-year AI roadmap covering fraud detection, risk management, and personalized banking services.",
    outcome:
      "Achieved $50M+ in operational savings, reduced fraud by 40%, and improved customer satisfaction scores by 25% within 18 months.",
    industry: "Financial Services",
  },
  {
    title: "Healthcare System AI Implementation Strategy",
    challenge:
      "Multi-hospital system sought to leverage AI for clinical decision support and operational efficiency while maintaining patient safety standards.",
    solution:
      "Strategic AI leadership team designed phased implementation approach focusing on diagnostic imaging, predictive analytics, and workflow optimization.",
    outcome:
      "Reduced diagnostic errors by 30%, improved patient throughput by 20%, and achieved ROI of 300% on AI investments.",
    industry: "Healthcare",
  },
  {
    title: "Manufacturing AI Center of Excellence",
    challenge:
      "Industrial manufacturer needed to establish AI capabilities for predictive maintenance, quality control, and supply chain optimization.",
    solution:
      "Built AI strategy team to create center of excellence, develop use cases, and manage organizational change across 15 global facilities.",
    outcome:
      "Decreased unplanned downtime by 45%, improved product quality by 35%, and reduced supply chain costs by $25M annually.",
    industry: "Manufacturing",
  },
]

const organizationalDesign = [
  {
    role: "Chief AI Officer (CAIO)",
    responsibilities: [
      "AI strategy development",
      "Executive stakeholder management",
      "AI governance oversight",
      "Business value realization",
    ],
    experience:
      "10+ years technology leadership, 5+ years AI/ML experience, proven track record of enterprise transformation",
  },
  {
    role: "AI Strategy Director",
    responsibilities: [
      "Use case identification",
      "ROI modeling",
      "Implementation roadmapping",
      "Cross-functional coordination",
    ],
    experience:
      "8+ years strategy consulting, 3+ years AI implementation, strong business acumen and analytical skills",
  },
  {
    role: "AI Product Manager",
    responsibilities: [
      "Product vision definition",
      "Feature prioritization",
      "User experience design",
      "Go-to-market strategy",
    ],
    experience:
      "5+ years product management, 2+ years AI products, deep understanding of user needs and market dynamics",
  },
  {
    role: "AI Transformation Lead",
    responsibilities: [
      "Change management",
      "Training program development",
      "Process optimization",
      "Cultural transformation",
    ],
    experience: "7+ years organizational change, 2+ years AI adoption, excellent communication and leadership skills",
  },
]

const faqs = [
  {
    question: "What qualifications should we look for in a Chief AI Officer?",
    answer:
      "An effective CAIO should have 10+ years of technology leadership experience, with at least 5 years specifically in AI/ML. They need proven experience in enterprise transformation, strong business acumen, and the ability to communicate complex technical concepts to executive stakeholders. Industry experience in your sector is highly valuable, along with a track record of delivering measurable business outcomes through AI initiatives.",
  },
  {
    question: "How do AI strategists help with organizational change management?",
    answer:
      "AI strategists design comprehensive change management programs that address cultural, process, and skill transformation needs. They develop training curricula, establish AI literacy programs, create communication strategies to build buy-in, and design organizational structures that support AI adoption. They also help manage resistance to change and ensure smooth transitions during AI implementation phases.",
  },
  {
    question: "What's the typical timeline for developing an enterprise AI strategy?",
    answer:
      "A comprehensive AI strategy typically takes 3-6 months to develop, depending on organizational complexity and scope. This includes current state assessment (4-6 weeks), use case identification and prioritization (6-8 weeks), roadmap development (4-6 weeks), and governance framework establishment (2-4 weeks). Our strategic leaders can accelerate this timeline through proven methodologies and frameworks.",
  },
  {
    question: "How do you measure the success of AI strategic initiatives?",
    answer:
      "Success metrics vary by use case but typically include business KPIs (revenue growth, cost reduction, efficiency gains), technical metrics (model performance, system reliability, deployment velocity), and organizational metrics (AI literacy, adoption rates, cultural transformation). Our strategists establish baseline measurements and implement continuous monitoring to track progress against defined objectives.",
  },
  {
    question: "What industries do your AI strategy leaders have experience in?",
    answer:
      "Our strategic AI talent has deep experience across regulated industries including financial services (banking, insurance, capital markets), healthcare (hospitals, pharma, medical devices), manufacturing (automotive, aerospace, industrial), and technology (SaaS, e-commerce, telecommunications). They understand industry-specific challenges, regulatory requirements, and competitive dynamics that impact AI strategy development.",
  },
]

export default function AIStrategyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Strategy & Leadership Services",
            description:
              "Executive AI leadership talent including Chief AI Officers, strategists, and transformation leaders for enterprise AI adoption",
            provider: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            serviceType: "AI Strategy Consulting",
            areaServed: "Worldwide",
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
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">AI Strategy & Leadership</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
              AI Strategy & Leadership
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Transform Your Enterprise with Strategic AI Leadership
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find executive AI talent including Chief AI Officers, strategic advisors, and transformation leaders who
              can develop comprehensive AI roadmaps, drive organizational change, and deliver measurable business value
              from AI investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-strategy&utm_medium=hero&utm_campaign=consultation">
                  Find Strategic AI Leaders <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/talent#strategy">View Leadership Roles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Roadmap Visual */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">AI Transformation Roadmap</h2>
            <div className="relative">
              <Image
                src="/ai-strategy-roadmap.jpg"
                alt="AI transformation roadmap showing strategic phases from assessment through implementation, including governance, use case development, and organizational change management"
                width={800}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Comprehensive AI transformation approach designed by our strategic leadership team
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Capabilities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic AI Capabilities</h2>
            <p className="text-gray-600">
              Our AI strategy leaders bring comprehensive expertise across all aspects of enterprise AI transformation
              and organizational change.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicCapabilities.map((capability) => (
              <Card key={capability.title} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <capability.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-medium text-gray-900">{capability.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{capability.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic AI Success Stories</h2>
            <p className="text-gray-600">
              Real examples of how our strategic AI leaders have driven successful enterprise transformations across
              different industries.
            </p>
          </div>
          <div className="space-y-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl font-medium text-gray-900">{useCase.title}</CardTitle>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{useCase.industry}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-600">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-600">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Outcome</h4>
                      <p className="text-sm text-gray-600">{useCase.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Design */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Leadership Team Structure</h2>
            <p className="text-gray-600">
              Key strategic roles and their responsibilities for building successful AI organizations and driving
              transformation initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {organizationalDesign.map((position) => (
              <Card key={position.role} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-gray-900 mb-3">{position.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {position.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex items-start text-sm text-gray-600">
                          <ChevronRight className="h-3 w-3 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Experience Profile:</h4>
                    <p className="text-sm text-gray-600">{position.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic AI Insights & Resources</h2>
            <p className="text-gray-600 mb-8">
              Explore our comprehensive guides and insights on AI organizational design and strategic implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/insights/cio-ai-staffing-guide">CIO's AI Staffing Guide</Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/insights/ai-governance-teams">AI Governance Team Structure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your AI Strategy?</h2>
            <p className="text-gray-600 mb-6">
              Connect with our strategic AI talent specialists to find the executive leadership your organization needs
              to drive successful AI transformation.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-strategy&utm_medium=cta&utm_campaign=consultation">
                Find Strategic AI Leaders <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
