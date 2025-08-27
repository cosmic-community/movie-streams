/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.cosmicjs.com',
      'imgix.cosmicjs.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com', 
        pathname: '/**',
      },
    ],
  },
  experimental: {
    typedRoutes: false,
  },
}

module.exports = nextConfig