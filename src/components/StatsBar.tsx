'use client';

import { useEffect, useRef, useState } from 'react';
import { stats, type Stat } from '@/data/home';

type Phase = 'static' | 'armed' | 'counting';

// Server HTML shows the final numbers with underlines drawn. JS only resets them
// to zero when the bar is below the fold and motion is allowed.
function StatItem({ stat, phase }: { stat: Stat; phase: Phase }) {
  const [count, setCount] = useState(stat.value);
  const [drawn, setDrawn] = useState(true);

  useEffect(() => {
    if (phase === 'armed') {
      setCount(0);
      setDrawn(false);
      return;
    }
    if (phase !== 'counting') return;

    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(progress * stat.value));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDrawn(true);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, stat.value]);

  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-navy sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <span
        aria-hidden="true"
        className="mx-auto mt-2 block h-0.5 w-10 origin-left bg-electric transition-transform duration-500 ease-out"
        style={{ transform: drawn ? 'scaleX(1)' : 'scaleX(0)' }}
      />
      <p className="mt-2 text-sm text-body/80">{stat.label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>('static');

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (node.getBoundingClientRect().top <= window.innerHeight) return;

    setPhase('armed');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('counting');
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-dot-grid bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} phase={phase} />
        ))}
      </div>
    </section>
  );
}
