"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import ReactMarkdown from "react-markdown"
import rehypeSanitize from "rehype-sanitize"
import { X, Linkedin } from "lucide-react"

type TeamMember = {
  name: string
  title: string
  image?: string
  bio?: string
  bioLink?: string
  linkedinUrl?: string
}

export default function TeamSectionClient({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<TeamMember | null>(null)

  function openSheet(member: TeamMember) {
    setSelected(member)
    setOpen(true)
  }

  function closeSheet() {
    setOpen(false)
    setTimeout(() => setSelected(null), 250)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Team Behind the Tech and Talent</h2>
          <p className="text-gray-600">Our leadership team combines decades of experience to guide our mission.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-gray-200 text-center">
              <CardContent className="p-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                <div className="flex justify-center items-center gap-3">
                  <Button
                    onClick={() => openSheet(member)}
                    className="text-sm p-0 h-auto hover:underline"
                    variant="link"
                  >
                    Read Bio
                  </Button>
                  {member.linkedinUrl && (
                    <>
                      <span className="text-gray-300">|</span>
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200"
                        style={{
                          color: '#0A66C2',
                          backgroundColor: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0A66C2'
                          e.currentTarget.style.color = '#FFFFFF'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = '#0A66C2'
                        }}
                        aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bio Sheet - hideCloseButton removes default X */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full max-w-md p-0 flex flex-col [&>button]:hidden">
          {/* Fixed Header with Custom Glowing Close Button */}
          <div className="flex-shrink-0 p-6 pb-4 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{selected?.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{selected?.title}</p>
              </div>
              <button
                onClick={closeSheet}
                className="ml-4 rounded-full p-2 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)'
                }}
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col items-center">
              {/* Smaller Profile Picture with same styling as cards */}
              <div className="mb-6">
                {selected?.image ? (
                  <Image 
                    src={selected.image} 
                    alt={selected.name} 
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-2xl">
                      {selected?.name?.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Bio Content */}
              <div className="w-full prose prose-sm max-w-none text-gray-700">
                {selected?.bio ? (
                  <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                    {selected.bio}
                  </ReactMarkdown>
                ) : (
                  <p className="text-center text-gray-500">Bio not available.</p>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}