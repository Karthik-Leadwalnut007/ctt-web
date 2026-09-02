"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function EvolvingHRTechClientPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <>
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href={backToMediaUrl} className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Media
            </Link>
          </Button>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary mb-2">Article</p>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Evolving HR Technologies & Their Impact On Hiring
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>July 29, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
              <Image
                src="/media/evolving-hr-technologies.jpeg"
                alt="Evolving HR Technologies & Their Impact On Hiring"
                width={1200}
                height={628}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className=" text-gray-600">
              <p className="mb-6 font-light">
                In the dynamic world of recruitment, the tools and strategies that drive the hiring process are
                constantly evolving. As businesses strive to find the best talent, they're turning to cutting-edge HR
                technologies to streamline and enhance their efforts. From AI-driven tools that sift through resumes in
                seconds to mobile apps that cater to the on-the-go job seeker, the future of hiring is here. Whether
                you're a hiring agency, a recruiting firm, understanding these technologies is crucial to staying
                competitive in today's market.
              </p>

              <ol className="space-y-6 mb-8 font-light">
                <li>
                  <strong className="text-gray-900">Applicant Tracking Systems (ATS):</strong> ATS software is like a
                  digital hiring agency that operates round the clock. It's designed to efficiently organize, track, and
                  filter applicants. For instance, a multinational company receiving thousands of applications for a
                  single job post can use ATS to filter out candidates based on specific keywords, ensuring only the
                  most relevant resumes are reviewed. This not only saves time but also ensures that no potential
                  candidate is overlooked due to human error.
                </li>
                <li>
                  <strong className="text-gray-900">AI-Powered Resume Screening:</strong> AI algorithms have become the
                  backbone of many recruiting firms. Consider a tech company looking for a Python developer. Instead of
                  manually going through hundreds of resumes, AI can quickly scan and shortlist candidates who have
                  specific experience in Python, Django, or Flask. This ensures a more objective selection and reduces
                  the chances of overlooking a potential fit.
                </li>
                <li>
                  <strong className="text-gray-900">Candidate Sourcing Tools:</strong> In the realm of IT staff
                  augmentation, finding the right talent is paramount. AI-driven sourcing tools can search platforms
                  like LinkedIn, GitHub, and even niche job boards to identify potential candidates. For example, a
                  company looking for a rare skill set might discover a professional who hasn't applied for their job
                  but has the perfect credentials on a platform like Behance or Dribbble.
                </li>
                <li>
                  <strong className="text-gray-900">Video Interviewing Platforms:</strong> For a contract staffing
                  agency hiring globally, flying candidates in for interviews isn't always feasible. Video interviewing
                  tools, like Zoom or Microsoft Teams, allow for real-time assessments. A company in New York can
                  interview a candidate from Tokyo, assessing not just their skills but also their body language,
                  without either party leaving their location.
                </li>
                <li>
                  <strong className="text-gray-900">Assessment and Skills Testing Software:</strong> When hiring for
                  roles that require Top IT skills, it's essential to test candidates practically. Platforms like
                  Codility or HackerRank allow candidates to solve real-world problems, showing their coding prowess in
                  real-time. For instance, a candidate claiming expertise in Java can be given a timed challenge to test
                  their proficiency.
                </li>
                <li>
                  <strong className="text-gray-900">Predictive Analytics:</strong> Using historical data, predictive
                  analytics can forecast a candidate's success in a role. For example, a contract staffing service might
                  find that candidates who have worked in startups previously tend to perform better in fast-paced
                  environments. Using this insight, they can prioritize such candidates for roles in dynamic companies.
                </li>
                <li>
                  <strong className="text-gray-900">Onboarding Platforms:</strong> Once a candidate is hired, their
                  journey has just begun. Onboarding platforms ensure a smooth transition. For instance, a new hire
                  joining a remote team can access all necessary training materials, HR documents, and team
                  introductions through platforms like BambooHR or WorkBright, ensuring they feel integrated from day
                  one.
                </li>
                <li>
                  <strong className="text-gray-900">HR Chatbots and Virtual Assistants:</strong> Imagine a new hire
                  having a question about their health benefits at 2 AM. Instead of waiting for office hours, HR
                  chatbots can provide instant answers, enhancing the overall employee experience. For instance, a
                  chatbot can guide an employee on how to claim medical expenses, ensuring they get timely assistance.
                </li>
                <li>
                  <strong className="text-gray-900">Employee Referral Platforms:</strong> Referrals often lead to
                  successful hires. Platforms designed for contract tech staffing can automate the referral process. For
                  example, an employee can easily refer a former colleague through the platform, and if the referral is
                  successful, the platform handles the referral bonus, ensuring a seamless process.
                </li>
                <li>
                  <strong className="text-gray-900">Diversity and Inclusion Tools:</strong> Organizations are
                  increasingly recognizing the value of a diverse workforce. Tools like Blendscore or Atipica help
                  companies analyze their hiring practices, ensuring they aren't unconsciously biased. For instance, a
                  company can get insights into the gender or ethnic distribution of their applicants and take
                  corrective actions if needed.
                </li>
                <li>
                  <strong className="text-gray-900">Compliance and Data Privacy Solutions:</strong> With regulations
                  like GDPR in place, handling candidate data responsibly is crucial. HR tech ensures that all data is
                  stored and processed in compliance with global regulations. For instance, if a candidate from the EU
                  applies for a job in the US, the company can use these tools to ensure their data is handled as per EU
                  standards.
                </li>
                <li>
                  <strong className="text-gray-900">Mobile Recruitment Apps:</strong> The modern candidate is always on
                  the move. Mobile recruitment apps ensure they don't miss out on opportunities. A candidate traveling
                  can get a job alert, apply, and even give a preliminary test, all from their smartphone, ensuring they
                  can seize opportunities anytime, anywhere.
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Conclusion</h3>
              <p className="mb-6 font-light">
                The landscape of hiring is undergoing a transformation, driven by innovative HR technologies. These
                tools not only optimize the recruitment process but also ensure that organizations attract the right
                talent that aligns with their goals. As the lines between technology and human resources blur, it's
                evident that the future of hiring is digital, efficient, and inclusive. For businesses and staffing
                services alike, embracing these technologies is the key to building a resilient and future-ready
                workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-slate-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">How can Connect Tech+Talent Help?</h3>
              <p className="text-gray-300 mb-6 font-light">
                Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
                takes the overbearing burden of finding human resources with the right skill set and lets companies
                focus on their core business. We specialise in IT jobs, helping businesses build and ramp up their
                technical staffing. We help build entire teams with the right set of skills in the technology that best
                suits their business. We at Connect Tech+Talent will also help you as a candidate to acquire most sought
                after technical skills and forward your candidature to leading enterprises with global reach.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09">
                  Book a Meeting with a Hiring Consultant <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
