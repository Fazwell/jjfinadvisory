// Updated components/Header.tsx - Premium
'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
          <div>
            <div className="font-semibold text-2xl tracking-tight text-gray-900">J&J</div>
            <div className="text-[10px] text-gray-500 -mt-1">FIN CONSULTANCY</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/services" className="hover:text-gray-900 transition">Services</Link>
          <Link href="/about" className="hover:text-gray-900 transition">About</Link>
          <Link href="/insights" className="hover:text-gray-900 transition">Insights</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden md:block px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black transition">Get Consultation</a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-6 text-lg">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/services" className="hover:text-gray-900">Services</Link>
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/insights" className="hover:text-gray-900">Insights</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          <a href="/contact" className="mt-4 px-6 py-3 bg-gray-900 text-white text-center rounded-full font-medium">Get Consultation</a>
        </div>
      )}
    </header>
  );
}