import { ArrowRight, Layers } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { HeroReel } from './HeroReel';
import { ButtonLink } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Section';

const HERO_FACTS = [
  { value: '8', label: 'Core disciplines' },
  { value: '1M+', label: 'App installs' },
  { value: 'End-to-end', label: 'Design to deployment' },
];

/** Homepage hero — editorial headline left, abstract 3D architecture visual right (Stitch Home). */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-10 md:pb-24 md:pt-16">
      {/* Faint dot grid, as in the design */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 [background-image:radial-gradient(var(--color-line-strong)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-60"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Badge variant="brand" dot className="rounded-full px-3">
              Software development &amp; digital solutions
            </Badge>
            <h1 className="mt-6 text-display-sm text-ink sm:text-[56px] sm:leading-[1.1] xl:text-display">
              We turn ambitious ideas into powerful digital products.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-body md:text-body-lg">{COMPANY.description}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/our-work" size="lg">
                Explore Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={COMPANY.briefFormUrl} variant="secondary" size="lg">
                Start a Project
              </ButtonLink>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 rounded-xl border border-line bg-surface-2 p-4 sm:border-0 sm:bg-transparent sm:p-0">
              {HERO_FACTS.map((f) => (
                <div key={f.label} className="text-center sm:text-left">
                  <dd className="whitespace-nowrap text-lg font-semibold tracking-tight text-ink sm:text-2xl">{f.value}</dd>
                  <dt className="mt-1 text-xs text-muted sm:text-sm">{f.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="rounded-2xl border border-line bg-surface-2 p-2 shadow-card sm:p-3">
              <div className="relative overflow-hidden rounded-xl">
                {/* Product reel built from real NoqTech product screens; poster-only for reduced motion */}
                <HeroReel className="block aspect-[16/10] w-full bg-surface-3 object-cover" />
                <div className="absolute left-3 top-3 hidden sm:block">
                  <Badge variant="overlay" dot>
                    From our work
                  </Badge>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-dropdown sm:flex lg:-left-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-label uppercase text-muted">Full-stack studio</span>
                <span className="block text-sm font-medium text-ink">Cloud, native apps &amp; games</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
