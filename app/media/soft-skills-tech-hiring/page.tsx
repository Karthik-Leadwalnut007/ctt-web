import type { Metadata } from "next"
import SoftSkillsTechHiringClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Beyond Code: The Rising Importance of Soft Skills in Tech Hiring",
  description:
    "The digital age is more than just bits and bytes; it's a melting pot of human interaction, team dynamics, and leadership, where soft skills often take center stage in tech hiring.",
}

export default function SoftSkillsTechHiringPage() {
  return <SoftSkillsTechHiringClientPage />
}
