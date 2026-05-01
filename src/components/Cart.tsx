'use client';

import { useCart } from '@/utils/cart';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  const handleCheckoutWhatsApp = () => {
    const message = items.map(i => `${i.name} x${i.quantity} (${i.price})`).join('\n');
    const url = `https://wa.me/254726155188?text=${encodeURIComponent('Hi Maua Corner! I\'d like to order:\n\n' + message + '\n\nPlease let me know the total. Thank you!')}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-pink-100">
          <h2 className="font-serif text-xl font-bold text-pink-600">Your Basket</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-pink-50 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-12">Your basket is empty</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 bg-pink-50 rounded-xl p-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-pink-600 font-semibold text-sm">{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-white border text-sm">−</button>
                    <span className="text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-white border text-sm">+</button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto text-red-400 text-xs">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-pink-100 space-y-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>{items.length} item{items.length > 1 ? 's' : ''} in basket</span>
              <span className="text-pink-600 text-sm">Pricing on inquiry</span>
            </div>
            <button onClick={handleCheckoutWhatsApp} className="btn-primary w-full gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.636-1.467A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-2.169 0-4.18-.588-5.92-1.613l-.424-.254-2.752.871.876-2.689-.278-.442A9.776 9.776 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/></svg>
              Checkout via WhatsApp
            </button>
            {/* TODO: M-Pesa payment integration button would go here */}
            <p className="text-xs text-gray-400 text-center">Complete your order via WhatsApp for now. M-Pesa coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
