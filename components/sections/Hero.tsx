'use client';

import { StaggerContainer, StaggerItem } from '../layout/Animations';

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-padding bg-transparent flex items-center min-h-[90vh]">
      <div className="container-standard relative z-10 w-full">
        <div className="grid grid-cols-1 items-center">

          {/* ── Copy + CTAs + stats ── */}
          <StaggerContainer className="space-y-10 max-w-3xl">
            <StaggerItem className="space-y-4">
              <span className="inline-block py-1 px-3 border border-base-300 rounded-badge text-xs font-semibold tracking-widest text-primary uppercase bg-base-200/50 backdrop-blur-sm shadow-sm">
                The Global GeoAI Conference Hub
              </span>
              <h1 className="leading-tight">
                Advancing Geospatial AI <br />
                <span className="text-base-content/50">for Global Impact</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-2xl text-lg md:text-xl text-base-content/70 leading-relaxed font-light">
                An institutional ecosystem uniting top academic minds, government leaders,
                and industry pioneers to build the next generation of precise, scalable
                geospatial solutions.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#editions"
                className="btn btn-primary rounded-btn btn-lg px-8 border-transparent hover:border-transparent text-primary-content font-medium transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Editions
              </a>
              <a
                href="#ecosystem"
                className="btn btn-outline border-base-300 rounded-btn btn-lg px-8 bg-base-100 text-base-content hover:bg-base-200 hover:border-base-300 transition-transform hover:-translate-y-1"
              >
                View the Network
              </a>
            </StaggerItem>

            <StaggerItem
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8 pt-8 border-t border-base-300/50"
              aria-label="Conference Statistics"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight">5.2K+</span>
                <span className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Attendees</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight">120+</span>
                <span className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Publications</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight">45</span>
                <span className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Nations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight">80+</span>
                <span className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Keynotes</span>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
