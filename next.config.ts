import type { NextConfig } from "next"

const nextConfig: NextConfig = {}

module.exports = {
    images: {
      remotePatterns: [new URL('https://lh3.googleusercontent.com/**')],
    },
  }

export default nextConfig
