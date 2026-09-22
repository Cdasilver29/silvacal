import Link from 'next/link';
import { services } from '@/data/home';
import Reveal from '@/components/Reveal';
import {
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  WalletIcon,
  MegaphoneIcon,
  PaletteIcon,
} from '@/components/icons';

const iconMap = {
  code: CodeIcon,
  globe: GlobeIcon,
  smartphone: SmartphoneIcon,
  wallet: WalletIcon,
  megaphone: MegaphoneIcon,
  palette: PaletteIcon,
};

const delays = ['', 'delay-150', 'delay-300'];

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">What We Do</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.href} className={delays[index % 3]}>
                <div className="group h-full rounded-2xl border border-silver/40 p-6 transition hover:-translate-y-1 hover:border-electric hover:shadow-lg">
                  <Icon />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-body/80">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-block text-sm font-medium text-electric transition group-hover:translate-x-1"
                  >
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
