import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: ['./'],
  },
};

export default nextConfig;
