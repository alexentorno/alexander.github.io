/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
    // For GitHub Pages deployment
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
}

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    reactStrictMode: true,
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig;