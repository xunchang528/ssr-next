/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'http',
        hostname:'127.0.0.1',
        port:'1337',
        pathname:'/uploads/code_67191e1aba.png'
      }
    ]
  },
};

module.exports = nextConfig;
