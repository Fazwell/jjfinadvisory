// Fixed Header.tsx - Overlay mobile menu
'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-[60] md:hidden" onClick={() => setIsOpen(false)}>
          <div className="bg-white h-full w-4/5 max-w-xs ml-auto p-8 flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-xl font-medium">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
            
            <a href="/contact" onClick={() => setIsOpen(false)} className="mt-auto px-6 py-4 bg-gray-900 text-white text-center rounded-full font-medium">Get Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}