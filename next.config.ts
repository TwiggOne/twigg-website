import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "twigg-public-assets.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/gaps",
        destination: "/gaps.html",
      },
    ];
  },
};

export default nextConfig;
