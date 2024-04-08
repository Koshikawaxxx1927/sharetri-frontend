/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

// https://lh3.googleusercontent.com/a/ACg8ocKnwvqkXcdLkex_IIi6n4btZ9LReO04TW1QiCiGoQsm=s96-c
module.exports = nextConfig;
