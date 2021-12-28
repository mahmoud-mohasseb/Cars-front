/** @type {import('next').NextConfig} */

module.exports = {
  // reactStrictMode: true,
  images: {
    // loader: 'imgix',
    domains: ['https:/cdn.jdpower.com'],
    formats: ['image/avif', 'image/webp'],
  },
};
