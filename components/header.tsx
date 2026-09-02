"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/talent", label: "AI Talent" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About Us" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navLinks.find(
        (link) => pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
      )

      if (activeLink && linkRefs.current[activeLink.href] && navRef.current) {
        const linkElement = linkRefs.current[activeLink.href]
        const navElement = navRef.current
        
        if (linkElement) {
          const linkRect = linkElement.getBoundingClientRect()
          const navRect = navElement.getBoundingClientRect()
          
          setIndicatorStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
            opacity: 1,
          })
        }
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
      }
    }

    updateIndicator()
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [pathname])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image
              src="/images/design-mode/ctt-logo-horizontal.png"
              alt="Connect Tech+Talent Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center space-x-8 md:flex relative" ref={navRef}>
            {/* Animated indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
            
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.href] = el
                  }}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 pb-1 ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Button
              variant="outline"
              className="text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              asChild
            >
              <Link href="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-white p-6 z-50">
                <div className="mb-6 flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                    <Image
                      src="/images/design-mode/ctt-logo-horizontal.png"
                      alt="Connect Tech+Talent Logo"
                      width={150}
                      height={33}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleLinkClick}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
                    
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 relative ${
                          isActive
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full" />
                        )}
                        {link.label}
                      </Link>
                    )
                  })}
                  <Button
                    variant="outline"
                    className="w-full text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    asChild
                  >
                    <Link href="/contact" onClick={handleLinkClick}>
                      Contact Us
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 