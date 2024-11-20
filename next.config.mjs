/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.join(__dirname, './src'),
      };
  
      return config;
    },
  }
  
  module.exports = nextConfig