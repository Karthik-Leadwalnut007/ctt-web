import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, TrendingUp, Users, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Featured AI Roles - In-Demand Positions",
  description:
    "Explore the most in-demand AI roles including ML Engineers, AI Ethicists, and MLOps Specialists. Detailed role descriptions, requirements, and hiring insights.",
}

const featuredRoles = [
  {
    title: "Machine Learning Engineer",
    subtitle: "The backbone of AI implementation",
    salaryRange: "$140K - $220K",
    demand: "Very High",
    growth: "+127% YoY",
    description:
      "Machine Learning Engineers are the technical architects who transform data science prototypes into production-ready AI systems. They bridge the gap between research and real-world application, ensuring ML models are scalable, reliable, and performant.",
    keyResponsibilities: [
      "Design and implement machine learning algorithms and models",
      "Optimize model performance and scalability for production environments",
      "Collaborate with data scientists to productionize research prototypes",
      "Build and maintain ML infrastructure and pipelines",
      "Monitor model performance and implement continuous improvement processes",
      "Integrate ML solutions with existing enterprise systems",
    ],
    requiredSkills: [
      "Advanced Python/R programming",
      "Deep learning frameworks (TensorFlow, PyTorch)",
      "Cloud platforms (AWS, Azure, GCP)",
      "MLOps tools and practices",
      "Statistics and mathematics",
      "Software engineering best practices",
    ],
    idealCandidateProfile:
      "5+ years of experience in machine learning with a strong background in software engineering. Advanced degree in Computer Science, Mathematics, or related field preferred. Experience with large-scale ML systems and cloud deployment.",
    whyInDemand:
      "As organizations move from AI experimentation to production deployment, the need for engineers who can build robust, scalable ML systems has exploded. The complexity of modern AI applications requires specialized expertise that traditional software engineers often lack.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/developers-1-p0yS7MX6uxgec7zLBT5eoVFw2M64o4.png",
  },
  {
    title: "AI Ethicist",
    subtitle: "Ensuring responsible AI development",
    salaryRange: "$110K - $170K",
    demand: "Growing",
    growth: "+89% YoY",
    description:
      "AI Ethicists are the moral compass of AI development, ensuring that artificial intelligence systems are developed and deployed responsibly. They address bias, fairness, transparency, and the broader societal implications of AI technologies.",
    keyResponsibilities: [
      "Develop ethical frameworks and guidelines for AI development",
      "Conduct bias audits and fairness assessments of AI systems",
      "Create policies for responsible AI use and deployment",
      "Collaborate with legal teams on AI compliance and risk management",
      "Educate teams on ethical AI practices and implications",
      "Engage with stakeholders on AI ethics and societal impact",
    ],
    requiredSkills: [
      "Philosophy, ethics, or related academic background",
      "Understanding of AI/ML technologies and limitations",
      "Policy development and regulatory knowledge",
      "Bias detection and mitigation techniques",
      "Stakeholder communication and engagement",
      "Research and analytical thinking",
    ],
    idealCandidateProfile:
      "Advanced degree in Philosophy, Ethics, Law, or related field with 3+ years of experience in AI ethics or technology policy. Strong understanding of AI technologies combined with expertise in ethical frameworks and bias detection.",
    whyInDemand:
      "Increasing regulatory scrutiny and public awareness of AI bias have made AI ethics a critical business function. Organizations need specialists who can navigate the complex ethical landscape while enabling innovation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connect-with-your-team-img-1-1-HCUNyMQw4oDanKVfZWULEm6hIx7v0B.png",
  },
  {
    title: "MLOps Engineer",
    subtitle: "Operationalizing machine learning at scale",
    salaryRange: "$150K - $230K",
    demand: "Very High",
    growth: "+156% YoY",
    description:
      "MLOps Engineers are the DevOps specialists of the AI world, focusing on the operational aspects of machine learning systems. They ensure ML models can be deployed, monitored, and maintained reliably in production environments.",
    keyResponsibilities: [
      "Design and implement CI/CD pipelines for machine learning workflows",
      "Build automated model training, testing, and deployment systems",
      "Monitor model performance and data drift in production",
      "Manage ML infrastructure and resource optimization",
      "Implement model versioning and experiment tracking",
      "Ensure security and compliance in ML operations",
    ],
    requiredSkills: [
      "DevOps and infrastructure automation",
      "Containerization (Docker, Kubernetes)",
      "Cloud platforms and services",
      "ML frameworks and model serving",
      "Monitoring and observability tools",
      "Infrastructure as Code (Terraform, CloudFormation)",
    ],
    idealCandidateProfile:
      "4+ years of DevOps experience with 2+ years focused on ML systems. Strong background in cloud infrastructure, automation, and software engineering. Experience with ML model lifecycle management.",
    whyInDemand:
      "The gap between ML model development and production deployment has created a critical need for specialists who understand both machine learning and operations. MLOps Engineers solve the 'last mile' problem of AI implementation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connect-with-your-team-img-2-1-QoZEp3pDXzXciDzoxBYQYYUohyUuY6.png",
  },
]

export default function FeaturedRolesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Featured AI Roles</h1>
            <p className="text-lg text-gray-600">
              Deep dive into the most critical and in-demand AI positions. Understand the skills, responsibilities, and
              market dynamics driving these essential roles in the AI economy.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-gray-700 mx-auto" />
              <div className="text-xl font-semibold text-gray-900">127% Growth</div>
              <div className="text-sm text-gray-600">Average demand increase for featured AI roles</div>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-gray-700 mx-auto" />
              <div className="text-xl font-semibold text-gray-900">3:1 Ratio</div>
              <div className="text-sm text-gray-600">Open positions to qualified candidates</div>
            </div>
            <div className="space-y-2">
              <Brain className="h-8 w-8 text-gray-700 mx-auto" />
              <div className="text-xl font-semibold text-gray-900">$165K</div>
              <div className="text-sm text-gray-600">Average salary for featured roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {featuredRoles.map((role, index) => (
              <div key={role.title} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {role.salaryRange}
                          </Badge>
                          <Badge
                            variant={role.demand === "Very High" ? "default" : "secondary"}
                            className={`text-xs ${
                              role.demand === "Very High" ? "bg-gray-900 text-white" : "bg-gray-600 text-white"
                            }`}
                          >
                            {role.demand} Demand
                          </Badge>
                          <Badge variant="outline" className="text-xs text-green-700 border-green-200">
                            {role.growth}
                          </Badge>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900">{role.title}</h2>
                        <p className="text-gray-600 font-medium">{role.subtitle}</p>
                      </div>

                      <p className="text-gray-600">{role.description}</p>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Why This Role is in High Demand</h3>
                        <p className="text-sm text-gray-600">{role.whyInDemand}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Ideal Candidate Profile</h3>
                        <p className="text-sm text-gray-600">{role.idealCandidateProfile}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={role.image || "/placeholder.svg"}
                      alt={`${role.title} at work`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-8 lg:p-12 bg-gray-50 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {role.keyResponsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Required Skills</h3>
                      <div className="space-y-2">
                        {role.requiredSkills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block mr-2 mb-2 px-3 py-1 text-sm bg-white text-gray-700 rounded border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">Find Top AI Talent for These Critical Roles</h2>
            <p className="text-gray-400">
              Our network includes pre-vetted professionals in all featured AI roles. Connect with candidates who have
              the skills and experience to drive your AI initiatives forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Hire Featured AI Talent <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800" asChild>
                <Link href="/talent">View All AI Roles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
