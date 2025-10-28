import React from 'react';
import './digitalMarketing.css';
import { Megaphone, BarChart, Globe2, Users2, Mail, Target, PenTool } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function DigitalMarketing() {
  return (
    <div className="digital-marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <Megaphone size={64} className="hero-icon" />
          <h1>Digital Marketing Excellence</h1>
          <p>
            Elevate your brand with cutting-edge digital strategies — from SEO and content creation 
            to social media and data-driven advertising. We turn clicks into loyal customers.
          </p>
          <button className="cta-btn">Let’s Grow Your Brand</button>
        </div>
      </section>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Service Highlights */}
      <section className="marketing-services">
        <h2>Our Core Marketing Services</h2>
        <div className="service-grid">
          {[
            {
              icon: <BarChart size={42} />,
              title: 'SEO Optimization',
              desc: 'Boost your website visibility with keyword targeting, backlinks, and on-page optimization.',
            },
            {
              icon: <Users2 size={42} />,
              title: 'Social Media Marketing',
              desc: 'Engage audiences with creative campaigns across Instagram, Facebook, TikTok, and LinkedIn.',
            },
            {
              icon: <Target size={42} />,
              title: 'PPC & Paid Ads',
              desc: 'Maximize ROI with data-driven Google Ads and Meta campaigns designed for conversions.',
            },
            {
              icon: <PenTool size={42} />,
              title: 'Content & Branding',
              desc: 'We craft stories, visuals, and brand identities that make your business unforgettable.',
            },
            {
              icon: <Mail size={42} />,
              title: 'Email Marketing',
              desc: 'Automated email sequences that nurture leads and drive customer retention.',
            },
            {
              icon: <Globe2 size={42} />,
              title: 'Analytics & Strategy',
              desc: 'We monitor, analyze, and refine strategies to keep your campaigns performing at peak levels.',
            },
          ].map((item, i) => (
            <div className="service-card" key={i}>
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-dm">
        <h2>Why Choose Our Marketing Agency?</h2>
        <p>
          With years of experience in digital transformation, our team combines creativity, 
          analytics, and performance marketing to help your brand lead in the digital era.
        </p>
        <ul>
          <li>⚡ Data-driven approach to maximize conversions</li>
          <li>🎯 Personalized campaigns for your target audience</li>
          <li>💬 Transparent reporting & monthly insights</li>
          <li>🚀 Growth-focused strategies that scale with you</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Dominate the Digital Space?</h2>
        <p>
          Let’s craft a winning strategy that transforms your online presence into real business growth.
        </p>
        <button className="cta-btn">Get a Free Strategy Call</button>
      </section>

      <WhatsAppButton />
    </div>
  );
}
