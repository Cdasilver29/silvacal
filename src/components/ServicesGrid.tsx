import Link from 'next/link';
import { services } from '@/data/home';
import Reveal from '@/components/Reveal';
import {
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  WalletIcon,
  ChartIcon,
  MegaphoneIcon,
  PaletteIcon,
} from '@/components/icons';

const iconMap = {
  code: CodeIcon,
  globe: GlobeIcon,
  smartphone: SmartphoneIcon,
  wallet: WalletIcon,
  chart: ChartIcon,
  megaphone: MegaphoneIcon,
  palette: PaletteIcon,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">What We Do</h2>
        <Reveal stagger className="mt-12 flex flex-wrap justify-center gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.href}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="card-tilt group flex h-full flex-col rounded-2xl border border-silver/40 p-6 transition hover:border-electric hover:shadow-lg">
                  <Icon />
                  <h3 className="mt-4 text-balance font-heading text-lg lg:min-h-[3.5rem] xl:min-h-0 font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-body/80">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-auto self-start pt-4 text-sm font-medium text-electric"
                  >
                    Learn more{' '}
                    <span className="inline-block transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
