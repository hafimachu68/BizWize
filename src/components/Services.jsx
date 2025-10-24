import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Briefcase, Users2, Megaphone, ClipboardList, Building2, Calculator } from 'lucide-react';

const serviceData = [
  {
    icon: <Briefcase size={36} />,
    title: 'Business Set up',
    desc: 'End-to-end support for company formation, licensing, and government approvals in the UAE.',
    link: '/services/business-setup',
  },
  {
    icon: <Users2 size={36} />,
    title: 'HR Solutions',
    desc: 'Comprehensive HR outsourcing, recruitment, and employee management services tailored to your business.',
    link: '/services/hr-solutions',
  },
  {
    icon: <Megaphone size={36} />,
    title: 'Digital Marketing',
    desc: 'Boost your online visibility with expert social media, SEO, and paid ad campaigns that deliver results.',
    link: '/services/digital-marketing',
  },
  {
    icon: <ClipboardList size={36} />,
    title: 'Management Consultancy',
    desc: 'Strategic guidance to optimize operations, improve efficiency, and ensure sustainable business growth.',
    link: '/services/management-consultancy',
  },
  {
    icon: <Building2 size={36} />,
    title: 'Facility Management',
    desc: 'Reliable facility maintenance, cleaning, and support services for commercial and residential properties.',
    link: '/services/facility-management',
  },
  {
    icon: <Calculator size={36} />,
    title: 'Accounting and Bookkeeping',
    desc: 'Accurate, compliant financial management and bookkeeping for smooth business operations.',
    link: '/services/accounting-bookkeeping',
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
      { threshold: 0.1 }
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
        <h2>
          Our <span className="underline"><span className="text">Services</span></span>
        </h2>
        <p>We provide comprehensive business solutions to help you establish and grow your presence in the UAE.</p>
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
            <Link to={service.link} className="service-btn">
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h4>Let’s Build Your Success Story</h4>
        <p>Contact our experts today to discuss how we can support your business journey.</p>
        <a href="/contact" className="cta-button">Get Free Consultation</a>
      </div>
    </section>
  );
}
