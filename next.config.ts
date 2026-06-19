import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "metodo-titan.myshopify.com",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;
