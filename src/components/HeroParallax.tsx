'use client';

import { useEffect, useRef } from 'react';

const RATIO = 0.15;
const MAX_TRAVEL = 40;

export default function HeroParallax({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const query = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';
    if (!el || !window.matchMedia(query).matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.transform = `translate3d(0, ${Math.min(window.scrollY * RATIO, MAX_TRAVEL)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
