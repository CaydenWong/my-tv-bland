/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/schedules",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["static.tvmaze.com"],
  },
};

module.exports = nextConfig;
