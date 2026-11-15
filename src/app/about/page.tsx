import type { Metadata } from 'next';
import { ArrowDown, Check } from 'lucide-react';
import { COMPANY, PRINCIPLES, PROJECTS, SERVICES } from '@/lib/constants';
import { asset } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { ButtonLink } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow, Section, SectionHeader } from '@/components/ui/Section';
import { PageHero } from '@/components/sections/PageHero';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'NoqTech Limited is a software engineering company building web, mobile, enterprise and game products with craftsmanship, pragmatism and transparency.',
};

const PRINCIPLE_PRACTICES: Record<string, string[]> = {
  'Craftsmanship & Code Quality': ['Typed codebases', 'Code review before merge', 'Clear documentation'],
  'Pragmatic Architecture': ['Proven, well-supported tools', 'Simple before distributed', 'Relational data modelled with care'],
  'Transparency & Partnership': ['Direct access to the builders', 'Regular progress demos', 'Honest scoping and estimates'],
};

const OWNERSHIP_POINTS = [
  'Source code and documentation handed over to you',
  'Products structured so your own team can maintain them',
  'Role-based access and secure authentication as standard',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NoqTech Limited"
        title="A software engineering company built on craftsmanship, rigour and transparency."
        lead="We bridge the gap between ambitious product vision and reliable, maintainable software. No shortcuts, no disposable code."
        actions={
          <>
            <ButtonLink href="#principles" size="lg">
              Explore Our Principles <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" size="lg">
              See Our Work
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-xl border border-line bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-label uppercase text-muted">At a glance</p>
              <Badge variant="neutral">{COMPANY.legalName}</Badge>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <dd className="text-[32px] font-semibold leading-none tracking-tight text-ink">{SERVICES.length}</dd>
                <dt className="mt-2 text-sm text-body">Engineering disciplines</dt>
              </div>
              <div>
                <dd className="text-[32px] font-semibold leading-none tracking-tight text-ink">{PROJECTS.filter((p) => !p.upcoming).length}</dd>
                <dt className="mt-2 text-sm text-body">Products in our portfolio</dt>
              </div>
              <div>
                <dd className="text-[32px] font-semibold leading-none tracking-tight text-ink">1M+</dd>
                <dt className="mt-2 text-sm text-body">App installs</dt>
              </div>
              <div>
                <dd className="text-[32px] font-semibold leading-none tracking-tight text-ink">&lt;24h</dd>
                <dt className="mt-2 text-sm text-body">Response to new briefs</dt>
              </div>
            </dl>
            <p className="mt-6 border-t border-line pt-4 text-sm text-body">Serving clients globally, working remotely.</p>
          </div>
        }
      />

      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>01 / Purpose</Eyebrow>
            <h2 className="mt-3 text-h2-sm text-ink md:text-h2">Software that is built to last, not just to launch.</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-body">
              Digital products are too often held back not by a lack of vision, but by fragile foundations built for
              speed alone. NoqTech exists to change that.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-body">
              We believe software should be maintainable, observable and economically sound — and that real velocity is
              measured by how safely a product can evolve after it ships.
            </p>
            <ul className="mt-8 space-y-3">
              {OWNERSHIP_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-line bg-white p-2 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/images/hero-architecture.webp')}
                alt="Isometric architectural model representing layered, well-structured software"
                loading="lazy"
                decoding="async"
                className="aspect-[16/11] w-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 max-w-xs rounded-xl border border-line bg-white p-4 shadow-dropdown sm:-left-6">
              <p className="text-label uppercase text-brand">Quality by default</p>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                Every release is linted, type-checked and reviewed before it reaches production.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="principles">
        <SectionHeader
          eyebrow="02 / Core philosophy"
          title="Three pillars of our engineering practice."
          aside={<p className="text-[15px] text-body">Engineered for longevity, clarity and dependable runtime behaviour.</p>}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <div className="flex-1 p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <Badge variant="brand">Pillar {String(i + 1).padStart(2, '0')}</Badge>
                  <Icon name={p.icon} className="h-5 w-5 text-muted" />
                </div>
                <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">{p.description}</p>
              </div>
              <ul className="space-y-2 border-t border-line bg-surface-2 p-6 md:px-7">
                {PRINCIPLE_PRACTICES[p.title]?.map((practice) => (
                  <li key={practice} className="flex items-center gap-2 text-sm text-ink">
                    <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                    {practice}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <ProcessTimeline tone="muted" />

      <CTABanner
        tone="brand"
        eyebrow="Collaborate with NoqTech"
        title="Want to collaborate on your next digital platform?"
        lead="Speak directly with the people who will build it. We'll look at feasibility, constraints and timelines with you before you commit."
      />
    </>
  );
}
