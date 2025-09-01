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
              <li><Link href="/about"><span>📘</span></Link></li>
              <li><Link href="/about"><span>🐦</span></Link></li>
              <li><Link href="/about"><span>💼</span></Link></li>
              <li><Link href="/about"><span>📷</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


