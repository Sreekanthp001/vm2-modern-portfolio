/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Document is not defined error raakunda idi help chestundi
  output: 'standalone', 
};

export default nextConfig;