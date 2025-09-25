import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    reactCompiler: true,
  },
  turbopack: {},
};

export default nextConfig;
