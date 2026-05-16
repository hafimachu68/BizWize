import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CostCalculator.css';

export default function CostCalculator() {
  const [jurisdiction, setJurisdiction] = useState('Freezone');
  const [visas, setVisas] = useState(0);
  const [activity, setActivity] = useState('Professional');
  const [estimatedCost, setEstimatedCost] = useState(0);

  // Pricing Logic Calculation
  useEffect(() => {
    let basePrice = 0;
    
    if (jurisdiction === 'Freezone') {
      basePrice = activity === 'Trading' ? 8500 : 5750;
    } else {
      basePrice = activity === 'F&B' ? 15000 : 12000;
    }

    const visaCost = visas * 3500;
    
    // Add small random variation to make it look like a dynamic quote range
    const total = basePrice + visaCost;
    setEstimatedCost(total);
  }, [jurisdiction, visas, activity]);

  return (
    <section className="calculator-section" id="cost-calculator">
      <div className="calc-glow-bg"></div>
      
      <div className="calc-container">
        <div className="calc-header">
          <h2>Instant Setup Cost <span className="text-glow">Estimator</span></h2>
          <p>Get a precise cost breakdown for your UAE business setup in seconds. No hidden fees.</p>
        </div>

        <div className="calc-grid">
          {/* Controls Side */}
          <div className="calc-controls-card">
            <div className="calc-group">
              <label>Jurisdiction</label>
              <div className="toggle-group">
                <button 
                  className={`toggle-btn ${jurisdiction === 'Freezone' ? 'active' : ''}`}
                  onClick={() => setJurisdiction('Freezone')}
                >
                  Freezone
                </button>
                <button 
                  className={`toggle-btn ${jurisdiction === 'Mainland' ? 'active' : ''}`}
                  onClick={() => setJurisdiction('Mainland')}
                >
                  Mainland
                </button>
              </div>
            </div>

            <div className="calc-group">
              <label>Number of Visas: <span className="text-glow">{visas}</span></label>
              <div className="visa-slider-container">
                <input 
                  type="range" 
                  min="0" 
                  max="10" 
                  value={visas} 
                  onChange={(e) => setVisas(parseInt(e.target.value))}
                  className="visa-slider"
                />
              </div>
            </div>

            <div className="calc-group">
              <label>Business Activity</label>
              <select 
                className="calc-select"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              >
                <option value="Professional">Professional / Consultancy</option>
                <option value="Trading">General Trading</option>
                <option value="E-commerce">E-commerce</option>
                <option value="F&B">Food & Beverage (F&B)</option>
                <option value="Industrial">Industrial / Manufacturing</option>
              </select>
            </div>
          </div>

          {/* Result & Lead Capture Side */}
          <div className="calc-result-card">
            <div className="result-label">Estimated Starting Cost</div>
            <div className="result-price">
              <span>AED</span> {estimatedCost.toLocaleString()}
            </div>
            <p className="result-disclaimer">
              *Estimate excludes custom approvals and office rent. For exact pricing, get a detailed quote.
            </p>

            <form action="https://formsubmit.co/info@bizwizeuae.com" method="POST" className="calc-form">
              <input type="hidden" name="_subject" value="New Cost Calculator Lead - BizWize" />
              <input type="hidden" name="Jurisdiction" value={jurisdiction} />
              <input type="hidden" name="Visas" value={visas} />
              <input type="hidden" name="Activity" value={activity} />
              <input type="hidden" name="EstimatedCost" value={`AED ${estimatedCost}`} />
              
              <input type="text" name="name" className="calc-input" placeholder="Your Full Name" required />
              <input type="tel" name="phone" className="calc-input" placeholder="Phone / WhatsApp" required />
              
              <button type="submit" className="calc-submit">
                Get Exact Quote Breakdown <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Moved Industries List here */}
      <div className="calc-industries-compact-list">
        <p className="calc-industries-label">Industries We Serve:</p>
        <div className="calc-industries-badges">
          <span>Restaurants</span>
          <span>Cloud Kitchens</span>
          <span>Cafes</span>
          <span>E-commerce</span>
          <span>General Trading</span>
          <span>Freelancers</span>
          <span>Beauty Salons</span>
          <span>Technical Services</span>
        </div>
      </div>
    </section>
  );
}
