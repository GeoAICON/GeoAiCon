export default function Hero() {
  return (
    <section className="relative overflow-hidden section-padding bg-base-100 flex items-center min-h-[85vh]">
      <div className="container-standard relative z-10 w-full">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 border border-base-300 rounded-badge text-xs font-semibold tracking-widest text-primary uppercase bg-base-200/50 backdrop-blur-sm">
              The Global Brand Hub
            </span>
            <h1 className="leading-tight">
              Advancing Geospatial AI <br />
              <span className="text-base-content/50">for Global Impact</span>
            </h1>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-base-content/70 leading-relaxed font-light">
            An institutional ecosystem uniting top academic minds, government leaders, and industry pioneers to build the next generation of precise, scalable geospatial solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#editions" className="btn btn-primary rounded-btn btn-lg px-8 border-transparent hover:border-transparent text-primary-content font-medium">
              Explore Editions
            </a>
            <a href="#ecosystem" className="btn btn-outline border-base-300 rounded-btn btn-lg px-8 bg-base-100 text-base-content hover:bg-base-200 hover:border-base-300">
              View the Network
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-8 border-t border-base-300/50">
             <div>
               <div className="text-3xl font-bold tracking-tight">5.2K+</div>
               <div className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Attendees</div>
             </div>
             <div>
               <div className="text-3xl font-bold tracking-tight">120+</div>
               <div className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Publications</div>
             </div>
             <div>
               <div className="text-3xl font-bold tracking-tight">45</div>
               <div className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Nations</div>
             </div>
             <div>
               <div className="text-3xl font-bold tracking-tight">80+</div>
               <div className="text-xs uppercase tracking-widest text-base-content/60 mt-2 font-semibold">Keynotes</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
