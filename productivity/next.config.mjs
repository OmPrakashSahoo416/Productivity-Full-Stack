/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"img.clerk.com"
      },
      {
        protocol:"https",
        hostname:"firebasestorage.googleapis.com"
      },
      {
        protocol:"https",
        hostname:"https://api.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
