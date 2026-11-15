import type { Metadata } from 'next';
import { Clock, FileText, Globe, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { BriefCard } from '@/components/sections/BriefCard';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with NoqTech. Send your project brief or email develop@noqtech.com — we reply within 24 hours.',
};

const TRUST_ITEMS = [
  { icon: Clock, label: 'Turnaround', value: 'Reply within 24 hours' },
  { icon: FileText, label: 'Intake', value: 'Short project brief form' },
  { icon: Mail, label: 'Direct access', value: COMPANY.email },
  { icon: Globe, label: 'Service region', value: COMPANY.region },
];

const NEXT_STEPS = [
  {
    phase: 'Step 01',
    title: 'Send your brief',
    description: 'Share your goals, scope, budget range and timeline through the project brief form — or email us directly.',
  },
  {
    phase: 'Step 02',
    title: 'We review and reply',
    description: 'Every submission is reviewed by our engineering team, and you hear back from us within 24 hours.',
  },
  {
    phase: 'Step 03',
    title: 'Discovery & proposal',
    description: 'We talk through requirements and constraints, then recommend an approach, technology and delivery plan.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Project initiation & inquiries"
        title={
          <>
            Have an ambitious idea?
            <br className="hidden sm:block" /> Let&apos;s engineer it.
          </>
        }
        lead="Tell us about your technical goals, timeline and scope. Our engineering team will review it and reply within 24 hours."
      />

      <div className="bg-surface pb-12">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <ul className="grid grid-cols-1 gap-4 rounded-xl border border-line bg-surface-2 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: ItemIcon, label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <ItemIcon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-label uppercase text-muted">{label}</p>
                  <p className="truncate text-sm font-medium text-ink">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Section className="pt-0 md:pt-0">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-line bg-surface-2 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-ink">Direct engineering contact</h2>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    Prefer email? Write to us directly — your message goes to the engineering team, not a sales desk.
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-line bg-white p-4">
                <p className="text-label uppercase text-muted">Direct email</p>
                <a href={`mailto:${COMPANY.email}`} className="mt-1 inline-block font-medium text-brand hover:text-brand-hover">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-6">
              <p className="text-label uppercase text-brand">Transparent process</p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-ink">What to expect next</h2>
              <ol className="relative mt-6 space-y-6 border-l border-brand-accent pl-6">
                {NEXT_STEPS.map((step) => (
                  <li key={step.phase} className="relative">
                    <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-brand" aria-hidden="true" />
                    <p className="text-label uppercase text-brand">{step.phase}</p>
                    <h3 className="mt-1 font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Natural height + sticky on desktop so the card doesn't stretch into an empty gap */}
            <BriefCard className="h-auto lg:sticky lg:top-28" />
          </div>
        </div>
      </Section>
    </>
  );
}
