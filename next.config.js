module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalassets.tesla.com",
      },
      {
        protocol: "https",
        hostname: "images.rivian.com",
      },
      {
        protocal: "https",
        hostname: "lucidmotors.com",
      },
    ],
  },
};
