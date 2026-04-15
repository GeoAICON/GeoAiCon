/** @type {import('next').NextConfig} */
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
