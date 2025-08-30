import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sheikh Ahmed Hassan",
      position: "Quran Memorization Expert",
      image: "/images/resources/team_1_1.jpg",
      experience: "15+ Years",
      specialization: "Hifz & Tajweed",
      description: "Certified Quran teacher with extensive experience in teaching memorization techniques and proper recitation."
    },
    {
      id: 2,
      name: "Ustadha Fatima Zahra",
      position: "Tajweed Specialist",
      image: "/images/resources/team_1_2.jpg",
      experience: "12+ Years",
      specialization: "Advanced Tajweed",
      description: "Expert in Tajweed rules and Qira'ah styles, helping students perfect their Quran recitation."
    },
    {
      id: 3,
      name: "Dr. Omar Abdullah",
      position: "Islamic Studies Professor",
      image: "/images/resources/team_1_3.jpg",
      experience: "20+ Years",
      specialization: "Fiqh & Hadith",
      description: "Renowned Islamic scholar with deep knowledge of Islamic jurisprudence and contemporary issues."
    },
    {
      id: 4,
      name: "Ustadha Aisha Rahman",
      position: "Arabic Language Instructor",
      image: "/images/resources/team_1_4.jpg",
      experience: "10+ Years",
      specialization: "Classical Arabic",
      description: "Specialized in teaching Arabic grammar and helping students understand Islamic texts."
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
                About Qurvia Academy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated to excellence in Quranic education and Islamic studies since 2009
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/images/resources/hero_5_3.jpg" 
                  alt="Qurvia Academy Mission" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
                <p className="text-gray-600 mb-6">
                  At Qurvia Academy, our mission is to provide comprehensive Islamic education 
                  that nurtures spiritual growth and academic excellence. We strive to create 
                  an environment where students can develop a deep connection with the Quran 
                  and Islamic teachings.
                </p>
                <p className="text-gray-600 mb-6">
                  Our vision is to become a leading institution in Islamic education, 
                  recognized for our commitment to traditional values combined with 
                  modern teaching methodologies.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-600">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-600">850+</div>
                    <div className="text-sm text-gray-600">Quran Memorizers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The foundation of our academy is built upon Islamic principles and values
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quranic Excellence</h3>
                <p className="text-gray-600">
                  We prioritize the highest standards in Quran memorization and recitation
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Service</h3>
                <p className="text-gray-600">
                  Serving our community through education and spiritual guidance
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Promoting lifelong learning and personal development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Qualified Teachers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our team of certified Islamic scholars and Quran teachers dedicated to your spiritual growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                        <p className="text-emerald-600 font-semibold mb-3">{member.position}</p>
                        
                        {/* Experience Badge */}
                        <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {member.experience} Experience
                        </div>
                        
                        {/* Specialization */}
                        <div className="text-sm text-gray-500 mb-4">
                          <span className="font-medium">Specialization:</span> {member.specialization}
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                        
                        {/* Contact Button */}
                        <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Team Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45</div>
                <div className="text-gray-600 font-medium">Certified Teachers</div>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1,200+</div>
                <div className="text-gray-600 font-medium">Active Students</div>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">850+</div>
                <div className="text-gray-600 font-medium">Quran Memorizers</div>
              </div>
              <div className="text-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
