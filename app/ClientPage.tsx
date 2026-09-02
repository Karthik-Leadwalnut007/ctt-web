"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { AIAssessmentModal } from "@/components/ai-assessment-modal"
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Bot,
  ShieldCheck,
  Star,
  Quote,
  FileText,
  Map,
  Lightbulb,
  BarChart3,
  CheckCircle,
  UserCheck,
  BrainCircuit,
  TrendingUp,
  Clock,
  Award,
  Linkedin,
} from "lucide-react"

const assessmentBenefits = [
  {
    icon: FileText,
    title: "Comprehensive Talent Evaluation",
    description: "A detailed report on your current AI workforce capabilities.",
  },
  {
    icon: Map,
    title: "Customized AI Talent Strategy",
    description: "A roadmap for acquiring the right AI professionals tailored to your organizational needs.",
  },
  {
    icon: Lightbulb,
    title: "Skill Gap Analysis",
    description: "Insights on areas where you need to bolster AI expertise for successful project execution.",
  },
  {
    icon: BarChart3,
    title: "Benchmarking Against Industry Standards",
    description: "A comparison of your company's AI talent needs with industry leaders and best practices.",
  },
  {
    icon: CheckCircle,
    title: "Actionable Recommendations",
    description: "Clear next steps to enhance your AI talent acquisition and development processes.",
  },
]

export default function ClientPage() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  const openAssessmentModal = () => {
    setIsAssessmentModalOpen(true)
  }

  const closeAssessmentModal = () => {
    setIsAssessmentModalOpen(false)
  }

  const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cttv2.manymangoes.com.au/#organization",
      name: "Connect Tech and Talent",
      alternateName: ["ConnectTel", "Connect Tech Talent"],
      url: "https://cttv2.manymangoes.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://cttv2.manymangoes.com.au/logo.png",
        width: 300,
        height: 100
      },
      description:
        "Strategic AI talent acquisition for enterprise transformation. 29 years of experience connecting companies with specialized AI professionals.",
      foundingDate: "1996",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11824 Jollyville Rd Suite 302",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78759",
        addressCountry: "US"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-512-338-1111",
        contactType: "Customer Service",
        email: "ai-talent@connecttechtalent.com"
      },
      sameAs: [
        "https://www.linkedin.com/company/connect-tech-talent",
        "https://twitter.com/connecttechtalent"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://cttv2.manymangoes.com.au/#website",
      url: "https://cttv2.manymangoes.com.au",
      name: "Connect Tech and Talent - Your AI Talent Accelerator",
      description:
        "Strategic AI talent acquisition for enterprise transformation. Connect with specialized AI professionals who deliver measurable business outcomes.",
      publisher: {
        "@id": "https://cttv2.manymangoes.com.au/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cttv2.manymangoes.com.au/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://cttv2.manymangoes.com.au/#webpage",
      url: "https://cttv2.manymangoes.com.au/",
      name: "AI Talent Acquisition & Staffing Solutions | Connect Tech and Talent",
      isPartOf: { "@id": "https://cttv2.manymangoes.com.au/#website" },
      about: { "@id": "https://cttv2.manymangoes.com.au/#organization" },
      description:
        "Transform your enterprise with elite AI talent. Access vetted machine learning engineers, data scientists, and AI strategists.",
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://cttv2.manymangoes.com.au/og-image.png",
        width: 1200,
        height: 630
      },
      breadcrumb: { "@id": "https://cttv2.manymangoes.com.au/#breadcrumb" },
      datePublished: "2024-01-01",
      dateModified: "2025-10-01"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cttv2.manymangoes.com.au/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cttv2.manymangoes.com.au/"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://cttv2.manymangoes.com.au/#localbusiness",
      name: "Connect Tech and Talent",
      image: "https://cttv2.manymangoes.com.au/logo.png",
      url: "https://cttv2.manymangoes.com.au",
      telephone: "+1-512-338-1111",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11824 Jollyville Rd Suite 302",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78759",
        addressCountry: "US"
      },
      sameAs: [
        "https://www.linkedin.com/company/connect-tech-talent",
        "https://twitter.com/connecttechtalent"
      ]
    }
  ]
}


  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchema),
        }}
      />

      <HeroSection onOpenAssessment={openAssessmentModal} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Companies Choose Connect Tech+Talent
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Proven Results Card */}
            <Card className="border-gray-200 shadow-sm p-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Proven Results</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
                <div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">2x</span>
                  </div>
                  <p className="mt-2 ml-9 text-gray-500">More likely to be selected</p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">2 weeks</span>
                  </div>
                  <p className="mt-2 ml-9 text-gray-500">Typical time to fill positions</p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">29+ yrs</span>
                  </div>
                  <p className="mt-2 ml-9 text-gray-500">Expertise in hiring top tech talent</p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">175k+</span>
                  </div>
                  <p className="mt-2 ml-9 text-gray-500">Community on LinkedIn</p>
                </div>
              </div>
            </Card>
            

            {/* Pre-screened Talent Card */}
            <Card className="border-gray-200 shadow-sm p-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pre-screened Talent</h3>
              </div>
              <ul className="space-y-3 text-base text-gray-600 mt-6">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Access a proprietary database of <strong>250,000+ qualified candidates.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Each professional is vetted for <strong>technical skill and cultural fit.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Our proven screening method <strong>saves you time</strong> and connects you with talent ready to
                    deliver from day one.
                  </span>
                </li>
              </ul>
            </Card>

            {/* New AI/ML Focus Card */}
            <Card className="border-gray-200 shadow-sm p-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Bot className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Specialized AI/ML Focus</h3>
              </div>
              <p className="text-base text-gray-600 mt-6">
                We go beyond general tech recruiting. Our deep focus on Artificial Intelligence and Machine Learning
                ensures you connect with talent that has the specific, cutting-edge skills required to lead in the AI
                era.{" "}
                <Link href="/talent" className="text-primary hover:underline">
                  Explore our AI talent matrix
                </Link>{" "}
                to understand the specialized roles we fill.
              </p>
            </Card>

            {/* Technology Expertise Card */}
            <Card className="border-gray-200 shadow-sm p-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BrainCircuit className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technology Expertise</h3>
              </div>
              <p className="text-base text-gray-600 mt-6">
                Deep understanding of Mobile, Cloud, Cyber Security & Data Science, led by engineers with 90+ years of
                collective experience. Our expertise spans across{" "}
                <Link href="/industries" className="text-primary hover:underline">
                  multiple industries
                </Link>{" "}
                including financial services, healthcare, and manufacturing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate and State Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Corporate and State Partnerships</h2>
            <h3 className="text-xl font-medium text-gray-700 mt-1 mb-8">Achieving Strength Through Collaboration</h3>
            <div className="mb-8">
              <Image
                src="/corporate-partnerships.png"
                alt="Partner logos including AMD, State of Texas, Dell, AT&T, and other enterprise technology companies"
                width={1000}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="mb-6 bg-black">
             <img
               src="https://dir.texas.gov/sites/default/files/2020-10/DIR-Logo-White@2x.png"
               alt="Department of Information Resources"
            />
            </div>
            <p>
<a href="https://dir.texas.gov/contracts/dir-cpo-5440">Information Technology Staff Augmentation Contracts</a>
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              In addition to our long-standing corporate partnerships, we've had an active contract with the Texas
              Department of Information Resources since 2008, allowing us to work with government entities to deliver
              modern technology throughout Texas.
            </p>
            <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
              <Link href="/dir-itsac">Our Contract</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              AI Talent Solutions for Enterprise Leaders
            </h2>
            <p className="text-gray-600">
              Structured approaches to AI talent acquisition that align with enterprise governance and risk management
              frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">AI Strategy & Advisory</h3>
                <p className="text-gray-600 text-sm">
                  Strategic talent planning for AI initiatives with enterprise-grade governance and compliance
                  frameworks. Our advisors help you build comprehensive AI transformation roadmaps, identify high-impact
                  use cases, and establish governance structures that ensure responsible AI deployment while
                  accelerating business value. We provide seasoned AI strategists, product managers, and transformation
                  consultants who understand the complexities of enterprise AI adoption.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    <span>AI transformation workshops</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    <span>Ideation-to-MVP talent planning</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    <span>AI product management</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/services/ai-strategy"
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                  <Bot className="text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">AI Infrastructure & Engineering</h3>
                <p className="text-gray-600 text-sm">
                  Technical talent for building and maintaining enterprise AI systems with security and scalability. We
                  provide MLOps engineers, data platform architects, and AI infrastructure specialists who understand
                  the complexities of deploying AI at enterprise scale with proper monitoring, governance, and
                  performance optimization. Our engineers bring expertise in cloud platforms, containerization, and
                  modern ML deployment practices.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    <span>MLOps/DevOps for AI</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    <span>Model deployment & monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    <span>Data pipeline architecture</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/services/ai-infrastructure"
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <ShieldCheck className="text-accent" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">AI Risk & Compliance</h3>
                <p className="text-gray-600 text-sm">
                  Specialized professionals to ensure responsible AI deployment within regulatory frameworks. Our
                  compliance experts help navigate evolving AI regulations, implement bias detection systems, and
                  establish governance frameworks that protect your organization while enabling innovation and
                  maintaining stakeholder trust. We provide AI ethics officers, compliance managers, and governance
                  specialists with deep regulatory expertise.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    <span>AI governance specialists</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    <span>Bias detection experts</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    <span>Model security professionals</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/services/ai-compliance"
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Talent Assessment Section */}
      <section id="ai-talent-assessment" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
                Unlock Your AI Potential with a Talent Assessment
              </h2>
              <p className="text-gray-300">
                Our complimentary AI Talent Assessment provides the strategic clarity you need to build a world-class AI
                team. Understand your strengths, identify gaps, and get a customized roadmap for success.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold text-base px-8 py-6"
                onClick={openAssessmentModal}
              >
                Get Yours!
              </Button>
            </div>
            <div className="space-y-6">
              {assessmentBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Enterprise Leadership Testimonials
            </h2>
            <p className="text-gray-600">
              Insights from technology leaders who have partnered with Connect Tech+Talent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-gray-300" />
                <p className="text-gray-600 text-sm">
                  "Connect Tech+Talent delivered precisely the AI talent we needed for our enterprise machine learning
                  transformation. Their understanding of enterprise requirements and governance frameworks is
                  exceptional."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-medium text-gray-900 text-sm">Henry F.</div>
                  <div className="text-xs text-gray-500">Director of AI Solutions, Fortune 500 Financial Services</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-gray-300" />
                <p className="text-gray-600 text-sm">
                  "When we needed MLOps engineers and AI product managers for our critical initiative, Connect
                  Tech+Talent was the only firm that truly understood our enterprise requirements and risk management
                  framework."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-medium text-gray-900 text-sm">Matt S.</div>
                  <div className="text-xs text-gray-500">CTO, Healthcare Technology</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-gray-300" />
                <p className="text-gray-600 text-sm">
                  "Their AI governance and compliance experts helped us navigate complex regulatory requirements while
                  scaling our AI initiatives. The quality of talent and strategic guidance was invaluable."
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-medium text-gray-900 text-sm">Philip E.</div>
                  <div className="text-xs text-gray-500">VP of AI Engineering, Enterprise Software</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold">Ready to Accelerate Your AI Transformation?</h2>
            <p className="text-gray-400">
              Connect with specialized AI talent that aligns with your enterprise governance framework and delivers
              measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=website&utm_medium=cta&utm_campaign=consultation">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                onClick={openAssessmentModal}
              >
                Request AI Talent Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assessment Modal */}
      <AIAssessmentModal isOpen={isAssessmentModalOpen} onClose={closeAssessmentModal} />
    </>
  )
}
