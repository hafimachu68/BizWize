import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { FileText, Utensils, ChefHat, Calculator, UserCheck, ShoppingCart, FileBadge, Home, FileCheck, Truck } from 'lucide-react';

const serviceData = [
  {
    icon: <FileText size={36} />,
    title: 'Trade License',
    desc: 'Fast and hassle-free mainland and freezone trade license issuance and renewals in the UAE.',
    link: '/business-setup',
  },
  {
    icon: <Utensils size={36} />,
    title: 'Food License',
    desc: 'Expert assistance in acquiring approvals from Dubai Municipality and relevant food authorities.',
    link: '/business-setup',
  },
  {
    icon: <ChefHat size={36} />,
    title: 'Kitchen Rental',
    desc: 'Premium commercial kitchen spaces for rent in DIP, fully equipped and approved.',
    link: '/business-setup',
  },
  {
    icon: <Calculator size={36} />,
    title: 'VAT Registration',
    desc: 'Complete tax consultancy, accounting, and VAT registration services to keep you compliant.',
    link: '/accounting-bookkeeping',
  },
  {
    icon: <UserCheck size={36} />,
    title: 'PRO Services',
    desc: 'Reliable corporate PRO services for document clearing, attestations, and government liaising.',
    link: '/business-setup',
  },
  {
    icon: <ShoppingCart size={36} />,
    title: 'Amazon/Noon Setup',
    desc: 'End-to-end e-commerce setup to launch your seller account on Amazon and Noon.',
    link: '/digital-marketing',
  },
  {
    icon: <FileBadge size={36} />,
    title: 'Visa Services',
    desc: 'Partner, employee, and golden visa processing with fast-track VIP services.',
    link: '/hr-solutions',
  },
  {
    icon: <Home size={36} />,
    title: 'Ejari Services',
    desc: 'Seamless commercial and residential Ejari registration and renewal assistance.',
    link: '/facility-management',
  },
  {
    icon: <FileCheck size={36} />,
    title: 'Food Label Approval',
    desc: 'Ensure your products meet Dubai Municipality standards with fast, hassle-free food label approvals.',
    link: '/food-license-dubai',
  },
  {
    icon: <Truck size={36} />,
    title: 'Food Vehicle Permit',
    desc: 'Secure necessary municipal approvals and permits for food transport and delivery vehicles.',
    link: '/food-license-dubai',
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
          Our <span className="underline"><span className="text">Business Setup Services</span></span>
        </h2>
        <p>We handle complete business setup services in Dubai mainland and free zones, including trade license, visa, PRO, and VAT services. We also specialize in food business setup, food label approvals, cloud kitchen setup, and food vehicle permit approvals across Dubai.</p>
      </div>

      <div className="services-grid">
        {serviceData.map((service, i) => (
          <Link
            to={service.link}
            key={i}
            className={`elegant-card ${visibleCards.includes(i) ? 'visible' : ''}`}
            ref={el => (cardRefs.current[i] = el)}
            style={{ textDecoration: 'none' }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="service-btn">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
