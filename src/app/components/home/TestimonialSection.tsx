'use client';

import React, { useState, useEffect } from 'react';
import testimonialsData from '../../data/testimonials.json';

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const currentTestimonialData = testimonialsData[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>What our students are saying</h2>
          <div className="section-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card relative">
            <div className="card-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                 
                  <h3 className="text-xl font-bold text-gray-800">{currentTestimonialData.name}</h3>
                  <p className="text-gray-600">{currentTestimonialData.role}</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4 text-lg">
                    &ldquo;{currentTestimonialData.review}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(currentTestimonialData.rating)].map((_, index) => (
                      <svg key={index} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fbbf24"/>
                      </svg>
                    ))}
                    <span className="text-gray-600">{currentTestimonialData.rating}.0 ({currentTestimonialData.reviews} Reviews)</span>
                  </div>
                </div>
              </div>
              
              {/* Large quotation mark */}
              <div className="absolute top-4 right-4 text-gray-200 text-6xl">
                &ldquo;
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
