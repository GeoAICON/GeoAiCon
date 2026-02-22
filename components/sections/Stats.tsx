export default function Stats() {
  return (
    <section id="impact" className="section-padding bg-neutral text-neutral-content border-y border-base-300/50">
      <div className="container-standard">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl space-y-6">
            <h2 className="text-primary uppercase text-sm font-semibold tracking-widest">Track Record</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Quantifiable Global Impact
            </h3>
            <p className="text-neutral-content/80 text-lg md:text-xl leading-relaxed font-light">
              For over half a decade, GeoAICon has accelerated the timeline of adoption for spatial intelligence systems across major civil infrastructure projects worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div className="border-l border-neutral-content/20 pl-6">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tighter">14+</div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">Years of Research</div>
              <p className="mt-2 text-sm text-neutral-content/70">Cumulative peer-reviewed insights driving the industry forward.</p>
            </div>
            <div className="border-l border-neutral-content/20 pl-6">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tighter">2.5M</div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">Acres Surveyed</div>
              <p className="mt-2 text-sm text-neutral-content/70">Through collaborative intersession drone and satellite work.</p>
            </div>
            <div className="border-l border-neutral-content/20 pl-6">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tighter">280</div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">Institutions</div>
              <p className="mt-2 text-sm text-neutral-content/70">Participating actively in standards development yearly.</p>
            </div>
            <div className="border-l border-neutral-content/20 pl-6">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tighter">$10B+</div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">Infrastructure Value</div>
              <p className="mt-2 text-sm text-neutral-content/70">Safeguarded by our spatial intelligence standards globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
