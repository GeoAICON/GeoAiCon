'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-slate-50/80 backdrop-blur-sm'}`}>
      <div className="navbar container-standard h-20 items-center justify-between">
        <div className="navbar-start w-auto">
          <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tighter text-slate-900">
            <Image 
              src="/Logo1.png" 
              alt="GeoAI CON Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              priority
            />
            <span>GeoAI CON</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium text-slate-700">
            <li><Link href="#about" className="hover:text-blue-600 hover:bg-blue-50">About</Link></li>
            <li><Link href="#editions" className="hover:text-blue-600 hover:bg-blue-50">Editions</Link></li>
            <li><Link href="#ecosystem" className="hover:text-blue-600 hover:bg-blue-50">Ecosystem</Link></li>
            <li><Link href="#impact" className="hover:text-blue-600 hover:bg-blue-50">Impact</Link></li>
          </ul>
        </div>
        <div className="navbar-end w-auto gap-2 md:gap-4">
          <Link href="#partnership" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 btn-sm md:btn-md hidden sm:inline-flex rounded-btn shadow-sm">
            Partner with us
          </Link>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white border border-slate-200 rounded-box w-52 font-medium text-slate-700">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#editions">Editions</Link></li>
              <li><Link href="#ecosystem">Ecosystem</Link></li>
              <li><Link href="#impact">Impact</Link></li>
              <li><Link href="#partnership" className="text-blue-600 font-bold mt-2">Partner with us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Dynamic Gradient Line */}
      <div 
        className={`h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600/20 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      />
    </nav>
  );
}
