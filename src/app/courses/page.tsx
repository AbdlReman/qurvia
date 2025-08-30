import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      image: "/images/resources/service_2_1.jpg",
      category: "Quran Memorization",
      title: "Complete Quran Memorization (Hifz)",
      duration: "2-3 Years",
      students: "45 Students",
      price: "$150.00",
      description: "Complete memorization of the Holy Quran with proper Tajweed and understanding of meanings."
    },
    {
      id: 2,
      image: "/images/resources/service_2_2.jpg",
      category: "Tajweed",
      title: "Advanced Tajweed & Qira'ah",
      duration: "6 Months",
      students: "38 Students",
      price: "$120.00",
      description: "Master the rules of Tajweed and learn different Qira'ah styles with expert guidance."
    },
    {
      id: 3,
      image: "/images/resources/service_2_3.jpg",
      category: "Islamic Studies",
      title: "Islamic Studies & Fiqh",
      duration: "1 Year",
      students: "52 Students",
      price: "$100.00",
      description: "Comprehensive study of Islamic jurisprudence, Hadith, and Islamic history."
    },
    {
      id: 4,
      image: "/images/resources/feature-img2.jpg",
      category: "Arabic Language",
      title: "Arabic Language & Grammar",
      duration: "8 Months",
      students: "41 Students",
      price: "$90.00",
      description: "Learn classical Arabic grammar, vocabulary, and conversation skills."
    },
    {
      id: 5,
      image: "/images/resources/gallery_1_1.jpg",
      category: "Quran Recitation",
      title: "Quran Recitation for Beginners",
      duration: "4 Months",
      students: "35 Students",
      price: "$80.00",
      description: "Perfect for beginners to learn proper Quran recitation and basic Tajweed rules."
    },
    {
      id: 6,
      image: "/images/resources/gallery_1_2.jpg",
      category: "Islamic History",
      title: "Islamic History & Civilization",
      duration: "6 Months",
      students: "28 Students",
      price: "$75.00",
      description: "Explore the rich history of Islamic civilization and its contributions to humanity."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Our Islamic Courses
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of Quranic and Islamic education programs
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Categories</h2>
              <p className="text-gray-600">Choose from our specialized Islamic education programs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-emerald-200">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quran Memorization</h3>
                <p className="text-sm text-gray-600">Complete Hifz programs</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-emerald-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tajweed</h3>
                <p className="text-sm text-gray-600">Perfect recitation skills</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-emerald-200">
                <div className="text-4xl mb-4">🕌</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Islamic Studies</h3>
                <p className="text-sm text-gray-600">Fiqh and Islamic history</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-emerald-200">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Arabic Language</h3>
                <p className="text-sm text-gray-600">Grammar and conversation</p>
              </div>
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">All Available Courses</h2>
              <p className="text-gray-600">Comprehensive Islamic education for all levels</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-500">{course.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">{course.students}</span>
                      </div>
                      <span className="font-bold text-emerald-600">{course.price}</span>
                    </div>
                    
                    <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Courses?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the best in Islamic education with our proven methodology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Teachers</h3>
                <p className="text-gray-600">
                  Learn from certified Islamic scholars and qualified Quran teachers
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Online & Offline</h3>
                <p className="text-gray-600">
                  Flexible learning options with both online and in-person classes
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Regular assessments and progress reports to monitor your learning
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
