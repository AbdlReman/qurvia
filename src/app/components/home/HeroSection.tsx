"use client";
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/resources/banner.jpg",
      title: "Discover the Beauty of Quran Learning & Islamic Studies",
      subtitle: "Excellence in Islamic Education",
      description: "Embark on a spiritual journey of Quranic learning and Islamic education"
    },
    {
      id: 2,
      image: "/images/resources/banner2.jpg",
      title: "Master the Art of Quran Recitation",
      subtitle: "Advanced Tajweed & Qira'ah",
      description: "Learn proper Tajweed rules and perfect your Quran recitation"
    },
    {
      id: 3,
      image: "/images/resources/hero_5_3.jpg",
      title: "Comprehensive Islamic Studies Program",
      subtitle: "Traditional & Modern Learning",
      description: "Study Islamic jurisprudence, Hadith, and Islamic history"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero relative h-screen md:h-screen overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center px-4 md:px-6 lg:px-8">
        <div className="hero-content w-full">
          <div className="hero-left max-w-full md:max-w-2xl">
            <span className="hero-tag text-xs md:text-sm lg:text-base mb-2 md:mb-3 block">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="hero-description text-white/90 mb-4 md:mb-6 max-w-lg text-sm md:text-base leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <a href="#" className="hero-btn inline-block bg-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-emerald-700 transition-colors">
              Start Your Journey
            </a>
          </div>
          
          {/* Video section - hidden on mobile, visible on desktop */}
          <div className="video-section hidden md:block">
            <div className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" fill="#1e3a8a"/>
              </svg>
            </div>
            <p className="text-white text-sm">Watch Academy Tour</p>
          </div>
        </div>
      </div>

      {/* Navigation arrows - hidden on mobile, visible on desktop */}
      <div className="hero-nav hidden md:flex">
        <button 
          className="hero-nav-btn hero-nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="hero-nav-btn hero-nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile navigation arrows - visible only on mobile */}
      <div className="md:hidden absolute bottom-20 left-4 right-4 flex justify-between z-20">
        <button 
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute bottom-8 right-8 z-20 text-white/80 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Mobile slide counter - visible only on mobile */}
      <div className="md:hidden absolute bottom-4 right-4 z-20 text-white/80 text-xs">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroSection;
