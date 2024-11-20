/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/APEX-Detail-Lab' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
