import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import AboutStrip from '@/components/AboutStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <AboutStrip />
    </>
  );
}
