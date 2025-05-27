/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Disable persistent caching in development
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;