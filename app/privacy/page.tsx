import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Connect Tech+Talent privacy policy and data protection practices.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> January 1, 2025
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, submit a resume,
                fill out a form, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Personal information (name, email address, phone number)</li>
                <li>Professional information (resume, work history, skills)</li>
                <li>Communication preferences</li>
                <li>Information about your job search preferences</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Match you with relevant job opportunities</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with potential employers only
                with your explicit consent.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Opt out of communications</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email:{" "}
                <a href="mailto:privacy@connecttechtalent.com" className="text-primary hover:underline">
                  privacy@connecttechtalent.com
                </a>
                <br />
                Phone:{" "}
                <a href="tel:+15123381111" className="text-primary hover:underline">
                  +1 (512) 338-1111
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
