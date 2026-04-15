'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';

export default function CTA() {
  return (
    <section id="partnership" className="section-padding bg-transparent">
      <div className="container-standard">
        <div className="bg-base-100/40 backdrop-blur-3xl border border-base-300/50 rounded-[3rem] p-12 md:p-24 text-center max-w-6xl mx-auto shadow-2xl relative overflow-hidden group">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-secondary/10 transition-colors duration-1000" />
          
          <StaggerContainer className="relative z-10 space-y-10">
            <StaggerItem className="space-y-6">
              <span className="text-secondary text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-secondary/20 rounded-full bg-secondary/5 inline-block">
                Open Solicitation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-[0.95] text-balance">
                Shape the future of <br />
                <span className="text-primary italic font-medium">Spatial Intelligence</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed font-normal">
                Sponsorships and institutional partnerships for the 2026 edition are now open. 
                Collaborate directly with the foremost authorities in Geospatial AI.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <a href="#contact" className="btn btn-primary btn-lg rounded-2xl px-12 border-transparent hover:border-transparent text-primary-content font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                Become a Partner
              </a>
              <a href="#prospectus" className="btn btn-outline border-base-300/50 btn-lg rounded-2xl px-12 bg-base-100/20 backdrop-blur-md hover:bg-base-200/50 hover:border-base-300 text-base-content font-bold tracking-tight hover:scale-105 transition-all duration-300">
                Download Prospectus
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
