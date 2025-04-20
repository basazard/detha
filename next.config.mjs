/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors from breaking build
  },
};

module.exports = nextConfig;
