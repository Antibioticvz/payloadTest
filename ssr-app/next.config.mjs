/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  env: {
    PAYLOAD_API: process.env.PAYLOAD_API,
  },
}

export default nextConfig
