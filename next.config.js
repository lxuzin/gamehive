/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gamehive',
  assetPrefix: '/gamehive',
}

module.exports = nextConfig
