/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build time lo linting errors ignore cheyadaniki
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  // Ee kindha unna block ni add chei
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