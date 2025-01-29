/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gamehive',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
}

module.exports = nextConfig
