/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Static HTML export enable cheyadaniki idhi mandatory
  output: 'export', 
  
  // 2. Images handled by Next.js in static mode
  images: {
    unoptimized: true,
  },

  // Build time lo linting errors ignore cheyadaniki (Nuvvu already pettina code)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  // Webpack config (Nuvvu already pettina code)
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'canvas': 'canvas',
      })
    }
    return config
  },
};

export default nextConfig;
