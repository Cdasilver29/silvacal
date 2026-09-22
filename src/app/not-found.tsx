import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="animate-glow pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.25), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-semibold tracking-widest text-electric">404</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-silver/90">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn rounded-2xl bg-electric-strong px-6 py-3 font-heading text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn rounded-2xl border border-silver px-6 py-3 font-heading text-sm font-semibold text-silver hover:border-electric hover:text-electric"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
