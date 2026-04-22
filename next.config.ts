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
        hostname: "coscharisgroup.net",
      },
    ],
  },
};

export default nextConfig;
