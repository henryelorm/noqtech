import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white shadow-subtle hover:bg-brand-hover hover:shadow-card active:bg-brand-active',
        secondary: 'border border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-2',
        outline: 'border border-brand bg-transparent text-brand hover:bg-brand-subtle',
        ghost: 'text-body hover:bg-surface-2 hover:text-ink',
        dark: 'bg-ink text-white hover:bg-[#232634]',
        light: 'bg-white text-ink hover:bg-surface-2',
        'ghost-inverse': 'border border-white/15 bg-white/10 text-white hover:bg-white/15',
      },
      size: {
        sm: 'h-9 gap-1.5 rounded-lg px-3.5 text-sm',
        md: 'h-11 gap-2 rounded-lg px-5 text-[15px]',
        lg: 'h-13 gap-2.5 rounded-xl px-7 text-base',
        icon: 'h-10 w-10 rounded-lg',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Variants {}

export function Button({ className, variant, size, fullWidth, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props} />;
}

export interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, Variants {
  href: string;
  children: ReactNode;
}

/**
 * A link styled as a button. Internal paths use next/link (basePath-aware);
 * external URLs open in a new tab with safe rel attributes.
 */
export function ButtonLink({ href, className, variant, size, fullWidth, children, ...props }: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);
  const external = /^https?:\/\//.test(href) || href.startsWith('mailto:');

  if (external) {
    const newTab = !href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
