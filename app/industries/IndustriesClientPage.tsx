"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Heart, Factory, DollarSign, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import AIAssessmentModal from "@/components/ai-assessment-modal"

const industries = [
  {
    name: "Financial Services",
    slug: "financial-services",
    icon: DollarSign,
    description:
      "AI talent for banking, insurance, and fintech with deep regulatory knowledge and risk management expertise.",
    keyUseCases: [
      "Algorithmic Trading & Risk Management",
      "Fraud Detection & Prevention",
      "Credit Scoring & Underwriting",
      "Regulatory Compliance & Reporting",
      "Customer Service Automation",
      "Anti-Money Laundering (AML)",
    ],
    specializedRoles: [
      "Quantitative AI Engineers",
      "Financial Risk AI Specialists",
      "RegTech AI Developers",
      "Fraud Detection ML Engineers",
    ],
    complianceRequirements: ["SOX", "Basel III", "GDPR", "PCI DSS", "FFIEC"],
    image: "/financial-services-buildings.png",
    insightsLinks: [
      { text: "AI Risk Management in Banking", href: "/insights/ai-governance-teams" },
      { text: "Regulatory Compliance for AI", href: "/media/evolving-hr-technologies" },
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: Heart,
    description:
      "AI professionals with healthcare domain expertise, HIPAA compliance knowledge, and clinical research experience.",
    keyUseCases: [
      "Medical Imaging & Diagnostics",
      "Drug Discovery & Development",
      "Clinical Decision Support",
      "Electronic Health Records (EHR) Analytics",
      "Personalized Medicine",
      "Healthcare Operations Optimization",
    ],
    specializedRoles: [
      "Clinical AI Engineers",
      "Medical Imaging AI Specialists",
      "Healthcare Data Scientists",
      "Regulatory Affairs AI Experts",
    ],
    complianceRequirements: ["HIPAA", "FDA 21 CFR Part 11", "GxP", "HITECH", "GDPR"],
    image: "/healthcare-operating-room.png",
    insightsLinks: [
      { text: "AI in Clinical Decision Making", href: "/insights/cio-ai-staffing-guide" },
      { text: "Healthcare AI Governance", href: "/media/mastering-ai-driven-hiring" },
    ],
  },
  {
    name: "Manufacturing & Industrial",
    slug: "manufacturing",
    icon: Factory,
    description:
      "AI talent for smart manufacturing, predictive maintenance, and industrial automation with operational technology expertise.",
    keyUseCases: [
      "Predictive Maintenance",
      "Quality Control & Inspection",
      "Supply Chain Optimization",
      "Production Planning & Scheduling",
      "Energy Management",
      "Safety & Risk Management",
    ],
    specializedRoles: [
      "Industrial IoT AI Engineers",
      "Predictive Maintenance Specialists",
      "Computer Vision Engineers",
      "Supply Chain AI Analysts",
    ],
    complianceRequirements: ["ISO 9001", "ISO 27001", "OSHA", "IEC 62443", "NIST"],
    image: "/manufacturing-engineer.png",
    insightsLinks: [
      { text: "Industry 4.0 AI Implementation", href: "/insights/ai-vs-traditional-devs" },
      { text: "Manufacturing AI Talent Trends", href: "/media/tech-hiring-new-work-trends" },
    ],
  },
]

const industryStats = [
  {
    industry: "Financial Services",
    aiAdoption: "78%",
    avgSalaryPremium: "+15%",
    topRole: "Quantitative AI Engineer",
  },
  {
    industry: "Healthcare",
    aiAdoption: "65%",
    avgSalaryPremium: "+12%",
    topRole: "Clinical AI Engineer",
  },
  {
    industry: "Manufacturing",
    aiAdoption: "71%",
    avgSalaryPremium: "+10%",
    topRole: "Predictive Maintenance Specialist",
  },
]

export default function IndustriesClientPage() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  const openAssessmentModal = () => {
    setIsAssessmentModalOpen(true)
  }

  const closeAssessmentModal = () => {
    setIsAssessmentModalOpen(false)
  }

  return (
    <>
      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Industries</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">AI Talent Solutions by Industry</h1>
            <p className="text-lg text-gray-600">
              Every industry has unique AI challenges and requirements. Our specialized talent solutions provide
              professionals with deep domain expertise, regulatory knowledge, and industry-specific experience to drive
              successful AI implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">AI Adoption Across Industries</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industryStats.map((stat) => (
                <Card key={stat.industry} className="border border-gray-200 text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">{stat.industry}</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-semibold text-gray-900">{stat.aiAdoption}</div>
                        <div className="text-sm text-gray-600">AI Adoption Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{stat.avgSalaryPremium}</div>
                        <div className="text-sm text-gray-600">Salary Premium for AI Roles</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{stat.topRole}</div>
                        <div className="text-xs text-gray-600">Most In-Demand Role</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              *Source: Connect Tech+Talent Industry Analysis 2024, based on client placement data and market research
            </p>
          </div>
        </div>
      </section>

      {/* Industry Deep Dives */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                id={industry.slug}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                          <industry.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold text-gray-900">{industry.name}</h2>
                        </div>
                      </div>

                      <p className="text-gray-600">{industry.description}</p>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Key AI Use Cases</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {industry.keyUseCases.map((useCase) => (
                            <div key={useCase} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Specialized Roles</h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.specializedRoles.map((role) => (
                            <span
                              key={role}
                              className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Compliance Requirements</h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.complianceRequirements.map((requirement) => (
                            <span
                              key={requirement}
                              className="inline-block px-3 py-1 text-sm bg-gray-50 text-gray-700 rounded border border-gray-200"
                            >
                              {requirement}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Related Insights</h3>
                        <div className="space-y-2">
                          {industry.insightsLinks.map((link) => (
                            <Link
                              key={link.text}
                              href={link.href}
                              className="block text-sm text-primary hover:underline"
                            >
                              {link.text} →
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
                        <Link href="/talent">
                          Explore {industry.name} AI Talent <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={`${industry.name} AI applications and technology implementation in enterprise environments`}
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

      {/* Quick Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Industry Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`#${industry.slug}`}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <industry.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{industry.name}</h3>
                    <p className="text-xs text-gray-500">{industry.specializedRoles.length} specialized roles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">We Serve Additional Industries</h2>
            <p className="text-gray-600 mb-8">
              Our AI talent network spans across multiple sectors, providing specialized expertise for diverse industry
              needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Energy & Utilities",
                "Retail & E-commerce",
                "Transportation & Logistics",
                "Real Estate & PropTech",
                "Media & Entertainment",
                "Education & EdTech",
                "Government & Public Sector",
                "Agriculture & FoodTech",
              ].map((industry) => (
                <Card key={industry} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Building2 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <h3 className="text-sm font-medium text-gray-900">{industry}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">Find Industry-Specific AI Talent</h2>
            <p className="text-gray-400">
              Connect with AI professionals who understand your industry's unique challenges, regulatory requirements,
              and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Discuss Your Industry Needs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                onClick={openAssessmentModal}
              >
                Industry AI Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AIAssessmentModal isOpen={isAssessmentModalOpen} onClose={closeAssessmentModal} />
    </>
  )
}
