/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ["i.annihil.us", "tailwindui.com", "images.unsplash.com"]
  }
}
