'use client';

import { useState } from 'react';
import OptimizedImage from '../ui/OptimizedImage';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../layout/Animations';

export default function IntersessionPreview() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const dayDescriptions: Record<number, { title: string; desc: string }> = {
    1: { 
      title: 'DGPS Surveying', 
      desc: 'Hands-on training with Differential Global Positioning System for precision geospatial data collection.' 
    },
    2: { 
      title: 'Drone Surveying & Mapping', 
      desc: 'Exploring UAV-based aerial surveying techniques for high-resolution terrain mapping and orthophoto generation.' 
    },
    3: { 
      title: 'Multispectral Drone / TLS / Hyperspectral', 
      desc: 'Exploring advanced remote sensing using multispectral imagery, Terrestrial Laser Scanning, and hyperspectral drones.' 
    },
    4: { 
      title: 'Bathymetry Survey', 
      desc: 'Hands-on tutorial on underwater terrain mapping using single/multi-beam sonar for water body depth analysis.' 
    }
  };

  // Grouped by day with local gallery assets
  const galleryData = {
    1: [
      { src: '/gallery/day-1-2.jpg', title: 'DGPS Field Setup', desc: 'DGPS field setup & equipment briefing' },
      { src: '/gallery/day-1-3.jpg', title: 'Survey Point Collection', desc: 'Survey point collection in the field' },
      { src: '/gallery/day-1-4.jpg', title: 'Fieldwork Operations', desc: 'Participants working with DGPS receivers' },
    ],
    2: [
      { src: '/gallery/day-2-1.jpg', title: 'Flight Planning', desc: 'Drone flight planning & mission briefing' },
      { src: '/gallery/day-2-2.jpg', title: 'UAV Assembly', desc: 'UAV assembly and pre-flight checks' },
      { src: '/gallery/day-2-3.jpg', title: 'Live Mapping Demo', desc: 'Live drone mapping demonstration' },
    ],
    3: [
      { src: '/gallery/day-3-1.jpg', title: 'Sensor Calibration', desc: 'Multispectral sensor calibration' },
      { src: '/gallery/day-3-2.jpg', title: 'TLS Instrument Setup', desc: 'TLS instrument setup & scanning' },
      { src: '/gallery/day-3-3.jpg', title: 'Hyperspectral Acquisition', desc: 'Hyperspectral image acquisition' },
    ],
    4: [
      { src: '/gallery/day-4-1.jpg', title: 'Sonar Equipment', desc: 'Bathymetric equipment demonstration' },
      { src: '/gallery/day-4-2.jpg', title: 'Transducer Deployment', desc: 'Sonar transducer deployment' },
      { src: '/gallery/day-4-3.jpg', title: 'Underwater Mapping', desc: 'Depth data collection on water' },
    ]
  };

  const currentImages = galleryData[activeDay as keyof typeof galleryData];

  return (
    <section id="intersession" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container-standard relative z-10">
        <FadeIn className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block shadow-sm">
              GeoAI CON Inter-session 2026
            </h2>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              Hands-On workshop and strategic meet.
            </h3>
            <div className="border-l-2 border-blue-600 pl-4 py-1 mt-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-blue-600">
                Day 0{activeDay}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{dayDescriptions[activeDay].title}</span>
              </span>
              <p className="text-slate-600 mt-2 max-w-lg leading-relaxed text-sm font-normal">
                {dayDescriptions[activeDay].desc}
              </p>
            </div>
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
      {/* Grid Content Gallery - Centered in Standard Container */}
      <div className="container-standard relative z-10 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentImages.map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl group border border-slate-200 shadow-md cursor-pointer hover:border-blue-300 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(37,99,235,0.15)]"
              >
                <OptimizedImage 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-cyan-400 font-bold text-[9px] tracking-widest uppercase mb-1.5 border border-cyan-400/30 bg-slate-900/50 px-2 py-0.5 rounded w-fit backdrop-blur-md">Day 0{activeDay}</span>
                  <span className="text-white font-bold text-sm leading-tight mb-1 drop-shadow-lg">{img.title}</span>
                  <span className="text-slate-200 text-[11px] font-medium leading-snug drop-shadow-md">{img.desc}</span>
                </div>
              </motion.div>
            ))}

            {/* +87 More Photos Card - Premium Dark/Glow Design */}
            <motion.a 
              href="https://2026.geoaicon.com/intersession" 
              target="_blank"
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl group border border-slate-800 bg-slate-950 shadow-lg cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] flex flex-col justify-between p-6"
            >
              {/* Background ambient light effects */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/35 transition-all duration-500" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-cyan-600/20 rounded-full blur-3xl group-hover:bg-cyan-600/35 transition-all duration-500" />
              
              {/* Card top action badge */}
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-[9px] font-bold tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/30 bg-cyan-950/40 px-2 py-0.5 rounded-lg backdrop-blur-md">
                  Intersession Gallery
                </span>
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Centered counter indicator */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
                <div className="relative w-20 h-20 rounded-full bg-slate-900/90 border-2 border-slate-800 flex items-center justify-center shadow-2xl group-hover:border-blue-500 transition-colors duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 animate-pulse" />
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
                    +87
                  </span>
                </div>
              </div>

              {/* Card bottom details */}
              <div className="relative z-10 space-y-1">
                <h4 className="text-white font-extrabold tracking-wide uppercase text-xs group-hover:text-blue-400 transition-colors">
                  Explore More Photos
                </h4>
                <p className="text-slate-400 text-[11px] font-normal leading-relaxed">
                  Browse the complete archive of field campaigns and strategic meetings.
                </p>
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
            className="btn bg-white border-slate-200 text-slate-700 rounded-xl px-10 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all duration-300 tracking-wide font-semibold group"
          >
            View Complete Gallery 
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
