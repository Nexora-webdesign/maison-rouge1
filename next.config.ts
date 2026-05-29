import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash is the only remote image source for this demo.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Next.js 16 enforces an explicit quality allowlist; 75 is the default.
    qualities: [75],
  },
};

export default nextConfig;
