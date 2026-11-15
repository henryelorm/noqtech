import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/types';
import { Icon } from '@/components/icons';

/** Compact service card for grids (Stitch Home §D). */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-card md:p-7"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink md:text-[22px]">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-body">{service.summary}</p>
      <p className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
        {service.stack.join(' • ')}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
