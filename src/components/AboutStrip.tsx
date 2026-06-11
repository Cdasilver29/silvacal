import Link from 'next/link';
import { aboutStrip } from '@/data/home';
import Reveal from '@/components/Reveal';
import { CheckIcon } from '@/components/icons';

export default function AboutStrip() {
  return (
    <section className="bg-navy">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {aboutStrip.heading}
            </h2>
            {aboutStrip.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-silver/90">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-8">
            <ul className="flex flex-col gap-4">
              {aboutStrip.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white">
                  <CheckIcon />
                  <span className="font-heading text-lg">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href={aboutStrip.cta.href}
              className="self-start rounded-2xl border border-silver px-6 py-3 font-heading text-sm font-semibold text-silver transition hover:scale-105 hover:border-electric hover:text-electric"
            >
              {aboutStrip.cta.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
