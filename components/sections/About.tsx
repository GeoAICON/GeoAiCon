'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

export default function About() {
  return (
    <section id="about" className="section-padding bg-base-100 relative overflow-hidden">
      {/* Premium organic glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="container-standard relative z-10">
        <StaggerContainer className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            <StaggerItem className="space-y-4">
              <span className="text-blue-600 text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-blue-200 rounded-full bg-blue-50 inline-block shadow-sm">
                Brand Core
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 text-balance">
                Pioneering Intelligent <br />
                <span className="text-slate-400 italic font-medium">Spatial Systems</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
                GeoAI CON is the definitive international platform dedicated to the convergence 
                of Geographic Information Systems (GIS) and Artificial Intelligence.
              </p>
            </StaggerItem>

            <StaggerItem>
               <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-transparent" />
            </StaggerItem>
          </div>
          
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid sm:grid-cols-2 gap-10 p-8 lg:p-12 rounded-[2rem] border border-slate-200 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group">
              {/* Inner accent highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <StaggerItem className="space-y-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm group/icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-600 group-hover/icon:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.516-.073 4.306-1.757c.567-1.65.073-3.515-1.757-4.306z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-slate-900">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed font-normal text-sm md:text-base">
                  Driving innovation in spatial data science and mapping through collaborative 
                  research and scalable deployment across global domains.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm group/icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-cyan-600 group-hover/icon:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-slate-900">Global Impact</h4>
                <p className="text-slate-600 leading-relaxed font-normal text-sm md:text-base">
                  Establishing technical standards and connecting a decentralized network 
                  of GeoAI professionals to solve complex spatial challenges.
                </p>
              </StaggerItem>
            </div>
          </div>
          
        </StaggerContainer>
      </div>
    </section>
  );
}
