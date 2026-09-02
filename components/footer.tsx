import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/">
              <Image
                src="/images/design-mode/ctt-logo-horizontal.png"
                alt="Connect Tech and Talent Logo"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Your AI Talent Accelerator. Strategic talent acquisition for enterprise AI transformation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Services</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link href="/services/ai-strategy" className="block hover:text-gray-900 transition-colors">
                AI Strategy and Advisory
              </Link>
              <Link href="/services/ai-infrastructure" className="block hover:text-gray-900 transition-colors">
                AI Infrastructure
              </Link>
              <Link href="/services/ai-compliance" className="block hover:text-gray-900 transition-colors">
                AI Risk and Compliance
              </Link>
              <Link href="/services" className="block hover:text-gray-900 transition-colors font-medium mt-1">
                All Services
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Resources</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link href="/insights" className="block hover:text-gray-900 transition-colors">
                AI Insights for CIOs
              </Link>
              <Link href="/talent" className="block hover:text-gray-900 transition-colors">
                AI Talent Matrix
              </Link>
              <Link href="/contact" className="block hover:text-gray-900 transition-colors">
                AI Readiness Assessment
              </Link>
              <Link href="/industries" className="block hover:text-gray-900 transition-colors">
                Industry Solutions
              </Link>
              <Link href="/candidates" className="block hover:text-gray-900 transition-colors">
                Join Our Network
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <Link href="/about" className="block hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="/process" className="block hover:text-gray-900 transition-colors">
                Our Process
              </Link>
              <Link href="https://evoportalus.tracker-rms.com/Opportunity/Lite/?db=ConnectTechTalent" target="_blank" rel="noopener noreferrer" className="block hover:text-gray-900 transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="block hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy" className="block hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Connect Tech and Talent. All rights reserved. Formerly ConnectTel.</p>
        </div>
      </div>
    </footer>
  )
}
