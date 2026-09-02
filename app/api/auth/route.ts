import { redirect } from "next/navigation"

export async function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID
  const scope = "repo,user"
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`
  redirect(authUrl)
}
