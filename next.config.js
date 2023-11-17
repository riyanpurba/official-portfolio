/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: function (config, options) {
    console.log(options.webpack.version); // Should be webpack v5 now
    config.experiments = {};
    return config;
  },
}

module.exports = nextConfig
