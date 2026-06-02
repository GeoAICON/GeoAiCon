import Link from 'next/link';

export const metadata = {
  title: 'GeoInnovate Thon 2026 | GeoAI CON',
  description: 'GeoInnovate Thon 2026 – Innovate for Earth, Inspired by Space. An interdisciplinary outreach initiative organized by CoE SenSRS, IIT Ropar under the banner of ISRS.',
};

export default function GeoInnovateThonPage() {
  const speakers = [
    {
      name: 'Mr. Aseem K. Sharma (IFS Retd.)',
      role: 'Former Indian Forest Service Officer',
      topic: 'Environmental stewardship, natural resource conservation, and the importance of sustainable development practices.',
      image: '/SEnSRS/Logo.png',
    },
    {
      name: 'Dr. Reet Kamal Tiwari',
      role: 'Coordinator, CoE SenSRS, IIT Ropar',
      topic: 'Growing significance of Earth observation technologies and their contribution to solving environmental challenges.',
      image: '/SEnSRS/Dr. Reet Kamal Tiwari.png',
    },
    {
      name: 'Dr. Sartajvir Singh Dhillon',
      role: 'Assistant Professor, IIT Ropar',
      topic: 'Scientific innovation, research opportunities, and the importance of cultivating analytical thinking from an early age.',
      image: '/SEnSRS/Dr. Sartajvir Singh.png',
    },
    {
      name: 'Dr. Vishakha Sood',
      role: 'Expert Researcher',
      topic: 'Contemporary advancements in science and technology and their societal relevance.',
      image: '/SEnSRS/Dr. Vishakha Sood.jpeg',
    },
  ];

  const droneTeam = [
    { name: 'Mohit Patial', role: 'UAV Operations Expert', image: '/SEnSRS/Mohit Patial.jpeg' },
    { name: 'Mohit Thakur', role: 'Drone Mapping Instructor', image: '/SEnSRS/Mohit Thakur.jpeg' },
    { name: 'Randeep Singh', role: 'Photogrammetry Specialist', image: '/SEnSRS/Randeep Singh.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ───── Hero Banner (Matches Site Sub-page Pattern) ───── */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
          <img
            src="/herobg/header-bg13.webp"
            alt="Header Background Texture"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 to-indigo-950/45 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Outreach Program · CoE SenSRS &amp; ISRS
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 drop-shadow-md">
            GeoInnovate Thon 2026
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-6">
            Innovate for Earth, Inspired by Space
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-blue-200/70 font-semibold">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              25 April 2026
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Kendriya Vidyalaya, IIT Ropar
            </span>
            <span className="text-white/20">•</span>
            <span>Classes VIII – XII</span>
          </div>
        </div>
      </section>

      {/* ───── Main Content ───── */}
      <section className="py-16 md:py-24">
        <div className="container-standard max-w-5xl">

          {/* Description Card */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
              Inspiring the Next Generation of Geospatial Innovators
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                The <strong>Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (CoE SenSRS)</strong>, <strong>Indian Institute of Technology Ropar</strong>, successfully organized <strong>GeoInnovate Thon 2026</strong> on 25 April 2026 at Kendriya Vidyalaya, IIT Ropar, under the banner of the <strong>Indian Society of Remote Sensing (ISRS)</strong>.
              </p>
              <p>
                Conceived as an interdisciplinary outreach initiative, the event aimed to foster scientific curiosity, innovation, and environmental awareness among school students by highlighting the immense potential of Earth and Space Sciences in addressing contemporary global challenges. The program was centered on the inspiring theme <em>&ldquo;Innovate for Earth, Inspired by Space,&rdquo;</em> encouraging participants to explore how scientific knowledge and technological advancements can contribute to building a sustainable future.
              </p>
              <p>
                The event witnessed enthusiastic participation from students of <strong>Classes VIII to XII</strong>, who actively engaged in a diverse range of educational and experiential activities throughout the day — bridging the gap between classroom learning and real-world scientific applications.
              </p>
            </div>
          </div>

          {/* ───── Program Blueprint ───── */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
            <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Program Blueprint
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', title: 'Inaugural & Theme Reveal', desc: 'Opening ceremony introducing "Innovate for Earth, Inspired by Space" under the banner of ISRS.' },
                { step: '02', title: 'Keynote Lectures', desc: 'Interactive talks by forestry, Earth observation, and space technology experts.' },
                { step: '03', title: 'Live Drone Demo', desc: 'Hands-on UAV flight operations, data capture, and real-time mapping demonstration.' },
                { step: '04', title: 'Science Competition', desc: 'Students proposing spatial solutions for sustainable environmental preservation.' },
                { step: '05', title: 'Awards Ceremony', desc: 'Recognizing outstanding performances and acknowledging participants.' },
              ].map((item) => (
                <div key={item.step} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                  <span className="text-2xl font-black text-blue-600/20 font-mono">{item.step}</span>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ───── Keynote Speakers ───── */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
            <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Eminent Keynote Speakers
            </h2>
            <p className="text-xs text-slate-500 mb-6">Distinguished scientists and environmental leaders who mentored the young participants.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((s, i) => (
                <div key={i} className="group flex flex-col rounded-2xl border border-slate-100 overflow-hidden bg-slate-50 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-square w-full bg-slate-200 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-tight mb-1">{s.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{s.role}</p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 italic">
                      &ldquo;{s.topic}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───── Live Drone Demonstration + Competition / Awards ───── */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Drone Demo Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                Live Drone Demonstration
              </h2>
              <p className="text-xs text-slate-500 mb-6">Conducted by UAV specialists showcasing drone technology for remote sensing, mapping, environmental monitoring, and precision agriculture.</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {droneTeam.map((d, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2.5">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-200 shrink-0">
                      <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{d.name}</h4>
                      <p className="text-[10px] text-slate-500">{d.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-auto">
                The demonstration offered participants a hands-on understanding of drone technology and its applications in remote sensing, mapping, environmental monitoring, disaster management, and precision agriculture. Students were fascinated by how drones collect and analyze geospatial data, reinforcing the connection between theoretical concepts and technological innovation.
              </p>
            </div>

            {/* Competition & Awards Card */}
            <div className="flex flex-col gap-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex-1">
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Earth &amp; Space Science Competition
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The competition served as a vibrant platform for students to showcase their knowledge, creativity, and problem-solving abilities. Participants were encouraged to think critically about environmental issues and explore innovative solutions inspired by scientific principles and space-based technologies.
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex-1">
                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-3 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Awards &amp; Certificate Distribution
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The program concluded with an Awards and Certificate Distribution Ceremony, recognizing outstanding performances and acknowledging the enthusiastic participation of all students. CoE SenSRS, IIT Ropar expressed its sincere gratitude to the distinguished speakers, organizing teams, institutional partners, teachers, volunteers, and participants.
                </p>
              </div>
            </div>
          </div>

          {/* ───── GeoAI CON 2026 Promotion Card ───── */}
          <div className="relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8 group hover:border-blue-300 transition-all duration-300">
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100/50" />
            
            {/* Header Badge */}
            <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              Upcoming Flagship Event
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              {/* Left Column: Event Core Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    GeoAI CON 2026
                  </h2>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">
                    Intelligence for Earth, Environment and Sustainability
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Join the premier international conference on Geo-Artificial Intelligence organized by the <strong>Centre of Excellence in Socio-Environmental Sustainability (CoE-SEnSRS), IIT Ropar</strong>. This landmark event brings together 500+ global researchers, industry leaders, and policymakers to exchange ideas on spatial data science, deep learning for remote sensing, and GIS technologies.
                </p>

                {/* Grid of Key Features */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Dates</h4>
                      <p className="text-xs text-slate-500 font-medium">23 – 27 November 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Venue &amp; Mode</h4>
                      <p className="text-xs text-slate-500 font-medium">IIT Ropar &amp; Online (Hybrid)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Publications</h4>
                      <p className="text-xs text-slate-500 font-medium">Scopus / WoS / IEEE / Springer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 leading-none mb-1">Thematic Tracks</h4>
                      <p className="text-xs text-slate-500 font-medium">8 Specialized Focus Areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Buttons / Quick Actions */}
              <div className="flex flex-col justify-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 h-fit md:my-auto">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest text-center border-b border-slate-200/60 pb-3">
                  Participate &amp; Submit
                </h3>
                
                <Link
                  href="https://2026.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Conference
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>

                <Link
                  href="https://submission.geoaicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Abstract
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>

                <div className="flex justify-center gap-4 text-slate-400 mt-1">
                  <Link href="https://www.facebook.com/profile.php?id=61582803331985" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.615L17 8h-3V6.157c0-.838.21-.914.882-.914H17V2h-2.923C11.178 2 9 3.86 9 7.028V8z"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/groups/15392053/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </Link>
                  <Link href="https://www.instagram.com/geoaicon/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ───── CTA Redirect ───── */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 gap-6">
            <div>
              <h3 className="font-black text-lg text-slate-900 tracking-tight mb-1">Explore the Full Gallery</h3>
              <p className="text-xs text-slate-500 font-medium">
                View official archives, school participation photos, and award summaries on the CoE SenSRS platform.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="https://sensrs.com/gallery/geoinnovate-thon-26/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-none"
              >
                View Gallery
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 btn btn-outline border-slate-200 text-slate-600 rounded-xl px-6 font-bold text-xs uppercase tracking-wider hover:bg-slate-50"
              >
                Back Home
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
