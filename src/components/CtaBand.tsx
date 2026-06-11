import Link from 'next/link';
import { ctaBand } from '@/data/home';
import { whatsappLink } from '@/data/site';
import Reveal from '@/components/Reveal';

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25), transparent 60%)',
        }}
      />
      <Reveal className="relative">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {ctaBand.heading}
          </h2>
          <p className="mt-4 text-lg text-silver/90">{ctaBand.sentence}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={ctaBand.primaryCta.href}
              className="rounded-2xl bg-electric px-6 py-3 font-heading text-sm font-semibold text-white transition hover:scale-105"
            >
              {ctaBand.primaryCta.label}
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-silver px-6 py-3 font-heading text-sm font-semibold text-silver transition hover:scale-105 hover:border-electric hover:text-electric"
            >
              {ctaBand.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
