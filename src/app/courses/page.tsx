import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import coursesData from '../data/courses.json';

export default function CoursesPage() {
  const courses = coursesData.courses;

  const categories = [
    {
      icon: "📖",
      title: "Quran Studies",
      count: "3 Courses",
      description: "Memorization, recitation, and understanding"
    },
    {
      icon: "🕌",
      title: "Islamic Studies",
      count: "2 Courses",
      description: "Jurisprudence, history, and ethics"
    },
    {
      icon: "🔤",
      title: "Arabic Language",
      count: "1 Course",
      description: "Classical Arabic and grammar"
    }
  ];

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert Teachers",
      description: "Learn from certified Islamic scholars and Quran teachers"
    },
    {
      icon: "📱",
      title: "Flexible Learning",
      description: "Online and offline classes available for your convenience"
    },
    {
      icon: "📚",
      title: "Comprehensive Curriculum",
      description: "Well-structured programs covering all aspects of Islamic education"
    },
    {
      icon: "🎯",
      title: "Personalized Attention",
      description: "Small class sizes ensuring individual attention and progress"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Our Islamic Courses
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover comprehensive Islamic education programs designed to nurture your spiritual growth
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Course Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore our diverse range of Islamic education programs
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                    <p className="text-emerald-600 font-semibold mb-3">{category.count}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Available Courses */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="section-title">
              <h2>All Available Courses</h2>
              <div className="section-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="card">
                  <img src={course.image} alt={course.title} className="card-image" />
                  <div className="card-content">
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded font-medium">
                        {course.level}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {course.duration}
                      </span>
                    </div>
                    
                    <h3 className="card-title mb-3">{course.title}</h3>
                    
                    <p className="card-text mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">Students</span>
                      </div>
                      <span className="font-bold text-emerald-600 text-lg">{course.price}</span>
                    </div>
                    
                    <a href={`/courses/${course.id}`} className="card-link">View Details →</a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a href="#" className="btn btn-primary">View All Courses →</a>
            </div>
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Experience the best in Islamic education with our comprehensive programs
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Islamic Education?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
              Join our community of learners and start your journey towards Islamic knowledge and spiritual growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse All Courses
              </button>
              <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Contact Advisor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
