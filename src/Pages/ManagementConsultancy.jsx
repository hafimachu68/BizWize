import React from 'react';
import './management-consultancy.css';
import { ClipboardList, BarChart3, Briefcase, Target, ShieldCheck, Workflow } from 'lucide-react';

export default function ManagementConsultancy() {
  return (
    <div className="management-page">
      {/* Hero Section */}
      <section className="management-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Management Consultancy</h1>
          <p>
            Empowering businesses to achieve excellence through strategic insights, operational optimization, 
            and sustainable growth solutions.
          </p>
          <div className="cta-buttons">
            <a href="/contact"><button className="cta-btn">Let’s Grow Your Brand</button></a>
            <a href="/contact"><button className="cta-btn">Book Your Free Consultation</button></a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="management-services">
        <h2>Our Consultancy Expertise</h2>
        <p className="section-subtext">
          We provide tailored strategies designed to enhance your business performance and efficiency.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <BarChart3 className="icon" />
            <h3>Operational Analysis & Optimization</h3>
            <p>We assess your workflows and implement proven methods to streamline operations for maximum efficiency.</p>
          </div>

          <div className="service-card">
            <Briefcase className="icon" />
            <h3>Business Strategy & Planning</h3>
            <p>We design customized strategies that align with your goals to ensure measurable, sustainable growth.</p>
          </div>

          <div className="service-card">
            <Workflow className="icon" />
            <h3>Process Improvement</h3>
            <p>We refine existing systems to improve productivity, reduce costs, and drive business agility.</p>
          </div>

          <div className="service-card">
            <ShieldCheck className="icon" />
            <h3>Risk Management & Compliance</h3>
            <p>Our experts help you identify potential risks and maintain compliance with local and global standards.</p>
          </div>

          <div className="service-card">
            <Target className="icon" />
            <h3>Corporate Governance</h3>
            <p>We strengthen your governance structure to ensure transparency, accountability, and ethical success.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="management-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Connect with our experts today and take the first step towards strategic growth and operational excellence.</p>
          <div className="cta-buttons">
            <a href="/contact"><button className="cta-btn">Get Started Now</button></a>
            <a href="/contact"><button className="cta-btn">Book a Free Consultation</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
