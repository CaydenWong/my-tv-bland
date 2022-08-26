/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/schedules",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
