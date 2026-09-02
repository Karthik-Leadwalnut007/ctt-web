import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Handshake } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TeamSectionClient from "@/components/team-section-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Connect Tech+Talent – 29+ Years of AI Staffing Excellence",
  description:
    "Discover Connect Tech+Talent’s 29+ year journey of bridging technology and talent. Learn about our leadership, mission, and partnerships that empower enterprises to thrive in the age of AI.",
  keywords: [
    "Connect Tech+Talent",
    "About Connect Tech+Talent",
    "AI staffing agency",
    "technology recruitment",
    "enterprise AI transformation",
    "AI talent acquisition",
    "Texas DIR contract",
    "AI hiring experts",
    "tech staffing company",
    "AI workforce solutions",
  ],
  openGraph: {
    title: "About Connect Tech+Talent – Your AI Talent Accelerator",
    description:
      "Learn about Connect Tech+Talent’s mission to connect enterprises with elite AI professionals. Explore our leadership, values, and 29+ years of innovation in tech staffing.",
    url: "https://cttv2.manymangoes.com.au/about",
    siteName: "Connect Tech+Talent",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/corporate-partnerships.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent Leadership and Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Connect Tech+Talent",
    description:
      "Empowering businesses through AI talent and technology partnerships for over 29 years. Meet our team and explore our story.",
    images: ["https://cttv2.manymangoes.com.au/corporate-partnerships.png"],
  },
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/about",
  },
}


const teamMembers = [
  {
    name: "Kannan Kaliyur",
    title: "CEO",
    image: "/kannan-kaliyur.png",
    linkedinUrl: "https://www.linkedin.com/in/kannankaliyur/",
    bioLink: "#",
    bio: `
### Chief Executive Officer

**Education**
- M.S. in Electrical Engineering  
- MBA, University of Texas at Austin  

**Experience**
- 34+ years in technology and leadership  

Kannan Kaliyur is the **Chief Executive Officer of Connect Tech+Talent** and a hands-on leader who has successfully guided the company’s growth since 1996.

With a strong foundation in both **engineering and business**, Kannan combines technical depth with strategic insight to address the complex technical and business needs of customers. This balanced approach enables Connect Tech+Talent to consistently deliver **maximum value** to enterprise clients.
    `,
  },
  {
    name: "Rosimildo da Silva",
    title: "CTO",
    image: "/rosimildo-da-silva.png",
    linkedinUrl: "https://www.linkedin.com/in/rosimildo-da-silva-158b899/",
    bioLink: "#",
    bio: `
### Chief Technology Officer

**Education**
- M.S. in Computer Science  

**Experience**
- 37+ years in software engineering and architecture  

Rosimildo da Silva is the **Chief Technology Officer of Connect Tech+Talent** and a former professor in Brazil with deep expertise in solving highly complex technical challenges.

He is widely recognized for designing and implementing solutions across **.NET, web services, network communication protocols, firmware, and embedded systems**. As a chief software architect on multiple global initiatives, Rosimildo has delivered **creative, low-cost solutions** for software-intensive problems for Fortune 500 customers worldwide.
    `,
  },
  {
    name: "Vikram Bhavsar",
    title: "VP of Engineering",
    image: "/vikram-bhavsar.png",
    linkedinUrl: "https://www.linkedin.com/in/vikram-bhavsar-1b41038/",
    bioLink: "#",
    bio: `
### Vice President of Product Development

**Education**
- B.S. in Electrical Engineering, University of Texas at Austin  

**Experience**
- 30+ years in engineering and product development  

Vikram Bhavsar brings **vision, tenacity, and analytical leadership** to Connect Tech+Talent as VP of Product Development.

With a strong engineering foundation and a “never-quit” mindset, Vikram has led teams through some of the most complex technical challenges. His background in **network communication, embedded systems, and object-oriented applications** enables him to provide both the leadership and hands-on technical support required to drive successful customer outcomes.
    `,
  },
]


const values = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "We align talent with your core business objectives to ensure measurable impact and long-term value.",
  },
  {
    icon: Users,
    title: "Unrivaled Expertise",
    description:
      "Our deep understanding of the AI landscape ensures you get access to the most qualified professionals.",
  },
  {
    icon: Handshake,
    title: "Enduring Partnerships",
    description: "We build lasting relationships based on trust, transparency, and a commitment to your success.",
  },
]

const timelineData = [
  {
    year: "1996",
    title: "It All Begins",
    description:
      "Since we were founded by two software engineers in the Telecom space, we have decades of experience with the evolution of technology in business.",
  },
  {
    year: "1998",
    title: "Our First Pivot",
    description:
      "Our transition to embedded software and application systems projects means we understand how important and urgent these initiatives are.",
  },
  {
    year: "1999",
    title: "First Staffing Services",
    description:
      "When our clients recognized the expertise we could bring, some of our employees ended up continuing their work together, and we became experts at finding great talent.",
  },
  {
    year: "2004",
    title: "We’ve Got Talent",
    description:
      "Matching specialized expertise with the needs of our clients became a key tenet of our business. This is our core competency.",
  },
  {
    year: "2008",
    title: "State Approved",
    description:
      "Our work with state agencies through the Texas Department of Information Resources (DIR) contract gave us great insight into how different types of organizations work and their varying talent needs.",
  },
  {
    year: "2025",
    title: "Connect Tech+Talent Is Thriving",
    description:
      "In the past 29+ years, our database of candidates has continued to grow, helping us provide our clients with more than 250K+ highly qualified candidates in 30+ professions and 6 major industries.",
  },
]

const stats = [
  { value: "2x", label: "Improvement in Hiring" },
  { value: "150+", label: "Clients Served" },
  { value: "7", label: "Countries" },
  { value: "1200+", label: "Candidates Placed" },
  { value: "29+", label: "Years Expertise" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Your AI Talent Accelerator</h1>
            <p className="text-lg text-gray-600">
              For over 29 years, Connect Tech+Talent has been at the forefront of technology staffing. Today, we are
              dedicated to empowering enterprises by connecting them with the specialized AI talent needed to drive
              innovation, transformation, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (client-side with bio sheet) */}
      <TeamSectionClient teamMembers={teamMembers} />


      {/* Our Story Timeline Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">A 29+ year journey at the intersection of technology and talent.</p>
          </div>

          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-200" aria-hidden="true"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={item.year} className="relative">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div
                      className={`flex items-center ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"}`}
                    >
                      <div className="p-6 bg-white rounded-lg border border-gray-200 w-full shadow-sm">
                        <p className="text-lg font-bold text-gray-900 mb-2">{item.year}</p>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* The circle on the timeline */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-50 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate and State Partnerships Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Corporate and State Partnerships</h2>
            <h3 className="text-xl font-medium text-gray-700 mt-1 mb-8">Achieving Strength Through Collaboration</h3>
            <div className="mb-8">
              <Image
                src="/corporate-partnerships.png"
                alt="A collage of partner logos including AMD, State of Texas, Dell, AT&T, and more."
                width={1000}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              In addition to our long-standing corporate partnerships, we’ve had an active contract with the Texas
              Department of Information Resources since 2008, allowing us to work with government entities to deliver
              modern technology throughout Texas.
            </p>
            <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
              <Link href="/dir-itsac" scroll={true}>
                Our Contract
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              Our values are the foundation of our partnerships and the driving force behind our success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border">
                  <value.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us on the Forefront of AI</h2>
            <p className="text-gray-600 mb-6">
              Whether you're an enterprise looking to build your AI team or a professional seeking your next challenge,
              we're here to connect you with the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
                <Link
                  href="https://evoportalus.tracker-rms.com/Opportunity/Lite/?db=ConnectTechTalent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Careers
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
