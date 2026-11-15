import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'brand' | 'live' | 'neutral' | 'tech' | 'overlay';

const styles: Record<BadgeVariant, string> = {
  brand: 'border border-brand-accent bg-brand-subtle text-brand text-label uppercase',
  live: 'border border-live-border bg-live-bg text-live-text text-xs font-medium',
  neutral: 'border border-line bg-surface-2 text-body text-xs font-medium',
  tech: 'border border-line bg-surface text-body text-xs font-medium',
  overlay: 'border border-line bg-white/95 text-ink text-label uppercase shadow-subtle backdrop-blur',
};

export function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  /** Show a leading status dot (pulses for the live variant) */
  dot?: boolean;
  className?: string;
}) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-md px-2.5 py-1', styles[variant], className)}>
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'live' ? 'animate-pulse bg-[#10b981]' : 'bg-brand',
          )}
        />
      )}
      {children}
    </span>
  );
}
