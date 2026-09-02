import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Connect Tech and Talent - Your AI Talent Accelerator | Enterprise AI Staffing Solutions",
    template: "%s | Connect Tech and Talent",
  },
  description:
    "Strategic AI talent acquisition for enterprise transformation. Connect with specialized AI professionals including ML engineers, data scientists, and AI strategists who deliver measurable business outcomes. 29 years of expertise.",
  keywords: [
    "AI talent acquisition",
    "machine learning engineers",
    "AI staffing services",
    "enterprise AI hiring",
    "data scientists",
    "AI strategy consultants",
    "MLOps specialists",
    "AI governance experts",
    "CIO AI talent solutions",
    "artificial intelligence recruitment",
    "AI talent assessment",
    "enterprise AI transformation",
  ],
  authors: [{ name: "Connect Tech and Talent", url: "https://connecttechtalent.com" }],
  creator: "Connect Tech and Talent",
  publisher: "Connect Tech and Talent",
  metadataBase: new URL("https://connecttechtalent.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connecttechtalent.com",
    title: "Connect Tech and Talent - Your AI Talent Accelerator | Enterprise AI Staffing",
    description:
      "Strategic AI talent acquisition for enterprise transformation. Access an elite network of vetted AI professionals including ML engineers, data scientists, and AI strategists who deliver measurable results.",
    siteName: "Connect Tech and Talent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech and Talent - AI Talent Accelerator for Enterprise Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Tech and Talent - Your AI Talent Accelerator",
    description:
      "Strategic AI talent acquisition for enterprise transformation. Access specialized AI professionals who deliver results.",
    images: ["/og-image.png"],
    creator: "@connecttechtalent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1b99a7" }],
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#1b99a7",
    "theme-color": "#ffffff",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`h-full ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="_KlDYn0gBvg8DgIh0rL1d7HjL12qNYhq-ToJMIxAGao" />  

      </head>
      <body className={`${montserrat.className} flex flex-col min-h-screen bg-white text-gray-800`}>
        <ScrollToTop />
        <Header />
        <main className="flex-grow pt-0">{children}</main>
        <Footer />
         <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Connect Tech+Talent",
            "url": "https://cttv2.manymangoes.com.au/",
            "logo": "https://cttv2.manymangoes.com.au/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/connecttechtalent",
              "https://twitter.com/connecttechtalent"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-512-338-1111",
              "contactType": "Customer Support",
              "areaServed": "US",
              "availableLanguage": "English"
            }
          })}
        </Script>
      </body>
    </html>
  )
}


