/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep production optimization, but avoid heavy local image caching in dev.
    unoptimized: process.env.NODE_ENV !== 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
