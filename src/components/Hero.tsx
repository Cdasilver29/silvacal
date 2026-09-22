import Link from 'next/link';
import { hero } from '@/data/home';
import RotatingWord from '@/components/RotatingWord';
import HeroParallax from '@/components/HeroParallax';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="animate-glow pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.25), transparent 60%)',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
        <div>
          <div className="hero-step" style={{ '--hero-delay': '0ms' } as React.CSSProperties}>
            <p className="font-heading text-xs font-semibold tracking-widest text-electric sm:text-sm">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl xl:text-6xl">
              {hero.headlineLead} <RotatingWord words={hero.rotatingWords} />
            </h1>
          </div>
          <div className="hero-step" style={{ '--hero-delay': '120ms' } as React.CSSProperties}>
            <p className="mt-6 max-w-xl text-lg text-silver/90">{hero.subtext}</p>
            <p className="mt-4 font-heading text-base font-medium text-electric sm:text-lg">
              {hero.motto}
            </p>
          </div>
          <div className="hero-step mt-8 flex flex-wrap gap-4" style={{ '--hero-delay': '240ms' } as React.CSSProperties}>
            <Link
              href={hero.primaryCta.href}
              className="btn btn-sheen rounded-2xl bg-electric px-6 py-3 font-heading text-sm font-semibold text-white"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="btn rounded-2xl border border-silver px-6 py-3 font-heading text-sm font-semibold text-silver hover:border-electric hover:text-electric"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <HeroParallax className="hidden lg:block">
          <div className="animate-float relative h-80">
            <div className="absolute inset-0 rounded-2xl border border-silver/20 bg-gradient-to-br from-electric/20 via-transparent to-transparent" />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(192,192,192,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute right-8 top-8 h-48 w-48 rounded-2xl border border-electric/30 bg-electric/10" />
            <div className="absolute bottom-8 left-8 h-32 w-32 rounded-2xl border border-silver/20 bg-navy" />
          </div>
        </HeroParallax>
      </div>
    </section>
  );
}
