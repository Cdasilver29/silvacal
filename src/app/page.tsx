import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import AboutStrip from '@/components/AboutStrip';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
// Restore once real testimonials exist in src/data/home.ts:
// import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';
import { homeSeo } from '@/data/home';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <AboutStrip />
      <TechStack />
      <Industries />
      {/* <Testimonials /> */}
      <CtaBand />
    </>
  );
}
