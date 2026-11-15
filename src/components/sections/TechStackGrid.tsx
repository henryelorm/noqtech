import { TECH_STACK } from '@/lib/constants';
import { Icon } from '@/components/icons';
import { Section, SectionHeader } from '@/components/ui/Section';

/** Categorised technology matrix (Stitch Home §F). Lists only technologies used in NoqTech's own work. */
export function TechStackGrid({ tone = 'muted' }: { tone?: 'white' | 'muted' }) {
  return (
    <Section tone={tone} id="tech">
      <SectionHeader
        eyebrow="Stack architecture"
        title="Built with the right technology."
        lead="Proven frameworks and platforms, chosen for each project's requirements — these are the tools behind our shipped work."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_STACK.map((group) => (
          <div key={group.title} className="rounded-xl border border-line bg-white p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">{group.title}</h3>
              <Icon name={group.icon} className="h-4 w-4 text-brand" />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md bg-surface-2 px-3 py-1.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
