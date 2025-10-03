/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites() {
  //   return [
  //     {
  //       source: '/blog/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog/:path*`,
  //     },
  //   ];
  // },
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
