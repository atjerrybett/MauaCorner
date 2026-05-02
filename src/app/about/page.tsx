'use client';

import { useScrollReveal } from '@/utils/animations';
import Link from 'next/link';

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=800&fit=crop"
          alt="Maua Corner flower shop" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-pink-900/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">A love letter to flowers, beauty, and the moments that matter.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">Welcome to Maua Corner</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              <strong>Maua Corner</strong> was born from a simple belief: that flowers have the power to transform
              ordinary moments into extraordinary memories. Based in Eldoret, Kenya, we are passionate about bringing
              the beauty of nature closer to your loved ones.
            </p>
            <p>
              Our name — <em>&quot;Maua&quot;</em> — means flowers in Swahili. And &quot;Corner&quot; represents that special, intimate
              place where beauty awaits. Together, we are your corner of elegant blooms.
            </p>
            <p>
              Every bouquet we create is a work of art — handcrafted with the freshest locally-sourced and imported
              blooms, designed with intention, and delivered with love. Whether it&apos;s a grand wedding celebration,
              a quiet gesture of sympathy, or a spontaneous &quot;just because&quot; surprise, we pour our hearts into
              every petal.
            </p>
            <p>
              Visit us at <strong>Shop T36, Rainbow Centre, next to Bandaptai, Eldoret</strong> — or simply WhatsApp
              us and let us bring beauty to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-sm mx-auto">
                <img src="/images/tracy.jpg" alt="Tracy Kirui — Founder of Maua Corner"
                  className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gold/30 rounded-full blur-xl" />
            </div>
            <div>
              <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Meet the Founder</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Tracy Kirui</h2>
              <p className="text-gold font-medium mb-4 italic">CEO & Founder, Maua Corner</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With an eye for beauty and a heart for connection, Tracy founded Maua Corner to bring elegance
                and joy through the timeless art of floral arrangement. Her passion for flowers is matched only
                by her dedication to making every customer feel special.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From carefully selecting each bloom to personally ensuring every bouquet tells a story,
                Tracy brings warmth, creativity, and a touch of luxury to everything she does. Her vision:
                to make Eldoret bloom, one beautiful arrangement at a time. 🌸
              </p>
              <a href="https://www.instagram.com/miss__kirui/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @miss__kirui
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-blush fade-section">
        <div className="container-main">
          <h2 className="font-serif text-3xl font-bold text-gray-800 text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: '🌿', title: 'Freshness First', desc: 'We source the freshest blooms daily to ensure lasting beauty.' },
              { icon: '✨', title: 'Elegant Design', desc: 'Every arrangement is crafted with an artistic eye for color and form.' },
              { icon: '💛', title: 'Heartfelt Service', desc: 'Your story matters to us. We listen, we care, we deliver with love.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center fade-section">
        <div className="container-main">
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Ready to Experience Maua Corner?</h2>
          <p className="text-gray-600 mb-8">Let us create something beautiful for your next special moment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary">Browse Our Flowers</Link>
            <a href="https://wa.me/254726155188" target="_blank" className="btn-gold">Chat With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
