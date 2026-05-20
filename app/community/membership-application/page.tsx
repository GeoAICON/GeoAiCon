export const metadata = {
  title: 'Membership Application | GeoAI CON',
  description: 'Join the GeoAI CON community to access exclusive resources, workshops, and a global network of professionals.',
};

export default function MembershipApplicationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container-standard text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Become a part of the world's leading network for geospatial AI professionals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Membership Application Form</h2>
              <p className="text-slate-600 mb-8">
                Please fill out the form below to apply for membership. Our review committee evaluates applications on a rolling basis.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john.doe@university.edu" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Affiliation / Organization</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g., Stanford University" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Areas of Interest</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Briefly describe your research or professional interests in GeoAI..."></textarea>
                </div>
                
                <button type="button" className="w-full btn btn-primary btn-lg">
                  Submit Application
                </button>
              </form>
            </div>
            <div className="bg-slate-50 p-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">Membership Benefits</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>✓ Priority registration for workshops and hackathons</li>
                <li>✓ Access to exclusive webinars and intersessions</li>
                <li>✓ Networking opportunities with industry leaders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
