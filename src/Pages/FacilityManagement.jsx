import React from 'react';
import './facility-management.css';
import { Building2, ShieldCheck, Users, Globe2, Monitor } from 'lucide-react';

export default function FacilityManagement() {
  return (
    <div className="facility-page">

      {/* Hero Section */}
      <section className="facility-hero">
        <div className="fhero-overlay"></div>
        <div className="fhero-content animate-fade">
          <h1>Facility Management Excellence</h1>
          <p>
            Reliable, professional, and efficient management solutions for commercial and residential properties. Ensuring seamless operations, safety, and tenant satisfaction.
          </p>
        </div>
        <div className="floating-box box1"></div>
        <div className="floating-box box2"></div>
        <div className="floating-box box3"></div>
      </section>

      {/* About Section */}
      <section className="facility-about animate-slide">
        <h2 className='hh2'>About Our Facility Management</h2>
        <p>
          At BizWize Facility Management, we combine expertise, modern technology, and attention to detail to provide premium services. From maintenance and cleaning to security and tenant support, we handle everything efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="facility-services animate-slide">
        <h2 className='hh2'>Our Services</h2>

        <div className="service-detail">
          <Building2 className="service-icon neon-icon" />
          <div>
            <h3>Building & Property Maintenance</h3>
            <p>Structural inspections, repairs, HVAC systems, plumbing, and all maintenance operations to keep your building in top condition.</p>
          </div>
        </div>

        <div className="service-detail">
          <Monitor className="service-icon neon-icon" />
          <div>
            <h3>Equipment & Utility Management</h3>
            <p>Monitoring and maintenance of equipment, utilities, and technical systems for uninterrupted operations.</p>
          </div>
        </div>

        <div className="service-detail">
          <Users className="service-icon neon-icon" />
          <div>
            <h3>Cleaning & Janitorial Services</h3>
            <p>Custom cleaning schedules to maintain hygiene, safety, and comfort across your facilities.</p>
          </div>
        </div>

        <div className="service-detail">
          <ShieldCheck className="service-icon neon-icon" />
          <div>
            <h3>Security & Safety Management</h3>
            <p>CCTV monitoring, access control, and emergency planning for staff and tenants.</p>
          </div>
        </div>

        <div className="service-detail">
          <Globe2 className="service-icon neon-icon" />
          <div>
            <h3>Tenant & Occupant Support</h3>
            <p>Responsive management of tenant requests and complaints to ensure smooth operations and satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="facility-benefits animate-slide">
        <h2 className="hh2">Why Choose Us?</h2>
        <ul>
          <li>✅ Experienced, certified team with proven track record</li>
          <li>✅ Tailored solutions for commercial & residential properties</li>
          <li>✅ Advanced technology and reporting tools</li>
          <li>✅ Focused on safety, efficiency, and cost savings</li>
          <li>✅ 24/7 support and emergency response</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="facility-cta animate-fade">
        <h2>Get Started With Our Facility Management Services</h2>
        <p>
          Partner with us to ensure your property is always safe, clean, and fully operational. Contact us today to request a free consultation or quote.
        </p>
        <div className="cta-buttons">
          <a href="/contact"><button className="cta-btn">Request a Quote</button></a>
          <a href="/contact"><button className="cta-btn">Book Free Consultation</button></a>
        </div>
      </section>
    </div>
  );
}
