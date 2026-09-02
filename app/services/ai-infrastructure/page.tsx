import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, ChevronRight, Home, Server, Cloud, Database, Zap, Shield, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ML Engineers & AI Infrastructure Talent | MLOps & Platform Architects",
  description:
    "Hire ML engineers, MLOps specialists, AI platform architects, and data engineers. Build, deploy, and scale production AI systems with expert technical talent. 29 years in tech recruitment.",
  keywords: [
    "ML engineers hiring",
    "MLOps specialists",
    "AI platform architects",
    "machine learning engineers",
    "data engineers recruitment",
    "AI infrastructure talent",
    "production ML deployment",
    "ML pipeline development",
    "model monitoring engineers",
    "AI system architecture",
    "scalable AI infrastructure",
    "cloud AI architects",
    "Kubernetes ML deployment",
    "distributed training infrastructure",
    "real-time AI inference",
  ],
  authors: [{ name: "Connect Tech and Talent" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cttv2.manymangoes.com.au/services/ai-infrastructure",
    title: "ML Engineers & AI Infrastructure Talent - MLOps & Platform Architects",
    description:
      "Technical experts who build, deploy, and scale AI systems in production. Hire ML engineers, MLOps specialists, AI platform architects, and data engineers for enterprise AI infrastructure.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/ai-infrastructure-diagram.jpg",
        width: 1200,
        height: 630,
        alt: "AI Infrastructure and Engineering Services - ML Engineers and MLOps Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Engineers & AI Infrastructure Talent | MLOps Specialists",
    description:
      "Hire technical experts who build and scale production AI systems. ML engineers, MLOps specialists, and AI platform architects with proven expertise.",
    images: ["https://cttv2.manymangoes.com.au/ai-infrastructure-diagram.jpg"],
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
    canonical: "https://cttv2.manymangoes.com.au/services/ai-infrastructure",
  },
}

const capabilities = [
  {
    icon: Server,
    title: "MLOps & Model Deployment",
    description:
      "End-to-end machine learning operations including CI/CD pipelines, model versioning, automated testing, and production deployment strategies.",
  },
  {
    icon: Cloud,
    title: "Cloud AI Platform Engineering",
    description:
      "Multi-cloud AI infrastructure design and implementation across AWS, Azure, and GCP with focus on scalability, security, and cost optimization.",
  },
  {
    icon: Database,
    title: "Data Pipeline & Lakehouse Architecture",
    description:
      "Modern data architecture design including real-time streaming, batch processing, and unified analytics platforms for AI workloads.",
  },
  {
    icon: Zap,
    title: "High-Performance Computing",
    description:
      "GPU cluster management, distributed training infrastructure, and optimization for large-scale AI model training and inference.",
  },
  {
    icon: Shield,
    title: "AI Security & Governance",
    description:
      "Secure AI infrastructure design with encryption, access controls, audit logging, and compliance frameworks for regulated industries.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description:
      "Comprehensive monitoring solutions for AI systems including model performance tracking, drift detection, and operational metrics.",
  },
]

const useCases = [
  {
    title: "Enterprise MLOps Platform",
    description:
      "Built comprehensive MLOps platform for Fortune 500 financial services company, enabling 50+ data scientists to deploy models 10x faster with automated testing and monitoring.",
    technologies: ["Kubernetes", "MLflow", "Apache Airflow", "Prometheus", "Grafana"],
    outcome: "Reduced model deployment time from weeks to hours, improved model reliability by 40%",
  },
  {
    title: "Real-time AI Inference System",
    description:
      "Designed high-throughput inference infrastructure for e-commerce recommendation engine serving 100M+ requests daily with sub-100ms latency requirements.",
    technologies: ["Apache Kafka", "Redis", "TensorFlow Serving", "AWS EKS", "Istio"],
    outcome: "Achieved 99.9% uptime, reduced infrastructure costs by 30% through auto-scaling",
  },
  {
    title: "Multi-Cloud AI Data Platform",
    description:
      "Architected hybrid cloud data lakehouse for healthcare AI applications, ensuring HIPAA compliance while enabling advanced analytics across multiple data sources.",
    technologies: ["Delta Lake", "Apache Spark", "Databricks", "Azure Synapse", "Terraform"],
    outcome: "Enabled 5x faster data processing, achieved SOC 2 Type II compliance",
  },
]

const timeline = [
  {
    phase: "Assessment & Planning",
    duration: "Week 1-2",
    activities: ["Infrastructure audit", "Requirements gathering", "Architecture design", "Technology selection"],
  },
  {
    phase: "Foundation Setup",
    duration: "Week 3-6",
    activities: [
      "Cloud environment setup",
      "Security configuration",
      "CI/CD pipeline creation",
      "Monitoring implementation",
    ],
  },
  {
    phase: "MLOps Implementation",
    duration: "Week 7-10",
    activities: [
      "Model deployment automation",
      "Experiment tracking",
      "Data pipeline development",
      "Performance optimization",
    ],
  },
  {
    phase: "Production & Optimization",
    duration: "Week 11-12",
    activities: ["Production deployment", "Load testing", "Performance tuning", "Documentation & training"],
  },
]

const faqs = [
  {
    question: "What cloud platforms do your AI infrastructure engineers specialize in?",
    answer:
      "Our engineers have deep expertise across all major cloud platforms including AWS (SageMaker, EKS, Lambda), Azure (Machine Learning, AKS, Functions), and Google Cloud (Vertex AI, GKE, Cloud Functions). They're also experienced with multi-cloud and hybrid deployments, helping organizations avoid vendor lock-in while optimizing for performance and cost.",
  },
  {
    question: "How do you ensure AI infrastructure scalability and performance?",
    answer:
      "We design infrastructure with scalability as a core principle, using containerization (Docker/Kubernetes), auto-scaling policies, load balancing, and distributed computing frameworks. Our engineers implement performance monitoring, capacity planning, and optimization strategies to ensure your AI systems can handle growing workloads while maintaining low latency and high availability.",
  },
  {
    question: "What experience do your engineers have with MLOps and model deployment?",
    answer:
      "Our MLOps specialists have hands-on experience with the complete ML lifecycle, from experiment tracking and model versioning to automated deployment and monitoring. They're proficient with tools like MLflow, Kubeflow, Apache Airflow, and custom CI/CD pipelines, ensuring your models move seamlessly from development to production with proper governance and reliability.",
  },
  {
    question: "How do you handle AI infrastructure security and compliance requirements?",
    answer:
      "Security and compliance are built into every infrastructure design. Our engineers implement encryption at rest and in transit, network segmentation, identity and access management, and comprehensive audit logging. They have experience with compliance frameworks including SOC 2, HIPAA, GDPR, and industry-specific regulations, ensuring your AI infrastructure meets the highest security standards.",
  },
  {
    question: "What's the typical timeline for implementing enterprise AI infrastructure?",
    answer:
      "Implementation timelines vary based on complexity and requirements, but typically range from 8-16 weeks for comprehensive enterprise deployments. We follow a phased approach starting with foundation setup, followed by MLOps implementation, and finally production optimization. Our experienced teams can accelerate timelines for urgent projects while maintaining quality and security standards.",
  },
]

export default function AIInfrastructurePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Infrastructure & Engineering Services",
            description:
              "Specialized AI infrastructure engineering talent for MLOps, cloud AI platforms, and scalable AI systems",
            provider: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            serviceType: "AI Infrastructure Engineering",
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
            <span className="text-gray-900 font-medium">AI Infrastructure & Engineering</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
              AI Infrastructure & Engineering
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Build Scalable AI Infrastructure with Expert Engineering Talent
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Deploy production-ready AI systems with specialized MLOps engineers, cloud architects, and infrastructure
              specialists who understand enterprise-scale requirements for performance, security, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-infrastructure&utm_medium=hero&utm_campaign=consultation">
                  Find Infrastructure Talent <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/talent#infrastructure">View Talent Matrix</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MLOps Diagram */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Enterprise MLOps Architecture</h2>
            <div className="relative">
              <Image
                src="/ai-infrastructure-diagram.jpg"
                alt="MLOps toolchain diagram showing CI/CD pipeline for machine learning models, including data ingestion, model training, validation, deployment, and monitoring stages with automated feedback loops"
                width={800}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Comprehensive MLOps pipeline architecture designed for enterprise-scale AI deployments
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Infrastructure Capabilities</h2>
            <p className="text-gray-600">
              Our AI infrastructure specialists bring deep expertise across the entire technology stack required for
              enterprise AI deployments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
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

      {/* Use Cases */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proven Implementation Success</h2>
            <p className="text-gray-600">
              Real-world examples of how our infrastructure specialists have delivered scalable AI solutions for
              enterprise clients.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-gray-900 mb-3">{useCase.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Outcome:</h4>
                    <p className="text-sm text-gray-600">{useCase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-gray-600">
              Typical timeline for enterprise AI infrastructure deployment with our specialized engineering teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <Card key={phase.phase} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-medium text-gray-900">{phase.phase}</CardTitle>
                      <p className="text-sm text-gray-500">{phase.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry-Specific Infrastructure Expertise</h2>
            <p className="text-gray-600 mb-8">
              Our infrastructure specialists understand the unique requirements and compliance needs across different
              industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/industries#financial-services">Financial Services Infrastructure</Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/industries#healthcare">Healthcare AI Platforms</Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/industries#manufacturing">Manufacturing AI Systems</Link>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Build Your AI Infrastructure?</h2>
            <p className="text-gray-600 mb-6">
              Connect with our infrastructure specialists to discuss your AI platform requirements and find the right
              engineering talent for your projects.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-infrastructure&utm_medium=cta&utm_campaign=consultation">
                Schedule Infrastructure Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
