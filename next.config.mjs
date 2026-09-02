/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Decap's local proxy network interceptor strips the /admin/ prefix when
  // requesting config.yml, so /config.yml → /admin/config.yml.
  // The /admin route itself is handled by app/admin/route.ts.
  async rewrites() {
    return [
      { source: '/config.yml', destination: '/admin/config.yml' },
    ]
  },


}

export default nextConfig

