const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ["image/webp"],
  },
  webpack: (config) => {
    // Add a rule for handling .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    return config;
  },
};

module.exports = withContentlayer(nextConfig);





