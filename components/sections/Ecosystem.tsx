'use client';

import { FadeIn } from '../layout/Animations';
import Image from 'next/image';

const rLogos = ['r1.png', 'r2-fixed.png', 'r3.png', 'r5.png', 'r6.jpeg', 'r7.jpeg', 'r8.jpeg'];
const cLogos = ['c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg', 'c1.jpeg', 'c2.png', 'c5.jpeg', 'c6.jpeg'];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding bg-transparent overflow-hidden">
      <div className="container-standard bg-base-100/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-base-200/50">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary uppercase text-sm font-semibold tracking-widest">Global Reach</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The GeoAI Ecosystem</h3>
          <p className="text-base-content/70 text-lg leading-relaxed pt-2">
            A consortium of the world's leading academic institutions, spatial tech enterprises, and government spatial data infrastructures.
          </p>
        </FadeIn>
      </div>
      
      <div className="relative flex flex-col gap-6 md:gap-10 mt-10 md:mt-12 w-full max-w-[100vw]">
        {/* Disable solid fade gradients because they interfere with transparent background drone */ }
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-base-100/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-base-100/30 to-transparent z-10 pointer-events-none" />

        {/* Row 1: 'r' series moving left to right */}
        <div className="flex w-max animate-infinite-scroll-reverse hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`r-set-${setIdx}`} className="flex w-max">
              {rLogos.map((logo, i) => (
                <div key={`r-${setIdx}-${i}`} className="flex items-center justify-center w-[160px] md:w-[240px] h-24 md:h-32 p-4 md:p-6 mx-3 md:mx-4 bg-white rounded-box border border-gray-200 shadow-sm transition-all duration-300 group">
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={200}
                    height={100}
                    className="object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: 'c' series moving right to left */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[1, 2].map((setIdx) => (
            <div key={`c-set-${setIdx}`} className="flex w-max">
              {cLogos.map((logo, i) => (
                <div key={`c-${setIdx}-${i}`} className="flex items-center justify-center w-[160px] md:w-[240px] h-24 md:h-32 p-4 md:p-6 mx-3 md:mx-4 bg-white rounded-box border border-gray-200 shadow-sm transition-all duration-300 group">
                  <Image 
                    src={`/LogoLoop/${logo}`}
                    alt="GeoAI Partner"
                    width={200}
                    height={100}
                    className="object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
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
