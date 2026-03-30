export default function CTA() {
  return (
    <section id="partnership" className="section-padding bg-transparent">
      <div className="container-standard">
        <div className="bg-base-100/60 backdrop-blur-md border border-base-300 rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto space-y-8 shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight text-base-content">
              Shape the future of intelligent mapping
            </h2>
            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed font-light">
              Sponsorships and institutional partnerships for the 2026 edition are now open. Collaborate directly with the foremost authorities in Geospatial AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
              <a href="#contact" className="btn btn-primary btn-lg rounded-btn px-10 border-transparent hover:border-transparent text-primary-content font-medium">
                Become a Partner
              </a>
              <a href="#prospectus" className="btn btn-outline border-base-300 btn-lg rounded-btn px-10 bg-base-100 hover:bg-base-200 hover:border-base-300 text-base-content font-medium">
                Download Prospectus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
