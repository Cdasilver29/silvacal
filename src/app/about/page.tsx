import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { aboutHero, story, missionVision, whyChooseUs, values, aboutSeo } from '@/data/about';
import {
  AwardIcon,
  PaymentIcon,
  TagIcon,
  ClockIcon,
  ShieldIcon,
  LayersIcon,
} from '@/components/icons';

const iconMap = {
  award: AwardIcon,
  payment: PaymentIcon,
  tag: TagIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
  layers: LayersIcon,
};

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.25), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <nav aria-label="Breadcrumb" className="font-heading text-sm text-silver/70">
            <Link href="/" className="hover:text-electric">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-electric">About</span>
          </nav>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            {aboutHero.title}
          </h1>
          <p className="mt-4 font-heading text-lg font-semibold text-electric">
            {aboutHero.tagline}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-4">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative hidden h-80 lg:block">
              <div className="absolute inset-0 rounded-2xl border border-silver/40 bg-gradient-to-br from-electric/10 via-transparent to-transparent" />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="absolute right-8 top-8 h-48 w-48 rounded-2xl border border-electric/30 bg-electric/10" />
              <div className="absolute bottom-8 left-8 h-32 w-32 rounded-2xl border border-silver/40 bg-navy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-navy p-8">
              <h2 className="font-heading text-2xl font-bold text-white">Our Mission</h2>
              <p className="mt-4 text-silver/90">{missionVision.mission}</p>
            </div>
            <div className="rounded-2xl bg-navy p-8">
              <h2 className="font-heading text-2xl font-bold text-white">Our Vision</h2>
              <p className="mt-4 text-silver/90">{missionVision.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Why Choose Us</h2>
          <Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.title} className="rounded-2xl border border-silver/40 p-6">
                    <Icon />
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-body/80">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Our Values</h2>
          <Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-heading text-lg font-semibold text-electric">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-silver/80">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
