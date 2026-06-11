import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesGrid from '@/components/ServicesGrid';
import AboutStrip from '@/components/AboutStrip';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <AboutStrip />
      <TechStack />
      <Industries />
      <Testimonials />
      <CtaBand />
    </>
  );
}
