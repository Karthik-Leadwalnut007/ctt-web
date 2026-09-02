import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Users, TrendingUp, Award, Upload, Home, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Our AI Talent Network - Career Opportunities",
  description:
    "Join 250,000+ AI professionals in our exclusive talent network. Access top enterprise opportunities, career guidance, and connect with leading companies seeking AI expertise.",
  alternates: {
    canonical: "/candidates",
  },
}

const benefits = [
  {
    icon: Users,
    title: "Exclusive Opportunities",
    description: "Access to unadvertised positions at Fortune 500 companies and innovative startups.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Personalized career guidance and skill development recommendations from industry experts.",
  },
  {
    icon: Award,
    title: "Premium Placement",
    description: "Higher placement rates and better compensation packages through our established relationships.",
  },
]

const faqs = [
  {
    question: "How does the talent network work?",
    answer:
      "Once you join our network, we maintain your profile in our database and match you with relevant opportunities based on your skills, experience, and career goals. We proactively reach out when positions align with your background, and you can also apply to specific openings we share.",
  },
  {
    question: "Is there any cost to join the network?",
    answer:
      "No, joining our talent network is completely free for candidates. We're compensated by the hiring companies when successful placements are made. Our goal is to help you advance your career at no cost to you.",
  },
  {
    question: "What types of AI roles do you typically place?",
    answer:
      "We specialize in a wide range of AI roles including Machine Learning Engineers, Data Scientists, AI Product Managers, MLOps Engineers, AI Strategists, AI Compliance Specialists, and many other specialized positions across the AI spectrum.",
  },
  {
    question: "How do you ensure my information remains confidential?",
    answer:
      "We maintain strict confidentiality protocols. Your information is only shared with potential employers with your explicit consent, and we always discuss opportunities with you before presenting your profile to any company.",
  },
  {
    question: "Do you work with both permanent and contract positions?",
    answer:
      "Yes, we work with various engagement models including permanent full-time positions, contract-to-hire arrangements, and project-based consulting opportunities. We'll match you with the type of engagement that best fits your career goals.",
  },
]

export default function CandidatesPage() {
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
            <span className="text-gray-900 font-medium">Join Our Network</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Join Our Elite AI Talent Network</h1>
            <p className="text-lg text-gray-600">
              Connect with top enterprise opportunities and advance your AI career. Join 250,000+ professionals in our
              exclusive network and get access to positions that aren't advertised anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Why Join Our Network?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-gray-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                  Join Our Talent Network
                </CardTitle>
                <p className="text-sm text-gray-600 text-center">
                  Complete your profile to get matched with exclusive AI opportunities
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input id="phone" placeholder="+1 (555) 000-0000" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-sm font-medium">
                      Current Location *
                    </Label>
                    <Input id="location" placeholder="Austin, TX" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="currentRole" className="text-sm font-medium">
                      Current Role/Title *
                    </Label>
                    <Input id="currentRole" placeholder="Senior Machine Learning Engineer" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-sm font-medium">
                      Years of AI/ML Experience *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="skills" className="text-sm font-medium">
                      Key Skills & Technologies *
                    </Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g., Python, TensorFlow, PyTorch, AWS, MLOps, Computer Vision..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interests" className="text-sm font-medium">
                      Role Interests
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="What type of roles interest you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ml-engineer">Machine Learning Engineer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="ai-product-manager">AI Product Manager</SelectItem>
                        <SelectItem value="mlops-engineer">MLOps Engineer</SelectItem>
                        <SelectItem value="ai-researcher">AI Researcher</SelectItem>
                        <SelectItem value="ai-strategist">AI Strategist</SelectItem>
                        <SelectItem value="multiple">Multiple Roles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="resume" className="text-sm font-medium">
                      Resume/CV
                    </Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="resume-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                          >
                            <span>Upload a file</span>
                            <input id="resume-upload" name="resume-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-sm font-medium">
                      Additional Information
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Tell us about your career goals, preferred work arrangements, or anything else you'd like us to know..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="consent"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                      I consent to Connect Tech+Talent storing my information and contacting me about relevant
                      opportunities. I understand I can opt out at any time.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Join Our Network <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
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

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Network Success Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">250K+</div>
                <div className="text-sm text-gray-600">Professionals in Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-sm text-gray-600">Successful Placements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-gray-600">Candidate Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Advance Your AI Career?</h2>
            <p className="text-gray-400">
              Join our exclusive network and get access to opportunities that can transform your career. Our team of
              experts is here to guide you every step of the way.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
              <Link href="#join-form">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
