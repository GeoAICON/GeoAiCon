export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding bg-base-200/50 border-t border-b border-base-300/50">
      <div className="container-standard">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary uppercase text-sm font-semibold tracking-widest">Global Reach</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The GeoAI Ecosystem</h3>
          <p className="text-base-content/70 text-lg leading-relaxed pt-2">
            A consortium of the world's leading academic institutions, spatial tech enterprises, and government spatial data infrastructures.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
           {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
             <div key={i} className="flex justify-center items-center h-20 md:h-24 p-4 border border-base-300/60 bg-base-100 rounded-box shadow-sm hover:border-primary transition-colors cursor-default">
               <span className="font-bold tracking-widest text-base-content/30 text-xs md:text-sm">PARTNER {i}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
