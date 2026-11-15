import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOME_PROJECT_SLUGS, HOME_SERVICE_IDS, PROJECTS, SERVICES, getProject } from '@/lib/constants';
import { InDevelopmentTeaser } from '@/components/sections/InDevelopmentTeaser';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Hero } from '@/components/sections/Hero';
import { CapabilityMatrix } from '@/components/sections/CapabilityMatrix';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TechStackGrid } from '@/components/sections/TechStackGrid';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  const homeServices = HOME_SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)!);
  const upcoming = PROJECTS.find((p) => p.upcoming);

  return (
    <>
      <Hero />
      <CapabilityMatrix />

      <Section id="work">
        <SectionHeader
          eyebrow="Portfolio highlights"
          title="Selected work. Real solutions."
          lead="Enterprise software, mobile utilities and games — designed, engineered and shipped by NoqTech."
          aside={
            <Link href="/our-work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover">
              View all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {HOME_PROJECT_SLUGS.map((slug) => getProject(slug)!).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        {upcoming && <InDevelopmentTeaser project={upcoming} />}
      </Section>

      <Section tone="muted" id="services">
        <SectionHeader
          eyebrow="Core capabilities"
          title="What we bring to the table."
          lead="Engineering disciplines for companies and organisations that need dependable digital products."
          aside={
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover">
              All {SERVICES.length} disciplines <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Section>

      <ProcessTimeline />
      <TechStackGrid />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
