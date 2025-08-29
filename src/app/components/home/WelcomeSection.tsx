import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Image collage */}
            <div className="relative">
              <img 
                src="/images/campus/cam.png" 
                alt="Students walking" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <img 
                src="/images/campus/4.png" 
                alt="University building" 
                className="w-full h-48 object-cover rounded-lg"
              />
              
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -right-4 -bottom-4 w-12 h-12 border-2 border-green-300 rounded-full opacity-50"></div>
              
              {/* Best Quality badge */}
              <div className="absolute top-4 right-4 bg-blue-100 p-3 rounded-lg">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue-800">Best Quality</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-800">Welcome to Echooling</span><br />
              <span className="text-red-600">LMS Platform</span>
            </h2>
            
            <p className="text-gray-600 mb-4">
              There are course and event custom post types so you can easily create and manage course, events. 
              The system is built with modern technologies and provides a seamless learning experience.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our platform offers comprehensive tools for educators and students alike, making online learning 
              accessible, engaging, and effective for everyone.
            </p>
            
            <a href="#" className="btn btn-primary mb-6">Read More →</a>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-600">support@react.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
