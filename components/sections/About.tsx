export default function About() {
  return (
    <section id="about" className="section-padding bg-base-200/50 border-t border-b border-base-300/50">
      <div className="container-standard">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-primary uppercase text-sm font-semibold tracking-widest text-center">About The Brand Hub</h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-base-content/90 mb-12">
            GeoAICon is the leading international platform dedicated to the convergence of Geographic Information Systems (GIS) and Artificial Intelligence.
          </p>
          <div className="grid sm:grid-cols-2 gap-12 text-left bg-base-100 border border-base-300 rounded-box p-8 md:p-12 shadow-sm">
            <div>
              <h3 className="text-xl font-bold mb-3">Our Core Mission</h3>
              <p className="text-base-content/70 leading-relaxed">
                To drive innovation in spatial data science, earth observation, and intelligent mapping through collaborative research and scalable deployment across domains.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-base-content/70 leading-relaxed">
                Establishing technical standards, publishing peer-reviewed execution models, and connecting a decentralized network of working GeoAI professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
