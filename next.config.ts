import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone is for the Docker image Railway builds. Netlify's runtime plugin
  // produces its own output, so leave it alone there.
  output: process.env.NETLIFY ? undefined : "standalone",
  reactCompiler: true,
};

export default nextConfig;
