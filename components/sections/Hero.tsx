'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../layout/Animations';

const bgImages = [
  '/hero/HeroIm.jpeg',
  '/hero/Hero2.jpeg',
  '/hero/Hero4.jpeg',
  '/hero/HeroN.jpeg',
  '/hero/HeroTo.jpeg',
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // Handle swipe for mobile support
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    } else if (swipe > 50) {
      setCurrentBg((prev) => (prev - 1 + bgImages.length) % bgImages.length);
    }
  };

  return (
    <section className="relative overflow-hidden w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center bg-base-100">
      
      {/* Background Image Carousel with Swipe */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 origin-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={bgImages[currentBg]}
              alt={`GeoAI CON Hero ${currentBg + 1}`}
              fill
              className="object-cover object-center"
              priority={currentBg === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Light overlay for text readability (reduced opacity for better bg visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent sm:hidden pointer-events-none" />
      </div>

      <div className="container-standard relative z-10 w-full grid lg:grid-cols-2 gap-8 items-center pointer-events-none">
        
        {/* Left: Titles and CTA */}
        <div className="max-w-2xl text-left pointer-events-auto mt-[-40px]">
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight text-balance">
                International <span className="text-blue-600">Geospatial AI</span> and <br className="hidden md:block" />
                Remote Sensing Symposium
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-base md:text-lg text-slate-700 font-medium max-w-lg leading-relaxed">
                The flagship conference unifying top academic minds, government leaders, and industry pioneers for global impact.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-4 pt-4">
              <a href="#editions" className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 border-transparent shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-300">
                Register Now
              </a>
              <a href="#program" className="btn bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 border-slate-200 rounded-xl px-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                View Program
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right: Floating Info Card */}
        <div className="hidden lg:flex justify-end pointer-events-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="bg-white/85 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-6 max-w-xs ml-auto hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                <div className="flex flex-col items-center mb-5 border-b border-slate-200 pb-5">
                  <div className="relative w-24 h-24 mb-3 drop-shadow-sm">
                    <Image src="/Logo1.png" alt="GeoAI CON Logo" fill className="object-contain" priority />
                  </div>
                  <h2 className="text-xl font-black text-slate-900 tracking-wide uppercase text-center">
                    GeoAI CON
                  </h2>
                  <p className="text-blue-600 font-bold tracking-[0.1em] text-xs mt-1 uppercase text-center">
                    Global Unified Portal
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Upcoming Event</p>
                      <p className="text-sm text-slate-900 font-bold leading-tight">Fall Symposium 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Global Network</p>
                      <p className="text-sm text-slate-900 font-bold leading-tight">15,000+ Researchers</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>

      {/* Minimal Navigation Dots for Carousel */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm pointer-events-auto">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBg(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentBg === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-400 hover:bg-blue-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
