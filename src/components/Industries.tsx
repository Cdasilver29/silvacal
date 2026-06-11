import { industries } from '@/data/home';
import Reveal from '@/components/Reveal';
import {
  EducationIcon,
  TransportIcon,
  HealthIcon,
  RetailIcon,
  CommunityIcon,
  RealEstateIcon,
  EventsIcon,
  FinanceIcon,
} from '@/components/icons';

const iconMap = {
  education: EducationIcon,
  transport: TransportIcon,
  health: HealthIcon,
  retail: RetailIcon,
  community: CommunityIcon,
  realestate: RealEstateIcon,
  events: EventsIcon,
  finance: FinanceIcon,
};

export default function Industries() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {industries.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-silver/90">{industries.intro}</p>
        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industries.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-silver/30 px-4 py-8 text-center transition hover:-translate-y-1 hover:border-electric"
                >
                  <span className="text-silver transition group-hover:text-electric">
                    <Icon />
                  </span>
                  <span className="font-heading text-sm font-medium text-white">{item.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
