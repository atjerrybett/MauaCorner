'use client';

import { useScrollReveal } from '@/utils/animations';
import { useState } from 'react';

export default function ContactPage() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (e.g., Resend, SendGrid) or backend API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1920&h=600&fit=crop"
          alt="Contact us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-pink-900/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/90 text-lg">We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section-padding bg-white fade-section">
        <div className="container-main max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">Let&apos;s Connect</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold">Visit Our Shop</h4>
                    <p className="text-gray-600">Shop T36, Rainbow Centre, next to Bandaptai, Eldoret</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-semibold">Call or WhatsApp</h4>
                    <a href="tel:+254726155188" className="text-pink-600 hover:underline">0726 155 188</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <a href="https://instagram.com/maua.corner" target="_blank" className="text-pink-600 hover:underline">@maua.corner</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-gray-600">Mon–Sat: 8 AM – 7 PM | Sun: 9 AM – 5 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="https://wa.me/254726155188?text=Hi%20Maua%20Corner!"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary gap-2 inline-flex">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-4xl mb-4 block">💌</span>
                  <p className="text-pink-600 font-semibold text-lg">Thank you! We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone / Email</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
