/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/destination',
        destination: '/destination/moon',
        permanent: true,
      },
      {
        source: '/crew',
        destination: '/crew/DouglasHurley',
        permanent: true,
      },
      {
        source: '/technology',
        destination: '/technology/launchVehicle',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
