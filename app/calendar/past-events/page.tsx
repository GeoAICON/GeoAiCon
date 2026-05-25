export const metadata = {
  title: 'Past Events | GeoAI CON',
  description: 'Explore the archive of successful past conferences, workshops, and webinars hosted by GeoAI CON.',
};

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
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
            Event Archive
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Review highlights, materials, and recordings from our previous successful conferences and workshops.
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard max-w-5xl">
          <div className="space-y-8">
            {/* 2025 Event Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow duration-300">
              <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shadow-inner shrink-0">
                <img
                  src="/gallery/day-1-3.jpg"
                  alt="GeoAI CON 2025 Keynote"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Conference</span>
                  <span className="text-slate-500 text-sm font-medium">Oct 2025</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">GeoAI CON 2025</h2>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  Our inaugural international conference gathered over 400 attendees to discuss the foundational integration of artificial intelligence with geographic information systems.
                </p>
                <a 
                  href="https://2025.geoaicon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 btn btn-outline btn-primary rounded-xl px-6 font-bold text-xs uppercase tracking-wider"
                >
                  View 2025 Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>

            {/* GeoInnovate Thon 2026 Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow duration-300">
              <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shadow-inner shrink-0">
                <img
                  src="https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-1.jpeg"
                  alt="GeoInnovate Thon 2026 Students Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Workshop</span>
                  <span className="text-slate-500 text-sm font-medium">May 2026</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-1">GeoInnovate Thon 2026</h2>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider text-teal-600 mb-3">
                  Innovate for Earth, Inspired by Space
                </p>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  An intensive design-thinking hackathon and workshop series uniting student innovators and geospatial researchers to tackle critical socio-environmental and sustainability challenges.
                </p>
                <a 
                  href="https://sensrs.com/gallery/geoinnovate-thon-26/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#104c35] hover:bg-[#0c3927] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-none"
                >
                  Explore Gallery &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
