import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User, ChevronRight, Home, Users, Shield, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Governance: Building Responsible AI Teams",
  description:
    "As AI regulations evolve, organizations need specialized governance talent to ensure compliant and ethical AI deployment. Strategic insights for enterprise leaders.",
  alternates: {
    canonical: "/insights/ai-governance-teams",
  },
}

const governanceRoles = [
  {
    title: "Chief AI Officer",
    description: "Executive oversight of AI strategy, governance, and risk management",
    responsibilities: [
      "AI strategy development and execution",
      "Cross-functional AI governance coordination",
      "Regulatory compliance oversight",
      "Stakeholder communication and reporting",
    ],
    reportsTo: "CEO/CTO",
    teamSize: "5-15 direct reports",
  },
  {
    title: "AI Ethics Officer",
    description: "Ensures ethical AI development and deployment practices",
    responsibilities: [
      "AI ethics framework development",
      "Bias detection and mitigation strategies",
      "Ethical review of AI projects",
      "Training and awareness programs",
    ],
    reportsTo: "Chief AI Officer",
    teamSize: "2-5 specialists",
  },
  {
    title: "AI Compliance Manager",
    description: "Manages regulatory compliance and audit requirements",
    responsibilities: [
      "Regulatory landscape monitoring",
      "Compliance framework implementation",
      "Audit preparation and management",
      "Policy development and maintenance",
    ],
    reportsTo: "Chief AI Officer",
    teamSize: "3-8 analysts",
  },
  {
    title: "Model Risk Manager",
    description: "Oversees AI model validation and risk assessment",
    responsibilities: [
      "Model validation and testing",
      "Risk assessment and mitigation",
      "Performance monitoring",
      "Documentation and reporting",
    ],
    reportsTo: "Chief Risk Officer",
    teamSize: "4-10 validators",
  },
]

export default function AIGovernanceTeamsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Governance: Building Responsible AI Teams",
            description:
              "As AI regulations evolve, organizations need specialized governance talent to ensure compliant and ethical AI deployment.",
            datePublished: "2025-01-05",
            dateModified: "2025-01-05",
            author: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              logo: {
                "@type": "ImageObject",
                url: "https://connecttechtalent.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://connecttechtalent.com/insights/ai-governance-teams",
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
            <Link href="/insights" className="hover:text-primary">
              Insights
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">AI Governance Teams</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-4">
              Compliance
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">AI Governance: Building Responsible AI Teams</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Connect Tech+Talent Research Team</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>January 5, 2025</span>
              </div>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <p className="text-lg text-gray-600">
              As AI regulations evolve and stakeholder expectations for responsible AI deployment increase,
              organizations need specialized governance talent to navigate this complex landscape while maintaining
              innovation momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <Image
                  src="/ai-governance-team-structure.png"
                  alt="The Modern AI Governance Team Structure showing Chief AI Officer at the top with three reporting roles: AI Ethics Officer, AI Compliance Manager, and Model Risk Manager"
                  width={700}
                  height={700}
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Governance Imperative</h2>
              <p className="text-gray-600 mb-6">
                The rapid adoption of AI across enterprises has created an urgent need for robust governance frameworks.
                Recent regulatory developments, including the EU AI Act, emerging US federal guidelines, and
                industry-specific requirements, have made AI governance not just a best practice—but a business
                imperative.
              </p>

              <p className="text-gray-600 mb-6">
                Our analysis of 200+ enterprise AI implementations shows that organizations with dedicated AI governance
                teams experience 45% fewer compliance issues and 60% faster regulatory approval processes compared to
                those relying on ad-hoc governance approaches.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Modern AI Governance Team Structure</h2>
              <p className="text-gray-600 mb-6">
                Effective AI governance requires a multi-disciplinary team with clearly defined roles and
                responsibilities. The organizational chart above illustrates the optimal structure for enterprise AI
                governance teams.
              </p>

              {/* Governance Roles Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {governanceRoles.map((role) => (
                  <Card key={role.title} className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          {role.title.includes("Chief") ? (
                            <Users className="h-5 w-5 text-purple-600" />
                          ) : role.title.includes("Ethics") ? (
                            <Shield className="h-5 w-5 text-purple-600" />
                          ) : (
                            <Scale className="h-5 w-5 text-purple-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                          <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {role.responsibilities.map((resp) => (
                              <li key={resp} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                          <div>
                            <span className="font-medium">Reports to:</span>
                            <p>{role.reportsTo}</p>
                          </div>
                          <div>
                            <span className="font-medium">Team size:</span>
                            <p>{role.teamSize}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Building Your Governance Framework</h2>
              <p className="text-gray-600 mb-6">
                Successful AI governance isn't just about hiring the right people—it's about creating the right
                organizational structure and processes. Here's how leading enterprises are approaching this challenge:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Phase 1: Foundation (Months 1-3)</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Establish Chief AI Officer role and governance charter</li>
                  <li>• Define AI risk appetite and governance principles</li>
                  <li>• Create cross-functional AI governance committee</li>
                  <li>• Begin regulatory landscape assessment</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Phase 2: Implementation (Months 4-9)</h3>
                <ul className="text-green-800 space-y-1">
                  <li>• Hire AI Ethics Officer and Compliance Manager</li>
                  <li>• Develop AI ethics framework and bias detection protocols</li>
                  <li>• Implement model validation and approval processes</li>
                  <li>• Create AI governance policies and procedures</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Phase 3: Optimization (Months 10-12)</h3>
                <ul className="text-purple-800 space-y-1">
                  <li>• Add Model Risk Manager and specialized validators</li>
                  <li>• Implement continuous monitoring and reporting systems</li>
                  <li>• Conduct governance framework effectiveness review</li>
                  <li>• Plan for regulatory compliance audits</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Compliance Connection</h2>
              <p className="text-gray-600 mb-6">
                AI governance teams work closely with traditional compliance functions but require specialized expertise
                in AI-specific regulations and standards. This includes understanding frameworks like ISO/IEC 42001,
                NIST AI Risk Management Framework, and emerging regulatory requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Organizations looking to build comprehensive AI compliance capabilities should explore our{" "}
                <Link href="/services/ai-compliance" className="text-primary hover:underline">
                  AI Risk & Compliance services
                </Link>{" "}
                to understand the full spectrum of specialized talent needed for responsible AI deployment.
              </p>

              <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Success Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Executive Support</h4>
                    <p className="text-gray-300 text-sm">
                      AI governance requires strong executive sponsorship and clear authority to make binding decisions
                      across the organization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cross-Functional Integration</h4>
                    <p className="text-gray-300 text-sm">
                      Governance teams must work closely with legal, risk, IT, and business units to ensure
                      comprehensive coverage.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Learning</h4>
                    <p className="text-gray-300 text-sm">
                      The regulatory landscape is evolving rapidly; governance teams must stay current with emerging
                      requirements and best practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technology Integration</h4>
                    <p className="text-gray-300 text-sm">
                      Modern governance requires sophisticated tools for monitoring, reporting, and managing AI systems
                      at scale.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Path Forward</h2>
              <p className="text-gray-600 mb-6">
                Building an effective AI governance team is not a one-time project—it's an ongoing organizational
                capability that must evolve with your AI maturity and the regulatory landscape. The organizations that
                invest in governance early will have a significant advantage as AI regulations become more stringent and
                stakeholder expectations continue to rise.
              </p>

              <p className="text-gray-600 mb-6">
                The window for proactive governance is narrowing. Organizations that wait for regulatory enforcement or
                public incidents to drive governance initiatives will find themselves at a significant disadvantage in
                terms of both compliance costs and competitive positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Compliance Services</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Explore our comprehensive AI risk and compliance talent solutions.
                  </p>
                  <Link href="/services/ai-compliance" className="text-primary hover:underline text-sm font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">CIO Staffing Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Strategic insights for building comprehensive AI teams that include governance.
                  </p>
                  <Link
                    href="/insights/cio-ai-staffing-guide"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read Guide →
                  </Link>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Schedule Consultation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Discuss your AI governance team requirements with our experts.
                  </p>
                  <Link href="/contact" className="text-primary hover:underline text-sm font-medium">
                    Book Meeting →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-slate-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Build Your AI Governance Team?</h3>
              <p className="text-gray-300 mb-6">
                Don't wait for regulatory enforcement to drive your governance strategy. Connect with our specialists to
                build a proactive AI governance framework that enables innovation while managing risk.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=insights&utm_medium=cta&utm_campaign=ai-governance">
                  Start Building Your Governance Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
