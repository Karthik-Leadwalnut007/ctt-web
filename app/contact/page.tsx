"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Home, ChevronRight } from "lucide-react"
import Link from "next/link"
import { AIAssessmentModal } from "@/components/ai-assessment-modal"
import { useState } from "react"

export default function ContactPage() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  const openAssessmentModal = () => {
    setIsAssessmentModalOpen(true)
  }

  const closeAssessmentModal = () => {
    setIsAssessmentModalOpen(false)
  }

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
            <span className="text-gray-900 font-medium">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Connect with Our AI Talent Specialists</h1>
            <p className="text-lg text-gray-600">
              Schedule a consultation with our enterprise AI talent experts to discuss your strategic hiring needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-gray-200" id="consultation-form">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold text-gray-900">Request a Consultation</h2>
                  <p className="text-sm text-gray-600">
                    Complete the form below and one of our AI talent specialists will contact you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </Label>
                        <Input id="firstName" placeholder="John" className="text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </Label>
                        <Input id="lastName" placeholder="Doe" className="text-sm" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Business Email
                      </Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="text-sm" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company
                        </Label>
                        <Input id="company" placeholder="Your Company" className="text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </Label>
                        <Input id="phone" placeholder="+1 (555) 000-0000" className="text-sm" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium">
                        Your Role
                      </Label>
                      <Select>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cio">CIO</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="vp-engineering">VP Engineering</SelectItem>
                          <SelectItem value="hr-director">HR Director</SelectItem>
                          <SelectItem value="talent-acquisition">Talent Acquisition</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aiNeeds" className="text-sm font-medium">
                        AI Talent Needs
                      </Label>
                      <Select>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="What AI talent do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ml-engineers">ML Engineers</SelectItem>
                          <SelectItem value="ai-product-managers">AI Product Managers</SelectItem>
                          <SelectItem value="data-scientists">Data Scientists</SelectItem>
                          <SelectItem value="mlops-specialists">MLOps Specialists</SelectItem>
                          <SelectItem value="ai-governance">AI Governance Experts</SelectItem>
                          <SelectItem value="multiple">Multiple Roles</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-sm font-medium">
                        Hiring Timeline
                      </Label>
                      <Select>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="When do you need to hire?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                          <SelectItem value="month">Within a month</SelectItem>
                          <SelectItem value="quarter">This quarter</SelectItem>
                          <SelectItem value="planning">Planning phase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide any additional details about your AI talent requirements or specific challenges..."
                        rows={4}
                        className="text-sm resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Request Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">
                          <a href="mailto:admin@connecttechtalent.com" className="hover:text-primary">
                            admin@connecttechtalent.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <p className="text-sm text-gray-600">
                          <a href="tel:+15123381111,100" className="hover:text-primary">
                            (O) 512.338.1111 x100
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Headquarters</p>
                        <p className="text-sm text-gray-600">Austin, Texas</p>
                        <p className="text-sm text-gray-600">United States</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Business Hours</p>
                        <p className="text-sm text-gray-600">Monday-Friday: 8AM-6PM CST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-gray-50">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">AI Talent Readiness Assessment</h4>
                  <p className="text-sm text-gray-600">
                    Not sure what AI talent you need? Request a complimentary assessment of your AI talent requirements
                    and transformation roadmap.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                    onClick={openAssessmentModal}
                  >
                    Request Assessment
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-gray-50">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">For AI Professionals</h4>
                  <p className="text-sm text-gray-600">
                    Are you an AI specialist looking for your next opportunity? Join our network of 250K+ technology
                    professionals.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                    asChild
                  >
                    <Link href="/candidates">Join Our Network</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Global AI Talent Network</h2>
            <p className="text-gray-600">
              With offices and talent networks across major technology hubs, we connect enterprises with specialized AI
              professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">North America</h3>
              <p className="text-sm text-gray-600">Austin • San Francisco • New York • Toronto</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Europe</h3>
              <p className="text-sm text-gray-600">London • Berlin • Amsterdam • Paris</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Asia Pacific</h3>
              <p className="text-sm text-gray-600">Singapore • Sydney • Tokyo • Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assessment Modal */}
      <AIAssessmentModal isOpen={isAssessmentModalOpen} onClose={closeAssessmentModal} />
    </>
  )
}
