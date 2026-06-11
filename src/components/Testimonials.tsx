import { testimonials } from '@/data/home';
import Reveal from '@/components/Reveal';

const delays = ['', 'delay-150', 'delay-300'];

export default function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
          {testimonials.heading}
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} className={delays[index % 3]}>
              <div className="relative h-full rounded-2xl border border-silver/30 p-6 shadow-sm">
                <span className="font-heading text-6xl leading-none text-electric/30">“</span>
                <p className="mt-2 text-body/90">{item.quote}</p>
                <div className="mt-6">
                  <p className="font-heading font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-body/70">{item.role}</p>
                  <p className="text-sm text-body/70">{item.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
