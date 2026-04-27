'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';
import Image from 'next/image';

const rLogos = ['r1.png', 'r2-fixed.png', 'r3.png', 'r5.png', 'r6.jpeg', 'r7.jpeg', 'r8.jpeg'];
const cLogos = ['c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg', 'c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg'];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 via-cyan-50/30 to-transparent pointer-events-none" />

      <div className="container-standard relative z-10">
        <StaggerContainer className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <StaggerItem>
            <span className="text-blue-600 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block shadow-sm">
              Network Dynamics
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900 drop-shadow-sm">
              The GeoAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ecosystem</span>
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              A consortium of the world's leading academic institutions, spatial tech enterprises, 
              and government spatial data infrastructures.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
      
      <div className="relative flex flex-col gap-10 md:gap-16 mt-12 w-full max-w-[100vw] py-16 bg-slate-50/80 backdrop-blur-xl border-y border-slate-200 shadow-inner">
        {/* Subtle edge fades for light mode */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Academic & Research Series */}
        <div className="flex w-max animate-infinite-scroll-reverse hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`r-set-${setIdx}`} className="flex w-max items-center">
              {rLogos.map((logo, i) => (
                <div key={`r-${setIdx}-${i}`} className="flex items-center justify-center w-[180px] md:w-[260px] h-28 md:h-36 p-6 md:p-8 mx-4 md:mx-6 shrink-0 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)] hover:border-blue-300 hover:-translate-y-2 transition-all duration-500 group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={220}
                    height={110}
                    className="object-contain max-h-full max-w-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Enterprise & Infrastructure Series */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`c-set-${setIdx}`} className="flex w-max items-center">
              {cLogos.map((logo, i) => (
                <div key={`c-${setIdx}-${i}`} className="flex items-center justify-center w-[180px] md:w-[260px] h-28 md:h-36 p-6 md:p-8 mx-4 md:mx-6 shrink-0 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.15)] hover:border-cyan-300 hover:-translate-y-2 transition-all duration-500 group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={220}
                    height={110}
                    className="object-contain max-h-full max-w-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
