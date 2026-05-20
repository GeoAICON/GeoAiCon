'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../layout/Animations';

export default function IntersessionPreview() {
  const [activeDay, setActiveDay] = useState(1);

  // Grouped by day
  const galleryData = {
    1: [
      { src: '/gallery/day-1-2.jpg', title: 'Core Frameworks', desc: 'Setting the 2026 foundation' },
      { src: '/gallery/day-1-3.jpg', title: 'Main Keynote', desc: 'Opening the global portal' },
      { src: '/gallery/day-1-4.jpg', title: 'Panel Session', desc: 'Industry leaders debate' },
    ],
    2: [
      { src: '/gallery/day-2-1.jpg', title: 'Spatial Systems', desc: 'Next-gen mapping' },
      { src: '/gallery/day-2-2.jpg', title: 'Technology Demo', desc: 'Hands on application' },
      { src: '/gallery/day-2-3.jpg', title: 'Networking', desc: 'Global connections' },
    ],
    3: [
      { src: '/gallery/day-3-1.jpg', title: 'Drone Deployments', desc: 'Multi-spectral testing' },
      { src: '/gallery/day-3-2.jpg', title: 'Flight Systems', desc: 'Field operations' },
      { src: '/gallery/day-3-3.jpg', title: 'Data Capture', desc: 'Live spatial feeds' },
    ],
    4: [
      { src: '/gallery/day-4-1.jpg', title: 'Bathymetry Mapping', desc: 'Water-based intelligence' },
      { src: '/gallery/day-4-2.jpg', title: 'Hardware Config', desc: 'Marine sensors setup' },
      { src: '/gallery/day-4-3.jpg', title: 'Data Processing', desc: 'Analysis and rendering' },
    ]
  };

  const currentImages = galleryData[activeDay as keyof typeof galleryData];

  return (
    <section id="intersession" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container-standard relative z-10">
        {/* Header Section */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block shadow-sm">Ongoing Work</h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Intersession <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Glimpses</span>
            </h3>
            <p className="text-slate-600 mt-3 max-w-lg leading-relaxed text-sm font-normal">
              Behind the scenes of our continual global research deployment and field operations between main events.
            </p>
          </div>
          
          {/* Tab Navigation Controls */}
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar mt-4 md:mt-0">
            <div className="flex space-x-2 min-w-max bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
              {[1, 2, 3, 4].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`relative px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-xl ${
                    activeDay === day 
                      ? 'text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)]' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                  aria-label={`View Day ${day} content`}
                >
                  {activeDay === day && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">DAY 0{day}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      
      {/* Snap-X Carousel Content Gallery - FULL WIDTH */}
      <div className="min-h-[460px] relative w-full">
        {/* Fading edges for carousel */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12 pt-4 px-8 md:px-[calc(50vw-400px)] lg:px-[calc(50vw-500px)] w-full"
            style={{ scrollPaddingLeft: '2rem' }}
          >
            {currentImages.map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="relative shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] overflow-hidden rounded-3xl group border border-slate-200 shadow-md snap-center md:snap-start cursor-pointer group hover:border-blue-300 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(37,99,235,0.15)]"
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-cyan-400 font-bold text-[10px] tracking-widest uppercase mb-2 border border-cyan-400/30 bg-slate-900/50 px-2 py-1 rounded w-fit backdrop-blur-md">Day 0{activeDay}</span>
                  <span className="text-white font-bold text-base leading-tight mb-1 drop-shadow-lg">{img.title}</span>
                  <span className="text-slate-200 text-xs font-medium drop-shadow-md">{img.desc}</span>
                </div>
              </motion.div>
            ))}

            {/* Blurred +87 More Photos Card */}
            <motion.a 
              href="https://2026.geoaicon.com/intersession" 
              target="_blank"
              whileHover={{ y: -5 }}
              className="relative shrink-0 w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] overflow-hidden rounded-3xl group border border-slate-200 shadow-md snap-center md:snap-start cursor-pointer bg-white flex items-center justify-center isolate hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              <Image 
                src="/gallery/day-1-2.jpg" 
                alt="Background blur" 
                fill
                sizes="25vw"
                className="object-cover opacity-10 blur-xl scale-150 group-hover:opacity-20 transition-opacity duration-500" 
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center p-8 text-center space-y-4 group-hover:scale-105 transition-transform duration-500">
                <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg group-hover:border-blue-300 transition-colors">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">+87</span>
                </div>
                <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">More Photos</span>
                <span className="text-slate-500 text-xs font-medium leading-relaxed max-w-[180px]">Swipe to explore the complete event gallery archive</span>
              </div>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="container-standard relative z-10">
        {/* Centered CTA */}
        <FadeIn delay={0.2} className="mt-8 flex justify-center pt-8">
          <a 
            href="https://2026.geoaicon.com/intersession" 
            target="_blank" 
            className="btn bg-white border-slate-200 text-slate-700 rounded-xl px-10 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all duration-300 tracking-wide font-semibold Group"
          >
            View Complete Gallery 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
