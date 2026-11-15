import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Section';

/** Inner-page hero: eyebrow badge, large H1, lead copy, optional actions and aside. */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-10 md:pb-20 md:pt-16">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-subtle opacity-70 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className={aside ? 'lg:col-span-7' : 'lg:col-span-9'}>
            <Badge variant="brand" dot className="rounded-full px-3">
              {eyebrow}
            </Badge>
            <h1 className="mt-6 text-h1-sm text-ink sm:text-[44px] sm:leading-[1.12] lg:text-h1">{title}</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-body md:text-body-lg">{lead}</p>
            {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
