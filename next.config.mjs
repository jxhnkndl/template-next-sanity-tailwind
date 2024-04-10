/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tell Next to accept images from the Sanity.io domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
