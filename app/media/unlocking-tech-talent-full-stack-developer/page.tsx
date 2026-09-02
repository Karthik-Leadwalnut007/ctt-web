import type { Metadata } from "next"
import FullStackDeveloperHiringClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Unlocking Tech Talent: A Recruiter's Guide to Hiring a Full Stack Developer",
  description:
    "Hiring full stack developers can be a complex puzzle, particularly in the thriving tech hub of Austin. Learn essential skills, interview questions, and strategies for successful recruitment.",
  openGraph: {
    title: "Unlocking Tech Talent: A Recruiter's Guide to Hiring a Full Stack Developer",
    description:
      "Hiring full stack developers can be a complex puzzle, particularly in the thriving tech hub of Austin. Learn essential skills, interview questions, and strategies for successful recruitment.",
    images: ["/media/full-stack-hiring.png"],
  },
}

export default function FullStackDeveloperHiringPage() {
  return <FullStackDeveloperHiringClientPage />
}
