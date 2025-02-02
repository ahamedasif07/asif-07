/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from all domains
      },
    ],
  },
};

module.exports = nextConfig; // ✅ Use CommonJS `module.exports`
