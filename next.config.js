/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hempsettlement-prev',
  assetPrefix: '/hempsettlement-prev/', // Dodajemy prefix dla zasobów statycznych
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
