'use client';

import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/utils';

/**
 * Looping, muted product reel for the homepage hero (~520 KB).
 *
 * - Renders only the lightweight poster on first paint; video sources are attached after
 *   hydration so they never compete with the page's critical resources.
 * - Skipped entirely for prefers-reduced-motion and Save-Data users (poster stays).
 * - Pauses while scrolled out of view to save CPU and battery.
 */
export function HeroReel({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!reduceMotion && !saveData) setEnabled(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={asset('/videos/hero-reel-poster.webp')}
      muted
      loop
      playsInline
      autoPlay={enabled}
      preload={enabled ? 'auto' : 'none'}
      aria-label="Short reel of NoqTech products: the Church Management System dashboard, finance and attendance modules, and NoqTech Opportunities"
      width={1280}
      height={800}
    >
      {enabled && (
        <>
          <source src={asset('/videos/hero-reel.webm')} type="video/webm" />
          <source src={asset('/videos/hero-reel.mp4')} type="video/mp4" />
        </>
      )}
    </video>
  );
}
