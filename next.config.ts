import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent the site from being embedded in iframes (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Stop browsers from sniffing MIME types
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Only send referrer on same-origin requests
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Block XSS in older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Restrict powerful browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Restrict API routes to same-origin requests only
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_SITE_URL || "https://revon.solutions" },
          { key: "Access-Control-Allow-Methods", value: "POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};

export default nextConfig;
