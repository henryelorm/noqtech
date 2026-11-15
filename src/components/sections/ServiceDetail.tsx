import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Project, Service } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/Badge';

/**
 * Alternating two-column discipline block (Stitch Services page). The design's
 * "architecture blueprint" panel is replaced with factual content: the typical stack
 * and, where one exists, a real NoqTech project that demonstrates the discipline.
 */
export function ServiceDetail({ service, project, reverse }: { service: Service; project?: Project; reverse?: boolean }) {
  return (
    <article id={service.id} className="rounded-xl border border-line bg-white p-5 sm:p-8 lg:p-10">
      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={cn(reverse && 'lg:order-2')}>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-subtle text-brand">
              <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-label uppercase text-muted">{service.index} / Discipline</span>
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink md:text-[28px]">{service.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-body md:text-base">{service.description}</p>

          <div className="mt-8 rounded-lg border border-line bg-surface-2 p-5">
            <p className="text-label uppercase text-muted">Key deliverables</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cn('flex flex-col rounded-lg border border-line bg-surface-2 p-5 sm:p-6', reverse && 'lg:order-1')}>
          <div className="flex items-center justify-between">
            <p className="text-label uppercase text-muted">Typical stack</p>
            <Badge variant="brand">{service.index}</Badge>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <li key={t} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink">
                {t}
              </li>
            ))}
          </ul>

          {project ? (
            <div className="mt-6 rounded-lg border border-line bg-white p-5 lg:mt-auto">
              <p className="text-label uppercase text-brand">From our work</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-ink">{project.title}</p>
              <p className="mt-1 text-sm text-body">{project.category}</p>
              {project.links[0] ? (
                <a
                  href={project.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-hover"
                >
                  {project.links[0].label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  href="/our-work"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-hover"
                >
                  See it in our work <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          ) : (
            <p className="mt-6 text-sm leading-relaxed text-body lg:mt-auto">
              Scoped around your requirements during discovery — tell us about your project and we&apos;ll recommend the right approach.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
