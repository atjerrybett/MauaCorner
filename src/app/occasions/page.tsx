'use client';

import { useSearchParams } from 'next/navigation';
import { products, occasions } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/utils/animations';
import { useState, Suspense } from 'react';

function OccasionsContent() {
  useScrollReveal();
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [active, setActive] = useState(initialFilter);

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.occasion.includes(active));

  return (
    <div className="section-padding bg-blush min-h-screen">
      <div className="container-main">
        <div className="text-center mb-12 fade-section">
          <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Perfect For Every Moment</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800">Shop by Occasion</h1>
        </div>

        {/* Occasion Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-section">
          <button onClick={() => setActive('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === 'all' ? 'bg-pink-600 text-white' : 'bg-white text-gray-600 hover:bg-pink-50'}`}>
            All
          </button>
          {occasions.map(occ => (
            <button key={occ.id} onClick={() => setActive(occ.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === occ.id ? 'bg-pink-600 text-white' : 'bg-white text-gray-600 hover:bg-pink-50'}`}>
              {occ.icon} {occ.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 fade-section">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No arrangements found for this occasion yet. WhatsApp us for a custom order!</p>
        )}
      </div>
    </div>
  );
}

export default function OccasionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span className="text-pink-400">Loading...</span></div>}>
      <OccasionsContent />
    </Suspense>
  );
}
