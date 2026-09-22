import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import StatusBadge from '@/components/StatusBadge';
import { detailProjects, getDetailProject } from '@/data/portfolio';
import { buildMetadata } from '@/lib/seo';

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getDetailProject(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} Case Study`,
    description: `${project.summary} ${project.outcome}`,
    path: `/portfolio/${project.slug}`,
  });
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = getDetailProject(params.slug);
  if (!project) notFound();

  const sections = [
    { heading: 'The Problem', body: project.problem },
    { heading: 'Our Approach', body: project.approach },
    { heading: 'The Outcome', body: project.outcome },
  ];

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
          <nav aria-label="Breadcrumb" className="font-heading text-sm text-silver/70">
            <Link href="/" className="tap-target hover:text-electric">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="tap-target hover:text-electric">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-electric">{project.name}</span>
          </nav>
          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-wider text-electric">
            {project.client}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            {project.name}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-2xl border border-electric/40 px-3 py-1 font-heading text-xs font-semibold text-electric">
              {project.category}
            </span>
            <StatusBadge status={project.status} dark />
          </div>
          <p className="mt-6 max-w-2xl text-lg text-silver/90">{project.summary}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-body/80">{section.body}</p>
              </Reveal>
            ))}
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-2xl border border-silver/40 px-3 py-1 text-sm font-medium text-navy"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Link
            href="/portfolio"
            className="mt-12 inline-flex min-h-11 items-center font-heading text-sm font-semibold text-electric-strong hover:underline"
          >
            ← Back to portfolio
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
