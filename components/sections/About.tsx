'use client';

import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '../layout/Animations';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-standard relative z-10">
        <StaggerContainer className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          
          {/* Main Content Column (Left) */}
          <div className="flex-1 space-y-6">
            <StaggerItem>
              <h2 className="text-[#1a365d] font-semibold tracking-tight">
                Welcome to GeoAI CON 2026!
              </h2>
              <p className="text-slate-700 mt-3">
                GeoAI CON is the flagship conference uniting top academic minds, government leaders, 
                and industry pioneers. On behalf of the Organizing Committee, we are honored to invite you 
                to attend the international symposium which is to be held globally on 23-27 November 2026.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start pt-4">
                <div className="w-40 h-40 md:w-48 md:h-48 relative shrink-0">
                  <Image src="/Logo1.png" alt="GeoAI CON Logo" fill className="object-contain drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-[#1a365d] font-medium tracking-tight">
                    This year&apos;s theme:
                  </h3>
                  <p className="text-slate-700 mt-2">
                    The theme of GeoAI CON 2026 is the Future of Spatial Intelligence. 
                    We will examine the future Earth observation technologies for solving grand challenges 
                    faced by our society and promote collaborative global solutions using such technologies. 
                    GeoAI CON 2026 will provide an excellent experience for its attendees through strong 
                    technical and social programs, and opportunities for collaboration regionally and globally.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Right Sidebar (Latest News & Media) */}
          <StaggerItem className="lg:w-[300px] shrink-0">
            <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden sticky top-24">
              <div className="bg-[#5b8ba1] text-white px-4 py-2 font-medium text-base">
                Latest News &amp; Media
              </div>
              <div className="p-4 text-[13px] text-slate-700 space-y-3">
                <p className="leading-relaxed">
                  The 2026 GeoAI CON <a href="#" className="text-blue-600 hover:underline">Summer School</a> details 
                  are now available. To register, please go to the <a href="#" className="text-blue-600 hover:underline">Registration</a> page 
                  and select the <strong>&quot;Summer School Only&quot;</strong> option. Complete your registration by <strong>30 June 2026</strong> to 
                  receive the Advance Rate.
                </p>
                <div className="h-px w-full bg-slate-100" />
                <p>
                  <a href="#" className="text-blue-600 hover:underline">Registration</a> for the 2026 GeoAI CON 
                  is now open!
                </p>
                <div className="h-px w-full bg-slate-100" />
                <p>
                  <a href="#" className="text-blue-600 hover:underline">Review Results Announced</a>.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
