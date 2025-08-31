import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Quran Memorization (Hifz)",
      description: "Complete Quran memorization program with proper Tajweed and understanding",
      image: "/images/resources/service_2_1.jpg",
      duration: "2-3 Years",
      level: "Beginner to Advanced",
      price: "$150/month",
      features: ["Complete Quran Memorization", "Tajweed Rules", "Memorization Techniques", "Regular Assessments"]
    },
    {
      id: 2,
      title: "Tajweed & Qira'ah",
      description: "Master the art of Quran recitation with proper pronunciation and rules",
      image: "/images/resources/service_2_2.jpg",
      duration: "6-12 Months",
      level: "Intermediate",
      price: "$120/month",
      features: ["Tajweed Rules", "Qira'ah Styles", "Pronunciation Practice", "Audio Training"]
    },
    {
      id: 3,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering Fiqh, Hadith, and Islamic history",
      image: "/images/resources/service_2_3.jpg",
      duration: "1-2 Years",
      level: "All Levels",
      price: "$100/month",
      features: ["Islamic Jurisprudence", "Hadith Studies", "Islamic History", "Contemporary Issues"]
    },
    {
      id: 4,
      title: "Arabic Language",
      description: "Learn Classical Arabic for better understanding of Islamic texts",
      image: "/images/resources/feature-img2.jpg",
      duration: "1 Year",
      level: "Beginner to Intermediate",
      price: "$80/month",
      features: ["Classical Arabic", "Grammar & Syntax", "Text Analysis", "Writing Skills"]
    },
    {
      id: 5,
      title: "Islamic Ethics & Morals",
      description: "Study Islamic ethics, character building, and moral values",
      image: "/images/resources/gallery_1_1.jpg",
      duration: "6 Months",
      level: "All Levels",
      price: "$60/month",
      features: ["Islamic Ethics", "Character Building", "Moral Values", "Practical Application"]
    },
    {
      id: 6,
      title: "Islamic Finance",
      description: "Learn about Islamic banking, finance, and economic principles",
      image: "/images/resources/gallery_1_2.jpg",
      duration: "8 Months",
      level: "Intermediate to Advanced",
      price: "$90/month",
      features: ["Islamic Banking", "Financial Principles", "Economic Ethics", "Modern Applications"]
    }
  ];

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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Available Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Choose from our comprehensive selection of Islamic education programs
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                    {/* Course Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {course.level}
                      </div>
                    </div>
                    
                    {/* Course Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {course.description}
                      </p>
                      
                      {/* Course Details */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">Duration:</span> {course.duration}
                        </div>
                        <div className="text-lg font-bold text-emerald-600">
                          {course.price}
                        </div>
                      </div>
                      
                      {/* Course Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Enroll Button */}
                      <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium group-hover:shadow-lg">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
