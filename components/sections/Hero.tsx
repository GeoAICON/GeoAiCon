'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[720px] h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Image Carousel with Ken Burns subtle scaling effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[currentBg]}
              alt={`GeoAI CON Hero ${currentBg + 1}`}
              fill
              sizes="100vw"
              unoptimized
              className="object-cover"
              style={{ objectPosition: '50% 50%' }}
              priority={currentBg === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Deep Contrast Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/40 to-slate-950/90 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 z-10 pointer-events-none" />

      {/* Core Typography & Action Content Grid */}
      <div className="container-standard relative z-20 w-full text-center px-6 py-12 md:py-20 flex flex-col items-center justify-center h-full">
        
        {/* Dynamic Premium Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-[0.25em] px-4 py-2 border border-cyan-400/30 rounded-full bg-slate-950/60 backdrop-blur-md inline-block shadow-lg">
            2026 International Symposium
          </span>
        </motion.div>

        {/* High-Impact Main Brand Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          GEOAI CON <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">2026</span>
        </motion.h1>

        {/* Core Theme Subtitle with Premium Brand Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-slate-100 max-w-4xl mx-auto mb-6 drop-shadow-md uppercase tracking-[0.05em]"
        >
          International Geospatial AI and Remote Sensing Symposium
        </motion.h2>

        {/* Descriptive Summary for Global Authority */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed drop-shadow-sm"
        >
          Uniting academic minds, government leaders, and industry pioneers to build scalable geospatial AI solutions for global impact.
        </motion.div>

        {/* Elegant Glassmorphic Date and Venue Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 inline-flex items-center gap-3 border border-white/10 px-5 py-2.5 rounded-2xl bg-white/5 backdrop-blur-md text-white font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          23 – 27 November 2026 &bull; Global Unified Portal
        </motion.div>

        {/* Premium Core Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <Link
            href="https://2026.geoaicon.com"
            target="_blank"
            className="w-full sm:w-auto btn bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold tracking-wide rounded-2xl px-10 py-4 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] border-none transition-all duration-300 h-auto"
          >
            Visit 2026 Portal &rarr;
          </Link>
          <Link
            href="#partnership"
            className="w-full sm:w-auto btn bg-slate-900/60 border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-500 hover:text-white font-bold tracking-wide rounded-2xl px-10 py-4 backdrop-blur-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 h-auto"
          >
            Partner with us
          </Link>
        </motion.div>

      </div>

      {/* Bottom Seamless Fade Mask to blend into layout base background (#F8FAFC) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/30 to-transparent z-15 pointer-events-none" 
      />
    </section>
  );
}
