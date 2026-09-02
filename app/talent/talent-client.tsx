"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Database, Cog, Shield, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { AIAssessmentModal } from "@/components/ai-assessment-modal"

const talentCategories = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Leadership",
    description: "Strategic leaders who drive AI transformation and organizational change",
    icon: Brain,
    color: "bg-blue-50 text-blue-600",
    roles: [
      {
        title: "Chief AI Officer",
        description: "Executive leadership for enterprise AI transformation and strategy",
        skills: ["AI Strategy", "Digital Transformation", "Executive Leadership", "Governance"],
        experience: "15+ years",
        industries: ["All Industries"],
        serviceLink: "/services/ai-strategy",
        industryLink: "/industries",
      },
      {
        title: "AI Product Manager",
        description: "Product strategy and roadmap development for AI-powered solutions",
        skills: ["Product Strategy", "AI/ML", "Agile", "Stakeholder Management"],
        experience: "8+ years",
        industries: ["Technology", "Financial Services", "Healthcare"],
        serviceLink: "/services/ai-strategy",
        industryLink: "/industries",
      },
      {
        title: "AI Strategy Consultant",
        description: "Strategic advisory for AI adoption, use case identification, and transformation planning",
        skills: ["Strategy Consulting", "AI Assessment", "Change Management", "Business Analysis"],
        experience: "10+ years",
        industries: ["Consulting", "Enterprise", "Government"],
        serviceLink: "/services/ai-strategy",
        industryLink: "/industries",
      },
    ],
  },
  {
    id: "ml-engineering",
    title: "Machine Learning Engineering",
    description: "Technical experts who build, deploy, and maintain ML systems at scale",
    icon: Cog,
    color: "bg-green-50 text-green-600",
    roles: [
      {
        title: "Senior ML Engineer",
        description: "End-to-end machine learning system development and deployment",
        skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"],
        experience: "5+ years",
        industries: ["Technology", "Financial Services", "Healthcare"],
        serviceLink: "/services/ai-infrastructure",
        industryLink: "/industries",
      },
      {
        title: "MLOps Engineer",
        description: "ML pipeline automation, model deployment, and production monitoring",
        skills: ["Kubernetes", "Docker", "CI/CD", "Model Monitoring", "Cloud Infrastructure"],
        experience: "4+ years",
        industries: ["Technology", "Manufacturing", "Retail"],
        serviceLink: "/services/ai-infrastructure",
        industryLink: "/industries",
      },
      {
        title: "Computer Vision Engineer",
        description: "Specialized in image processing, object detection, and visual AI applications",
        skills: ["OpenCV", "Deep Learning", "Image Processing", "Neural Networks"],
        experience: "4+ years",
        industries: ["Manufacturing", "Healthcare", "Automotive"],
        serviceLink: "/services/ai-infrastructure",
        industryLink: "/industries",
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Data experts who extract insights and build predictive models",
    icon: Database,
    color: "bg-purple-50 text-purple-600",
    roles: [
      {
        title: "Principal Data Scientist",
        description: "Advanced analytics, statistical modeling, and data-driven decision making",
        skills: ["Statistics", "Python/R", "Machine Learning", "Data Visualization", "Business Intelligence"],
        experience: "8+ years",
        industries: ["Financial Services", "Healthcare", "Retail"],
        serviceLink: "/services/ai-strategy",
        industryLink: "/industries",
      },
      {
        title: "AI Research Scientist",
        description: "Cutting-edge AI research, algorithm development, and innovation",
        skills: ["Deep Learning", "Research", "Publications", "Algorithm Design", "Mathematics"],
        experience: "PhD + 3+ years",
        industries: ["Technology", "Research", "Healthcare"],
        serviceLink: "/services/ai-strategy",
        industryLink: "/industries",
      },
      {
        title: "Data Platform Architect",
        description: "Design and implementation of scalable data infrastructure for AI/ML",
        skills: ["Data Architecture", "Big Data", "Cloud Platforms", "Data Governance"],
        experience: "10+ years",
        industries: ["Enterprise", "Financial Services", "Technology"],
        serviceLink: "/services/ai-infrastructure",
        industryLink: "/industries",
      },
    ],
  },
  {
    id: "ai-governance",
    title: "AI Governance & Compliance",
    description: "Specialists ensuring responsible AI deployment and regulatory compliance",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    roles: [
      {
        title: "AI Ethics Officer",
        description: "Responsible AI practices, bias detection, and ethical framework development",
        skills: ["AI Ethics", "Bias Detection", "Regulatory Compliance", "Risk Management"],
        experience: "6+ years",
        industries: ["Financial Services", "Healthcare", "Government"],
        serviceLink: "/services/ai-compliance",
        industryLink: "/industries",
      },
      {
        title: "AI Compliance Manager",
        description: "Regulatory compliance, audit management, and governance framework implementation",
        skills: ["Regulatory Compliance", "Audit Management", "Risk Assessment", "Policy Development"],
        experience: "8+ years",
        industries: ["Financial Services", "Healthcare", "Government"],
        serviceLink: "/services/ai-compliance",
        industryLink: "/industries",
      },
      {
        title: "Model Risk Manager",
        description: "Model validation, risk assessment, and performance monitoring",
        skills: ["Model Validation", "Risk Management", "Statistics", "Regulatory Knowledge"],
        experience: "7+ years",
        industries: ["Financial Services", "Insurance", "Healthcare"],
        serviceLink: "/services/ai-compliance",
        industryLink: "/industries",
      },
    ],
  },
]

const stats = [
  { value: "250K+", label: "AI Professionals in Network" },
  { value: "175K+", label: "LinkedIn Followers" },
  { value: "50+", label: "Specialized AI Roles" },
  { value: "15+", label: "Industry Verticals" },
  { value: "95%", label: "Placement Success Rate" },
]

export default function TalentClientPage() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  const openAssessmentModal = () => {
    setIsAssessmentModalOpen(true)
  }

  const closeAssessmentModal = () => {
    setIsAssessmentModalOpen(false)
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "AI Talent Matrix",
            description:
              "Comprehensive list of specialized AI roles and expertise available through Connect Tech+Talent",
            itemListElement: talentCategories.flatMap((category, categoryIndex) =>
              category.roles.map((role, roleIndex) => ({
                "@type": "ListItem",
                position: categoryIndex * 10 + roleIndex + 1,
                item: {
                  "@type": "JobPosting",
                  title: role.title,
                  description: role.description,
                  skills: role.skills.join(", "),
                  experienceRequirements: role.experience,
                  industry: role.industries.join(", "),
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Connect Tech+Talent",
                    url: "https://connecttechtalent.com",
                  },
                },
              })),
            ),
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
            <span className="text-gray-900 font-medium">AI Talent Matrix</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">AI Talent Matrix</h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive network of specialized AI professionals. From strategic leadership to technical
              implementation, we connect you with the exact expertise needed for your AI transformation.
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

      {/* Talent Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {talentCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="text-center mb-10">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.roles.map((role) => (
                    <Card key={role.title} className="border border-gray-200 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg font-medium text-gray-900">{role.title}</CardTitle>
                        <p className="text-sm text-gray-600">{role.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-1">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Experience:</span>
                            <p className="text-gray-600">{role.experience}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Industries:</span>
                            <p className="text-gray-600">{role.industries.join(", ")}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" asChild>
                            <Link href={role.serviceLink}>
                              Service <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" asChild>
                            <Link href={role.industryLink}>
                              Industry <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {talentCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center mr-3`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{category.title}</h3>
                    <p className="text-xs text-gray-500">{category.roles.length} roles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Build Your AI Team?</h2>
            <p className="text-gray-400">
              Connect with specialized AI talent that matches your specific requirements. Our experts are ready to help
              you identify the right roles and skills for your AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=talent&utm_medium=cta&utm_campaign=consultation">
                  Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
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
