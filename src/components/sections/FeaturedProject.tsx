import { Check } from 'lucide-react';
import type { Project } from '@/lib/types';
import { asset } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { ProjectLinks } from './ProjectLinks';

/** Large two-column "featured study" card (Stitch Our Work page), with a real screenshot gallery. */
export function FeaturedProject({ project }: { project: Project }) {
  const [main, ...rest] = project.images ?? [];
  const live = project.links.find((l) => l.kind === 'live');
  const liveHost = live ? new URL(live.href).host : null;

  return (
    <article className="overflow-hidden rounded-xl border border-line bg-white shadow-subtle">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brand">Featured project</Badge>
            <span className="text-label uppercase text-muted">{project.category}</span>
          </div>
          <h3 className="mt-6 text-h2-sm text-ink md:text-h2">{project.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-body md:text-base">{project.description}</p>

          <dl className="mt-8 grid grid-cols-[1.5fr_1fr_1fr] gap-4 rounded-lg border border-line bg-surface-2 p-4">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dd className="whitespace-nowrap text-lg font-semibold tracking-tight text-brand md:text-xl">{fact.value}</dd>
                <dt className="mt-1 text-xs text-body">{fact.label}</dt>
              </div>
            ))}
          </dl>

          {project.modules && (
            <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
              {project.modules.map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm text-ink">
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="neutral">{tag}</Badge>
              </li>
            ))}
          </ul>

          <ProjectLinks links={project.links} className="mt-8 border-t border-line pt-6" />
        </div>

        {main && (
          <div className="border-t border-line bg-surface-2 p-4 sm:p-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-8">
            <figure className="overflow-hidden rounded-lg border border-line bg-white shadow-card">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                {liveHost && <span className="ml-3 truncate font-mono text-[11px] text-muted">{liveHost}</span>}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(main.src)} alt={main.alt} loading="lazy" decoding="async" className="w-full" />
            </figure>
            {rest.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {rest.map((img) => (
                  <figure key={img.src} className="overflow-hidden rounded-lg border border-line bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(img.src)}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover object-left-top"
                    />
                  </figure>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
