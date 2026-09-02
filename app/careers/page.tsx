import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {Metadata} from "next"

export const metadata: Metadata = {
  title: "Careers at Connect Tech+Talent | Join Our AI Recruitment Team",
  description:
    "Build your career with Connect Tech+Talent, a leader in AI recruitment and workforce innovation. Explore open roles in recruiting, sales, and operations to shape the future of AI talent acquisition.",
  keywords: [
    "Connect Tech+Talent careers",
    "AI recruitment jobs",
    "AI talent acquisition roles",
    "tech recruiting careers",
    "AI hiring jobs",
    "enterprise recruitment positions",
    "AI workforce solutions jobs",
    "Connect Tech+Talent open positions",
    "AI recruiter jobs",
    "remote AI jobs",
  ],
  openGraph: {
    title: "Careers at Connect Tech+Talent – Join Our Global AI Recruitment Team",
    description:
      "Join a team that’s redefining how enterprises build AI-driven workforces. Explore current openings and career opportunities at Connect Tech+Talent.",
    url: "https://cttv2.manymangoes.com.au/careers",
    siteName: "Connect Tech+Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/images/design-mode/connect-with-your-team-img-2-1.png",
        width: 1200,
        height: 630,
        alt: "Careers at Connect Tech+Talent AI Recruitment Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Connect Tech+Talent | AI Recruitment Opportunities",
    description:
      "Explore career opportunities with Connect Tech+Talent. Join our mission to connect exceptional AI talent with the world’s leading enterprises.",
    images: ["https://cttv2.manymangoes.com.au/images/design-mode/connect-with-your-team-img-2-1.png"],
  },
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/careers",
  },
}


const openPositions = [
  {
    title: "AI Talent Specialist",
    location: "Austin, TX (Hybrid)",
    department: "Recruiting",
    description:
      "Become a key player in connecting top-tier AI talent with leading enterprises. You'll manage the full recruitment lifecycle, from sourcing and vetting to placement and relationship management.",
  },
  {
    title: "Technical Recruiter - MLOps & Infrastructure",
    location: "Remote, US",
    department: "Recruiting",
    description:
      "Specialize in sourcing and placing elite engineers in the MLOps and AI infrastructure space. A deep understanding of the technical landscape is essential for this role.",
  },
  {
    title: "Client Partner - Enterprise Accounts",
    location: "New York, NY",
    department: "Sales & Business Development",
    description:
      "Build and nurture relationships with Fortune 500 clients, understanding their AI talent needs and providing strategic solutions. You will be the face of Connect Tech+Talent to our key partners.",
  },
  {
    title: "Recruiting Coordinator",
    location: "Austin, TX",
    department: "Operations",
    description:
      "Support our recruiting team by managing interview schedules, candidate communication, and our applicant tracking system. This is a great entry point into the world of tech recruiting.",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "High-Impact Work",
    description:
      "Play a direct role in the AI revolution by building the teams that power innovation at top companies.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Collaborate with and learn from some of the most experienced professionals in the tech talent industry.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "We invest in our people with continuous training, mentorship, and clear paths for advancement.",
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-gray-900">Join Our Team of AI Talent Experts</h1>
              <p className="text-lg text-gray-600">
                At Connect Tech+Talent, we're more than just recruiters; we're strategic partners in the AI revolution.
                If you're passionate about technology and connecting people with opportunities, we invite you to explore
                a career with us.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                <Link href="#open-positions">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/design-mode/connect-with-your-team-img-2-1.png"
                alt="A diverse team collaborating in a modern office"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Build Your Career Here?</h2>
            <p className="text-gray-600">
              We are committed to creating an environment where our team can thrive both personally and professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600">Find your next opportunity and help us shape the future of AI talent.</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <Card key={position.title} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{position.title}</h3>
                      <p className="text-sm text-gray-500">
                        {position.department} • {position.location}
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4 sm:mt-0 border-gray-300 bg-transparent" asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Don't See the Right Fit?</h2>
            <p className="text-gray-600 mb-6">
              We are always looking for talented and passionate individuals to join our team. If you believe you can
              make an impact, we'd love to hear from you.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
