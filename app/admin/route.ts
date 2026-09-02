/**
 * app/admin/route.ts
 *
 * Serves the Decap CMS admin panel at /admin and /admin/
 * as a Next.js Route Handler. This is more reliable than
 * next.config.mjs rewrites/redirects for serving static HTML.
 *
 * The static files public/admin/config.yml and public/admin/index.html
 * are served by Next.js as-is at /admin/config.yml and /admin/index.html.
 * This handler serves the same index.html content at /admin/ so the
 * browser URL stays at /admin/ (required for Decap config.yml resolution).
 */
import { readFileSync } from "fs"
import { join } from "path"
import { NextResponse } from "next/server"

function serveAdminHtml() {
  const html = readFileSync(
    join(process.cwd(), "public/admin/index.html"),
    "utf-8"
  )
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

export function GET() {
  return serveAdminHtml()
}
