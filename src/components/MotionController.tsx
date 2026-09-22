'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const STAGGER_STEP = 75;

// Progressive enhancement: nothing is hidden in the server HTML. After mount,
// elements below the fold are armed (hidden) and revealed as they scroll in.
// Section headings (main h2) get the wipe variant without needing a wrapper.
export default function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>('[data-reveal], main h2').forEach((el) => {
      if (el.tagName === 'H2' && el.closest('[data-reveal]')) return;
      if (el.dataset.reveal === 'stagger') {
        Array.from(el.children).forEach((child, i) => {
          const item = child as HTMLElement;
          item.style.setProperty('--reveal-delay', `${i * STAGGER_STEP}ms`);
          item.dataset.revealVariant = 'rise';
          targets.push(item);
        });
      } else {
        el.dataset.revealVariant = el.dataset.reveal ?? 'wipe';
        targets.push(el);
      }
    });

    const armed = targets.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    const settle = (el: HTMLElement) => el.classList.remove('reveal-in');

    const reveal = (el: HTMLElement) => {
      if (!el.classList.contains('reveal-armed')) return;
      observer.unobserve(el);
      el.classList.replace('reveal-armed', 'reveal-in');
      el.addEventListener('transitionend', () => settle(el), { once: true });
      window.setTimeout(() => settle(el), 1500);
    };

    // Backstop independent of the observer: anything armed that reaches the
    // viewport is revealed on scroll/resize, so content can never stay hidden.
    const backstop = () => {
      const remaining = armed.filter((el) => el.classList.contains('reveal-armed'));
      remaining.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
      });
      if (remaining.length === 0) removeBackstop();
    };
    const removeBackstop = () => {
      window.removeEventListener('scroll', backstop);
      window.removeEventListener('resize', backstop);
    };

    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          });
        },
        { rootMargin: '0px 0px -10% 0px' }
      );
      armed.forEach((el) => {
        el.classList.add('reveal-armed');
        observer.observe(el);
      });
      window.addEventListener('scroll', backstop, { passive: true });
      window.addEventListener('resize', backstop);
    } catch {
      armed.forEach((el) => el.classList.remove('reveal-armed'));
      return;
    }

    return () => {
      removeBackstop();
      observer.disconnect();
      armed.forEach((el) => el.classList.remove('reveal-armed', 'reveal-in'));
    };
  }, [pathname]);

  return null;
}
