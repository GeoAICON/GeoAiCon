export const metadata = {
  title: 'Past Events | GeoAI CON',
  description: 'Explore the archive of successful past conferences, workshops, and webinars hosted by GeoAI CON.',
};

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
          <img
            src="/herobg/header-bg13.webp"
            alt="Header Background Texture"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 to-indigo-950/45 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 drop-shadow-md">
            Event Archive
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Review highlights, materials, and recordings from our previous successful conferences and workshops.
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-standard max-w-5xl">
          <div className="space-y-8">
            {/* 2025 Event Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-8 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-inner shrink-0 self-center">
                  <img
                    src="/gallery/day-1-3.jpg"
                    alt="GeoAI CON 2025 at IIT Ropar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/75 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                    IIT Ropar, Punjab
                  </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">International Conference</span>
                      <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">5 - 8 September 2025</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">GeoAI CON 2025</h2>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm font-normal">
                      Organized by the <strong>Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (SEnSRS)</strong> at the <strong>Indian Institute of Technology (IIT) Ropar</strong>, Punjab, India. 
                      GeoAI CON 2025 brought together researchers, academicians, industry professionals, and students to share recent advancements, innovative ideas, and research outcomes related to Geospatial Artificial Intelligence, Earth observation, remote sensing, surveying, and environmental sustainability.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 text-xs text-slate-600 italic flex gap-3 items-start">
                      <span className="text-blue-500 text-lg leading-none">“</span>
                      <div>
                        The conference was inaugurated at the Senate Hall (Admin Block) with a welcome address by the Organizing Secretary, <strong>Dr. Reet Kamal Tiwari</strong>, and a Patron's Address by <strong>Prof. (Dr.) Rajiv Ahuja</strong>, Director of IIT Ropar, setting the stage for future collaborations in Spatial Intelligence.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rich Technical Program & Speaker Grid */}
              <div className="grid md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Distinguished Keynotes
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Biswajeet Pardhan</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">UTS Sydney, Australia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Avik Bhattacharya</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">IIT Bombay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Mahesh Kumar Jat</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">MNIT Jaipur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Mahesh Pal</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">NIT Kurukshetra</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Ajanta Goswami</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">IIT Roorkee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Akshar Tripathi</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">IIT Patna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <strong className="text-slate-800 shrink-0">Prof. (Dr.) Prashant K. Srivastav</strong> 
                      <span className="text-slate-400">&bull;</span> 
                      <span className="text-slate-500">BHU Varanasi</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    Core Highlights & Themes
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-600">
                    <li className="flex gap-2.5 items-start">
                      <span className="text-cyan-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Diverse Sessions:</strong> Technical onsite presentations on <em>"GeoAI in Earth Observation"</em> and <em>"Advanced Applications of AI"</em> alongside global virtual presentations via Google Meet.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-cyan-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Practical Tutorials:</strong> Dedicated third day for hands-on drone mapping, surveying, and advanced geomatics training at the Geomatics Engineering Lab.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-cyan-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Academic Exchange:</strong> Provided students and researchers an elite networking hub for sharing innovative remote sensing methodologies and sustainability tools.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                  IIT Ropar, India &bull; 4-Day Symposium
                </div>
                <a 
                  href="https://2025.geoaicon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 btn btn-outline btn-primary rounded-xl px-6 font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  View 2025 Archive
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>

            {/* GeoInnovate Thon 2026 Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-8 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-inner shrink-0 self-center">
                  <img
                    src="https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-1.jpeg"
                    alt="GeoInnovate Thon 2026 Students Group at IIT Ropar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/75 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                    IIT Ropar, Punjab
                  </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Interdisciplinary Outreach</span>
                      <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">25 April 2026</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">GeoInnovate Thon 2026</h2>
                    <div className="text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                      Innovate for Earth, Inspired by Space
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm font-normal">
                      Organized by the <strong>Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (CoE SenSRS)</strong>, <strong>Indian Institute of Technology Ropar (IIT Ropar)</strong>, under the prestigious banner of the <strong>Indian Society of Remote Sensing (ISRS)</strong>. This flagship interdisciplinary outreach initiative successfully engaged students of <strong>Classes VIII to XII</strong>, fostering scientific curiosity, innovation, and environmental awareness through the prism of Earth and Space Sciences.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 text-xs text-slate-600 italic flex gap-3 items-start">
                      <span className="text-emerald-500 text-lg leading-none">“</span>
                      <div>
                        Conceived to inspire the next generation of researchers and innovators, Geolnnovate Thon 2026 successfully bridged the gap between classroom theories and real-world scientific applications, highlighting the potential of remote sensing and space science for sustainable resource management.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical program, keynote sessions, and live demonstrations */}
              <div className="grid md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Eminent Keynote Sessions
                  </h3>
                  <ul className="space-y-3.5 text-xs text-slate-600">
                    <li className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-800">Mr. Aseem K. Sharma (IFS Retd.)</strong>
                      </div>
                      <span className="text-slate-500">Environmental stewardship, natural resource conservation, and sustainable development.</span>
                    </li>
                    <li className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-800">Dr. Reet Kamal Tiwari</strong>
                      </div>
                      <span className="text-slate-500">Growing significance of Earth observation technologies for addressing contemporary environmental challenges.</span>
                    </li>
                    <li className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-800">Dr. Sartajvir Singh Dhillon</strong>
                      </div>
                      <span className="text-slate-500">Cultivating analytical thinking, scientific innovation, and global research opportunities from an early age.</span>
                    </li>
                    <li className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-800">Dr. Vishakha Sood</strong>
                      </div>
                      <span className="text-slate-500">Contemporary advancements in science and technology alongside their direct societal relevance.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    Experiential Highlights & Attractions
                  </h3>
                  <ul className="space-y-3.5 text-xs text-slate-600">
                    <li className="flex gap-2.5 items-start">
                      <span className="text-indigo-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Live Drone Demonstration:</strong> Led by <em>Mohit Patial, Mohit Thakur, and Randeep Singh</em>, providing school students a hands-on showcase of drone assembly, data acquisition, mapping, and applications in disaster management and precision agriculture.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-indigo-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Earth & Space Science Competition:</strong> A vibrant creative arena where students designed innovative solutions to critical environmental problems using space-based remote sensing concepts.
                      </div>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-indigo-600 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong>Awards & Certificate Distribution:</strong> Recognizing outstanding student performances and concluding the program with deep gratitude to speakers, teachers, volunteers, and partnering institutions.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-100 pt-6 gap-4">
                <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase text-center sm:text-left">
                  IIT Ropar, Kendriya Vidyalaya &bull; School Outreach Program
                </div>
                <a 
                  href="https://sensrs.com/gallery/geoinnovate-thon-26/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-none"
                >
                  Explore Event Gallery
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
