import React from 'react';

const PopularCoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      image: "/images/resources/service_2_1.jpg",
      tags: ["Quran", "30 Juz"],
      title: "Complete Quran Memorization (Hifz)",
      students: "45 Students",
      price: "$150.00"
    },
    {
      id: 2,
      image: "/images/resources/service_2_2.jpg",
      tags: ["Tajweed", "12 Lessons"],
      title: "Advanced Tajweed & Qira'ah",
      students: "38 Students",
      price: "$120.00"
    },
    {
      id: 3,
      image: "/images/resources/service_2_3.jpg",
      tags: ["Islamic", "16 Lessons"],
      title: "Islamic Studies & Fiqh",
      students: "52 Students",
      price: "$100.00"
    },
    {
      id: 4,
      image: "/images/resources/feature-img2.jpg",
      tags: ["Arabic", "20 Lessons"],
      title: "Arabic Language & Grammar",
      students: "41 Students",
      price: "$90.00"
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>Popular Islamic Courses</h2>
          <div className="section-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="card">
              <img src={course.image} alt={course.title} className="card-image" />
              <div className="card-content">
                <div className="flex gap-2 mb-3">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="card-title mb-3">{course.title}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{course.students}</span>
                  </div>
                  <span className="font-bold text-red-600">{course.price}</span>
                </div>
                
                <a href="#" className="card-link">View Details →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="btn btn-primary">View All Courses →</a>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
