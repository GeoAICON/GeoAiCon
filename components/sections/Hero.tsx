'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-padding bg-transparent flex items-center min-h-[90vh]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="container-standard relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

          {/* ── Center Column: Copy + CTAs + stats ── */}
          <StaggerContainer className="space-y-10 flex flex-col items-center">
            <StaggerItem className="space-y-4">
              <span className="inline-block py-1.5 px-4 border border-primary/20 rounded-full text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 backdrop-blur-md shadow-sm">
                The Global GeoAI Conference Hub
              </span>
              <h1 className="leading-[1.1] text-balance">
                Advancing Geospatial AI <br />
                <span className="text-base-content/40">for Global Impact</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-2xl text-lg md:text-xl text-base-content/70 leading-relaxed font-normal">
                An institutional ecosystem uniting top academic minds, government leaders,
                and industry pioneers to build the next generation of precise, scalable
                geospatial solutions.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-4 pt-4 justify-center">
              <a
                href="#editions"
                className="btn btn-primary rounded-xl btn-lg px-10 border-transparent hover:border-transparent text-primary-content font-bold transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(var(--color-primary),0.5)]"
              >
                Explore Editions
              </a>
              <a
                href="#ecosystem"
                className="btn btn-outline border-base-300 rounded-xl btn-lg px-10 bg-base-100/50 backdrop-blur-sm text-base-content hover:bg-base-200 hover:border-base-300 transition-all hover:-translate-y-1"
              >
                View Network
              </a>
            </StaggerItem>

            <StaggerItem
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-base-300/50 w-full"
              aria-label="Conference Statistics"
            >
              {[
                { label: 'Attendees', value: '5.2K+' },
                { label: 'Publications', value: '120+' },
                { label: 'Nations', value: '45' },
                { label: 'Keynotes', value: '80+' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl font-black tracking-tight text-primary/90">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-base-content/50 mt-1.5 font-bold">{stat.label}</span>
                </div>
              ))}
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>

    </section>
  );
}


