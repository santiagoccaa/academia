import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "rpu8u3z1lf.ufs.sh"
      }
    ]
  }
};

export default nextConfig;
