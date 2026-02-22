'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

export default function About() {
  return (
    <section id="about" className="section-padding bg-base-100 border-t border-b border-base-300/50 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-standard relative z-10">
        <StaggerContainer className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <StaggerItem>
              <h2 className="text-primary uppercase text-sm font-semibold tracking-widest">About The Brand Hub</h2>
            </StaggerItem>
            
            <StaggerItem>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Pioneering Intelligent Spatial Systems
              </h3>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg text-base-content/70 leading-relaxed font-light">
                GeoAICon is the leading international platform dedicated to the convergence of Geographic Information Systems (GIS) and Artificial Intelligence.
              </p>
            </StaggerItem>
          </div>
          
          <div className="lg:col-span-7">
            <StaggerContainer className="grid sm:grid-cols-2 gap-8 md:gap-12 pl-0 lg:pl-12 lg:border-l lg:border-base-300">
              <StaggerItem className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.516-.073 4.306-1.757c.567-1.65.073-3.515-1.757-4.306z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold tracking-tight">Our Core Mission</h4>
                <p className="text-base-content/70 leading-relaxed text-sm lg:text-base">
                  To drive innovation in spatial data science, earth observation, and intelligent mapping through collaborative research and scalable deployment across domains.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-base-200 border border-base-300 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-base-content/80">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold tracking-tight">Global Impact</h4>
                <p className="text-base-content/70 leading-relaxed text-sm lg:text-base">
                  Establishing technical standards, publishing peer-reviewed execution models, and connecting a decentralized network of working GeoAI professionals worldwide.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
          
        </StaggerContainer>
      </div>
    </section>
  );
}
