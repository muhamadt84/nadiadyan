/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    urlAPI: 'http://178.128.90.130/pf/pf_api/',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
