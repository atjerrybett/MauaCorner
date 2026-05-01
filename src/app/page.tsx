'use client';

import Link from 'next/link';
import { products, occasions, testimonials } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/utils/animations';

export default function HomePage() {
  useScrollReveal();

  const bestsellers = products.filter(p => p.bestseller);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533616688419-b7a585564566?w=1920&h=1200&fit=crop&q=80"
            alt="Lush pink and red roses bouquet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-pink-900/20 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
          <p className="text-gold-light font-medium tracking-[0.3em] uppercase text-sm mb-4">✨ Grand Opening — 1st May 2026 ✨</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            You&apos;re Invited to<br />Something <span className="text-pink-200 italic">Beautiful</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Fresh. Elegant. Thoughtfully curated flowers for every moment and every story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary text-lg px-10 py-4">
              Shop Now
            </Link>
            <a href="https://wa.me/254726155188?text=Hi%20Maua%20Corner!%20I'd%20love%20to%20order%20flowers%20🌸"
              target="_blank" rel="noopener noreferrer"
              className="btn-gold text-lg px-10 py-4 gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== BESTSELLERS ===== */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Curated for You</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">Bestselling Bouquets</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="btn-outline">View All Flowers →</Link>
          </div>
        </div>
      </section>

      {/* ===== SHOP BY OCCASION ===== */}
      <section className="section-padding bg-blush fade-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">For Every Moment</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">Shop by Occasion</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map(occ => (
              <Link key={occ.id} href={`/occasions?filter=${occ.id}`}
                className="group text-center">
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
                  <img src={occ.image} alt={occ.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-pink-900/30 group-hover:bg-pink-900/10 transition-colors" />
                  <span className="absolute inset-0 flex items-center justify-center text-3xl">{occ.icon}</span>
                </div>
                <h3 className="font-medium text-gray-700 group-hover:text-pink-600 transition-colors">{occ.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=700&fit=crop&q=80"
                alt="Elegant flower arrangement" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            </div>
            <div>
              <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Our Story</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Your Corner of<br />Elegant Blooms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nestled in the heart of Eldoret at Rainbow Centre, Maua Corner was born from a deep love
                for beauty, nature, and meaningful connections. We believe every bouquet tells a story —
                of love, celebration, comfort, or simply &quot;I&apos;m thinking of you.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each arrangement is handcrafted with the freshest blooms, curated with care, and designed
                to make moments unforgettable.
              </p>
              <Link href="/about" className="btn-outline">Read Our Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-blush fade-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Love Notes</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">&quot;{t.text}&quot;</p>
                <p className="font-semibold text-pink-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERY / LOCATION ===== */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main text-center">
          <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Find Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Visit or Get Delivery</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Same-day delivery across Eldoret. Or visit us at <strong>Shop T36, Rainbow Centre, next to Bandaptai</strong>.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-pink-50 rounded-xl p-6">
              <span className="text-3xl mb-2 block">🚚</span>
              <h4 className="font-serif font-semibold mb-1">Same-Day Delivery</h4>
              <p className="text-sm text-gray-500">Order before 2 PM</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6">
              <span className="text-3xl mb-2 block">🏪</span>
              <h4 className="font-serif font-semibold mb-1">Pickup Available</h4>
              <p className="text-sm text-gray-500">Rainbow Centre, Eldoret</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6">
              <span className="text-3xl mb-2 block">💐</span>
              <h4 className="font-serif font-semibold mb-1">Custom Orders</h4>
              <p className="text-sm text-gray-500">WhatsApp us anytime</p>
            </div>
          </div>
          <Link href="/delivery" className="btn-primary">Delivery Details →</Link>
        </div>
      </section>

      {/* ===== INSTAGRAM TEASER ===== */}
      <section className="section-padding bg-blush fade-section">
        <div className="container-main text-center">
          <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Follow Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-4">@maua.corner</h2>
          <p className="text-gray-600 mb-8">Follow our journey on Instagram for daily floral inspiration 🌸</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=300&h=300&fit=crop&q=80',
              'https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=300&h=300&fit=crop&q=80',
              'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=300&h=300&fit=crop&q=80',
              'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=300&h=300&fit=crop&q=80',
            ].map((img, i) => (
              <a key={i} href="https://instagram.com/maua.corner" target="_blank" rel="noopener noreferrer"
                className="overflow-hidden rounded-xl group aspect-square">
                <img src={img} alt="Maua Corner Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
