export const metadata = {
  title: 'Future Events | GeoAI CON',
  description: 'Stay updated with upcoming conferences, workshops, and important deadlines for GeoAI CON.',
};

export default function FutureEventsPage() {
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
            Upcoming Schedule
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Mark your calendar for our upcoming sessions and important submission deadlines.
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard max-w-4xl">
          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:mx-auto">
            
            {/* Timeline Item 1 */}
            <div className="mb-10 ml-8 relative">
              <span className="absolute -left-[41px] bg-blue-600 h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <span className="text-sm font-bold text-blue-600 mb-1 block">July 15, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Paper Submission Deadline</h3>
                <p className="text-slate-600">Last day to submit full research papers for consideration in the main conference tracks.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-10 ml-8 relative">
              <span className="absolute -left-[41px] bg-slate-300 h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <span className="text-sm font-bold text-slate-500 mb-1 block">September 1, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Author Notification</h3>
                <p className="text-slate-600">Acceptance notifications will be sent to authors along with review feedback.</p>
              </div>
            </div>


            {/* Timeline Item 4 */}
            <div className="ml-8 relative">
              <span className="absolute -left-[41px] bg-slate-300 h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <span className="text-sm font-bold text-slate-500 mb-1 block">November 23-27, 2026</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">GeoAI CON 2026</h3>
                <p className="text-slate-600">The main conference event featuring keynotes, technical sessions, and networking.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
