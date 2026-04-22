import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "rpu8u3z1lf.ufs.sh"
      },
      {
        protocol: 'https',
        hostname: "img.clerk.com"
      }
    ]
  }
};

export default nextConfig;
