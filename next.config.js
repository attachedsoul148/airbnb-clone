/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoiYXR0YWNoZWRzb3VsMTQ4IiwiYSI6ImNsZXlkeWwxcjJrNGgzeXAxY2hjN3R3ZXgifQ.RlKKQS7hMTZFcVAgHYI5IA',
  },
}

module.exports = nextConfig
