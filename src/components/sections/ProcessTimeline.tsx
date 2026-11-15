import { PROCESS } from '@/lib/constants';
import { Icon } from '@/components/icons';
import { Section, SectionHeader } from '@/components/ui/Section';

/** Four-step delivery process: horizontal on desktop, vertical timeline on mobile (Stitch Home §E). */
export function ProcessTimeline({ tone = 'white' }: { tone?: 'white' | 'muted' }) {
  return (
    <Section tone={tone}>
      <SectionHeader
        eyebrow="Engineering methodology"
        title="From concept to execution."
        lead="A clear, transparent delivery framework that reduces risk and keeps everyone aligned from the first conversation to launch."
      />
      <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Vertical connector on mobile */}
        <span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px bg-line md:hidden" />
        {PROCESS.map((step) => (
          <li
            key={step.index}
            className="relative flex gap-5 md:flex-col md:gap-0 md:rounded-xl md:border md:border-line md:bg-surface-2 md:p-6"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-xl font-semibold text-brand md:h-auto md:w-auto md:justify-between md:border-0 md:bg-transparent md:text-[40px] md:leading-none">
              {step.index}
              <Icon name={step.icon} className="hidden h-5 w-5 text-muted md:block" />
            </span>
            <div className="pb-2 md:mt-8 md:flex md:flex-1 md:flex-col">
              <h3 className="text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted md:mt-auto md:pt-6">
                Output: {step.output}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
