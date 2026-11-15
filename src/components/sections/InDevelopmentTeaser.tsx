import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/Badge';

/**
 * Slim "In the studio" strip for a project that's still being built. Used instead of a
 * pop-up: visible to everyone scrolling the work section, never interrupts the visit.
 */
export function InDevelopmentTeaser({ project }: { project: Project }) {
  return (
    <aside
      aria-label={`In development: ${project.title}`}
      className="mt-8 flex flex-col gap-5 rounded-xl border border-dashed border-brand-accent bg-brand-subtle/40 p-5 sm:flex-row sm:items-center sm:p-6"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-accent bg-white text-brand">
        <Icon name={project.coverIcon} className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="brand" dot>
            In the studio
          </Badge>
          <span className="text-label uppercase text-muted">{project.category}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-body">{project.description}</p>
      </div>
      <Link
        href="/our-work"
        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover"
      >
        See all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
