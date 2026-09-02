import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Cog, Shield, Users, Target, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Talent Services: Strategy, Infrastructure & Compliance | Connect Tech and Talent",
  description:
    "Specialized AI talent solutions for enterprise transformation. Access ML engineers, AI strategists, MLOps specialists, and compliance experts. Strategic consulting, infrastructure development, and governance expertise.",
  keywords: [
    "AI strategy consulting",
    "ML infrastructure engineers",
    "AI compliance specialists",
    "machine learning talent",
    "MLOps engineers",
    "AI governance experts",
    "Chief AI Officer recruitment",
    "AI platform architects",
    "data engineering talent",
    "AI ethics officers",
    "model risk management",
    "AI transformation services",
  ],
  authors: [{ name: "Connect Tech and Talent" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cttv2.manymangoes.com.au/services",
    title: "AI Talent Services: Strategy, Infrastructure & Compliance Solutions",
    description:
      "Comprehensive AI talent solutions including strategic consulting, infrastructure development, and compliance expertise. Connect with specialized professionals for enterprise AI transformation.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "/og-image-services.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech and Talent AI Services - Strategy, Infrastructure and Compliance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Services: Strategy, Infrastructure & Compliance",
    description:
      "Specialized AI talent solutions for enterprise transformation. Access ML engineers, AI strategists, and compliance experts with proven track records.",
    images: ["/og-image-services.png"],
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
    canonical: "https://cttv2.manymangoes.com.au/services",
  },
}

const services = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Leadership",
    description: "Strategic AI talent for transformation planning, governance, and executive leadership",
    icon: Brain,
    color: "bg-blue-50 text-blue-600",
    keyRoles: ["Chief AI Officer", "AI Product Manager", "AI Strategy Consultant", "Digital Transformation Lead"],
    outcomes: [
      "AI roadmap development",
      "Strategic use case identification",
      "Organizational change management",
      "Executive AI education",
    ],
    image: "/ai-strategy-roadmap.jpg",
    link: "/services/ai-strategy",
  },
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure & Engineering",
    description: "Technical experts who build, deploy, and scale AI systems in production environments",
    icon: Cog,
    color: "bg-green-50 text-green-600",
    keyRoles: ["ML Engineers", "MLOps Specialists", "AI Platform Architects", "Data Engineers"],
    outcomes: [
      "Scalable ML pipelines",
      "Production AI deployment",
      "Model monitoring & optimization",
      "Infrastructure automation",
    ],
    image: "/ai-infrastructure-diagram.jpg",
    link: "/services/ai-infrastructure",
  },
  {
    id: "ai-compliance",
    title: "AI Governance & Compliance",
    description: "Specialists ensuring responsible AI deployment and regulatory compliance across industries",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    keyRoles: ["AI Ethics Officers", "Model Risk Managers", "AI Compliance Specialists", "Regulatory Experts"],
    outcomes: [
      "Regulatory compliance frameworks",
      "Bias detection & mitigation",
      "Risk assessment protocols",
      "Audit & documentation systems",
    ],
    image: "/ai-compliance-framework.jpg",
    link: "/services/ai-compliance",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Strategic Assessment",
    description:
      "We analyze your AI maturity, identify skill gaps, and define talent requirements aligned with your business objectives.",
  },
  {
    step: 2,
    title: "Talent Sourcing",
    description:
      "Our specialized recruiters tap into our network of 250,000+ professionals to identify candidates with the exact expertise you need.",
  },
  {
    step: 3,
    title: "Expert Vetting",
    description:
      "Rigorous technical and cultural assessments ensure candidates meet your standards and can deliver immediate impact.",
  },
  {
    step: 4,
    title: "Seamless Integration",
    description: "We support onboarding and provide ongoing partnership to ensure successful long-term placements.",
  },
]

const stats = [
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "2 weeks", label: "Average Time to Placement" },
  { value: "250K+", label: "AI Professionals in Network" },
  { value: "175K+", label: "LinkedIn Followers" },
  { value: "150+", label: "Enterprise Clients Served" },
]

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Talent Services",
            description: "Comprehensive AI talent solutions for enterprise transformation",
            provider: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            serviceType: "AI Talent Acquisition",
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Talent Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
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
            <span className="text-gray-900 font-medium">Services</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Comprehensive AI Talent Solutions</h1>
            <p className="text-lg text-gray-600">
              We deliver specialized AI talent and advisory services to help enterprises unlock the power of artificial
              intelligence, from strategy to engineering to risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our AI Talent Service Areas</h2>
            <p className="text-gray-600">
              Each service area addresses critical aspects of AI transformation, providing specialized talent with deep
              expertise and proven track records.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mr-4`}
                        >
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600">{service.description}</p>

                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Roles</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.keyRoles.map((role) => (
                            <div key={role} className="text-sm text-gray-600 flex items-center">
                              <Users className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                              {role}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Outcomes</h4>
                        <div className="space-y-2">
                          {service.outcomes.map((outcome) => (
                            <div key={outcome} className="text-sm text-gray-600 flex items-center">
                              <Target className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
                        <Link href={service.link}>
                          Explore {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - AI talent solutions and strategic implementation`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-gray-600">
              A systematic approach to AI talent acquisition that ensures strategic alignment, technical excellence, and
              successful integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="border border-gray-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Explore Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.keyRoles.length} specialized roles</p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Transform Your AI Capabilities?</h2>
            <p className="text-gray-400">
              Connect with our AI talent specialists to discuss your specific needs and develop a customized talent
              strategy for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=services&utm_medium=cta&utm_campaign=consultation">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent" asChild>
                <Link href="/contact">Request AI Talent Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
