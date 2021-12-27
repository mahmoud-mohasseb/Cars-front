/** @type {import('next').NextConfig} */

module.exports = {
  // reactStrictMode: true,
  images: {
    // loader: 'imgix',
    domains: [
      'https://cdn.vox-cdn.com/thumbor',
      'https://s1.cdn.autoevolution.com/images',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
