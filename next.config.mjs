/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Financial-calculator-app",
  assetPrefix: "/Financial-calculator-app",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
