/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unstable_runtimeJS: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
