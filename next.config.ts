import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 1. Stop the build from failing on small code style issues */
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  /* 2. Allow all your image sources */
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
      { hostname: 'images.unsplash.com', protocol: 'https' },
      { hostname: 'upload.wikimedia.org', protocol: 'https' },
      { hostname: 'cdn-icons-png.flaticon.com', protocol: 'https' },
      { hostname: 'archive.nptel.ac.in', protocol: 'https' },
    ],
  },
};

export default nextConfig;