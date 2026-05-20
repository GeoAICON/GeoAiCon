export const metadata = {
  title: 'GeoInnovateThon 2026 | GeoAI CON',
  description: 'Join the GeoInnovateThon at GeoAI CON 2026. Solve real-world geospatial challenges using AI and win exciting prizes.',
};

export default function GeoInnovateThonPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 lg:py-32">
        <div className="container-standard text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            GeoInnovateThon 2026
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            A 48-hour geospatial hackathon to solve real-world challenges using Artificial Intelligence and Earth Observation data.
          </p>
          <button className="btn btn-primary btn-lg shadow-lg">
            Register Your Team
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container-standard">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Hackathon</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The GeoInnovateThon is the premier hackathon event at GeoAI CON 2026. Bringing together developers, data scientists, and GIS experts, this event challenges participants to develop innovative solutions addressing climate change, urban planning, and environmental sustainability.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-10">Themes</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-blue-600 mb-2">1. Climate Resilience</h4>
                  <p className="text-slate-600">Build predictive models for natural disaster management and mitigation.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-blue-600 mb-2">2. Smart Cities</h4>
                  <p className="text-slate-600">Optimize urban infrastructure using spatial analysis and deep learning.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-max">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Event Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <div>
                    <p className="font-bold text-slate-800">Date</p>
                    <p className="text-slate-600">21-22 November 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <p className="font-bold text-slate-800">Location</p>
                    <p className="text-slate-600">Virtual & In-person</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="font-bold text-slate-800">Duration</p>
                    <p className="text-slate-600">48 Hours Non-stop</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
