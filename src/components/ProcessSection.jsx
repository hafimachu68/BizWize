import React, { useState } from 'react';
import { Users, MapPin, FileText, IdCard, Landmark, ChevronRight, ArrowRight } from 'lucide-react';
import './ProcessSection.css';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Users size={48} />,
      title: "Book A Free Consultation",
      desc: "Our team of business setup consultants in Dubai is here to help you get started. Let us know your business activities, number of shareholders, and office space needs, and we will put together a custom package tailored exactly to your vision.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <MapPin size={48} />,
      title: "Choosing The Ideal Location",
      desc: "Choose the right location for your business, whether you prefer the UAE mainland, a leading free zone, or an offshore option. BizWize Business Setup offers customised and affordable solutions based on your target market.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <FileText size={48} />,
      title: "License Application",
      desc: "BizWize has a skilled operations team ready to help you. We handle your applications and get your Memorandum of Association, Company Incorporation Certificate, and manage all the complex paperwork securely.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <IdCard size={48} />,
      title: "Visa & Emirates ID Processing",
      desc: "If you are an entrepreneur in the UAE, you will need residency visas for yourself, your family, partners, and employees. BizWize handles the entire visa process, medical appointments, and biometrics seamlessly.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Landmark size={48} />,
      title: "Business Banking Assistance",
      desc: "After you finish the previous steps, the last thing you need to do is open a corporate bank account. We assist with KYC, AML compliance, and provide direct introductions to top-tier UAE digital and traditional banks.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="process-premium-wrapper">
      <div className="process-header">
        <h2 className="process-title">Steps To Company Formation In <span className="text-glow">The UAE</span></h2>
        <p className="process-subtitle">Interact with the timeline below to explore our streamlined 5-step process.</p>
      </div>
      
      <div className="process-interactive-container">
        
        {/* Left Sidebar (Tabs) */}
        <div className="process-sidebar">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`process-tab ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="tab-progress-line"></div>
              <div className="tab-number">0{idx + 1}</div>
              <div className="tab-title">{step.title}</div>
            </div>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="process-content-display">
          <div className="display-inner-card">
            
            <div className="display-content-col">
              <div className="display-icon-wrapper">
                {steps[activeStep].icon}
              </div>
              
              <div className="display-number-bg">0{activeStep + 1}</div>
              
              <div className="display-text-content">
                <h3>{steps[activeStep].title}</h3>
                <p>{steps[activeStep].desc}</p>
              </div>

              <div className="display-actions">
                {activeStep < steps.length - 1 ? (
                  <button 
                    className="next-step-btn" 
                    onClick={() => setActiveStep(activeStep + 1)}
                  >
                    Next Step <ArrowRight size={18} />
                  </button>
                ) : (
                  <a href="/contact" className="final-cta-btn">
                    Start Your Business Journey <ChevronRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="display-image-col">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title} 
                key={steps[activeStep].image} /* Force re-render for transition */
                className="step-image-fade"
              />
              <div className="image-overlay-gradient"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
