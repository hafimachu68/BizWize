import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import { Briefcase, Globe2, Building2, ShieldCheck, Workflow, Scale } from 'lucide-react';

const serviceData = [
  {
    icon: <Globe2 size={36} />,
    title: 'Free Zone Setup',
    desc: 'Launch your business with 100% ownership, no customs duty, and simplified incorporation.',
  },
  {
    icon: <Building2 size={36} />,
    title: 'Mainland Company',
    desc: 'Operate across the UAE, access government contracts, and open branches anywhere.',
  },
  {
    icon: <Briefcase size={36} />,
    title: 'Offshore Entity',
    desc: 'Establish a tax-efficient entity for international operations with complete privacy.',
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Legal Advisory',
    desc: 'Compliance, business licensing, and personalized guidance from industry experts.',
  },
  {
    icon: <Workflow size={36} />,
    title: 'Corporate PRO Services',
    desc: 'All-in-one government liaison, document clearance, and visa handling.',
  },
  {
    icon: <Scale size={36} />,
    title: 'Tax & VAT Strategy',
    desc: 'Plan and file your taxes with confidence through our certified consultants.',
  },
];

export default function Services() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="services-elegant">
      <div className="services-header">
        <h2 className="services-header">
          Our <span className="underline"><span className="text">Business Services</span></span>
        </h2>
        <p>We bring structure, simplicity, and strategy to your UAE business setup.</p>
      </div>

      <div className="services-grid">
        {serviceData.map((service, i) => (
          <div
            key={i}
            className={`elegant-card ${visibleCards.includes(i) ? 'visible' : ''}`}
            ref={el => (cardRefs.current[i] = el)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h4>Need Help Choosing the Right Setup?</h4>
        <p>Talk to our business advisors today — we’ll guide you every step of the way.</p>
        <a href="/contact" className="cta-button">Get Free Consultation</a>
      </div>
    </section>
  );
}
