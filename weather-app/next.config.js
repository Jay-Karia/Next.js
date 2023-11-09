/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@tremor/react"]
    },
    images:{
        domains: ['www.weatherbit.io']
    }
}

module.exports = nextConfig
