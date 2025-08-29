import React from 'react';

const CampusLifeSection: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "/images/campus/1.svg",
      title: "Do More, Stress Less",
      description: "Why I say old chap that is spiffing he legged it in my flat easy peasy."
    },
    {
      id: 2,
      icon: "/images/campus/2.svg",
      title: "The Business Intelligence",
      description: "Why I say old chap that is spiffing he legged it in my flat easy peasy."
    },
    {
      id: 3,
      icon: "/images/campus/3.svg",
      title: "System Administration",
      description: "Why I say old chap that is spiffing he legged it in my flat easy peasy."
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>Campus Life</h2>
          <div className="section-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-8">
              {features.map((feature) => (
                <li key={feature.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <a href="#" className="btn btn-primary">View All Courses →</a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/campus/cam.png" 
              alt="Students on campus" 
              className="w-full h-96 object-cover rounded-lg"
            />
            
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 w-8 h-8 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -left-4 -bottom-4 w-12 h-12 border-2 border-green-300 rounded-full opacity-50"></div>
            
            {/* Dotted line decoration */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-16 h-0.5 bg-green-300 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
