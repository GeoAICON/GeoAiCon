import Link from 'next/link';

export const metadata = {
  title: 'Future Events | GeoAI CON',
  description: 'Stay updated with upcoming conferences, workshops, and important deadlines for GeoAI CON.',
};

export default function FutureEventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
          <img
            src="/herobg/header-bg13.webp"
            alt="Header Background Texture"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 to-indigo-950/45 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 drop-shadow-md">
            Upcoming Schedule
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Mark your calendar for our upcoming sessions and important submission deadlines.
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container-standard max-w-4xl">
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:mx-auto mb-16">
            
            {/* Timeline Item 1: Submission Deadline */}
            <div className="mb-12 ml-8 relative group">
              <span className="absolute -left-[41px] top-1.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white shadow-sm group-hover:scale-110 transition-transform duration-300"></span>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  July 15, 2026
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Paper Submission Deadline</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Last day to submit full research papers for consideration in the main conference tracks.
                </p>
                <Link
                  href="https://submission.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Paper
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Timeline Item 2: Notification */}
            <div className="mb-12 ml-8 relative group">
              <span className="absolute -left-[41px] top-1.5 bg-slate-300 h-6 w-6 rounded-full border-4 border-white shadow-sm group-hover:bg-blue-400 transition-colors duration-300"></span>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  September 1, 2026
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Author Notification</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Acceptance notifications will be sent to authors along with review feedback.
                </p>
              </div>
            </div>

            {/* Timeline Item 3: Flagship Event */}
            <div className="ml-8 relative group">
              <span className="absolute -left-[41px] top-1.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white shadow-[0_0_10px_rgba(37,99,235,0.4)] animate-pulse"></span>
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-blue-500 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                
                {/* Glowing Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
                
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    November 23-27, 2026
                  </div>
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Major Flagship Event
                  </span>
                </div>
                
                <h3 className="relative z-10 text-xl font-black text-slate-900 mb-2">GeoAI CON 2026</h3>
                
                <p className="relative z-10 text-slate-600 text-sm leading-relaxed mb-4">
                  The flagship international conference on Geospatial Artificial Intelligence. Join 500+ global researchers, industry leaders, and policymakers exploring AI for Earth, Environment, and Sustainability.
                </p>
                
                <div className="relative z-10 flex flex-wrap gap-2.5">
                  <Link
                    href="https://2026.geoaicon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Official Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <Link
                    href="https://submission.geoaicon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-extrabold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Register / Submit
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* ───── GeoAI CON 2026 Promotion Card ───── */}
          <div className="relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mt-12 group hover:border-blue-300 transition-all duration-300">
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100/50" />
            
            {/* Header Badge */}
            <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              Flagship Event Overview
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              {/* Left Column: Event Core Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    GeoAI CON 2026
                  </h2>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                    Intelligence for Earth, Environment and Sustainability
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Organized by the <strong>Centre of Excellence in Socio-Environmental Sustainability (CoE-SEnSRS), IIT Ropar</strong>, in association with global partners. Featuring 8 specialized thematic tracks ranging from climate resilience to digital twins.
                </p>

                {/* Grid of Key Features */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Dates</h4>
                      <p className="text-xs text-slate-500 font-medium">23 – 27 November 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Venue &amp; Mode</h4>
                      <p className="text-xs text-slate-500 font-medium">IIT Ropar (Hybrid)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Publications</h4>
                      <p className="text-xs text-slate-500 font-medium">Scopus / WoS / IEEE / Springer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Scope</h4>
                      <p className="text-xs text-slate-500 font-medium">500+ Global Researchers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Buttons / Quick Actions */}
              <div className="flex flex-col justify-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 h-fit md:my-auto">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest text-center border-b border-slate-200/60 pb-3">
                  Participate &amp; Submit
                </h3>
                
                <Link
                  href="https://2026.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Conference
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>

                <Link
                  href="https://submission.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Abstract
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>

                <div className="flex justify-center gap-4 text-slate-400 mt-1">
                  <Link href="https://www.facebook.com/profile.php?id=61582803331985" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.615L17 8h-3V6.157c0-.838.21-.914.882-.914H17V2h-2.923C11.178 2 9 3.86 9 7.028V8z"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/groups/15392053/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </Link>
                  <Link href="https://www.instagram.com/geoaicon/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
