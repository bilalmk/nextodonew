/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://todoapisnew.vercel.app/api/:path*",
      },
    ]
  },
}

module.exports = nextConfig
