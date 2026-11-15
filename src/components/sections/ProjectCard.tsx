import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { ProjectCover } from './ProjectCover';
import { ProjectLinks } from './ProjectLinks';

/** Standard portfolio card (handoff §3C), adapted to real project data. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:border-line-strong hover:shadow-card">
      <ProjectCover project={project} className="aspect-[16/10]" />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-label uppercase text-muted">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-body">{project.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-line bg-surface-2 px-4 py-3">
          {project.facts.slice(0, 2).map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium text-body">{fact.label}</dt>
              <dd className="mt-0.5 text-base font-semibold tracking-tight text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-col gap-4 pt-6">
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <Badge variant="tech">{tag}</Badge>
              </li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <ProjectLinks links={project.links.slice(0, 1)} className="border-t border-line pt-4" />
          )}
          {project.upcoming && (
            <p className="flex items-center gap-2 border-t border-line pt-4 text-sm font-medium text-brand">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" aria-hidden="true" />
              Coming soon — more details to be announced
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
