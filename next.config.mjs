/** @type {import('next').NextConfig} */
// Trigger Vercel build test
const nextConfig = {
  turbopack: {
    root: '.',
  },
  experimental: {
  },
  transpilePackages: ['@splinetool/react-spline'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
