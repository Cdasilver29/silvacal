import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { portfolioHero, portfolioProjects, portfolioClosing, portfolioSeo } from '@/data/portfolio';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: portfolioSeo.title,
  description: portfolioSeo.description,
  path: '/portfolio',
});

export default function PortfolioPage() {
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
            {portfolioHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-silver/90">{portfolioHero.supportingLine}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              {portfolioProjects.map((project) => (
                <div
                  key={project.name}
                  className="overflow-hidden rounded-2xl border border-silver/40"
                >
                  <div
                    className={`flex h-32 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                  >
                    <span className="font-heading text-4xl font-bold text-white/90">
                      {project.initials}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-2xl border border-electric/40 px-3 py-1 font-heading text-xs font-semibold text-electric">
                      {project.category}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-body/80">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-2xl border border-silver/40 px-3 py-1 text-xs font-medium text-navy"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-12 text-center text-body/80">{portfolioClosing}</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
