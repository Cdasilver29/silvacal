import Link from 'next/link';
import type { Service } from '@/data/services';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { siteConfig } from '@/data/site';

export default function ServicePage({ service }: { service: Service }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seo.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'KE',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
            <Link href="/#services" className="hover:text-electric">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-electric">{service.name}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl font-heading text-lg font-semibold text-electric">
            {service.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-silver/90">{service.intro}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn inline-block rounded-2xl bg-electric px-6 py-3 font-heading text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            What&apos;s Included
          </h2>
          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <div
                key={offering.title}
                className="card-tilt rounded-2xl border border-silver/40 p-6 transition hover:border-electric"
              >
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {offering.title}
                </h3>
                <p className="mt-2 text-body/80">{offering.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">How We Work</h2>
          <Reveal stagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-electric font-heading text-sm font-semibold text-electric">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-silver/80">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Technologies We Use
          </h2>
          <Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-2xl border border-silver/40 px-4 py-2 font-heading text-sm font-medium text-navy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-silver/40 p-6 open:border-electric"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 text-electric transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
