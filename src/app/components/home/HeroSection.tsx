import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">Great Quality Social life</span>
            <h1 className="hero-title">Discover the world of<br /> possible university.</h1>
            <a href="#" className="hero-btn">Let&apos;s Talk</a>
          </div>
          <div className="video-section">
            <div className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" fill="#1e3a8a"/>
              </svg>
            </div>
            <p>Watch Video Intro</p>
          </div>
        </div>
      </div>
      {/* Navigation arrows */}
      <div className="hero-nav">
        <button className="hero-nav-btn hero-nav-prev">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="hero-nav-btn hero-nav-next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
