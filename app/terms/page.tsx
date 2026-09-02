import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Connect Tech+Talent terms of service and user agreement.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
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
            <span className="text-gray-900 font-medium">Terms of Service</span>
          </nav>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> January 1, 2025
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Connect Tech+Talent's services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-6">
                Connect Tech+Talent provides AI talent acquisition and staffing services to enterprises and career
                opportunities to qualified professionals.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">Users agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in any fraudulent or harmful activities</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content, trademarks, and intellectual property on this website are owned by Connect Tech+Talent or
                its licensors and are protected by applicable laws.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Connect Tech+Talent shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our services.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice,
                for any reason whatsoever.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms of Service, please contact us at:
                <br />
                Email:{" "}
                <a href="mailto:legal@connecttechtalent.com" className="text-primary hover:underline">
                  legal@connecttechtalent.com
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
