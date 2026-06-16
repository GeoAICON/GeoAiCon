'use client';

import { useState } from 'react';
import Link from 'next/link';
import OptimizedImage from '../../../components/ui/OptimizedImage';
import { AnimatePresence, motion } from 'framer-motion';

interface DayData {
  title: string;
  subtitle: string;
  desc: string;
  equipment: string;
  software: string;
  outcome: string;
  images: { src: string; caption: string }[];
}

const daysData: Record<number, DayData> = {
  1: {
    title: 'DGPS Surveying',
    subtitle: 'Differential Global Positioning System Operations',
    desc: 'Hands-on training with Differential Global Positioning System (DGPS) for precision geospatial data collection. Participants learned to configure base and rover setups, collect high-accuracy coordinate points, and perform differential corrections to eliminate atmospheric and satellite propagation errors.',
    equipment: 'Trimble/CHNAV DGPS Receivers, Tripods, Rover Rods',
    software: 'SurvX, RTKLib, QGIS',
    outcome: 'Precision Ground Control Points (GCPs) with sub-centimeter accuracy for aerial mapping calibration.',
    images: [
      { src: '/SEnSRS/Day 1_Geo_26_1.webp', caption: 'Configuring rover on the field' },
      { src: '/SEnSRS/Day 1_Geo_26_2.webp', caption: 'Base station calibration' },
      { src: '/SEnSRS/Day 1_Geo_26_3.webp', caption: 'Participant coordinate measurement' },
      { src: '/SEnSRS/DGPS_Geo 26_1 .PNG.webp', caption: 'Active field operation check' },
    ],
  },
  2: {
    title: 'Drone Surveying & Mapping',
    subtitle: 'UAV-based Photogrammetry & Orthomosaics',
    desc: 'Exploring UAV-based aerial surveying techniques for high-resolution terrain mapping. Students designed automated flight plans, established overlapping photo corridors, and processed aerial images into seamless geo-referenced orthophotos and Digital Elevation Models (DEMs).',
    equipment: 'Quadcopter Surveying Drones, RTK Modules, Handheld Controllers',
    software: 'Pix4Dmapper, Mission Planner, QGIS',
    outcome: 'High-resolution 2D orthomosaics, 3D textured mesh models, and Digital Surface Models (DSM).',
    images: [
      { src: '/SEnSRS/Day 2_Geo_26_1.webp', caption: 'Pre-flight drone safety inspection' },
      { src: '/SEnSRS/Day 2_Geo_26_2.webp', caption: 'UAV assembly and power calibration' },
      { src: '/SEnSRS/Day 2_Geo_26_3.webp', caption: 'Setting up flight path grids' },
      { src: '/SEnSRS/Day 2_Geo_26_4.webp', caption: 'Takeoff and real-time telemetry' },
    ],
  },
  3: {
    title: 'Multispectral Drone / TLS / Hyperspectral',
    subtitle: 'Advanced Multi-sensor Remote Sensing',
    desc: 'Exploring advanced remote sensing using multispectral imagery, Terrestrial Laser Scanning (TLS), and hyperspectral drones. This module focused on multi-sensor payloads capable of scanning beyond the visible light spectrum for detailed vegetation index analysis and physical point-cloud reconstruction.',
    equipment: 'Multispectral Sensors, Terrestrial Laser Scanner (TLS), Hyperspectral UAVs',
    software: 'FARO Scene, ENVI, Agisoft Metashape',
    outcome: '3D point clouds of forest canopies, vegetative health analysis (NDVI), and spectral signature charts.',
    images: [
      { src: '/SEnSRS/Day 3_Geo_26_1.webp', caption: 'TLS scanner tripod adjustment' },
      { src: '/SEnSRS/Day 3_Geo_26_2.webp', caption: 'Multispectral sensor payload check' },
      { src: '/SEnSRS/Day 3_Geo_26_3.webp', caption: 'LiDAR scanning of terrain profiles' },
      { src: '/SEnSRS/Day 3_Geo_26_4.webp', caption: 'Spectrometer data calibration' },
    ],
  },
  4: {
    title: 'Bathymetry Survey',
    subtitle: 'Hydrographic Mapping & Sonar Profiling',
    desc: 'Hands-on tutorial on underwater terrain mapping using single/multi-beam sonar systems for water body depth and sedimentation analysis. Participants deployed sonar transmitters on the Bathycat (Unmanned Sonar Boat) to acquire depth cross-sections and profile riverbeds.',
    equipment: 'Bathycat (Unmanned Sonar Boat), Single-beam Echo Sounder, GNSS Receiver',
    software: 'Hydromagic, QGIS Bathymetry Toolsets',
    outcome: '3D underwater depth profiles, sediment accumulation sheets, and river bathymetry contours.',
    images: [
      { src: '/SEnSRS/Bathycat_Geo 26_1 PNG.webp', caption: 'Bathycat sonar boat configuration' },
      { src: '/SEnSRS/Bathycat_Geo 26_2 PNG.webp', caption: 'Sonar transducer deployment on water' },
      { src: '/SEnSRS/Day 4_Geo_26_1.webp', caption: 'Live depth chart telemetry tracking' },
      { src: '/SEnSRS/Day 4_Geo_26_2.webp', caption: 'Water body cross-section scanning' },
    ],
  },
  5: {
    title: 'Panel Meeting & Lab Visit',
    subtitle: 'Strategic Meet with Dept. of Mines and Geology',
    desc: 'Concluding panel meeting with the Department of Mines and Geology. The session united government stakeholders, researchers, and field specialists to translate raw geospatial data (from DGPS, Drones, TLS, and Sonar) into scalable mineral exploration, sand mining policies, and environmental impact strategies — capped with a tour of the state-of-the-art SEnSRS Lab.',
    equipment: 'SEnSRS Lab Computing Cluster, Remote Sensing Servers',
    software: 'Geoportal Systems, Resource Management Databases',
    outcome: 'Strategic policy roadmaps, inter-departmental collaboration targets, and lab tour briefings.',
    images: [
      { src: '/SEnSRS/Day 5_Geo_26_1.webp', caption: 'Panel discussion with Mines & Geology' },
      { src: '/SEnSRS/Day 5 SEnSRS Lab Visit_26_1.webp', caption: 'Lab equipment tour and server demo' },
      { src: '/SEnSRS/Day 5 SEnSRS Lab Visit_26_3.webp', caption: 'Group discussion on spatial models' },
      { src: '/SEnSRS/Day 5_Geo_26_2.webp', caption: 'Strategic briefing on riverbed monitoring' },
    ],
  },
};

export default function IntersessionClient() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const current = daysData[activeDay];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ───── Hero Banner (Matches Site Sub-page Pattern) ───── */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
          <OptimizedImage
            src="/herobg/header-bg13.webp"
            alt="Header Background Texture"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 to-indigo-950/45 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Hands-On workshop and strategic meet.
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 drop-shadow-md">
            GeoAI CON Inter-session 2026
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            5-day intensive curriculum bridging DGPS surveying, UAV photogrammetry, advanced remote sensing, bathymetry, and strategic policy.
          </div>
        </div>
      </section>

      {/* ───── Day Selector Tabs ───── */}
      <section className="py-16 md:py-24">
        <div className="container-standard max-w-5xl">

          {/* Pill Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            {[1, 2, 3, 4, 5].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex-1 min-w-[120px] ${
                  activeDay === day
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="block text-[9px] font-medium tracking-wider opacity-70 mb-0.5">Day 0{day}</span>
                <span className="block text-[11px] leading-tight truncate">{daysData[day].title}</span>
              </button>
            ))}
          </div>

          {/* ───── Active Day Content Card ───── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Day 0{activeDay}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-1">{current.title}</h2>
                    <p className="text-sm text-slate-500 font-semibold italic">{current.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {current.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Equipment', value: current.equipment, color: 'blue' },
                    { label: 'Software', value: current.software, color: 'cyan' },
                    { label: 'Outcome', value: current.outcome, color: 'emerald' },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                      <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        spec.color === 'blue' ? 'text-blue-600' :
                        spec.color === 'cyan' ? 'text-cyan-600' : 'text-emerald-600'
                      }`}>
                        {spec.label}
                      </h3>
                      <p className="text-xs text-slate-700 font-semibold leading-relaxed">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Photo Gallery Grid */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Fieldwork Glimpse
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {current.images.map((img, i) => (
                      <div key={i} className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-200 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <OptimizedImage
                          src={img.src}
                          alt={img.caption}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-[10px] text-white font-medium drop-shadow-md leading-snug">{img.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ───── GeoAI CON 2026 Promotion Card ───── */}
          <div className="relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8 group hover:border-blue-300 transition-all duration-300">
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100/50" />
            
            {/* Header Badge */}
            <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              Upcoming Flagship Event
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              {/* Left Column: Event Core Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    GeoAI CON 2026
                  </h2>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                    Intelligence for Earth, Environment and Sustainability
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Join the premier international conference on Geo-Artificial Intelligence organized by the <strong>Centre of Excellence in Socio-Environmental Sustainability (CoE-SEnSRS), IIT Ropar</strong>. This landmark event brings together 500+ global researchers, industry leaders, and policymakers to exchange ideas on spatial data science, deep learning for remote sensing, and GIS technologies.
                </p>

                {/* Grid of Key Features */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Dates</h4>
                      <p className="text-xs text-slate-500 font-medium">23 – 27 November 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Venue &amp; Mode</h4>
                      <p className="text-xs text-slate-500 font-medium">IIT Ropar &amp; Online (Hybrid)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Publications</h4>
                      <p className="text-xs text-slate-500 font-medium">Scopus / WoS / IEEE / Springer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Thematic Tracks</h4>
                      <p className="text-xs text-slate-500 font-medium">8 Specialized Focus Areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Buttons / Quick Actions */}
              <div className="flex flex-col justify-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 h-fit md:my-auto">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest text-center border-b border-slate-200/60 pb-3">
                  Participate &amp; Submit
                </h3>
                
                <Link
                  href="https://2026.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Conference
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>

                <Link
                  href="https://submission.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Abstract
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>

                <div className="flex justify-center gap-4 text-slate-400 mt-1">
                  <Link href="https://www.facebook.com/profile.php?id=61582803331985" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.615L17 8h-3V6.157c0-.838.21-.914.882-.914H17V2h-2.923C11.178 2 9 3.86 9 7.028V8z"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/groups/15392053/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </Link>
                  <Link href="https://www.instagram.com/geoaicon/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ───── CTA Redirect ───── */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 gap-6">
            <div>
              <h3 className="font-black text-lg text-slate-900 tracking-tight mb-1">Need the Original Intersession Data?</h3>
              <p className="text-xs text-slate-500 font-medium">
                Access complete project documents, GIS files, satellite layers, and detailed panel outcomes on our dedicated platform.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="https://2026.geoaicon.com/intersession"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-none"
              >
                Intersession Site
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 btn btn-outline border-slate-200 text-slate-600 rounded-xl px-6 font-bold text-xs uppercase tracking-wider hover:bg-slate-50"
              >
                Back Home
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
