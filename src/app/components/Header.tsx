'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-contact">
              <a href="tel:(+00)123456789">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                (+00) 123 456 789
              </a>
              <a href="mailto:info@echooling.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@echooling.com
              </a>
            </div>
            
            <ul className="social-links">
              <li><a href="#"><span>📘</span></a></li>
              <li><a href="#"><span>🐦</span></a></li>
              <li><a href="#"><span>💼</span></a></li>
              <li><a href="#"><span>📷</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="navbar">
        <div className="container">
          <div className="nav-content">
                         <Link href="/" className="logo">
               <span className="text-red-600">■</span> Echooling.
             </Link>
            
            <ul className={`nav-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            
            <div className={`search-section ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
              <input 
                type="text" 
                placeholder="Search Courses" 
                className="search-input"
              />
              <a href="#" className="btn btn-outline">Login</a>
              <a href="#" className="btn btn-primary">Register</a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
