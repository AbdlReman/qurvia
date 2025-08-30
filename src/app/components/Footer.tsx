import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-title">
              <span className="text-red-600">■</span> Qurvia Academy.
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
              <li><a href="#">About Academy</a></li>
              <li><a href="#">Quran Courses</a></li>
              <li><a href="#">Islamic Studies</a></li>
              <li><a href="#">Our Teachers</a></li>
              <li><a href="#">Join as Teacher</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#">Quran Library</a></li>
              <li><a href="#">Islamic Resources</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Learning Guides</a></li>
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
          <div>© {new Date().getFullYear()} <a href="#" className="text-white">Qurvia Academy.</a> All Rights Reserved</div>
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


