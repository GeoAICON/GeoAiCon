export default function IntersessionPreview() {
  const images = [
    // Day 1
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%201(2).jpg', alt: 'Day 1: Core Frameworks' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%201(3).jpg', alt: 'Day 1: Core Frameworks' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%201(4).jpg', alt: 'Day 1: Core Frameworks' },
    // Day 2
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%202(1).JPG', alt: 'Day 2: Spatial Systems' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%202(2).jpg', alt: 'Day 2: Spatial Systems' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%202(3).jpg', alt: 'Day 2: Spatial Systems' },
    // Day 3
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%203(1).jpg', alt: 'Day 3: Drone Deployments' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%203(2).jpg', alt: 'Day 3: Drone Deployments' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%203(3).jpg', alt: 'Day 3: Drone Deployments' },
    // Day 4
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%204(1).jpg', alt: 'Day 4: Bathymetry Mapping' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%204(2).jpg', alt: 'Day 4: Bathymetry Mapping' },
    { src: '/Group%20picture%20of%20GeoAI%20CON/Day%204(3).jpg', alt: 'Day 4: Bathymetry Mapping' },
  ];

  return (
    <section id="intersession" className="section-padding bg-base-100 overflow-hidden">
      <div className="container-standard mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Ongoing Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Intersession Glimpses</h3>
            <p className="text-base-content/70 mt-4 max-w-lg leading-relaxed text-lg">
              Behind the scenes of our continual global research deployment and field operations between main events.
            </p>
          </div>
          <a href="https://geoaicon.vercel.app/" target="_blank" className="btn btn-outline border-base-300 rounded-btn text-base-content hover:bg-base-200 hover:border-base-300 font-medium hidden md:inline-flex">
            View 2026 Full Gallery &rarr;
          </a>
        </div>
      </div>
        
      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-infinite-scroll flex gap-4 md:gap-6 min-w-max hover:[animation-play-state:paused] px-4">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative w-64 md:w-80 lg:w-96 aspect-[4/3] overflow-hidden rounded-box border border-base-300/50 bg-base-200 shadow-sm transition-shadow">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-sm tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 container-standard md:hidden text-center">
        <a href="https://geoaicon.vercel.app/" target="_blank" className="btn btn-primary rounded-btn w-full text-primary-content">
          View 2026 Full Gallery
        </a>
      </div>
    </section>
  );
}
