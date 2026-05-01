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
