import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Teach tailwind-merge about the custom type scale in globals.css. Without this it
 * treats `text-h2` / `text-label` as colours and drops `text-ink` (or vice versa).
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display', 'display-sm', 'h1', 'h1-sm', 'h2', 'h2-sm', 'h3', 'body-lg', 'label'],
    },
  },
});

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a /public asset path with the deployment base path.
 * next/link adds basePath automatically; plain <img src> does not.
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
