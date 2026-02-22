import Link from 'next/link';

export default function Editions() {
  return (
    <section id="editions" className="section-padding bg-base-100">
      <div className="container-standard">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">The Conferences</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Official Editions</h3>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* 2026 Edition */}
          <div className="group border border-base-300 rounded-box overflow-hidden hover:border-primary transition-all duration-300 bg-base-100 shadow-sm hover:shadow-md flex flex-col h-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-base-300/50">
              <img 
                src="/hero/2026.png" 
                alt="GeoAICon 2026 Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="badge badge-primary badge-outline font-semibold uppercase tracking-wider text-xs px-3 py-3 rounded-badge">Upcoming Edition</div>
                  <div className="text-base-content/60 font-medium text-sm">Dec 2026</div>
                </div>
                <h4 className="text-3xl font-bold mb-4">GeoAICon 2026</h4>
                <p className="text-base-content/70 mb-8 leading-relaxed">
                  The next frontier in intelligent geospatial systems. Join global innovators, researchers, and government leaders as we define the 2026 standards.
                </p>
              </div>
              <Link href="https://geoaicon.vercel.app/" target="_blank" className="btn btn-primary w-fit rounded-btn text-primary-content hover:opacity-90 transition-opacity">
                Visit 2026 Portal &rarr;
              </Link>
            </div>
          </div>
          
          {/* 2025 Edition */}
          <div className="group border border-base-300 rounded-box overflow-hidden bg-base-200/30 flex flex-col h-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-base-300/50">
              <img 
                src="/hero/2025.png" 
                alt="GeoAICon 2025 Retrospective" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="badge font-semibold uppercase tracking-wider text-xs px-3 py-3 rounded-badge bg-base-300 border-none text-base-content/80">Completed</div>
                  <div className="text-base-content/60 font-medium text-sm">Dec 2025</div>
                </div>
                <h4 className="text-3xl font-bold mb-4">GeoAICon 2025</h4>
                <p className="text-base-content/70 mb-8 leading-relaxed">
                  Our landmark previous edition that brought together thousands of researchers and established foundational frameworks for modern spatial AI.
                </p>
              </div>
              <Link href="https://geoaicon-2025.vercel.app/" target="_blank" className="btn btn-outline border-base-300 rounded-btn text-base-content w-fit hover:bg-base-300 hover:border-base-300 transition-colors">
                Explore 2025 Retrospective
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
