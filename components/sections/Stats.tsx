'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';

export default function Stats() {
  return (
    <section id="impact" className="section-padding bg-transparent">
      <div className="container-standard">
        <div className="bg-base-100 md:bg-base-100/40 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-20 border border-base-300/50 shadow-2xl relative overflow-hidden group">
          {/* Decorative corner glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <StaggerContainer className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="max-w-xl space-y-8">
              <StaggerItem className="space-y-4">
                <span className="text-primary text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 border border-primary/20 rounded-full bg-primary/5 inline-block">
                  Proven Trajectory
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                  Quantifiable <br />
                  <span className="text-primary italic font-medium">Global Impact</span>
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-base-content/60 text-lg md:text-xl leading-relaxed font-light">
                  For over half a decade, GeoAI CON has accelerated the timeline of adoption 
                  for spatial intelligence systems across major civil infrastructure projects worldwide.
                </p>
              </StaggerItem>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              <StaggerItem className="space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary">14+</div>
                <div className="h-px w-8 bg-primary/30" />
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Years Research</div>
                <p className="text-xs md:text-sm text-base-content/50 leading-snug">
                  Cumulative peer-reviewed insights driving the industry forward.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-secondary">2.5M</div>
                <div className="h-px w-8 bg-secondary/30" />
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Acres Surveyed</div>
                <p className="text-xs md:text-sm text-base-content/50 leading-snug">
                  Through collaborative intersession drone and satellite work.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">280</div>
                <div className="h-px w-8 bg-base-content/20" />
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Institutions</div>
                <p className="text-xs md:text-sm text-base-content/50 leading-snug">
                  Participating actively in standards development yearly.
                </p>
              </StaggerItem>
              
              <StaggerItem className="space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-accent">$10B+</div>
                <div className="h-px w-8 bg-accent/30" />
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Impact Value</div>
                <p className="text-xs md:text-sm text-base-content/50 leading-snug">
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
