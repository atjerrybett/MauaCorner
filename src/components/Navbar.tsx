'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/utils/cart';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/occasions', label: 'Occasions' },
    { href: '/about', label: 'About' },
    { href: '/delivery', label: 'Delivery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="container-main flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-pink-600">Maua Corner</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm uppercase tracking-wide">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="relative p-2 hover:bg-pink-50 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {links.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-pink-50">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
