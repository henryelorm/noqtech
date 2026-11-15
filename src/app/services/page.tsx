import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { COMPANY, SERVICES, getProject } from '@/lib/constants';
import { Icon } from '@/components/icons';
import { ButtonLink } from '@/components/ui/Button';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceDetail } from '@/components/sections/ServiceDetail';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web, mobile, AI, enterprise software, games, backend, cloud and product design — the engineering disciplines NoqTech delivers.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical capabilities & practices"
        title="End-to-end software engineering, from idea to launch."
        lead="From backend systems and enterprise platforms to consumer apps, AI features and games — we design, build and deploy products made to last."
        actions={
          <>
            <ButtonLink href={COMPANY.briefFormUrl} size="lg">
              Discuss Your Requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" size="lg">
              View Our Work
            </ButtonLink>
          </>
        }
      />

      {/* Discipline index — replaces the design's unverified metrics strip */}
      <div className="bg-surface pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <nav aria-label="Disciplines" className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-3 bg-surface-2 p-4 transition-colors hover:bg-white">
                <Icon name={s.icon} className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm font-medium text-ink group-hover:text-brand">
                  <span className="mr-1.5 text-muted">{s.index}</span>
                  {s.shortTitle}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Practice areas"
          title="Specialised engineering disciplines."
          aside={
            <p className="text-[15px] leading-relaxed text-body">
              Structured delivery from proof of concept to production, using proven architecture patterns.
            </p>
          }
        />
        <div className="space-y-6">
          {SERVICES.map((service, i) => (
            <ServiceDetail
              key={service.id}
              service={service}
              project={service.relatedProject ? getProject(service.relatedProject) : undefined}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </Section>

      <ProcessTimeline />
      <TechStackGrid />

      <CTABanner
        eyebrow="Ready to engineer your solution?"
        title="Let's build something exceptional together."
        lead="Send us your project brief and we'll come back within 24 hours with next steps — no high-pressure sales pitch, just a real engineering conversation."
      />
    </>
  );
}
