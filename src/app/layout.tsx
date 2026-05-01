import type { Metadata } from 'next';
import '@/styles/globals.css';
import { CartProvider } from '@/utils/cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Cart from '@/components/Cart';

export const metadata: Metadata = {
  title: 'Maua Corner — Elegant Flowers in Eldoret, Kenya',
  description: 'Fresh, elegant, thoughtfully curated flowers for every moment. Same-day delivery in Eldoret. Shop roses, bouquets, and arrangements for birthdays, weddings, and more.',
  keywords: 'flowers Eldoret, flower delivery Kenya, roses, bouquets, Maua Corner, flower shop Eldoret',
  openGraph: {
    title: 'Maua Corner — Your Corner of Elegant Blooms',
    description: 'Fresh, elegant flowers delivered same-day in Eldoret, Kenya.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <Cart />
          <main className="pt-16 sm:pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
