'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/Button';
import { Logo } from './Logo';

/** Active when on the route itself or one of its children (Home only matches exactly). */
export function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  return href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Subtle shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Drawer: lock scroll, focus first link, close on Escape, restore focus on close
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md transition-shadow',
        scrolled && 'shadow-subtle',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-6 md:h-20 md:px-12">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-[15px] transition-colors',
                  active ? 'font-medium text-brand' : 'text-body hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={COMPANY.briefFormUrl} size="sm" className="hidden sm:inline-flex md:h-10 md:px-5">
            Start a Project
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-ink/20 transition-opacity md:top-20 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-dropdown md:top-20 lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-[1280px] flex-col px-6 py-4 md:px-12">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center justify-between border-b border-line py-4 text-lg last:border-b-0',
                  active ? 'font-semibold text-brand' : 'text-ink',
                )}
              >
                {link.label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />}
              </Link>
            );
          })}
          <ButtonLink href={COMPANY.briefFormUrl} size="lg" fullWidth className="mt-4">
            Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <a href={`mailto:${COMPANY.email}`} className="mt-4 text-center text-sm text-body hover:text-brand">
            {COMPANY.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
