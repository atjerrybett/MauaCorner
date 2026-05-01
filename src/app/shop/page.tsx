'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/utils/animations';

export default function ShopPage() {
  useScrollReveal();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'roses', 'lilies', 'mixed', 'sunflowers'];

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="section-padding bg-blush min-h-screen">
      <div className="container-main">
        <div className="text-center mb-12 fade-section">
          <p className="text-pink-500 font-medium tracking-widest uppercase text-sm mb-2">Our Collection</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800">Shop Flowers</h1>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto">Handpicked, fresh, and arranged with love. Find the perfect bouquet for any occasion.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 fade-section">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${filter === cat ? 'bg-pink-600 text-white' : 'bg-white text-gray-600 hover:bg-pink-50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 fade-section">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No flowers found in this category. Try another filter!</p>
        )}
      </div>
    </div>
  );
}
