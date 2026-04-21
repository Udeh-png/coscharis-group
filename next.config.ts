import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "www.pngarts.com",
      },
      {
        hostname: "e7.pngegg.com",
      },
    ],
  },
};

export default nextConfig;
