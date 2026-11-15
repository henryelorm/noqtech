import { Clock, Globe, Mail } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';
import { BriefCard } from './BriefCard';

export const CONTACT_DETAILS = [
  { icon: Mail, label: 'Direct email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Clock, label: 'Response window', value: `Within 24 hours` },
  { icon: Globe, label: 'Service region', value: COMPANY.region },
];

/** "Have an idea? Let's build it." (Stitch Home §H) */
export function ContactCTA() {
  return (
    <Section tone="muted" id="contact">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-subtle sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
            <Badge variant="brand" dot className="self-start rounded-full px-3">
              Start a conversation
            </Badge>
            <h2 className="mt-6 text-h2-sm text-ink md:text-h2">Have an idea? Let&apos;s build it.</h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-body">
              Tell us what you&apos;re planning. Let&apos;s explore how we can bring your next digital product to life.
            </p>
            <ul className="mt-10 space-y-5 lg:mt-auto lg:pt-10">
              {CONTACT_DETAILS.map(({ icon: ItemIcon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                    <ItemIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-label uppercase text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium text-ink hover:text-brand">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <BriefCard />
        </div>
      </div>
    </Section>
  );
}
