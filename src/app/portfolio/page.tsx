import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import StatusBadge from '@/components/StatusBadge';
import { portfolioHero, publishedProjects, portfolioEmpty, portfolioSeo } from '@/data/portfolio';
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
          {publishedProjects.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                {portfolioEmpty.heading}
              </h2>
              <p className="mt-4 text-body/80">{portfolioEmpty.line}</p>
            </div>
          ) : (
            <Reveal stagger className="flex flex-wrap justify-center gap-8">
              {publishedProjects.map((project) => {
                const body = (
                  <>
                    <div className="bg-navy px-6 py-5">
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-electric">
                        {project.category}
                      </p>
                      <p className="mt-1 text-sm text-silver/80">{project.client}</p>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h2 className="font-heading text-xl font-semibold text-navy">
                          {project.name}
                        </h2>
                        <StatusBadge status={project.status} />
                      </div>
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
                      {project.hasDetail && (
                        <span className="mt-auto pt-6 font-heading text-sm font-semibold text-electric-strong">
                          Read the case study{' '}
                          <span className="inline-block transition group-hover:translate-x-1">→</span>
                        </span>
                      )}
                    </div>
                  </>
                );
                return project.hasDetail ? (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="group flex w-full flex-col overflow-hidden rounded-2xl border border-silver/40 transition hover:border-electric/60 hover:shadow-lg md:w-[calc(50%-16px)]"
                  >
                    {body}
                  </Link>
                ) : (
                  <div
                    key={project.slug}
                    className="flex w-full flex-col overflow-hidden rounded-2xl border border-silver/40 md:w-[calc(50%-16px)]"
                  >
                    {body}
                  </div>
                );
              })}
            </Reveal>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
