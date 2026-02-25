'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

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
    <section id="intersession" className="section-padding bg-base-100/50">
      <div className="container-standard">
        {/* Header Section */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Ongoing Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Intersession Glimpses</h3>
            <p className="text-base-content/70 mt-4 max-w-lg leading-relaxed text-lg">
              Behind the scenes of our continual global research deployment and field operations between main events.
            </p>
          </div>
        </FadeIn>

        {/* Tab Navigation System */}
        <FadeIn delay={0.2} className="mb-10 w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-2 md:space-x-4 min-w-max border-b border-base-300">
            {[1, 2, 3, 4].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                  activeDay === day 
                    ? 'text-primary' 
                    : 'text-base-content/50 hover:text-base-content'
                }`}
                aria-label={`View Day ${day} content`}
              >
                DAY 0{day}
                {activeDay === day && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>
        
        {/* Tab Content Gallery */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentImages.map((img, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl group border border-base-300 shadow-sm cursor-pointer"
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-semibold text-xs tracking-widest uppercase mb-1">Day 0{activeDay}</span>
                    <span className="text-white font-medium text-lg leading-tight mb-1">{img.title}</span>
                    <span className="text-white/70 text-sm">{img.desc}</span>
                  </div>
                </motion.div>
              ))}

              {/* Blurred +87 More Photos Card */}
              <motion.a 
                href="https://geoaicon.vercel.app/" 
                target="_blank"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl group border border-base-300 shadow-sm cursor-pointer bg-base-200 flex items-center justify-center isolate"
              >
                <img 
                  src="/gallery/day-1-2.jpg" 
                  alt="Background blur" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md scale-110" 
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-base-100/40 to-base-200/90 z-10" />
                <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <span className="text-4xl font-light text-primary">+87</span>
                  <span className="text-base-content font-medium uppercase tracking-widest text-sm">More Photos</span>
                  <span className="text-base-content/60 text-xs text-center mt-2 max-w-[150px]">View the complete event gallery archive</span>
                </div>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Centered CTA */}
        <FadeIn delay={0.4} className="mt-16 flex justify-center">
          <a 
            href="https://geoaicon.vercel.app/" 
            target="_blank" 
            className="btn btn-primary rounded-full px-8 outline-none hover:shadow-lg transition-all"
          >
            View Complete Intersession Gallery &rarr;
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
