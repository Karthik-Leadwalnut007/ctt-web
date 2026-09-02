import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, ChevronRight, Home, Shield, FileCheck, AlertTriangle, Scale, Eye, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Compliance & Governance Experts | Risk Management & Regulatory Talent",
  description:
    "Hire AI compliance professionals, governance experts, and risk managers. Navigate EU AI Act, GDPR, and industry regulations with specialized talent. Ensure responsible AI deployment.",
  keywords: [
    "AI compliance specialists",
    "AI governance experts",
    "AI risk management",
    "EU AI Act compliance",
    "GDPR AI compliance",
    "AI ethics officers",
    "model risk managers",
    "AI regulatory compliance",
    "algorithmic bias mitigation",
    "AI fairness experts",
    "responsible AI talent",
    "AI audit specialists",
    "ISO 42001 consultants",
    "NIST AI framework",
    "AI compliance framework",
  ],
  authors: [{ name: "Connect Tech and Talent" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cttv2.manymangoes.com.au/services/ai-compliance",
    title: "AI Compliance & Governance Experts - Risk Management & Regulatory Talent",
    description:
      "Specialists ensuring responsible AI deployment and regulatory compliance. Hire AI compliance professionals, risk managers, and governance experts experienced in EU AI Act, GDPR, and industry standards.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/ai-compliance-framework.jpg",
        width: 1200,
        height: 630,
        alt: "AI Compliance and Governance Services - Risk Management and Regulatory Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Compliance & Governance Experts | Risk Management Talent",
    description:
      "Navigate AI regulations with specialized compliance professionals. EU AI Act, GDPR, and industry expertise for responsible AI deployment.",
    images: ["https://cttv2.manymangoes.com.au/ai-compliance-framework.jpg"],
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
    canonical: "https://cttv2.manymangoes.com.au/services/ai-compliance",
  },
}

const complianceFrameworks = [
  {
    name: "ISO/IEC 42001",
    description:
      "International standard for AI management systems, providing requirements for establishing, implementing, maintaining and continually improving AI management systems.",
    scope: "Global AI governance and management",
  },
  {
    name: "NIST AI Risk Management Framework",
    description:
      "Comprehensive framework for managing AI risks throughout the AI lifecycle, from design to deployment and monitoring.",
    scope: "AI risk assessment and mitigation",
  },
  {
    name: "EU AI Act",
    description:
      "European Union's comprehensive AI regulation establishing requirements for high-risk AI systems and prohibited AI practices.",
    scope: "European AI regulatory compliance",
  },
  {
    name: "SOC 2 Type II",
    description:
      "Security, availability, processing integrity, confidentiality, and privacy controls for AI systems handling sensitive data.",
    scope: "AI system security and privacy",
  },
  {
    name: "GDPR & Data Protection",
    description:
      "Data protection requirements for AI systems processing personal data, including consent, transparency, and individual rights.",
    scope: "AI data privacy compliance",
  },
  {
    name: "Industry-Specific Standards",
    description:
      "Sector-specific requirements including HIPAA (healthcare), PCI DSS (payments), and financial services regulations.",
    scope: "Vertical compliance requirements",
  },
]

const riskCategories = [
  {
    icon: AlertTriangle,
    title: "Algorithmic Bias & Fairness",
    description:
      "Identify, measure, and mitigate bias in AI models to ensure fair outcomes across different demographic groups and use cases.",
    mitigation: [
      "Bias testing frameworks",
      "Fairness metrics implementation",
      "Diverse training data",
      "Regular model audits",
    ],
  },
  {
    icon: Eye,
    title: "Transparency & Explainability",
    description:
      "Ensure AI decision-making processes are interpretable and explainable to stakeholders, regulators, and affected individuals.",
    mitigation: [
      "Explainable AI techniques",
      "Model documentation",
      "Decision audit trails",
      "Stakeholder communication",
    ],
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    description:
      "Protect sensitive data used in AI systems and ensure compliance with privacy regulations and security standards.",
    mitigation: ["Data encryption", "Access controls", "Privacy-preserving ML", "Security monitoring"],
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Navigate evolving AI regulations and ensure systems meet current and anticipated regulatory requirements.",
    mitigation: ["Compliance monitoring", "Regulatory tracking", "Policy implementation", "Audit preparation"],
  },
  {
    icon: FileCheck,
    title: "Model Governance",
    description:
      "Establish comprehensive governance processes for AI model development, validation, deployment, and monitoring.",
    mitigation: ["Model lifecycle management", "Validation frameworks", "Change control", "Performance monitoring"],
  },
  {
    icon: Shield,
    title: "Operational Risk",
    description: "Manage risks related to AI system failures, performance degradation, and operational dependencies.",
    mitigation: ["Monitoring systems", "Incident response", "Business continuity", "Risk assessment"],
  },
]

const riskRegisterExample = [
  {
    risk: "Model Bias in Credit Scoring",
    likelihood: "Medium",
    impact: "High",
    mitigation: "Implement fairness constraints, diverse training data, regular bias testing",
    owner: "AI Ethics Officer",
    status: "In Progress",
  },
  {
    risk: "Data Privacy Violation",
    likelihood: "Low",
    impact: "High",
    mitigation: "Differential privacy, data minimization, consent management",
    owner: "Data Protection Officer",
    status: "Mitigated",
  },
  {
    risk: "Model Performance Degradation",
    likelihood: "Medium",
    impact: "Medium",
    mitigation: "Continuous monitoring, automated retraining, performance thresholds",
    owner: "ML Engineering Lead",
    status: "Monitored",
  },
  {
    risk: "Regulatory Non-Compliance",
    likelihood: "Low",
    impact: "High",
    mitigation: "Compliance framework, regular audits, legal review process",
    owner: "Compliance Manager",
    status: "Controlled",
  },
]

const faqs = [
  {
    question: "What's the difference between AI governance and AI compliance?",
    answer:
      "AI governance refers to the internal policies, processes, and organizational structures that guide AI development and deployment within an organization. It includes decision-making frameworks, risk management processes, and ethical guidelines. AI compliance, on the other hand, focuses specifically on meeting external regulatory requirements, legal obligations, and industry standards. Governance is proactive and strategic, while compliance is reactive and regulatory-driven. Both are essential and complementary aspects of responsible AI deployment.",
  },
  {
    question: "How do you ensure AI systems comply with emerging regulations like the EU AI Act?",
    answer:
      "Our compliance specialists stay current with evolving regulations and implement proactive compliance strategies. For the EU AI Act, this includes risk classification of AI systems, implementing quality management systems for high-risk AI, ensuring human oversight mechanisms, maintaining detailed documentation, and establishing conformity assessment procedures. We help organizations prepare for compliance before regulations take effect and maintain ongoing compliance through monitoring and updates.",
  },
  {
    question: "What qualifications should AI compliance professionals have?",
    answer:
      "Effective AI compliance professionals typically have a combination of legal/regulatory background (JD or equivalent), technical understanding of AI/ML systems, and experience with risk management frameworks. Key qualifications include knowledge of relevant regulations (GDPR, AI Act, industry standards), experience with compliance program development, understanding of AI ethics and bias mitigation, and strong communication skills to work with both technical and business stakeholders.",
  },
  {
    question: "How do you handle AI bias detection and mitigation?",
    answer:
      "Our approach to AI bias includes multiple strategies: pre-processing (diverse and representative training data), in-processing (fairness constraints during model training), and post-processing (bias correction techniques). We implement comprehensive testing frameworks that evaluate models across different demographic groups, use statistical parity and equalized odds metrics, and establish ongoing monitoring systems to detect bias drift over time. Regular audits and stakeholder feedback loops ensure continuous improvement.",
  },
  {
    question: "What industries require the most specialized AI compliance expertise?",
    answer:
      "Highly regulated industries require the most specialized AI compliance expertise, including financial services (banking regulations, fair lending laws), healthcare (HIPAA, FDA requirements for medical AI), insurance (actuarial fairness, state regulations), and government/defense (security clearances, procurement regulations). Each industry has unique compliance requirements, risk tolerance levels, and stakeholder expectations that require deep domain expertise to navigate effectively.",
  },
]

export default function AICompliancePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Compliance & Risk Management Services",
            description:
              "Specialized AI compliance and governance talent for regulatory compliance, risk management, and ethical AI implementation",
            provider: {
              "@type": "Organization",
              name: "Connect Tech+Talent",
              url: "https://connecttechtalent.com",
            },
            serviceType: "AI Compliance Management",
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
            <span className="text-gray-900 font-medium">AI Compliance & Risk Management</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full mb-3">
              AI Compliance & Risk Management
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Navigate AI Regulations with Expert Compliance & Governance Talent
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find specialized AI compliance professionals, risk managers, and governance experts who understand
              evolving AI regulations, ethical frameworks, and industry standards to ensure responsible AI deployment
              while maintaining competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-compliance&utm_medium=hero&utm_campaign=consultation">
                  Find Compliance Experts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/talent#compliance">View Compliance Roles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Framework Visual */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">AI Governance Framework</h2>
            <div className="relative">
              <Image
                src="/ai-compliance-framework.jpg"
                alt="AI governance framework diagram showing compliance layers including regulatory requirements, risk management, ethical guidelines, and operational controls for responsible AI deployment"
                width={800}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Comprehensive AI governance framework designed for regulatory compliance and risk management
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key AI Compliance Frameworks</h2>
            <p className="text-gray-600">
              Our compliance specialists have deep expertise in major AI governance frameworks and regulatory standards
              across different jurisdictions and industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework) => (
              <Card key={framework.name} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-gray-900 mb-2">{framework.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-3">{framework.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">{framework.scope}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Risk Management Categories</h2>
            <p className="text-gray-600">
              Comprehensive risk assessment and mitigation strategies across all critical areas of AI deployment and
              operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskCategories.map((category) => (
              <Card key={category.title} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg font-medium text-gray-900">{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-gray-900 mb-2">Mitigation Strategies:</h4>
                  <ul className="space-y-1">
                    {category.mitigation.map((strategy) => (
                      <li key={strategy} className="flex items-start text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Register Example */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Risk Register Example</h2>
              <p className="text-gray-600">
                Sample risk register showing how our compliance specialists identify, assess, and manage AI-related
                risks in enterprise environments.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Risk</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Likelihood</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mitigation</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Owner</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {riskRegisterExample.map((risk, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-gray-900">{risk.risk}</td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            risk.likelihood === "High"
                              ? "bg-red-100 text-red-800"
                              : risk.likelihood === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {risk.likelihood}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            risk.impact === "High"
                              ? "bg-red-100 text-red-800"
                              : risk.impact === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {risk.impact}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{risk.mitigation}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{risk.owner}</td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            risk.status === "Mitigated"
                              ? "bg-green-100 text-green-800"
                              : risk.status === "Controlled"
                                ? "bg-blue-100 text-blue-800"
                                : risk.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {risk.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DIR-ITSAC Link */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Government & Public Sector AI Compliance</h2>
            <p className="text-gray-600 mb-8">
              Our compliance specialists understand the unique requirements for government AI implementations, including
              security clearances, procurement regulations, and public sector accountability standards.
            </p>
            <Button variant="outline" className="bg-transparent" asChild>
              <Link href="/dir-itsac">Learn About DIR-ITSAC Contract</Link>
            </Button>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ensure Compliant AI Deployment</h2>
            <p className="text-gray-600 mb-6">
              Connect with our AI compliance specialists to navigate regulatory requirements and build governance
              frameworks that enable responsible AI innovation.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09&utm_source=ai-compliance&utm_medium=cta&utm_campaign=consultation">
                Schedule Compliance Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
