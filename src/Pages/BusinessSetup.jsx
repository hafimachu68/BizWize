import React from 'react';
import './businessSetup.css';
import { Briefcase, Globe, FileText, Users, Building2, ShieldCheck } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function BusinessSetup() {
  return (
    <div className="business-setup-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Business Setup in UAE</h1>
          <p>
            We make your dream business a reality with end-to-end solutions for 
            company formation, licensing, and government approvals across all Emirates.
          </p>
          <button className="cta-btn">Start Your Business Now</button>
        </div>
      </section>

     <section className="service-overview">
  <h2><Briefcase size={32}/> What We Offer</h2>
  <div className="service-grid">
    {[
      {
        icon: <Globe size={40} />,
        title: 'Free Zone Company',
        desc: 'Get 100% ownership and tax benefits with fast business setup in UAE’s top Free Zones.',
      },
      {
        icon: <Building2 size={40} />,
        title: 'Mainland Company',
        desc: 'Establish a local business with flexible trade licenses and full UAE market access.',
      },
      {
        icon: <FileText size={40} />,
        title: 'Offshore Registration',
        desc: 'Register your company offshore for global trading and asset protection benefits.',
      },
      {
        icon: <ShieldCheck size={40} />,
        title: 'Government Approvals',
        desc: 'We handle all government and ministry approvals to ensure a seamless setup process.',
      },
      {
        icon: <Users size={40} />,
        title: 'Business Consultancy',
        desc: 'Our experts guide you through structure selection, budgeting, and market entry.',
      },
    ].map((service, i) => (
      <div className="flip-card flip-grid" key={i}>
        <div className="flip-inner">
          <div className="flip-front">
            {service.icon}
            <h3>{service.title}</h3>
          </div>
          <div className="flip-back">
            <p>{service.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience in the UAE market, we simplify complex business setup processes — 
          saving you time, effort, and money.
        </p>
        <ul>
          <li>✔ Transparent pricing with no hidden costs</li>
          <li>✔ Fast and hassle-free documentation</li>
          <li>✔ Dedicated account manager for each client</li>
          <li>✔ Partnerships with major Free Zones & authorities</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Launch Your Business?</h2>
        <p>Let’s get your UAE business license approved within days.</p>
        <button className="cta-btn">Book a Free Consultation</button>
      </section>

      <WhatsAppButton />
    </div>
  );
}
