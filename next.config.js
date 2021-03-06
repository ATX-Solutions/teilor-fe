/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        domains: ['via.placeholder.com'],
    },
};

module.exports = nextConfig;
