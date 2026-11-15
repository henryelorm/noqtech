import type { Metadata } from 'next';
import { PROJECTS } from '@/lib/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Products built by NoqTech — a multi-tenant Church Management System, NoqTech Opportunities, the WiFi Speed Tester app, Void Arena and NoqShield Pro.',
};

export default function OurWorkPage() {
  const featured = PROJECTS.find((p) => p.featured);
  const disciplines = new Set(PROJECTS.map((p) => p.filter)).size;

  return (
    <>
      <PageHero
        eyebrow="Client deliveries & products"
        title="Software built for real-world use."
        lead="Explore our production systems, consumer apps and games — each one designed, engineered and shipped by NoqTech."
        aside={
          <dl className="grid grid-cols-2 divide-x divide-line rounded-xl border border-line bg-surface-2 lg:ml-auto lg:max-w-xs">
            <div className="p-5">
              <dt className="text-label uppercase text-muted">Shipped</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-ink">{PROJECTS.filter((p) => !p.upcoming).length}</dd>
            </div>
            <div className="p-5">
              <dt className="text-label uppercase text-muted">Domains</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-ink">{disciplines}</dd>
            </div>
          </dl>
        }
      />

      {featured && (
        <Section tone="muted" className="pb-0 md:pb-0">
          <FeaturedProject project={featured} />
        </Section>
      )}

      <Section tone="muted">
        <SectionHeader eyebrow="Archive" title="All projects" className="md:mb-10" />
        <ProjectGrid projects={PROJECTS} />
      </Section>

      <CTABanner
        tone="brand"
        eyebrow="Start a partnership"
        title="Ready to engineer your next flagship product?"
        lead="Let's discuss requirements, architecture trade-offs and roadmap milestones for your project."
        secondary={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  );
}
