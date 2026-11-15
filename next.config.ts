import type { NextConfig } from 'next';

// The site is served from GitHub Pages at https://henryelorm.github.io/noqtech/.
// If a custom domain is configured later, set this to '' (or override with NEXT_PUBLIC_BASE_PATH).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/noqtech';

const nextConfig: NextConfig = {
  output: 'export', // static HTML export for GitHub Pages; no server runtime
  basePath,
  trailingSlash: true, // emit /about/index.html so Pages serves clean URLs
  images: { unoptimized: true }, // the image optimizer needs a server
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
