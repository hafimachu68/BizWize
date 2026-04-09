import React from 'react';
import './digitalMarketing.css';
import { Megaphone, BarChart, Globe2, Users2, Mail, Target, PenTool, Award, Search, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';
import digiLogo from '../images/digi-logo.jpeg'; 

export default function DigitalMarketing() {
  
  const dmSteps = [
    { title: "Deep-Dive Audit", desc: "We run a comprehensive technical, SEO, and social audit of your current digital footprint." },
    { title: "Omnichannel Strategy", desc: "Crafting a data-driven plan integrating Google Ads, local SEO, and Meta campaigns." },
    { title: "Creative Execution", desc: "Deploying high-converting landing pages, ad copies, and thumb-stopping visual assets." },
    { title: "Tracking & Scaling", desc: "Implementing advanced GTM tracking and scaling campaigns to constantly lower your CPA." }
  ];

  const dmCaseStudy = {
    title: "Scaling a Local Dubai Retailer's E-Commerce Revenue",
    clientLabel: "UAE Luxury Retail Brand",
    challenge: "High customer acquisition cost (CAC) via traditional marketing and poor organic search visibility.",
    solution: "Overhauled their technical SEO, launched a localized Google Performance Max campaign, and retargeted via Instagram Reels.",
    result: "Achieved a 340% increase in online revenue with a 55% reduction in CAC within 4 months."
  };

  const dmFaqs = [
    { question: "How long does SEO take to rank my business in the UAE?", answer: "In competitive markets like Dubai and Abu Dhabi, noticeable SEO results usually take between 3 to 6 months. We focus on 'quick-wins' (Local SEO/Maps) while building long-term domain authority." },
    { question: "Do you manage high-budget performance ad campaigns?", answer: "Yes, our certified media buyers manage performance campaigns across Google, Meta, TikTok, and Snapchat, strictly optimizing for ROAS (Return on Ad Spend)." }
  ];

  return (
    <div className="digital-marketing-page premium-dm">
      <SEO 
        title="Digital Marketing Agency UAE | SEO & Ads by DigiWize"
        description="DigiWize by BizWize is the premier performance-driven Digital Marketing agency in the UAE. We specialize in ROI-focused SEO, Google Ads, and Social Media."
        url="https://www.bizwizeuae.com/digital-marketing"
      />
      
      {/* Premium Hero Section */}
      <section className="dm-hero-premium">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-bg"
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
        ></video>
        <div className="hero-gradient-overlay"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="hero-content">
          <img src={digiLogo} alt="DigiWize Official Logo" className="digi-logo-premium" />
          <div className="badge dm-badge">The Digital Powerhouse</div>
          <h1 className="dm-h1">Dominate the Digital <br/><span className="text-glow-dm">Landscape</span></h1>
          <p>
            Stop guessing with your marketing budget. DigiWize engineers high-performance, 
            data-driven campaigns that turn clicks into clients across the UAE and GCC.
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary-dm">Scale Your Brand <ArrowRight size={18}/></button></a>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="dm-metrics-strip">
        <div className="metrics-container">
          <div className="metric">
            <h3>400%</h3>
            <span>Average ROI</span>
          </div>
          <div className="metric">
            <h3>10M+</h3>
            <span>Ads Managed (AED)</span>
          </div>
          <div className="metric">
            <h3>Top 3</h3>
            <span>SEO Rankings Achieved</span>
          </div>
          <div className="metric">
            <h3>15+</h3>
            <span>Certified Experts</span>
          </div>
        </div>
      </section>

      {/* About DigiWize (Dark Glassmorphism) */}
      <section className="about-digiwize-premium">
        <div className="about-content-glass">
          <div className="about-text-col">
            <Zap size={40} className="glow-icon" />
            <h2>Data Meets <span className="text-glow-dm">Creativity.</span></h2>
            <p>
              DigiWize operates explicitly as the high-growth <strong>Digital Marketing Division of BizWize UAE</strong>. 
              We don’t just run vanity campaigns. We align highly targeted media buying with aggressive conversion rate optimization to scale modern brands perfectly.
            </p>
            <ul className="premium-list">
              <li><CheckCircle2 color="#ff3a7c" className="check" /> Full-Funnel Marketing Strategies</li>
              <li><CheckCircle2 color="#ff3a7c" className="check" /> Live Transparent Reporting Dashboards</li>
              <li><CheckCircle2 color="#ff3a7c" className="check" /> Deep Conversion Tracking (GTM & Pixel Experts)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="marketing-services-premium">
        <div className="section-header">
          <h2>Our Core Growth Engines</h2>
          <p>We deploy omni-channel strategies built strictly for scale.</p>
        </div>

        <div className="premium-grid dm-grid">
          {[
            {
              icon: <Search size={42} strokeWidth={1.5} />,
              title: 'SEO & Search Dominance',
              desc: 'Own the absolute top spots on Google. We execute technical SEO, high-authority backlinking, and semantic content mapping.',
            },
            {
              icon: <Target size={42} strokeWidth={1.5} />,
              title: 'Performance PPC Ads',
              desc: 'High ROAS Google and Meta Ads targeting precise buyer intent. We continuously A/B test to drop your cost-per-acquisition.',
            },
            {
              icon: <Users2 size={42} strokeWidth={1.5} />,
              title: 'Social Media Mastery',
              desc: 'Viral, community-driven social strategies that build brand loyalty across Instagram, TikTok, and LinkedIn in the GCC.',
            },
            {
              icon: <PenTool size={42} strokeWidth={1.5} />,
              title: 'Creative Content & Video',
              desc: 'Scroll-stopping videography, photography, and graphic design that communicates your exact brand velocity.',
            },
            {
              icon: <Mail size={42} strokeWidth={1.5} />,
              title: 'Retention Email Marketing',
              desc: 'Automated Klaviyo & Mailchimp flows that capture abandoned carts and maximize customer lifetime value (LTV).',
            },
            {
              icon: <BarChart size={42} strokeWidth={1.5} />,
              title: 'Analytics & CRO',
              desc: 'Advanced user-behavior tracking and landing page heatmapping to convert a higher percentage of the traffic you already possess.',
            },
          ].map((item, i) => (
            <div className="glass-feature-card dm-card" key={i}>
              <div className="icon-wrapper-dm">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-dm-premium">
        <h2 className='hh2'>The DigiWize Advantage</h2>
        <div className="why-grid">
          <div className="glass-panel text-center">
            <Award size={48} className="panel-icon"/>
            <h4>Platform Certified Partners</h4>
            <p>Our media buyers are strict platform specialists—Google Ads Certified and Meta Business Partners.</p>
          </div>
          <div className="glass-panel text-center">
            <BarChart size={48} className="panel-icon"/>
            <h4>Obsessed with ROAS</h4>
            <p>We don’t report on "likes" or "impressions" as success. We report on revenue, leads, and Return On Ad Spend.</p>
          </div>
          <div className="glass-panel text-center">
            <Globe2 size={48} className="panel-icon"/>
            <h4>Multilingual & Localized</h4>
            <p>We deploy perfectly localized Arabic and English copy tailored to the complex cultural nuances of the GCC.</p>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={dmSteps} caseStudy={dmCaseStudy} faqs={dmFaqs} />

      {/* Premium CTA Section */}
      <section className="premium-cta dm-cta-section">
        <div className="cta-glass-panel dm-glow">
          <h2>Ready to Outrank the Competition?</h2>
          <p>
            Drop the agencies that don't scale. Partner with DigiWize for aggressive 
            growth in the UAE market.
          </p>
          <a href="/contact"><button className="premium-btn cta-strong">Request a Free Marketing Audit <ArrowRight size={20}/></button></a>
        </div>
        <div className="cta-bg-elements">
           <div className="shape shape-pink"></div>
           <div className="shape shape-blue-dm"></div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
