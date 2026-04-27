'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Stats() {
  return (
    <section id="impact" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-20 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          {/* Decorative corner highlights */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-blue-100 group-hover:scale-110" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-100/50 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-cyan-100 group-hover:scale-110" />
          
          <StaggerContainer className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="max-w-xl space-y-8">
              <StaggerItem className="space-y-4">
                <span className="text-blue-600 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 inline-block">
                  Proven Trajectory
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
                  Quantifiable <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic font-medium">Global Impact</span>
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
                  For over half a decade, GeoAI CON has accelerated the timeline of adoption 
                  for spatial intelligence systems across major civil infrastructure projects worldwide.
                </p>
              </StaggerItem>
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <StaggerItem className="space-y-3 p-6 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md group/card relative overflow-hidden">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 group-hover/card:text-blue-600 transition-colors">
                  <AnimatedCounter value={14} suffix="+" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500">Years Research</div>
                <p className="text-xs md:text-sm text-slate-500/80 leading-snug">
                  Cumulative peer-reviewed insights driving the industry forward.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3 p-6 rounded-3xl bg-white border border-slate-100 hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-md group/card relative overflow-hidden">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 group-hover/card:text-cyan-600 transition-colors">
                  <AnimatedCounter value={2.5} suffix="M" duration={2.5} />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500">Acres Surveyed</div>
                <p className="text-xs md:text-sm text-slate-500/80 leading-snug">
                  Through collaborative intersession drone and satellite work.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3 p-6 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md group/card relative overflow-hidden">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 group-hover/card:text-blue-600 transition-colors">
                  <AnimatedCounter value={280} duration={3} />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500">Institutions</div>
                <p className="text-xs md:text-sm text-slate-500/80 leading-snug">
                  Participating actively in standards development yearly.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3 p-6 rounded-3xl bg-white border border-slate-100 hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-md group/card relative overflow-hidden">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 group-hover/card:text-cyan-600 transition-colors">
                  <AnimatedCounter value={10} prefix="$" suffix="B+" duration={2} />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500">Impact Value</div>
                <p className="text-xs md:text-sm text-slate-500/80 leading-snug">
                  Safeguarded by our spatial intelligence standards globally.
                </p>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
