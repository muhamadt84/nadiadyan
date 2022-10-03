/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://178.128.90.130" },
        ],
      },
    ]
  },
  env: {
    urlAPI: 'http://178.128.90.130/pf/pf_api/',
  },
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig
