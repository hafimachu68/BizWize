import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactPrompt from '../components/ContactPrompt';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const heroRef = useRef();

  const scrollToHeroForm = () => {
    heroRef.current?.scrollToForm();
  };

  return (
    <div className="home-page">
      <HeroSection ref={heroRef} />
      <Services />
      <WhyChooseUs />
      <ContactPrompt onInquiryClick={scrollToHeroForm} />
      <WhatsAppButton />
    </div>
  );
}
