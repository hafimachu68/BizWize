import React from 'react'; 
import './nav.css';
import group8 from '../images/group87.png';
import { Briefcase, Users2, Megaphone, ClipboardList, Building2, Calculator } from 'lucide-react'; // Import icons
import web from '../images/wformg.png'; // Import your logo file
import blog from '../images/blog.png'; // Import your logo file
import Wiki from '../images/wiki.png'; // Import your logo file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid nav-fluid">
        <a className="navbar-brand log" href="/">
          <img className="logo-img mr-3" src={group8} alt="" width="268" height="52" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
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

            {/* <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usecases
              </a>
              <ul className="dropdown-menu usecase-menu" aria-labelledby="navbarDropdown2">
                <li className="usec-item pt-3">
                  <a className='link' href="/Usecase1">
                    <div className="platform-text us-item">
                      <h6 className="udrop">Use case 01</h6>
                      <p className='udropara'>A cutting-edge attendance management solution designed with the efficiency and simplicity in mind.</p>
                    </div>
                  </a>
                </li>
                <li className="usec-item pt-3">
                  <a className='link' href="/Usecase2">
                    <div className="platform-text us-item">
                      <h6 className="udrop">Use case 02</h6>
                      <p className='udropara'>A van sales management mobile app that can be easily customized, using low-code technology.</p>
                    </div>
                  </a>
                </li>
                <li className="usec-item pt-3">
                  <a className='link' href="/Usecase3">
                    <div className="platform-text us-item">
                      <h6 className="udrop">Use case 03</h6>
                      <p className='udropara'>A dynamic customer relationship management (CRM) application, meticulously crafted using low-code technology.</p>
                    </div>
                  </a>
                </li>
                <li className="usec-item pt-3" style={{ opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' }}>
                  <a className="link" href="#">
                    <div className="platform-text us-item">
                      <h6 className="udrop">Use case 04</h6>
                      <p className="udropara">
                        A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </li> */}

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
                        <i><img className='pv me-2' src={web} alt="" /></i>FAQs
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="rsec-item my-2">
                  <a className='link' href="/blog">
                    <div className="platform-text rs-text">
                      <h6 className="hedrop">
                        <i><img className='pv me-2' src={blog} alt="" /></i>Blog
                      </h6>
                    </div>
                  </a>
                </li>
                <li className="rsec-item my-2">
                  <a className='link' href="/wiki">
                    <div className="platform-text rs-text">
                      <h6 className="hedrop">
                        <i><img className='pv me-2' src={Wiki} alt="" /></i>Wiki
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