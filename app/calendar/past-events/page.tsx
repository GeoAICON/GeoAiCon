export const metadata = {
  title: 'Past Events | GeoAI CON',
  description: 'Explore the archive of successful past conferences, workshops, and webinars hosted by GeoAI CON.',
};

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img
            src="/herobg/header-bg16.webp"
            alt="Header Background Texture"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-indigo-950/80 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Event Archive
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Review highlights, materials, and recordings from our previous successful conferences and workshops.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard max-w-5xl">
          <div className="space-y-8">
            {/* 2025 Event Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-video bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                <span className="font-bold">Event Image</span>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Conference</span>
                  <span className="text-slate-500 text-sm">Oct 2025</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">GeoAI CON 2025</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Our inaugural international conference gathered over 400 attendees to discuss the foundational integration of artificial intelligence with geographic information systems.
                </p>
                <a href="https://2025.geoaicon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-1">
                  View 2025 Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>

            {/* Intersession Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-video bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                <span className="font-bold">Event Image</span>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Workshop</span>
                  <span className="text-slate-500 text-sm">May 2026</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Geo Intersession Training</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  An intensive hands-on field training program focusing on remote sensing equipment and deep learning deployment on edge devices.
                </p>
                <a href="https://2026.geoaicon.com/intersession" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-1">
                  View Highlights
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
