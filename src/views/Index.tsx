import { useState } from 'react';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import GallerySection from '@/components/GallerySection';
import MembershipSection from '@/components/MembershipSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ProgramsSection />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <MembershipSection />
        <StatsSection />
        <div className="section-divider" />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
