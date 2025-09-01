'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Bar - Hidden on mobile */}
      <div className="topbar hidden md:block">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-contact">
              <a href="tel:+923165677624">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +92 316 5677624
              </a>
              <a href="mailto:info@qurviaacademy.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@qurviaacademy.com
              </a>
            </div>
            
            <ul className="social-links">
              <li><a href="/about"><span>📘</span></a></li>
              <li><a href="/about"><span>🐦</span></a></li>
              <li><a href="/about"><span>💼</span></a></li>
              <li><a href="/about"><span>📷</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="navbar">
        <div className="container">
          <div className="nav-content">
            {/* Logo - Left side on mobile, always visible */}
            <Link href="/" className="logo" aria-label="Qurvia Academy Home">
              <Image src="/images/logo.png" alt="Qurvia Academy" width={120} height={28} priority />
            </Link>
            
            {/* Desktop Navigation Menu */}
            <ul className="nav-menu desktop-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            
                         {/* Desktop Buttons */}
             <div className="search-section desktop-search">
               <a href="/auth/signin" className="btn btn-outline">Login</a>
               <a href="/auth/signup" className="btn btn-primary">Join Now</a>
             </div>
            
            {/* Mobile Menu Toggle - Right side on mobile */}
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
          
          {/* Mobile Menu Dropdown */}
          <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-menu">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link href="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
            
                         <div className="mobile-search-section">
               <div className="mobile-buttons">
                 <a href="/auth/signin" className="btn btn-outline mobile-btn">Login</a>
                 <a href="/auth/signup" className="btn btn-primary mobile-btn">Join Now</a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
