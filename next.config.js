/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gamehive',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
