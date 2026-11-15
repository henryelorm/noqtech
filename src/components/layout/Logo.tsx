import Link from 'next/link';
import { asset, cn } from '@/lib/utils';

/** NoqTech mark (open door, deep-blue accent — /public/logo.svg) + wordmark. */
export function Logo({ className, subtitle = false }: { className?: string; subtitle?: boolean }) {
  return (
    <Link href="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="NoqTech — home">
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, shared between header and footer */}
      <img
        src={asset('/logo.svg')}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-[10px] shadow-subtle transition-transform duration-200 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-tight text-ink">NoqTech</span>
        {subtitle && <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">Digital Solutions</span>}
      </span>
    </Link>
  );
}
