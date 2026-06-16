'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

// Mobile Accordion helper component
function MobileAccordion({ 
  title, 
  children, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col">
      <button 
        onClick={onToggle}
        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all duration-200 ${
          isOpen ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700 hover:bg-slate-50'
        }`}
      >
        <span>{title}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 opacity-70 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden pl-4 flex flex-col gap-1 border-l border-slate-100 ml-4 mt-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80' 
          : 'bg-slate-50/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className={`w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        
        {/* Brand/Logo */}
        <div className="flex shrink-0">
          <Link 
            href="/" 
            onClick={closeAll}
            className="flex items-center gap-2.5 text-xl md:text-2xl font-bold tracking-tighter text-slate-900 focus:outline-none focus-visible:outline-none hover:opacity-95 transition-opacity"
          >
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

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center items-center gap-1 mx-6">
          <ul className="flex items-center gap-1.5 font-semibold text-slate-700">
            <li>
              <Link 
                href="/#about" 
                onClick={closeAll}
                className="hover:text-blue-600 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#editions" 
                onClick={closeAll}
                className="hover:text-blue-600 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold"
              >
                Editions
              </Link>
            </li>
            
            {/* Conference Dropdown */}
            <li className="relative">
              <button 
                onClick={() => toggleDropdown('conference')}
                className={`hover:text-blue-600 px-4 py-2.5 flex items-center gap-1 transition-all duration-200 text-sm font-semibold rounded-xl ${
                  activeDropdown === 'conference' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Conference
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 opacity-75 transition-transform duration-250 ${activeDropdown === 'conference' ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'conference' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 p-2 shadow-xl bg-white rounded-2xl w-60 border border-slate-100/90 z-[60] flex flex-col gap-0.5"
                  >
                    <li>
                      <Link 
                        href="https://2025.geoaicon.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25c.938-.33 1.948-.512 3-.512 2.7 0 4.963.985 6 2.625M12 6.042A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25c-.938-.33-1.948-.512-3-.512-2.7 0-4.963.985-6 2.625M12 6.042V20.25" />
                        </svg>
                        2025 Website
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://2026.geoaicon.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        2026 Website
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Workshop Dropdown */}
            <li className="relative">
              <button 
                onClick={() => toggleDropdown('workshop')}
                className={`hover:text-blue-600 px-4 py-2.5 flex items-center gap-1 transition-all duration-200 text-sm font-semibold rounded-xl ${
                  activeDropdown === 'workshop' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Workshop
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 opacity-75 transition-transform duration-250 ${activeDropdown === 'workshop' ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'workshop' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 p-2 shadow-xl bg-white rounded-2xl w-80 border border-slate-100/90 z-[60] flex flex-col gap-0.5"
                  >
                    <li>
                      <Link 
                        href="/workshop/geoinnovate-thon-2026" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        GeoInnovate Thon 2026
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/workshop/intersession-2026" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                        GeoAI CON Inter-session 2026
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Community Dropdown */}
            <li className="relative">
              <button 
                onClick={() => toggleDropdown('community')}
                className={`hover:text-blue-600 px-4 py-2.5 flex items-center gap-1 transition-all duration-200 text-sm font-semibold rounded-xl ${
                  activeDropdown === 'community' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Community
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 opacity-75 transition-transform duration-250 ${activeDropdown === 'community' ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'community' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 p-2 shadow-xl bg-white rounded-2xl w-60 border border-slate-100/90 z-[60] flex flex-col gap-0.5"
                  >
                    <li>
                      <Link 
                        href="/community/members" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.75-2.985m-.94-3.197A5.961 5.961 0 0012 10.5c-1.464 0-2.812.524-3.859 1.397m-.94-3.197A5.961 5.961 0 0012 10.5m0 0a5.97 5.97 0 00-.75-2.985m-3.11 6.183a6.002 6.002 0 00-4.682 2.72m4.682-2.72a5.997 5.997 0 000 5.97m0 0l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0118 18.719m-12 0a5.97 5.97 0 01.75-2.985m.94-3.197A5.961 5.961 0 0112 10.5" />
                        </svg>
                        Members
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/community/membership-application" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-pink-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Membership Application
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Calendar Dropdown */}
            <li className="relative">
              <button 
                onClick={() => toggleDropdown('calendar')}
                className={`hover:text-blue-600 px-4 py-2.5 flex items-center gap-1 transition-all duration-200 text-sm font-semibold rounded-xl ${
                  activeDropdown === 'calendar' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Calendar
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 opacity-75 transition-transform duration-250 ${activeDropdown === 'calendar' ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'calendar' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 p-2 shadow-xl bg-white rounded-2xl w-60 border border-slate-100/90 z-[60] flex flex-col gap-0.5"
                  >
                    <li>
                      <Link 
                        href="/calendar/past-events" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Past Events
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/calendar/future-events" 
                        onClick={closeAll}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:text-blue-600 hover:bg-blue-50/60 transition-colors text-xs font-semibold text-slate-700"
                      >
                        <svg className="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0-2.25h.008v.008H7.5v-.008zm0 4.5h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        Future Events
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link 
                href="/#ecosystem" 
                onClick={closeAll}
                className="hover:text-blue-600 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold"
              >
                Ecosystem
              </Link>
            </li>
            <li>
              <Link 
                href="/#impact" 
                onClick={closeAll}
                className="hover:text-blue-600 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold"
              >
                Impact
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link 
            href="https://2026.geoaicon.com/committee" 
            target="_blank" 
            className="hidden sm:inline-flex whitespace-nowrap px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Partner with us
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden relative">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              )}
            </button>
            
            {/* Mobile Dropdown Drawer */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute right-0 mt-3 p-4 shadow-2xl bg-white border border-slate-200/90 rounded-2xl w-72 max-h-[80vh] overflow-y-auto z-[60] flex flex-col gap-1.5"
                >
                  <Link href="/#about" onClick={closeAll} className="px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all font-semibold text-sm">About</Link>
                  <Link href="/#editions" onClick={closeAll} className="px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all font-semibold text-sm">Editions</Link>
                  
                  {/* Conference Accordion */}
                  <MobileAccordion 
                    title="Conference" 
                    isOpen={activeDropdown === 'conference'} 
                    onToggle={() => toggleDropdown('conference')}
                  >
                    <Link href="https://2025.geoaicon.com/" target="_blank" rel="noopener noreferrer" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25c.938-.33 1.948-.512 3-.512 2.7 0 4.963.985 6 2.625M12 6.042A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25c-.938-.33-1.948-.512-3-.512-2.7 0-4.963.985-6 2.625M12 6.042V20.25" />
                      </svg>
                      2025 Website
                    </Link>
                    <Link href="https://2026.geoaicon.com/" target="_blank" rel="noopener noreferrer" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      2026 Website
                    </Link>
                  </MobileAccordion>

                  {/* Workshop Accordion */}
                  <MobileAccordion 
                    title="Workshop" 
                    isOpen={activeDropdown === 'workshop'} 
                    onToggle={() => toggleDropdown('workshop')}
                  >
                    <Link href="/workshop/geoinnovate-thon-2026" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      GeoInnovate Thon 2026
                    </Link>
                    <Link href="/workshop/intersession-2026" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                      </svg>
                      GeoAI CON Inter-session 2026
                    </Link>
                  </MobileAccordion>
                  
                  {/* Community Accordion */}
                  <MobileAccordion 
                    title="Community" 
                    isOpen={activeDropdown === 'community'} 
                    onToggle={() => toggleDropdown('community')}
                  >
                    <Link href="/community/members" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.75-2.985m-.94-3.197A5.961 5.961 0 0012 10.5c-1.464 0-2.812.524-3.859 1.397m-.94-3.197A5.961 5.961 0 0012 10.5m0 0a5.97 5.97 0 00-.75-2.985m-3.11 6.183a6.002 6.002 0 00-4.682 2.72m4.682-2.72a5.997 5.997 0 000 5.97m0 0l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0118 18.719m-12 0a5.97 5.97 0 01.75-2.985m.94-3.197A5.961 5.961 0 0112 10.5" />
                      </svg>
                      Members
                    </Link>
                    <Link href="/community/membership-application" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-pink-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Membership Application
                    </Link>
                  </MobileAccordion>

                  {/* Calendar Accordion */}
                  <MobileAccordion 
                    title="Calendar" 
                    isOpen={activeDropdown === 'calendar'} 
                    onToggle={() => toggleDropdown('calendar')}
                  >
                    <Link href="/calendar/past-events" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Past Events
                    </Link>
                    <Link href="/calendar/future-events" onClick={closeAll} className="flex items-center gap-3 pl-4 py-2.5 text-xs hover:text-blue-600 font-semibold transition-colors text-slate-600">
                      <svg className="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0-2.25h.008v.008H7.5v-.008zm0 4.5h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                      Future Events
                    </Link>
                  </MobileAccordion>

                  <Link href="/#ecosystem" onClick={closeAll} className="px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all font-semibold text-sm">Ecosystem</Link>
                  <Link href="/#impact" onClick={closeAll} className="px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all font-semibold text-sm">Impact</Link>
                  
                  <Link 
                    href="https://2026.geoaicon.com/committee" 
                    target="_blank" 
                    onClick={closeAll} 
                    className="text-blue-600 font-bold px-4 py-3 bg-blue-50/60 rounded-xl mt-2 text-center text-sm hover:bg-blue-100/60 transition-colors"
                  >
                    Partner with us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Dynamic Gradient Underline Line */}
      <div 
        className={`h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600/20 via-cyan-500/25 to-transparent transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </nav>
  );
}
