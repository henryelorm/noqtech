import { ArrowUpRight, Check, FileText } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/Button';

const BRIEF_POINTS = [
  'What you want to build and who it is for',
  'The services you need — web, mobile, AI, games or backend',
  'Your budget range and ideal timeline',
  'Any existing systems, designs or documents',
];

/**
 * Project brief panel. Occupies the slot of the Stitch enquiry form; briefs are
 * collected through NoqTech's existing Google Form, which this links to.
 */
export function BriefCard({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col rounded-xl border border-line bg-surface-2 p-6 sm:p-8', className)}>
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="mt-6 text-label uppercase text-brand">Project brief</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Tell us about your project</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-body">
        Our short intake form takes a few minutes. Fill in what you can — even preliminary notes help us route your
        project to the right people.
      </p>
      <ul className="mt-6 space-y-3">
        {BRIEF_POINTS.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <ButtonLink href={COMPANY.briefFormUrl} size="lg" fullWidth>
          Open the project brief form <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
          Every submission is reviewed — we reply within 24 hours.
        </p>
      </div>
    </div>
  );
}
