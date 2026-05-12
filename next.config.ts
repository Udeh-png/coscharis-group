import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [60, 70, 75, 80],
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
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
