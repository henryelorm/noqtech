import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Page-width container: 1280px max, 24px gutters on mobile, 48px on desktop (Stitch layout grid). */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-[1280px] px-6 md:px-12', className)}>{children}</div>;
}

/** Full-bleed section band with the standard vertical rhythm. */
export function Section({
  children,
  id,
  tone = 'white',
  className,
  containerClassName,
}: {
  children: ReactNode;
  id?: string;
  tone?: 'white' | 'muted';
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn('w-full py-20 md:py-24', tone === 'muted' ? 'bg-surface-2' : 'bg-surface', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Small uppercase label used above section headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-label uppercase text-brand', className)}>{children}</p>;
}

/** Eyebrow + heading + optional lead paragraph, with an optional aside/action on the right. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  aside,
  as: Heading = 'h2',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <div className={cn('mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <Heading className={cn('text-ink', Heading === 'h1' ? 'text-h1-sm md:text-h1' : 'text-h2-sm md:text-h2')}>
          {title}
        </Heading>
        {lead && <p className="mt-4 text-base leading-relaxed text-body md:text-[17px]">{lead}</p>}
      </div>
      {aside && <div className="shrink-0 md:max-w-sm">{aside}</div>}
    </div>
  );
}
