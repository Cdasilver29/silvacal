import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { WhatsAppIcon } from '@/components/icons';
import { contactInfo, whatsappLink } from '@/data/site';
import { contactHero, businessHours, contactSeo } from '@/data/contact';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: contactSeo.title,
  description: contactSeo.description,
  path: '/contact',
});

export default function ContactPage() {
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
            {contactHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-silver/90">{contactHero.supportingLine}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Get in Touch</h2>
            <dl className="mt-6 flex flex-col gap-4 text-body/80">
              <div>
                <dt className="font-heading text-sm font-semibold text-navy">Location</dt>
                <dd className="mt-1">{contactInfo.location}</dd>
              </div>
              <div>
                <dt className="font-heading text-sm font-semibold text-navy">Phone</dt>
                {contactInfo.phones.map((phone) => (
                  <dd key={phone.e164} className="mt-1">
                    <a href={`tel:${phone.e164}`} className="transition hover:text-electric">
                      {phone.display}
                    </a>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="font-heading text-sm font-semibold text-navy">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition hover:text-electric"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-heading text-sm font-semibold text-navy">Business Hours</dt>
                {businessHours.map((entry) => (
                  <dd key={entry.days} className="mt-1 flex justify-between sm:max-w-xs">
                    <span>{entry.days}</span>
                    <span>{entry.hours}</span>
                  </dd>
                ))}
              </div>
            </dl>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-electric px-6 py-3 font-heading text-sm font-semibold text-white transition hover:scale-105"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Request a Quote</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
