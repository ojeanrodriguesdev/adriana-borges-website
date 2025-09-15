'use client';

import { Footer } from '@/components/layout';
import { Header } from '@/components/layout';
import { HeroSection, LaserSection, BenefitsSection, TechnologySection, AboutSection, CareSection, ContraindicationsSection, FAQSection, TestimonialsSection, ContactSection } from '../components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <LaserSection />
        <BenefitsSection />
        <TechnologySection />
        <AboutSection />
        <CareSection />
        <ContraindicationsSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
