/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/old-path',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
