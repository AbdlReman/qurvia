import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with us for any questions about our Islamic education programs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="enrollment">Course Enrollment</option>
                      <option value="quran">Quran Memorization</option>
                      <option value="tajweed">Tajweed Classes</option>
                      <option value="islamic-studies">Islamic Studies</option>
                      <option value="arabic">Arabic Language</option>
                      <option value="online">Online Learning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+92 316 5677624</p>
                      <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">info@qurviaacademy.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Qurvia Quran International Academy<br />
                        Islamic Education Center<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🕒</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="/about" className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                      <span className="text-lg">📘</span>
                    </a>
                    <a href="/about" className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                      <span className="text-lg">🐦</span>
                    </a>
                    <a href="/about" className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                      <span className="text-lg">💼</span>
                    </a>
                    <a href="/about" className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                      <span className="text-lg">📷</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our Islamic education programs
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  What age groups do you teach?
                </h3>
                <p className="text-gray-600">
                  We offer programs for all age groups, from children as young as 5 years old to adults. 
                  Our curriculum is tailored to different age groups and learning levels.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Do you offer online classes?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide both online and in-person classes. Our online platform allows students 
                  from anywhere in the world to access our Islamic education programs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  How long does it take to complete Quran memorization?
                </h3>
                <p className="text-gray-600">
                  The duration varies depending on the student's dedication and learning pace. 
                  Typically, complete Quran memorization takes 2-3 years with regular study.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Are your teachers certified?
                </h3>
                <p className="text-gray-600">
                  Yes, all our teachers are certified Islamic scholars with extensive experience 
                  in teaching Quran and Islamic studies. They hold proper qualifications and certifications.
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
