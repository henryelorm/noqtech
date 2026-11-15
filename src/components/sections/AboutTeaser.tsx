import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRINCIPLES } from '@/lib/constants';
import { asset } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { Eyebrow, Section } from '@/components/ui/Section';

/** "A technology partner for ambitious ideas." — image + principles (Stitch Home §G). */
export function AboutTeaser({ showLink = true }: { showLink?: boolean }) {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-xl bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/images/engineering-studio.webp')}
            alt="Dual monitors showing code and a product interface in a dimly lit engineering workspace"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover opacity-90 lg:aspect-[4/4.2]"
          />
          <figure className="absolute inset-x-4 bottom-4 rounded-lg bg-white/95 p-4 shadow-dropdown backdrop-blur sm:inset-x-6 sm:bottom-6">
            <p className="text-label uppercase text-brand">Our engineering standard</p>
            <blockquote className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
              “Software should be technically lean, functionally dependable, and designed to endure.”
            </blockquote>
          </figure>
        </div>

        <div>
          <Eyebrow>About NoqTech</Eyebrow>
          <h2 className="mt-3 text-h2-sm text-ink md:text-h2">A technology partner for ambitious ideas.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            We believe software should be engineered with uncompromising quality, clear communication and purposeful
            design — from the first sketch to long after launch.
          </p>
          <ul className="mt-8 space-y-6">
            {PRINCIPLES.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <Icon name={p.icon} className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
          {showLink && (
            <Link href="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover">
              More about NoqTech <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
