"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, CheckCircle } from "lucide-react"
import Link from "next/link"

interface AIAssessmentModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  email: string
  industry: string
  aiMaturity: string
  aiInitiatives: string
  teamSize: string
  rolesNeeded: string
  technicalSkills: string
  governance: string
  blockers: string
}

const initialFormData: FormData = {
  email: "",
  industry: "",
  aiMaturity: "",
  aiInitiatives: "",
  teamSize: "",
  rolesNeeded: "",
  technicalSkills: "",
  governance: "",
  blockers: "",
}

export default function AIAssessmentModal({ isOpen, onClose }: AIAssessmentModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [emailError, setEmailError] = useState("")

  const validateBusinessEmail = (email: string): boolean => {
    const businessEmailPattern =
      /^[^\s@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com)[^\s@]+\.[^\s@]+$/i
    return businessEmailPattern.test(email)
  }

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value })
    if (value && !validateBusinessEmail(value)) {
      setEmailError("Please use a business email address (no Gmail, Yahoo, etc.)")
    } else {
      setEmailError("")
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const canProceedFromSlide = (slideIndex: number): boolean => {
    switch (slideIndex) {
      case 0:
        return formData.email && validateBusinessEmail(formData.email)
      case 1:
        return formData.industry.trim() !== "" && formData.aiMaturity.trim() !== ""
      case 2:
        return formData.aiInitiatives.trim() !== "" && formData.teamSize.trim() !== ""
      case 3:
        return formData.rolesNeeded.trim() !== "" && formData.technicalSkills.trim() !== ""
      case 4:
        return formData.governance.trim() !== "" && formData.blockers.trim() !== ""
      default:
        return true
    }
  }

  const nextSlide = () => {
    if (canProceedFromSlide(currentSlide)) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    // For now, just proceed to thank you slide
    setCurrentSlide(5)
  }

  const resetForm = () => {
    setCurrentSlide(0)
    setFormData(initialFormData)
    setEmailError("")
    onClose()
  }

  const slides = [
    // Slide 0: Email
    {
      title: "Get Your AI Talent Assessment",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Business Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="your.name@company.com"
              className={`mt-1 ${emailError ? "border-red-500" : ""}`}
            />
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
            <p className="text-xs text-gray-500 mt-1">We'll send your preliminary assessment report to this address</p>
          </div>
        </div>
      ),
    },
    // Slide 1: Industry & AI Maturity
    {
      title: "About Your Organization",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
              What industry do you operate in and what's your core business? *
            </Label>
            <Textarea
              id="industry"
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              placeholder="e.g., Financial Services - We provide digital banking solutions..."
              rows={3}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="aiMaturity" className="text-sm font-medium text-gray-700">
              Where are you today on AI maturity and what are your AI goals? *
            </Label>
            <Textarea
              id="aiMaturity"
              value={formData.aiMaturity}
              onChange={(e) => handleInputChange("aiMaturity", e.target.value)}
              placeholder="e.g., Currently in pilot phase, planning to scale ML models for fraud detection..."
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      ),
    },
    // Slide 2: AI Initiatives & Team
    {
      title: "Current AI Landscape",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="aiInitiatives" className="text-sm font-medium text-gray-700">
              Which AI initiatives are live or planned, and what outcomes do they target? *
            </Label>
            <Textarea
              id="aiInitiatives"
              value={formData.aiInitiatives}
              onChange={(e) => handleInputChange("aiInitiatives", e.target.value)}
              placeholder="e.g., Live: Customer service chatbot. Planned: Predictive analytics for inventory..."
              rows={3}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
              How big is your AI team today, and how is it structured? *
            </Label>
            <Textarea
              id="teamSize"
              value={formData.teamSize}
              onChange={(e) => handleInputChange("teamSize", e.target.value)}
              placeholder="e.g., 5 people: 2 data scientists, 1 ML engineer, 1 AI product manager, 1 data engineer..."
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      ),
    },
    // Slide 3: Hiring Needs
    {
      title: "Talent Requirements",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="rolesNeeded" className="text-sm font-medium text-gray-700">
              Which AI roles do you need to hire next, and at what seniority levels? *
            </Label>
            <Textarea
              id="rolesNeeded"
              value={formData.rolesNeeded}
              onChange={(e) => handleInputChange("rolesNeeded", e.target.value)}
              placeholder="e.g., Senior MLOps Engineer, Mid-level Data Scientist, AI Ethics Specialist..."
              rows={3}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="technicalSkills" className="text-sm font-medium text-gray-700">
              What technical skills and domain expertise are must-haves? *
            </Label>
            <Textarea
              id="technicalSkills"
              value={formData.technicalSkills}
              onChange={(e) => handleInputChange("technicalSkills", e.target.value)}
              placeholder="e.g., Python, TensorFlow, AWS SageMaker, financial services domain knowledge..."
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      ),
    },
    // Slide 4: Governance & Challenges
    {
      title: "Governance & Challenges",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="governance" className="text-sm font-medium text-gray-700">
              What governance, compliance, security, and ethical standards must your AI adhere to? *
            </Label>
            <Textarea
              id="governance"
              value={formData.governance}
              onChange={(e) => handleInputChange("governance", e.target.value)}
              placeholder="e.g., SOX compliance, GDPR, internal bias testing requirements..."
              rows={3}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="blockers" className="text-sm font-medium text-gray-700">
              What are the biggest blockers slowing AI progress? *
            </Label>
            <Textarea
              id="blockers"
              value={formData.blockers}
              onChange={(e) => handleInputChange("blockers", e.target.value)}
              placeholder="e.g., Lack of MLOps expertise, data quality issues, regulatory uncertainty..."
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      ),
    },
    // Slide 5: Thank You
    {
      title: "Thank You!",
      content: (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment Complete!</h3>
            <p className="text-gray-600">
              Our team will send you a preliminary report within 24 hours. You can also book a meeting to discuss your
              AI talent strategy in detail.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold" asChild>
              <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09">
                Book a Strategy Meeting
              </Link>
            </Button>
            <Button variant="outline" onClick={resetForm} className="border-gray-300 bg-transparent">
              Close
            </Button>
          </div>
        </div>
      ),
    },
  ]

  const currentSlideData = slides[currentSlide]
  const isThankYouSlide = currentSlide === 5

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold text-gray-900">{currentSlideData.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="py-6">
          {/* Progress Bar */}
          {!isThankYouSlide && (
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Step {currentSlide + 1} of 5</span>
                <span>{Math.round(((currentSlide + 1) / 5) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Slide Content */}
          <div className="min-h-[300px]">{currentSlideData.content}</div>

          {/* Navigation */}
          {!isThankYouSlide && (
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="border-gray-300 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              {currentSlide < 4 ? (
                <Button
                  onClick={nextSlide}
                  disabled={!canProceedFromSlide(currentSlide)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceedFromSlide(currentSlide)}
                  className="bg-secondary hover:bg-secondary/90 text-slate-900 font-semibold"
                >
                  Complete Assessment
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { AIAssessmentModal }
