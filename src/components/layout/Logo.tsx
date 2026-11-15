import Link from 'next/link';
import { Box } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, subtitle = false }: { className?: string; subtitle?: boolean }) {
  return (
    <Link href="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="NoqTech — home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white transition-colors group-hover:bg-brand-hover">
        <Box className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-tight text-ink">NoqTech</span>
        {subtitle && <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">Digital Solutions</span>}
      </span>
    </Link>
  );
}
