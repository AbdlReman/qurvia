import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-title">
              <span className="text-secondary-600">■</span> Qurvia Academy.
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to excellence in Quranic education and Islamic studies. 
              We provide comprehensive learning programs for students of all ages 
              in a nurturing spiritual environment.
            </p>
            <ul className="footer-links">
              <li><a href="tel:+923165677624">+92 316 5677624</a></li>
              <li><a href="mailto:info@qurviaacademy.com">info@qurviaacademy.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-links">
              <li><Link href="/about">About Academy</Link></li>
              <li><Link href="/courses">Quran Courses</Link></li>
              <li><Link href="/courses">Islamic Studies</Link></li>
              <li><Link href="/about">Our Teachers</Link></li>
              <li><Link href="/contact">Join as Teacher</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><Link href="/courses">Quran Library</Link></li>
              <li><Link href="/courses">Islamic Resources</Link></li>
              <li><Link href="/about">Partners</Link></li>
              <li><Link href="/about">News & Updates</Link></li>
              <li><Link href="/contact">FAQ</Link></li>
              <li><Link href="/courses">Learning Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get the latest Qurvia Academy news and Islamic education updates
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button className="newsletter-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} <Link href="/" className="text-white">Qurvia Academy.</Link> All Rights Reserved</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Follow us</span>
            <ul className="social-links">
              <li>
                <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h3.8l5.2 6.9L17.6 3H21l-7.1 9.3L21 21h-3.8l-5.4-7.2L6.4 21H3l7.5-9.7L3 3Z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.06c.52-1 1.8-2.06 3.7-2.06 3.96 0 4.7 2.6 4.7 6V23h-4v-6.5c0-1.54-.03-3.52-2.15-3.52-2.16 0-2.5 1.67-2.5 3.4V23h-4V8.5Z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .4 1.5.8.5.4.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1.1-1 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1.1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1.1.9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.6 0-4.8.1-1.1.1-1.7.2-2 .3-.5.2-.8.3-1 .6-.3.3-.5.6-.6 1-.1.3-.2.9-.3 2-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.1.2 1.7.3 2 .1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.9.2 2 .3 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.1-.1 1.7-.2 2-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.2-.9.3-2 .1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.1-.2-1.7-.3-2-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.9-.2-2-.3-1.2-.1-1.6-.1-4.8-.1Zm0 3.3A6.7 6.7 0 1 1 12 20a6.7 6.7 0 0 1 0-12.7Zm0 11A4.3 4.3 0 1 0 12 7.3a4.3 4.3 0 0 0 0 8.6Zm6.9-11.9a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


