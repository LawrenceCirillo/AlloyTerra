'use client';

import { useState } from 'react';

export default function Contact() {
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
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#F4F6F9] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-oswald tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with AI
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-black/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-black/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-black/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-black/20 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#001C96] text-white rounded-[8px] font-semibold hover:bg-[#001C96]/90 transition-all transform hover:scale-105 duration-200 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
