import { ArrowUpRight, CodeXml, ExternalLink, Store } from 'lucide-react';
import type { ProjectLink } from '@/lib/types';
import { cn } from '@/lib/utils';

const ICON = { live: ExternalLink, store: Store, repo: CodeXml } as const;

/** Real outbound links for a project (live product, store listing, repository). */
export function ProjectLinks({ links, className }: { links: ProjectLink[]; className?: string }) {
  if (!links.length) return null;
  return (
    <div className={cn('flex flex-wrap items-center gap-x-5 gap-y-2', className)}>
      {links.map((link) => {
        const LinkIcon = ICON[link.kind];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover"
          >
            <LinkIcon className="h-4 w-4" aria-hidden="true" />
            {link.label}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        );
      })}
    </div>
  );
}
