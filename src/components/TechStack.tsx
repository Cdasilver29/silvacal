import { techStack } from '@/data/home';
import Reveal from '@/components/Reveal';
import {
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  ReactNativeIcon,
  ExpoIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  SupabaseIcon,
  TailwindIcon,
  MpesaIcon,
} from '@/components/icons';

const iconMap = {
  typescript: TypeScriptIcon,
  react: ReactIcon,
  nextjs: NextJsIcon,
  reactnative: ReactNativeIcon,
  expo: ExpoIcon,
  nodejs: NodeJsIcon,
  postgresql: PostgreSqlIcon,
  supabase: SupabaseIcon,
  tailwind: TailwindIcon,
  mpesa: MpesaIcon,
};

export default function TechStack() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
          {techStack.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-body/80">{techStack.intro}</p>
        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {techStack.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-silver/40 px-4 py-8 text-center transition hover:-translate-y-1 hover:border-electric"
                >
                  <span className="text-navy transition group-hover:text-electric">
                    <Icon />
                  </span>
                  <span className="font-heading text-sm font-medium text-navy">{item.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
