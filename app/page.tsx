'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/fieldpro.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-extrabold text-white mb-8 uppercase [text-shadow:_0_4px_16px_rgb(0_0_0_/_60%)]">
              AUTOMATING YOUR FUTURE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-roboto uppercase [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
              STREAMLINE YOUR WORKFLOW WITH INTELLIGENT SOLUTIONS
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-primary btn-lg">
                CONTACT
              </button>
              <button className="btn btn-secondary btn-lg">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-poppins">
              Stop Just Hearing About AI in the News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
              Learn how to add AI into your workflow and transform the way you do business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Implementation Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0013E0] to-[#01DF33] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 group-hover:border-white/40">
                <div className="h-64 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src="/fly1.png"
                    alt="Quick Implementation"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-2 text-black font-poppins">Quick Implementation</h3>
                  <p className="text-gray-600">
                    Get your AI solution up and running in hours, not days. Our streamlined process ensures rapid and efficient deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure and Reliable Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0013E0] to-[#01DF33] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 group-hover:border-white/40">
                <div className="h-64 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src="/fly2.png"
                    alt="Secure and Reliable"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-2 text-black font-poppins">Secure and Reliable</h3>
                  <p className="text-gray-600 font-roboto">Enterprise-grade security with 99.9% uptime. Your data is protected with state-of-the-art encryption and redundancy.</p>
                </div>
              </div>
            </div>

            {/* Customizable Solutions Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0013E0] to-[#01DF33] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 group-hover:border-white/40">
                <div className="h-64 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src="/fly3.png"
                    alt="Customizable Solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-2 text-black font-poppins">Customizable Solutions</h3>
                  <p className="text-gray-600 font-roboto">Tailored AI solutions that adapt to your specific needs. Our flexible platform grows with your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#001C96] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="text-3xl md:text-4xl text-white/80 font-normal mx-auto leading-relaxed font-roboto">
              AlloyTerra Group transforms renewable energy businesses through strategic AI implementation and automation. We partner with energy companies to revolutionize their operations using cutting-edge AI platforms and automation tools that create seamless, high-performing business systems.
              <br /><br />
              Our core expertise lies in developing sophisticated, automated customer acquisition funnels that operate 24/7, utilizing AI-powered agents that serve as virtual sales representatives. These systems handle everything from initial prospect engagement to final conversion, creating a frictionless experience for both businesses and their clients.
              <br /><br />
              At AlloyTerra, we measure our success through the operational efficiency and growth we bring to our clients' businesses, building the future of renewable energy sales one automated workflow at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-center mb-8 text-black font-poppins">
            Get in Touch
          </h2>
          <p className="text-center text-gray-700 mb-8 font-roboto">
            Ready to transform your business? Let's discuss how we can help you leverage AI and automation.
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300 transform hover:-translate-y-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-roboto">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-roboto">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-roboto">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-roboto">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-roboto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
