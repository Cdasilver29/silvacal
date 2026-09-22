'use client';

import { useEffect, useState } from 'react';

// Server HTML renders words[0] so the headline reads as one complete sentence
// without JS. Width is reserved for the widest word by a ::before pseudo-element
// (see .rotating-word in globals.css), which keeps the extra words out of the DOM text.
export default function RotatingWord({ words, interval = 3000 }: { words: string[]; interval?: number }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), interval);
    return () => window.clearInterval(id);
  }, [interval]);

  return (
    <span className="rotating-word inline-block text-electric" data-reserve={words.join('\n')}>
      <span key={tick} className={tick === 0 ? 'inline-block' : 'animate-word-in inline-block'}>
        {words[tick % words.length]}
      </span>
    </span>
  );
}
