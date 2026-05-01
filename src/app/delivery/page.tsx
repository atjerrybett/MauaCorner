'use client';

import { useScrollReveal } from '@/utils/animations';
import Link from 'next/link';

export default function DeliveryPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=1920&h=600&fit=crop"
          alt="Flower delivery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-pink-900/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Delivery & Pickup</h1>
          <p className="text-white/90 text-lg">Getting flowers to you, fresh and on time.</p>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section-padding bg-white fade-section">
        <div className="container-main max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">🚚 Same-Day Delivery</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Available within Eldoret town</li>
                <li>✓ Order before <strong>2:00 PM</strong> for same-day</li>
                <li>✓ Delivery fee: <strong>KES 200–500</strong> depending on location</li>
                <li>✓ Free delivery on orders above <strong>KES 5,000</strong></li>
                <li>✓ Careful handling — your flowers arrive fresh and pristine</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">🏪 Pickup at Shop</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ <strong>Shop T36, Rainbow Centre</strong></li>
                <li>✓ Next to Bandaptai, Eldoret</li>
                <li>✓ Mon–Sat: 8:00 AM – 7:00 PM</li>
                <li>✓ Sunday: 9:00 AM – 5:00 PM</li>
                <li>✓ Order via WhatsApp, pick up when ready!</li>
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div className="text-center mb-12 fade-section">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-8">How to Order</h2>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse', desc: 'Pick your perfect bouquet from our shop' },
                { step: '2', title: 'Order', desc: 'Add to basket or WhatsApp us directly' },
                { step: '3', title: 'Pay', desc: 'M-Pesa or pay on delivery (coming soon)' },
                { step: '4', title: 'Enjoy', desc: 'We deliver fresh to your door or pickup' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{s.step}</div>
                  <h4 className="font-serif font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="fade-section">
            <h2 className="font-serif text-2xl font-bold text-gray-800 text-center mb-6">Find Us on the Map</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d35.27!3d0.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzEnMTIuMCJOIDM1wrAxNicxMi4wIkU!5e0!3m2!1sen!2ske!4v1"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maua Corner Location"
              />
            </div>
            {/* TODO: Replace with actual Google Maps embed URL for exact shop location */}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-primary">Start Shopping →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
