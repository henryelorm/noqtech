import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { COMPANY } from '@/lib/constants';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// Set per host in next.config.ts (GitHub Pages or Vercel production URL)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://henryelorm.github.io/noqtech/';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NoqTech Limited | Software Development & Digital Solutions',
    template: '%s | NoqTech Limited',
  },
  description: COMPANY.description,
  openGraph: {
    type: 'website',
    siteName: COMPANY.legalName,
    title: 'NoqTech Limited | Software Development & Digital Solutions',
    description: COMPANY.description,
    images: [{ url: 'images/hero-architecture.webp', width: 1408, height: 688 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}logo.svg`,
  email: COMPANY.email,
  description: COMPANY.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        {/* pt clears the fixed header; pb clears the mobile tab bar */}
        <main id="main" className="pt-16 md:pt-20">
          {children}
        </main>
        <div className="pb-16 lg:pb-0">
          <Footer />
        </div>
        <MobileTabBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
