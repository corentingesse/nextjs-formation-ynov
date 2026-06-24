import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/ancienne-url",
        destination: "/nouvelle-url",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
