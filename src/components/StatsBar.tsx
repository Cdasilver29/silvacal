'use client';

import { useEffect, useRef, useState } from 'react';
import { stats, type Stat } from '@/data/home';

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(stat.value);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(progress * stat.value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, stat.value]);

  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-navy sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-body/80">{stat.label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} start={start} />
        ))}
      </div>
    </section>
  );
}
