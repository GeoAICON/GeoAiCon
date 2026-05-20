export const metadata = {
  title: 'Community Members | GeoAI CON',
  description: 'Meet the brilliant minds driving innovation in geospatial artificial intelligence at GeoAI CON.',
};

export default function CommunityMembersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container-standard text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Community Members
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet the brilliant minds and dedicated researchers driving innovation in geospatial artificial intelligence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Network</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our community consists of global experts from academia, industry, and government organizations working together to solve spatial challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder Member Cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-900">Dr. Researcher Name</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">Institution / University</p>
                <p className="text-slate-500 text-sm">Specializing in remote sensing and deep learning applications.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
