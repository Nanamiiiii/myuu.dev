// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
    },
  },
  redirects: async () => {
    return [
      {
        source: '/blogs',
        destination: 'https://notes.myuu.dev',
        permanent: true,
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
}

export default nextConfig
