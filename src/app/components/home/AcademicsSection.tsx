import React from 'react';

const AcademicsSection: React.FC = () => {
  const academics = [
    {
      id: 1,
      title: "Let's Talk Science",
      image: "/images/service/1.png",
      link: "#"
    },
    {
      id: 2,
      title: "Innovative Courses",
      image: "/images/service/2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Cloud Storage",
      image: "/images/service/3.png",
      link: "#"
    },
    {
      id: 4,
      title: "Online Education",
      image: "/images/service/4.png",
      link: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>Academics</h2>
          <div className="section-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-8">
          {academics.map((item) => (
            <div key={item.id} className="card">
              <div className="card-content text-center">
                <div className="mb-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <a href={item.link} className="card-link">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
