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
          <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tighter text-slate-900 focus:outline-none focus-visible:outline-none">
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
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 gap-1 lg:gap-2 font-medium text-slate-700">
            <li><Link href="#about" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">About</Link></li>
            <li><Link href="#editions" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Editions</Link></li>
            
            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="hover:text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors">
                Conference
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-white rounded-xl w-48 border border-slate-100 z-[60] mt-0">
                <li><Link href="https://2025.geoaicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">2025 Website</Link></li>
                <li><Link href="https://2026.geoaicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">2026 Website</Link></li>
              </ul>
            </li>

            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="hover:text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors">
                Workshop
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-white rounded-xl w-60 border border-slate-100 z-[60] mt-0">
                <li><Link href="https://sensrs.com/gallery/geoinnovate-thon-26/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">GeoInnovate Thon 2026</Link></li>
              </ul>
            </li>

            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="hover:text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors">
                Community
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-white rounded-xl w-56 border border-slate-100 z-[60] mt-0">
                <li><Link href="/community/members" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Members</Link></li>
                <li><Link href="/community/membership-application" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Membership Application</Link></li>
              </ul>
            </li>

            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="hover:text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors">
                Calendar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-white rounded-xl w-48 border border-slate-100 z-[60] mt-0">
                <li><Link href="/calendar/past-events" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Past Events</Link></li>
                <li><Link href="/calendar/future-events" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Future Events</Link></li>
              </ul>
            </li>

            <li><Link href="#ecosystem" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Ecosystem</Link></li>
            <li><Link href="#impact" className="hover:text-blue-600 hover:bg-blue-50 transition-colors">Impact</Link></li>
          </ul>
        </div>
        <div className="navbar-end w-auto gap-2 md:gap-4">
          <Link href="#partnership" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 btn-sm md:btn-md hidden sm:inline-flex rounded-btn shadow-sm">
            Partner with us
          </Link>
          <div className="dropdown dropdown-end xl:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow-xl bg-white border border-slate-200 rounded-box w-64 font-medium text-slate-700 max-h-[85vh] overflow-y-auto">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#editions">Editions</Link></li>
              
              <li>
                <details>
                  <summary className="hover:text-blue-600">Conference</summary>
                  <ul className="p-2 border-l border-slate-200 ml-2 mt-1">
                    <li><Link href="https://2025.geoaicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">2025 Website</Link></li>
                    <li><Link href="https://2026.geoaicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">2026 Website</Link></li>
                  </ul>
                </details>
              </li>
              
              <li>
                <details>
                  <summary className="hover:text-blue-600">Workshop</summary>
                  <ul className="p-2 border-l border-slate-200 ml-2 mt-1">
                    <li><Link href="https://sensrs.com/gallery/geoinnovate-thon-26/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GeoInnovate Thon 2026</Link></li>
                  </ul>
                </details>
              </li>
              
              <li>
                <details>
                  <summary className="hover:text-blue-600">Community</summary>
                  <ul className="p-2 border-l border-slate-200 ml-2 mt-1">
                    <li><Link href="/community/members" className="hover:text-blue-600">Members</Link></li>
                    <li><Link href="/community/membership-application" className="hover:text-blue-600">Membership Application</Link></li>
                  </ul>
                </details>
              </li>
              
              <li>
                <details>
                  <summary className="hover:text-blue-600">Calendar</summary>
                  <ul className="p-2 border-l border-slate-200 ml-2 mt-1">
                    <li><Link href="/calendar/past-events" className="hover:text-blue-600">Past Events</Link></li>
                    <li><Link href="/calendar/future-events" className="hover:text-blue-600">Future Events</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link href="#ecosystem">Ecosystem</Link></li>
              <li><Link href="#impact">Impact</Link></li>
              <li><Link href="#partnership" className="text-blue-600 font-bold mt-2">Partner with us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Dynamic Gradient Line */}
      <div 
        className={`h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600/15 via-cyan-500/20 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      />
    </nav>
  );
}
