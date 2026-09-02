import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Search, UserCheck, Briefcase, Handshake } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "AI Talent Network | Hire or Join Elite AI Teams - Connect Tech+Talent",
  description:
    "Join or hire from Connect Tech+Talent’s exclusive AI talent network. We connect top AI professionals with enterprise teams, accelerating innovation and growth across industries.",
  keywords: [
    "AI talent network",
    "hire AI experts",
    "AI engineers recruitment",
    "AI developers hiring",
    "AI job opportunities",
    "enterprise AI staffing",
    "Connect Tech+Talent talent",
    "AI career opportunities",
  ],
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/talent",
  },
  openGraph: {
    title: "AI Talent Network | Hire or Join Elite AI Teams - Connect Tech+Talent",
    description:
      "Explore Connect Tech+Talent’s curated AI talent network. Whether you're hiring or seeking new AI career opportunities, we connect expertise with enterprise innovation.",
    url: "https://cttv2.manymangoes.com.au/talent",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent AI professionals network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join or Hire from Our AI Talent Network | Connect Tech+Talent",
    description:
      "Discover elite AI professionals ready to transform your enterprise. Connect Tech+Talent bridges the gap between AI expertise and opportunity.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/ctt-logo-horizontal.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const processSteps = [
  {
    step: 1,
    title: "Discovery & Strategy Alignment",
    description:
      "We begin with a deep-dive consultation to understand your technical requirements, business objectives, and cultural nuances. This ensures we target talent that aligns perfectly with your strategic goals.",
    icon: Search,
    details: [
      "Stakeholder interviews to define success metrics.",
      "Technical requirements and role definition.",
      "Analysis of team dynamics and company culture.",
      "Development of a tailored recruitment strategy.",
    ],
  },
  {
    step: 2,
    title: "Talent Sourcing & Vetting",
    description:
      "Leveraging our network of 250K+ professionals, we identify candidates with the right skills and experience. Our rigorous, multi-stage vetting process assesses technical proficiency, problem-solving abilities, and enterprise readiness.",
    icon: UserCheck,
    details: [
      "Proprietary database and targeted network sourcing.",
      "Technical assessments and live coding challenges.",
      "Behavioral interviews and soft skill evaluation.",
      "Verification of credentials and past project success.",
    ],
  },
  {
    step: 3,
    title: "Candidate Presentation & Interviews",
    description:
      "We present a curated shortlist of highly qualified candidates, complete with detailed profiles and our assessment findings. We then coordinate the interview process, providing support and feedback to both parties.",
    icon: Briefcase,
    details: [
      "Presentation of 2-3 top-tier candidates per role.",
      "Comprehensive candidate profiles and vetting summaries.",
      "Seamless interview scheduling and coordination.",
      "Facilitation of feedback and decision-making.",
    ],
  },
  {
    step: 4,
    title: "Placement & Onboarding Support",
    description:
      "Our partnership extends beyond the placement. We assist with offer negotiation and provide onboarding support to ensure a smooth transition, setting up your new hire for immediate impact and long-term success.",
    icon: Handshake,
    details: [
      "Offer negotiation and compensation benchmarking.",
      "Pre-start date engagement and preparation.",
      "Post-placement check-ins at 30, 60, and 90 days.",
      "Long-term partnership and future talent planning.",
    ],
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Our Proven Process for AI Talent Acquisition</h1>
            <p className="text-lg text-gray-600">
              We've refined our 29+ years of experience into a streamlined, 4-step process designed for enterprise
              precision. Our methodology ensures speed, quality, and strategic alignment, delivering AI talent that
              drives measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Dotted line for desktop */}
            <div className="hidden lg:block absolute top-8 left-1/2 -ml-px w-0.5 h-[calc(100%-4rem)] bg-gray-200 border-l-2 border-dashed border-gray-300"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className={`flex flex-col items-center ${index % 2 === 0 ? "lg:items-end" : "lg:items-start"}`}>
                    <div
                      className={`w-full max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-sm ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div
                        className={`flex items-center mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                      >
                        <div
                          className={`w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold ${
                            index % 2 === 0 ? "lg:ml-4" : "lg:mr-4"
                          }`}
                        >
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div
                    className={`relative flex justify-center ${
                      index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>

                  <div
                    className={`mt-6 lg:mt-0 ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}
                  >
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="p-6">
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Connect Tech+Talent Advantage</h2>
            <p className="text-gray-600">
              Our process is more than a series of steps; it's a strategic framework that delivers unparalleled value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Speed & Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Our streamlined process and extensive network reduce average placement time to just 2 weeks,
                  accelerating your project timelines.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Quality & Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Rigorous vetting ensures you only see top-tier candidates, resulting in a 2x higher selection rate
                  than industry averages.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Strategic Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We focus on the perfect fit, aligning technical skills with your company culture and strategic
                  objectives for long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Begin Your AI Talent Search</h2>
            <p className="text-gray-600 mb-6">
              Ready to experience a better way to hire AI talent? Let's start with a strategic consultation to
              understand your needs.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
