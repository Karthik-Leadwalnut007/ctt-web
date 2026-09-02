"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  onOpenAssessment: () => void
}

export function HeroSection({ onOpenAssessment }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(27, 153, 167, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27, 153, 167, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-secondary rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your AI Talent Accelerator</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Build Your{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  AI Future
                </span>
                <br />
                <span className="text-3xl lg:text-5xl">Faster.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Access an elite network of vetted AI professionals. We deliver the specialized talent you need to move
                from strategy to execution with <span className="text-secondary font-semibold">confidence</span> and{" "}
                <span className="text-primary font-semibold">speed</span>.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-white">2x</span>
                </div>
                <p className="text-sm text-gray-400">Faster Hiring</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-white">250K+</span>
                </div>
                <p className="text-sm text-gray-400">AI Professionals</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-white">29+</span>
                </div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-slate-900 font-semibold text-lg px-8 py-6 shadow-2xl shadow-secondary/25 transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent backdrop-blur-sm text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
                onClick={onOpenAssessment}
              >
                AI Talent Assessment
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300 font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm text-gray-300 font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                <span className="text-sm text-gray-300 font-medium">Global Network</span>
              </div>
            </div>
          </div>

          {/* Hero Slider with Enhanced Styling */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"></div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-2xl">
              <HeroSlider />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-slate-800/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">AI Talent Ready</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Enterprise Scale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
