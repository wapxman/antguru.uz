/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@antguru/ui', '@antguru/sdk', '@antguru/types'],
};

module.exports = nextConfig;
