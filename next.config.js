/** @type {import('next').NextConfig} */
import path from 'path';

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
};

export default nextConfig;