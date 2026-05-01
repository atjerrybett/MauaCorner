'use client';

import { useCart } from '@/utils/cart';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const whatsappUrl = `https://wa.me/254726155188?text=${encodeURIComponent(`Hi! I'm interested in "${product.name}" (${product.price}). Can I customize it?`)}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
            Bestseller
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="text-white text-sm font-medium underline underline-offset-2">
            Customize on WhatsApp →
          </a>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-col gap-2">
          <span className="text-pink-600 font-bold text-sm sm:text-base">{product.price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-medium px-3 py-2.5 rounded-full transition-all duration-300 active:scale-95"
            >
              Add to Basket
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all active:scale-95">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
