import React from 'react';
import './digitalMarketing.css';
import { Megaphone, BarChart, Globe2, Users2, Mail, Target, PenTool, Award } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import digiLogo from '../images/digi-logo.jpeg'; // 🔹 Add your DigiWize logo here

export default function DigitalMarketing() {
  return (
    <div className="digital-marketing-page">
      {/* Hero Section */}
      <section className="marketing-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <img src={digiLogo} alt="DigiWize Logo" className="digi-logo" />
          <h1>Digital Marketing Excellence by <span className="highlight">DigiWize</span></h1>
          <p>
            DigiWize — the digital powerhouse under <strong>BizWize UAE</strong> — specializes in creating brand success stories through strategy,
            innovation, and results-driven marketing. We bring visibility, engagement, and conversions to your business.
          </p>
          <a href="/contact"><button className="cta-btn btnav  ">Let’s Grow Your Brand</button></a>
        </div>
      </section>

      {/* DigiWize Info Section */}
      <section className="about-digiwize">
        <div className="digi-content">
          <h2 className='hh2'>About DigiWize</h2>
          <p>
            DigiWize is the dedicated <strong>Digital Marketing Division of BizWize UAE</strong>, crafted to deliver high-performance marketing 
            services tailored for modern brands. We understand the evolving digital landscape and help businesses stand out through 
            a perfect blend of technology, creativity, and data-driven strategies.
          </p>
          <p>
            Whether you’re a start-up looking for recognition or an established brand aiming to scale, our marketing professionals 
            ensure every click counts and every impression matters. DigiWize isn't just about ads — it’s about creating a digital 
            identity that thrives across platforms.
          </p>
          <ul>
            <li>✅ 360° Marketing Strategy under BizWize Expertise</li>
            <li>📈 Transparent Performance Tracking and Reporting</li>
            <li>🤝 Dedicated Support and Personalized Brand Consultancy</li>
          </ul>
        </div>
      </section>

      {/* Core Services */}
      <section className="marketing-services">
        <h2 className='hh2'>Our Core Marketing Services</h2>
        <div className="service-grid">
          {[
            {
              icon: <BarChart size={42} />,
              title: 'SEO Optimization',
              desc: 'Boost visibility through powerful SEO strategies that place your business at the top of search results.',
            },
            {
              icon: <Users2 size={42} />,
              title: 'Social Media Marketing',
              desc: 'Creative social media campaigns that connect your brand with your ideal audience across every platform.',
            },
            {
              icon: <Target size={42} />,
              title: 'PPC & Paid Ads',
              desc: 'ROI-driven Google, Meta, and TikTok ads designed for measurable business growth and lead generation.',
            },
            {
              icon: <PenTool size={42} />,
              title: 'Content & Branding',
              desc: 'Engaging storytelling, visuals, and branding that make your business unforgettable.',
            },
            {
              icon: <Mail size={42} />,
              title: 'Email Marketing',
              desc: 'Personalized email journeys that build loyalty and boost customer retention.',
            },
            {
              icon: <Globe2 size={42} />,
              title: 'Analytics & Strategy',
              desc: 'Comprehensive insights and data dashboards to continuously refine your digital performance.',
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

      {/* Why Choose DigiWize */}
      <section className="why-choose-dm">
        <h2 className='hh2'>Why Choose DigiWize?</h2>
        <p>
          As BizWize’s specialized digital division, DigiWize bridges creativity and analytics to deliver 
          end-to-end marketing excellence. We’re not just marketers — we’re growth partners.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <Award size={48} />
            <h4>Certified Experts</h4>
            <p>Our team includes certified Google Ads, Meta Ads, and SEO professionals.</p>
          </div>
          <div className="why-card">
            <Target size={48} />
            <h4>Performance Focused</h4>
            <p>Every campaign is data-backed and result-oriented for measurable business growth.</p>
          </div>
          <div className="why-card">
            <Globe2 size={48} />
            <h4>Global Reach</h4>
            <p>We manage campaigns across UAE, GCC, and international markets with cultural precision.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Let’s Amplify Your Brand with DigiWize</h2>
        <p>
          Join hundreds of businesses that have scaled their digital presence with our strategic expertise.
        </p>
       <a href="/contact">  <button className="cta-btn"> 
Book Your Free Consultation
</button></a> 
      </section>

      <WhatsAppButton />
    </div>
  );
}
