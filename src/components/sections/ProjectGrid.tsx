'use client';

import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { PROJECT_FILTERS } from '@/lib/constants';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';

/**
 * Portfolio archive with category filter + search — preserved from the original site,
 * fixed so search and filter combine (previously search ignored the active filter).
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]['value']>('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const p of projects) c[p.filter] = (c[p.filter] ?? 0) + 1;
    return c;
  }, [projects]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (filter !== 'all' && p.filter !== filter) return false;
      if (!q) return true;
      return [p.title, p.category, p.description, ...p.tags].join(' ').toLowerCase().includes(q);
    });
  }, [projects, filter, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter projects" className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:px-0">
          {PROJECT_FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={active}
                className={cn(
                  'shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                  active
                    ? 'border-brand bg-brand text-white shadow-subtle'
                    : 'border-line bg-white text-body hover:border-line-strong hover:text-ink',
                )}
              >
                {f.label} <span className={cn('ml-1', active ? 'text-white/70' : 'text-muted')}>({counts[f.value] ?? 0})</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a project…"
            className="h-11 w-full rounded-lg border border-line bg-white pl-10 pr-10 text-sm text-ink placeholder:text-muted transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-accent [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line-strong bg-white px-6 py-16 text-center">
          <p className="font-semibold text-ink">No projects match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilter('all');
            }}
            className="mt-3 text-sm font-semibold text-brand hover:text-brand-hover"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
