import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { CheckIcon } from '@/components/icons';
import { packagesHero, packageGroups, packagesFaqs, packagesSeo } from '@/data/packages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: packagesSeo.title,
  description: packagesSeo.description,
  path: '/packages',
});

export default function PackagesPage() {
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
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            {packagesHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-silver/90">{packagesHero.supportingLine}</p>
        </div>
      </section>

      {packageGroups.map((group) => (
        <section key={group.heading} className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              {group.heading}
            </h2>
            <Reveal
              stagger
              className={`mt-10 grid gap-6 sm:grid-cols-2 ${
                group.tiers.length === 3 ? 'lg:grid-cols-3' : 'mx-auto lg:max-w-3xl'
              }`}
            >
              {group.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`card-tilt relative flex flex-col rounded-2xl border p-6 transition ${
                    tier.popular ? 'border-electric' : 'border-silver/40'
                  }`}
                >
                  {tier.popular && (
                    <span className="badge-pulse absolute -top-3 left-6 rounded-full bg-electric px-3 py-1 font-heading text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-navy">{tier.name}</h3>
                  <p className="mt-2 font-heading text-2xl font-bold text-navy">{tier.price}</p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-body/80">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn mt-6 inline-block rounded-2xl bg-electric px-6 py-3 text-center font-heading text-sm font-semibold text-white"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {packagesFaqs.map((faq) => (
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
