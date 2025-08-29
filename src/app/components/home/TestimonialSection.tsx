import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>What our student saying</h2>
          <div className="section-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="card-content">
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                 <div className="text-center">
                   <img 
                     src="/images/testimonial/testimonial.png" 
                     alt="Justin Case" 
                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                   />
                   <h3 className="text-xl font-bold text-gray-800">Justin Case</h3>
                   <p className="text-gray-600">Student</p>
                 </div>
                 
                 <div className="md:col-span-2">
                                       <p className="text-gray-600 mb-4 text-lg">
                      &ldquo;Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, 
                      convallis at tellus. The learning experience here has been absolutely transformative.&rdquo;
                    </p>
                   
                   <div className="flex items-center gap-2 mb-4">
                     {[1, 2, 3, 4, 5].map((star) => (
                       <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fbbf24"/>
                       </svg>
                     ))}
                     <span className="text-gray-600">4.9 (14 Reviews)</span>
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
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
