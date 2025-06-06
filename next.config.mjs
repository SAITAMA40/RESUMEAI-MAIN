/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['img.clerk.com'], // Add any other image domains you're using
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
