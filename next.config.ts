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
      {
        source: "/download",
        destination: "/download.html",
      },
      {
        source: "/expert/insurance",
        destination: "/expert-insurance.html",
      },
      {
        source: "/expert/home-loan",
        destination: "/expert-home-loan.html",
      },
    ];
  },
};

export default nextConfig;
