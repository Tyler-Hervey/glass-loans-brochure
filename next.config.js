/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  // Enable static exports
  output: "standalone",

  // Optimize builds
  swcMinify: true,

  // Enable aggressive image optimization
  images: {
    ...nextConfig.images,
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
  },

  // Enable HTTP/2 Server Push
  experimental: {
    serverActions: true,
  },

  // Configure headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// below is the original code from the Template
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
