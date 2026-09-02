import type { Metadata } from "next"
import HireWebDevelopersAustinPageClient from "./client-page"

export const metadata: Metadata = {
  title: "Hire Top Web Developers in Austin: A Recruiter's Guide",
  description:
    "Navigate Austin's competitive tech scene and learn how to hire top web developers. Complete guide covering roles, salaries, and recruitment strategies.",
}

export default function HireWebDevelopersAustinPage() {
  return <HireWebDevelopersAustinPageClient />
}
