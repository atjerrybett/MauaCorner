
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <span className="font-serif text-xl font-bold">Maua Corner</span>
            </div>
            <p className="text-pink-200 text-sm leading-relaxed">
              Fresh. Elegant. Thoughtfully curated flowers for every moment and every story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-pink-200 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop Flowers</Link></li>
              <li><Link href="/occasions" className="hover:text-white transition-colors">Shop by Occasion</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/delivery" className="hover:text-white transition-colors">Delivery Info</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-pink-200 text-sm">
              <li>📍 Shop T36, Rainbow Centre, next to Bandaptai, Eldoret</li>
              <li>📞 <a href="tel:+254726155188" className="hover:text-white">0726 155 188</a></li>
              <li>📸 <a href="https://instagram.com/maua.corner" target="_blank" className="hover:text-white">@maua.corner</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-pink-200 text-sm">
              <li>Mon – Sat: 8:00 AM – 7:00 PM</li>
              <li>Sunday: 9:00 AM – 5:00 PM</li>
              <li className="text-gold font-medium pt-2">Same-day delivery available!</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-12 pt-8 text-center text-pink-300 text-sm">
          <p>© 2026 Maua Corner. All rights reserved. | Your Corner of Elegant Blooms 🌸</p>
        </div>
      </div>
    </footer>
  );
}
