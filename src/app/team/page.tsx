import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { CheckIcon, ClockIcon, ShieldIcon, TagIcon, UserIcon } from '@/components/icons';
import { founder, howWeWork, teamClosing, teamHero, teamSeo } from '@/data/team';
import { siteConfig } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

const iconMap = { user: UserIcon, tag: TagIcon, shield: ShieldIcon, clock: ClockIcon };

// Checked at build time: without the photo the page renders a branded fallback.
const hasPhoto = fs.existsSync(path.join(process.cwd(), 'public', founder.photo));

export const metadata: Metadata = buildMetadata({
  title: teamSeo.title,
  description: teamSeo.description,
  path: '/team',
});

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: founder.name,
  jobTitle: founder.role,
  worksFor: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  ...(hasPhoto && { image: `${siteConfig.url}${founder.photo}` }),
  alumniOf: ['Egerton University', 'PLP Academy', 'Moringa School', 'Strathmore University'].map(
    (name) => ({ '@type': 'EducationalOrganization', name })
  ),
  hasCredential: founder.credentials.map((credential) => ({
    '@type': 'EducationalOccupationalCredential',
    name: credential.title,
    recognizedBy: { '@type': 'EducationalOrganization', name: credential.institution },
  })),
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="relative overflow-hidden bg-navy">
        <div
          className="animate-glow pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.25), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <nav aria-label="Breadcrumb" className="font-heading text-sm text-silver/70">
            <Link href="/" className="tap-target hover:text-electric">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="tap-target hover:text-electric">
              About
            </Link>
            <span className="mx-2">/</span>
            <span className="text-electric">Team</span>
          </nav>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            {teamHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-silver/90">{teamHero.supportingLine}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[2fr_3fr] lg:items-start lg:px-8">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-navy lg:max-w-none">
              {hasPhoto ? (
                <Image
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.role} at ${siteConfig.name}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 384px"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="relative h-28 w-32 overflow-hidden rounded-2xl bg-white">
                    <Image src="/brand/favicon.png" alt="" fill sizes="128px" className="object-contain p-2" />
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{founder.name}</h2>
            <p className="mt-2 font-heading text-lg font-semibold text-electric-strong">{founder.role}</p>
            <p className="mt-1 text-sm text-body/70">{founder.location}</p>
            <div className="mt-6 flex flex-col gap-4">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="text-body/80">
                  {paragraph}
                </p>
              ))}
            </div>
            <h3 className="mt-10 font-heading text-lg font-semibold text-navy">Credentials</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {founder.credentials.map((credential) => (
                <li key={credential.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>
                    <span className="font-medium text-navy">{credential.title}</span>
                    <span className="text-body/70">, {credential.institution}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-dot-grid bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{howWeWork.heading}</h2>
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="rounded-2xl border border-silver/40 bg-background p-6">
                  <Icon />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-body/80">{item.description}</p>
                </div>
              );
            })}
          </Reveal>
          <p className="mx-auto mt-16 max-w-2xl text-center text-lg text-body/80">
            {teamClosing.line}{' '}
            <Link
              href={teamClosing.cta.href}
              className="font-semibold text-electric-strong underline-offset-4 hover:underline"
            >
              {teamClosing.cta.label}
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
