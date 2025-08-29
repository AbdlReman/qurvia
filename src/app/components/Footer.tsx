import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-title">
              <span className="text-red-600">■</span> Echooling.
            </div>
            <p className="text-gray-300 mb-4">
              There are course and event custom post types so you can easily create and manage course, events. 
              The system is built with modern technologies.
            </p>
            <ul className="footer-links">
              <li><a href="tel:+(402)76244183">+(402) 762 441 83</a></li>
              <li><a href="mailto:info@echooling.com">info@echooling.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Become a Teacher</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#">Browse Library</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">News & Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get the latest Echooling news delivered to you inbox
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
          <div>© {new Date().getFullYear()} <a href="#" className="text-white">Echooling.</a> All Rights Reserved</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Follow us</span>
            <ul className="social-links">
              <li><a href="#"><span>📘</span></a></li>
              <li><a href="#"><span>🐦</span></a></li>
              <li><a href="#"><span>💼</span></a></li>
              <li><a href="#"><span>📷</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


