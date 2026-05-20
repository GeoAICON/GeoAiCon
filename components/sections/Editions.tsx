'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

export default function Editions() {
  return (
    <section id="editions" className="section-padding bg-base-100">
      <div className="container-standard bg-slate-50 rounded-[2.5rem] p-8 lg:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-200 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block">The Conferences</h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Editions</span>
            </h3>
          </div>
        </FadeIn>
        
        <StaggerContainer className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* 2026 Edition */}
          <StaggerItem>
            <div className="group border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all duration-500 bg-white shadow-md hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col h-full hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100">
                <Image 
                  src="/hero/2026.png" 
                  alt="GeoAI CON 2026 Preview" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow relative bg-white">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="border border-blue-200 text-blue-700 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full bg-blue-50 shadow-sm">Upcoming Edition</div>
                    <div className="text-slate-500 font-semibold tracking-wider text-xs uppercase">Dec 2026</div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">GeoAI CON 2026</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed font-normal text-sm">
                    The next frontier in intelligent geospatial systems. Join global innovators, researchers, and government leaders as we define the 2026 standards.
                  </p>
                </div>
                <Link href="https://2026.geoaicon.com" target="_blank" className="relative z-10 btn bg-blue-600 hover:bg-blue-700 w-fit rounded-xl px-8 text-white font-bold tracking-wide border-transparent shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all group-hover:px-10">
                  Visit 2026 Portal &rarr;
                </Link>
              </div>
            </div>
          </StaggerItem>
          
          {/* 2025 Edition */}
          <StaggerItem>
            <div className="group border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-300 transition-all duration-500 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/5 flex flex-col h-full hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100">
                <Image 
                  src="/hero/2025.png" 
                  alt="GeoAI CON 2025 Retrospective" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow relative bg-white">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600">Completed</div>
                    <div className="text-slate-400 font-semibold tracking-wider text-xs uppercase">Dec 2025</div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">GeoAI CON 2025</h4>
                  <p className="text-slate-500 mb-6 leading-relaxed font-normal text-sm">
                    Our landmark previous edition that brought together thousands of researchers and established foundational frameworks for modern spatial AI.
                  </p>
                </div>
                <Link href="https://2025.geoaicon.com" target="_blank" className="relative z-10 btn btn-outline border-slate-300 text-slate-600 w-fit rounded-xl px-8 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors group-hover:px-10 shadow-sm">
                  Explore 2025 Retrospective
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        {/* Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Event',
                'name': 'GeoAI CON 2026',
              }
            ])
          }}
        />
      </div>
    </section>
  );
}
