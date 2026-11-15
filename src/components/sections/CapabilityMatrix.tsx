import { CAPABILITIES } from '@/lib/constants';
import { Section, SectionHeader } from '@/components/ui/Section';

/** "Technology built around possibility." — four capability statements (Stitch Home §B). */
export function CapabilityMatrix() {
  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Philosophy & foundations"
        title="Technology built around possibility."
        aside={
          <p className="text-[15px] leading-relaxed text-body">
            NoqTech is a software engineering studio that combines product design, engineering and modern
            technology to build digital solutions that are genuinely useful.
          </p>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className="flex flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-card">
            <p className="text-label uppercase text-muted">Capability // {String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">{c.description}</p>
            <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.08em] text-brand">{c.tag}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
