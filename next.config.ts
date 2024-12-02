import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/cvProject",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
