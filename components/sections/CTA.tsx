'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';

export default function CTA() {
  return (
    <section id="partnership" className="section-padding relative overflow-hidden bg-white">
      
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />

      <div className="container-standard relative z-10 w-full pl-0 pr-0 md:pl-4 md:pr-4">
        <div className="bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-white backdrop-blur-3xl border border-blue-100/50 rounded-[3rem] p-12 md:p-24 text-center mx-auto shadow-[0_20px_80px_-15px_rgba(37,99,235,0.08)] relative overflow-hidden group">
          
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-200/30 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-200/50 transition-all duration-1000 group-hover:scale-150" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-200/50 transition-all duration-1000 group-hover:scale-150" />
          
          <StaggerContainer className="relative z-10 space-y-12">
            <StaggerItem className="space-y-6">
              <span className="text-blue-600 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 border border-blue-200/50 rounded-full bg-white/80 inline-block shadow-sm">
                Open Solicitation
              </span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] text-balance text-slate-900">
                Shape the future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic font-medium">Spatial Intelligence</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
                Sponsorships and institutional partnerships for the 2026 edition are now open. 
                Collaborate directly with the foremost authorities in Geospatial AI.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <a href="#contact" className="btn bg-blue-600 hover:bg-blue-700 btn-lg rounded-2xl px-12 border-transparent text-white font-bold tracking-tight shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)] hover:scale-105 transition-all duration-300">
                Become a Partner
              </a>
              <a href="#prospectus" className="btn bg-white border-slate-200 btn-lg rounded-2xl px-12 hover:bg-slate-50 hover:border-blue-300 hover:text-slate-900 text-slate-700 font-bold tracking-tight hover:scale-105 transition-all duration-300 shadow-sm">
                Download Prospectus
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
