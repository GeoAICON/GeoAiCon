'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';
import Image from 'next/image';

const rLogos = ['r1.png', 'r2-fixed.png', 'r3.png', 'r5.png', 'r6.jpeg', 'r7.jpeg', 'r8.jpeg'];
const cLogos = ['c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg', 'c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg'];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding bg-transparent overflow-hidden">
      <div className="container-standard">
        <StaggerContainer className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <StaggerItem>
            <span className="text-secondary text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-secondary/20 rounded-full bg-secondary/5 inline-block">
              Network Dynamics
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              The GeoAI Ecosystem
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-lg md:text-xl text-base-content/60 leading-relaxed font-normal max-w-2xl mx-auto">
              A consortium of the world's leading academic institutions, spatial tech enterprises, 
              and government spatial data infrastructures.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
      
      <div className="relative flex flex-col gap-10 md:gap-16 mt-12 w-full max-w-[100vw] py-10 bg-base-200/20 backdrop-blur-sm border-y border-base-300/30">
        {/* Subtle edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Academic & Research Series */}
        <div className="flex w-max animate-infinite-scroll-reverse hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`r-set-${setIdx}`} className="flex w-max">
              {rLogos.map((logo, i) => (
                <div key={`r-${setIdx}-${i}`} className="flex items-center justify-center w-[180px] md:w-[260px] h-28 md:h-36 p-6 md:p-8 mx-4 md:mx-6 rounded-[1.5rem] border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 group cursor-default">
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={220}
                    height={110}
                    className="object-contain max-h-full max-w-full mix-blend-multiply opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Enterprise & Infrastructure Series */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`c-set-${setIdx}`} className="flex w-max">
              {cLogos.map((logo, i) => (
                <div key={`c-${setIdx}-${i}`} className="flex items-center justify-center w-[180px] md:w-[260px] h-28 md:h-36 p-6 md:p-8 mx-4 md:mx-6 rounded-[1.5rem] border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-secondary/40 hover:-translate-y-1 transition-all duration-500 group cursor-default">
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={220}
                    height={110}
                    className="object-contain max-h-full max-w-full mix-blend-multiply opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
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
