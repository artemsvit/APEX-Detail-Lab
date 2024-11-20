/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    path: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/_next/image`,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
}

module.exports = nextConfig
