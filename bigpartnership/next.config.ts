/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Local backend
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      // Supabase public storage
      {
        protocol: "https",
        hostname: "slelguoygbfzlpylpxfs.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      // Unsplash images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Placeholder images
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // Navitas images
      {
        protocol: "https",
        hostname: "www.navitas.com",
      },
    ],
  },
};

module.exports = nextConfig;
