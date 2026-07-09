// Updated Footer.tsx with react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <div className="text-xl font-bold">J&J Fin Consultancy</div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-sm">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/services" className="hover:text-gray-400">Services</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
          
          <div className="flex justify-center md:justify-end gap-6">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebookF size={22} /></a>
            <a href="#" aria-label="X" className="hover:text-gray-400"><FaTwitter size={22} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram size={22} /></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; {year} J&J Fin Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}