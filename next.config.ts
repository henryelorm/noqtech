import type { NextConfig } from 'next';

// The same code deploys to two hosts:
// - GitHub Pages serves the site under /noqtech/ (https://henryelorm.github.io/noqtech/)
// - Vercel serves it from the domain root (Vercel sets VERCEL=1 during its builds)
// NEXT_PUBLIC_BASE_PATH / NEXT_PUBLIC_SITE_URL override either default (e.g. for a custom domain).
const onVercel = Boolean(process.env.VERCEL);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (onVercel ? '' : '/noqtech');

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`
    : 'https://henryelorm.github.io/noqtech/');

const nextConfig: NextConfig = {
  output: 'export', // static HTML export; no server runtime needed on either host
  basePath,
  trailingSlash: true, // emit /about/index.html so static hosts serve clean URLs
  images: { unoptimized: true }, // the image optimizer needs a server
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl },
};

export default nextConfig;
