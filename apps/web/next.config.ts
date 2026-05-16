import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repute/ui"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "stream.mux.com" },
      { protocol: "https", hostname: "image.mux.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.builder.io" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "**.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Short URLs land on the canonical /ai-search.
      {
        source: "/search-ai",
        destination: "/ai-search",
        permanent: true,
      },
      {
        source: "/ai-overview",
        destination: "/ai-search",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/dental-clinics/:path*",
        destination: "https://repute-expert-web-dusky.vercel.app/dental-clinics/:path*",
      },
      {
        source: "/dental-clinics",
        destination: "https://repute-expert-web-dusky.vercel.app/dental-clinics",
      },
    ];
  },
};

export default nextConfig;
