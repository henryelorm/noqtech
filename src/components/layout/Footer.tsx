import Link from 'next/link';
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants';
import { Container } from '@/components/ui/Section';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-2">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-body">
              {COMPANY.tagline} We turn ambitious ideas into powerful digital products.
            </p>
            <p className="mt-8 text-label uppercase text-muted">Direct inquiries</p>
            <a href={`mailto:${COMPANY.email}`} className="mt-1 inline-block font-medium text-brand hover:text-brand-hover">
              {COMPANY.email}
            </a>
          </div>

          <nav aria-label="Company" className="md:col-span-3">
            <p className="text-label uppercase text-muted">Company</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-body transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY.briefFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body transition-colors hover:text-ink"
                >
                  Submit a project brief
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services" className="md:col-span-4">
            <p className="text-label uppercase text-muted">Services</p>
            <ul className="mt-4 grid gap-3 text-[15px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="text-body transition-colors hover:text-ink">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p>App &amp; game studio · {COMPANY.region}</p>
        </div>
      </Container>
    </footer>
  );
}
