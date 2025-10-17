import React from 'react'; 
import './nav.css';
import group8 from '../images/group87.png';
import pv from '../images/pv.png'; // Import your logo file
import web from '../images/wformg.png'; // Import your logo file
import dument from '../images/docub.png'; // Import your logo file
import report from '../images/reportd.png'; // Import your logo file
import api from '../images/apid.png'; // Import your logo file
import mob from '../images/mobd.png'; // Import your logo file
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
                        <a className='link' href="/platform">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='po' src={pv} alt="" /></i>Platform Overview
                            </h6>
                            <p className='dropara'>
                              Build custom applications using Low-code technology empowering your business
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/webform">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='pv' src={web} alt="" /></i>Web Forms
                            </h6>
                            <p className='dropara'>
                              Create powerful multi-lingual, multi-currency enterprise web forms.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/documents">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='pv' src={dument} alt="" /></i>Documents
                            </h6>
                            <p className='dropara'>
                              A document management system that seamlessly integrates into your business process.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/report">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='pv' src={report} alt="" /></i>Reports
                            </h6>
                            <p className='dropara'>
                              Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/api">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='pv' src={api} alt="" /></i>APIs
                            </h6>
                            <p className='dropara'>
                              Efficiently integrate third-party applications into your workflow using our futuristic API builder.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/mobileapp">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='mv' src={mob} alt="" /></i>Mobile Apps
                            </h6>
                            <p className='dropara'>
                              Transform your organization's internal processes with our low-code mobile app platform.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li className="platform-item my-2">
                        <a className='link' href="/chatbot">
                          <div className="platform-text">
                            <h6 className="hedrop">
                              <i><img className='pv' src={web} alt="" /></i>Chat Bots
                            </h6>
                            <p className='dropara'>
                              Elevate customer interactions with our low-code chatbot tool.
                            </p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li className="nav-item dropdown mx-4">
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
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/about">About Us</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">Pricing</a>
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
              <a href="https://zcal.co/sureba73">
                <button className="btn btnav text-light" type="submit">Book A Demo</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;