import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import './about.css';

import storyImg from '../images/ab3.png';
import missionImg from '../images/ab4.png';
import visionImg from '../images/ab1.png';
import whyImg from '../images/ab2.png';

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span>BizWize</span></h1>
          <p>
            BizWize empowers entrepreneurs and companies to establish and grow their businesses in the UAE.
            From Free Zone to Mainland and Offshore, we provide seamless, reliable business setup solutions
            designed to make your entrepreneurial journey effortless.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="content-image">
          <img src={storyImg} alt="BizWize Story" />
          <div className="text">
            <h2 className="underline-title">Our Story</h2>
            <p>
              Founded with a passion for entrepreneurship, BizWize began with a simple goal — to simplify the process
              of company formation and help visionaries turn their ideas into thriving businesses. Over the years, 
              we’ve built a strong reputation as a trusted partner for startups and established firms alike.
            </p>
            <p>
              Our team of experts ensures a smooth experience from licensing to launch — so you can focus on your dream
              while we handle the rest.
            </p>
            <p className="highlight">
              "Your business dreams, our expertise – together we make them happen."
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="content-image reverse">
          <img src={missionImg} alt="BizWize Mission" />
          <div className="text">
            <h2 className="underline-title">Our Mission</h2>
            <p>
              To provide transparent, fast, and professional business setup services that allow entrepreneurs
              to focus on growth and innovation. We strive to be a catalyst for success by removing barriers
              and simplifying complex legal frameworks.
            </p>
            <ul className="key-points">
              <li>Comprehensive business setup guidance</li>
              <li>Customized solutions for Free Zone, Mainland & Offshore</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Reliable support at every step</li>
              <li>Empowering you to build confidently in the UAE</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision">
        <div className="content-image">
          <img src={visionImg} alt="BizWize Vision" />
          <div className="text">
            <h2 className="underline-title">Our Vision</h2>
            <p>
              To become the UAE’s most trusted business setup consultancy, recognized for professionalism,
              innovation, and customer success. We envision a world where starting a business is not complicated,
              but an empowering experience for every dreamer.
            </p>
            <p>
              Our long-term goal is to inspire confidence, nurture entrepreneurship, and build a community
              of future-ready businesses that shape tomorrow’s economy.
            </p>
            <p className="highlight">
              "Empowering businesses. Building futures."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose BizWize */}
      <section className="about-why-choose">
        <h2 className="underline-title center">Why Choose BizWize</h2>
        <div className="content-image">
          <img src={whyImg} alt="Why Choose BizWize" />
          <div className="text">
            <ul className="why-points">
              <li>Expert knowledge of Free Zone, Mainland, and Offshore company formation</li>
              <li>Transparent pricing and fully tailored solutions</li>
              <li>Fast, efficient, and compliant documentation process</li>
              <li>Dedicated consultants for end-to-end support</li>
              <li>Innovative tools to accelerate your business setup</li>
              <li>Client-first approach with a proven track record of excellence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Launch Your Business?</h2>
        <p>Contact BizWize today and let our experts guide you to success. Your business journey starts here!</p>
        <Link to="/contact" className="cta-button">Get Consultation</Link>
      </section>

      <WhatsAppButton />
    </div>
  );
}
