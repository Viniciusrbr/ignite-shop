
/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      { hostname: 'files.stripe.com', }
    ]
  },

  reactStrictMode: true,
};

export default nextConfig;
