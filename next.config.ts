import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Add this line
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
