import React from 'react'; 
import './nav.css';
import group8 from '../images/group87.png';
import { Briefcase, Users2, Megaphone, ClipboardList, Building2, Calculator, HelpCircle, FileText, Library } from 'lucide-react'; // Import icons

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid nav-fluid">
        <a className="navbar-brand log" href="/">
          <img className="logo-img mr-3" src={group8} alt="BizWize UAE Logo" width="268" height="52" />
        </a>
       <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{
    borderColor: 'white',
  }}
>
  <span
    className="navbar-toggler-icon"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
    }}
  ></span>
</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-left mb-2 mb-lg-0">
            <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu platform-menu" aria-labelledby="navbarDropdown1">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/business-setup">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><Briefcase size={24} className="me-2" /></i>
                              Business Set up
                            </h6>
                            <p className="dropara">
                              End-to-end support for company formation, licensing, and government approvals in the UAE.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>

                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/hr-solutions">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><Users2 size={24} className="me-2" /></i>
                              HR Solutions
                            </h6>
                            <p className="dropara">
                              Comprehensive HR outsourcing, recruitment, and employee management services tailored to your business.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/digital-marketing">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><Megaphone size={24} className="me-2" /></i>
                              Digital Marketing
                            </h6>
                            <p className="dropara">
                              Boost your online visibility with expert social media, SEO, and paid ad campaigns that deliver results.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>

                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/management-consultancy">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><ClipboardList size={24} className="me-2" /></i>
                              Management Consultancy
                            </h6>
                            <p className="dropara">
                              Strategic guidance to optimize operations, improve efficiency, and ensure sustainable business growth.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/facility-management">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><Building2 size={24} className="me-2" /></i>
                              Facility Management
                            </h6>
                            <p className="dropara">
                              Reliable facility maintenance, cleaning, and support services for commercial and residential properties.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>

                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className="link" href="/accounting-bookkeeping">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><Calculator size={24} className="me-2" /></i>
                              Accounting & Bookkeeping
                            </h6>
                            <p className="dropara">
                              Accurate, compliant financial management and bookkeeping for smooth business operations.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/about">About Us</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu uecase-menu" aria-labelledby="navbarDropdown3">
                <li className="rsec-item my-2">
                  <a className='link' href="/faq">
                    <div className="platform-text rs-text">
                      <h6 className="hedrop">
                        <i><HelpCircle className='me-2' size={22} color="#38bdf8" /></i>FAQs
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="rsec-item my-2">
                  <a className='link' href="/blog">
                    <div className="platform-text rs-text">
                      <h6 className="hedrop">
                        <i><FileText className='me-2' size={22} color="#38bdf8" /></i>Blog
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="rsec-item my-2">
                  <a className='link' href="/wiki">
                    <div className="platform-text rs-text">
                      <h6 className="hedrop">
                        <i><Library className='me-2' size={22} color="#38bdf8" /></i>Wiki
                      </h6>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

          <li className="nav-item demo">
  <a href="/digital-marketing" className="digiwize-link">
    <button className="btn btnavdigi text-light" type="submit">
      <span className="digi">Digi</span><span className="wize">Wize</span>
      <div className="subtext">THE DIGITAL MARKETING COMPANY</div>
    </button>
  </a>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;