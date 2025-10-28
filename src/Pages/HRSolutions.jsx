import React from 'react';
import './hrsolutions.css';
import { Users2, Briefcase, FileText, Settings, UserCheck } from 'lucide-react';

export default function HRSolutions() {
  return (
    <div className="hr-page">
      {/* Hero Section */}
      <section className="hr-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <i className="hero-icon"><Users2 size={64} /></i>
          <h1>HR Solutions</h1>
          <p>
            Empower your business with expert HR management — from recruitment and payroll to employee development 
            and compliance — helping your people and processes grow together.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="hr-about">
        <h2>Why Partner With Us?</h2>
        <p>
          We offer reliable, efficient, and scalable HR solutions that streamline operations and strengthen workplace culture. 
          Our HR specialists focus on what matters — your people, performance, and growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="hr-services">
        <h2>Our Core HR Services</h2>
        <div className="hr-cards">
          <div className="hr-card">
            <Briefcase size={40} />
            <h3>Recruitment & Talent Acquisition</h3>
            <p>
              Access top-tier talent and hire efficiently with our data-driven recruitment and selection processes.
            </p>
          </div>

          <div className="hr-card">
            <FileText size={40} />
            <h3>Payroll Management</h3>
            <p>
              Simplify salary processing, ensure compliance, and deliver accurate, on-time payroll management.
            </p>
          </div>

          <div className="hr-card">
            <UserCheck size={40} />
            <h3>Employee Onboarding & Training</h3>
            <p>
              Create smooth onboarding experiences with customized training that boosts productivity from day one.
            </p>
          </div>

          <div className="hr-card">
            <Settings size={40} />
            <h3>HR Policies & Compliance</h3>
            <p>
              Stay up to date with UAE labor laws through expertly crafted HR policies and compliance audits.
            </p>
          </div>

          <div className="hr-card">
            <Users2 size={40} />
            <h3>Outsourced HR Management</h3>
            <p>
              Focus on your core business while our HR professionals handle your people operations seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hr-cta">
        <h2>Build a Better Workforce With Us</h2>
        <p>
          Partner with us for full-spectrum HR solutions that enhance employee satisfaction, compliance, and growth.
        </p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
}
