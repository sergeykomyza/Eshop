import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ir-8.ozone.ru',
      },
      {
        protocol: 'https',
        hostname: 'static.insales-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'n.cdn.cdek.shopping',
      },
      {
        protocol: 'https',
        hostname: '40.img.avito.st',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: 'cache3.youla.io',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
      },
      {
        protocol: 'https',
        hostname: 'i.playground.ru',
      },
      {
        protocol: 'https',
        hostname: 'yandex-images.clstorage.net',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'gameguru.ru',
      },
      {
        protocol: 'https',
        hostname: 'img.joomcdn.net',
      },
      // Добавляйте другие домены по такому же принципу
    ],
  },
};

export default nextConfig;
