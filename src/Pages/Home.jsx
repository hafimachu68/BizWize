import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import TrustBanner from '../components/TrustBanner';
import Services from '../components/Services';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import HomeFAQs from '../components/HomeFAQs';
import ProcessSection from '../components/ProcessSection';
import PricingPackages from '../components/PricingPackages';
import CostCalculator from '../components/CostCalculator';
import LeadFormSection from '../components/LeadFormSection';
import WhatsAppButton from '../components/WhatsAppButton';
import BottomCTA from '../components/BottomCTA';
import SEO from '../components/SEO';

export default function Home() {
  const heroRef = useRef();

  const scrollToHeroForm = () => {
    heroRef.current?.scrollToForm();
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BizWize UAE",
    "image": "https://www.bizwizeuae.com/logo.png",
    "@id": "https://www.bizwizeuae.com",
    "url": "https://www.bizwizeuae.com",
    "telephone": "+971585893680",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Abuhail Centre, Habtoor Building - office GR14 Abu Hail St - Hor Al Anz East - Deira",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <div className="home-page">
      <SEO 
        title="UAE's #1 Business Setup Company in 2026"
        description="BizWize is a top-tier business setup consultancy in Dubai, UAE. We specialize in mainland, freezone, and offshore company formation."
        schemaMarkup={localBusinessSchema}
      />
      <HeroSection ref={heroRef} />
      <TrustBanner />
      <Services />
      <PricingPackages onGetStarted={scrollToHeroForm} />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <CostCalculator />
      <HomeFAQs />
      <LeadFormSection />
      <BottomCTA />
      <WhatsAppButton />
    </div>
  );
}
