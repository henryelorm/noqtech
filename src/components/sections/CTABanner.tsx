import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';

/** Closing call-to-action band — dark (Services) or brand deep blue (About, Our Work). */
export function CTABanner({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  tone?: 'dark' | 'brand';
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16',
            tone === 'dark' ? 'bg-ink' : 'bg-brand',
          )}
        >
          <div
            aria-hidden="true"
            className={cn(
              'absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl',
              tone === 'dark' ? 'bg-brand/30' : 'bg-white/15',
            )}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className={cn('text-label uppercase', tone === 'dark' ? 'text-white/60' : 'text-white/70')}>{eyebrow}</p>
              <h2 className="mt-4 text-h2-sm text-white md:text-[48px] md:leading-[1.1] md:tracking-[-0.025em]">{title}</h2>
              <p className={cn('mt-5 max-w-xl text-[17px] leading-relaxed', tone === 'dark' ? 'text-white/70' : 'text-white/80')}>
                {lead}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              {/* White on both tones: a deep-blue button would only reach ~1.4:1 against the dark band */}
              <ButtonLink href={COMPANY.briefFormUrl} size="lg" variant="light" className="w-full lg:w-64">
                Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={secondary?.href ?? `mailto:${COMPANY.email}`}
                size="lg"
                variant="ghost-inverse"
                className="w-full lg:w-64"
              >
                {secondary?.label ?? COMPANY.email}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
