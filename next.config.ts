import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform.theverge.com",
      },
      // Add more domains as needed
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // }
    ],
  },
};

export default nextConfig;
