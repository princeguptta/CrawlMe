/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',        // Optional; omit or set if necessary
        pathname: '/**'  // Optional; specify path patterns if needed
      }
    ]
  }
};

module.exports = nextConfig;