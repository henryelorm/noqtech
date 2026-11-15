import type { Project } from '@/lib/types';
import { asset, cn } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/Badge';

const FOCUS = { 'left-top': 'object-left-top', top: 'object-top', center: 'object-center' } as const;

/**
 * Project cover: the first real screenshot when one exists, otherwise a clean branded
 * cover (icon + name). Drop screenshots into /public/projects/<slug>/ and add them to
 * the project's `images` in lib/constants.ts to replace a branded cover.
 */
export function ProjectCover({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const image = project.images?.[0];

  return (
    <div className={cn('relative overflow-hidden border-b border-line bg-surface-2', className)}>
      <div className="absolute left-4 top-4 z-10">
        <Badge
          variant={project.badge === 'Live' ? 'live' : project.upcoming ? 'brand' : 'overlay'}
          dot={project.badge === 'Live' || project.upcoming}
        >
          {project.badge}
        </Badge>
      </div>

      {image ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export; images are pre-optimised WebP
        <img
          src={asset(image.src)}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]',
            FOCUS[image.focus ?? 'left-top'],
          )}
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Fine blueprint grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />
          <div className="relative flex flex-col items-center gap-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-line bg-white text-brand shadow-card transition-transform duration-500 group-hover:-translate-y-1">
              <Icon name={project.coverIcon} className="h-9 w-9" strokeWidth={1.5} />
            </span>
            <span className="text-sm font-semibold tracking-tight text-ink">{project.title}</span>
          </div>
        </div>
      )}
    </div>
  );
}
