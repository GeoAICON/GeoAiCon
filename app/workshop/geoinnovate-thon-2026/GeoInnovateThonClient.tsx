'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import OptimizedImage from '../../../components/ui/OptimizedImage';



const eventPhotos = [
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-1.jpeg', caption: 'GeoInnovate Thon 2026 event inaugurate group photo with young student innovators' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-2.jpeg', caption: 'Keynote lecture session with Mr. Aseem K. Sharma sharing natural resource conservation insights' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-3.jpeg', caption: 'Dr. Reet Kamal Tiwari addressing the school students on Earth observation technologies' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-4.jpeg', caption: 'Dr. Sartajvir Singh Dhillon discussing scientific innovation and research careers' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-5.jpeg', caption: 'Dr. Vishakha Sood introducing contemporary advancements in science and technology' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-6.jpeg', caption: 'Live drone mapping and remote sensing payload demonstration' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-7.jpeg', caption: 'Students participating enthusiastically in the drone assembly demonstration' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-8.jpeg', caption: 'UAV operations experts showing drone telemetry data to the participants' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-9.jpeg', caption: 'Young learners observing drone mapping flight operations' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-10.jpeg', caption: 'Earth & Space Science Competition student team explaining their models' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-11.jpeg', caption: 'Interactive project displays on socio-environmental sustainability' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-12.jpeg', caption: 'School children showcasing their space science projects to judges' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-13.jpeg', caption: 'School students explaining their remote sensing and GIS ideas' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-14.jpeg', caption: 'Group of girl students explaining space science projects' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-15.jpeg', caption: 'Dignitaries evaluating the science and technology models' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-16.jpeg', caption: 'Awards Ceremony: Group of winning students with certificates and organizers' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-17.jpeg', caption: 'Winning students receiving certificates of excellence from the experts' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-18.jpeg', caption: 'Participating teachers and volunteers being acknowledged at the event' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-19.jpeg', caption: 'Organizing committee members and volunteers group photo' },
  { src: 'https://sensrs.com/images/photo-gallery/geo-innovate-thon-26/git-20.jpeg', caption: 'Happy school students displaying their certificates of participation' }
];

export default function GeoInnovateThonClient() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? eventPhotos : eventPhotos.slice(0, 8);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : eventPhotos.length - 1));
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev < eventPhotos.length - 1 ? prev + 1 : 0));
  }, [selectedIdx]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Listen for keyboard controls inside Lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext, handleClose]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ───── Hero Banner (Matches Site Sub-page Pattern) ───── */}
      <section className="relative bg-slate-950 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90 select-none pointer-events-none">
          <OptimizedImage
            src="/herobg/header-bg13.webp"
            alt="Header Background Texture"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-indigo-950/40 to-slate-950 z-10 select-none pointer-events-none" />

        <div className="container-standard text-center relative z-20">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Outreach Program · CoE SenSRS &amp; ISRS
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md">
            GeoInnovate Thon 2026
          </h1>
          <div className="text-sm sm:text-lg md:text-xl text-blue-100/95 max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-sm mb-6">
            Innovate for Earth, Inspired by Space
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-200/80 font-bold bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full w-fit mx-auto border border-white/5">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              25 April 2026
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Kendriya Vidyalaya, IIT Ropar
            </span>
            <span className="text-white/20">|</span>
            <span className="text-cyan-300">Classes VIII – XII</span>
          </div>
        </div>
      </section>

      {/* ───── Main Content ───── */}
      <section className="py-16 md:py-24">
        <div className="container-standard max-w-4xl">
          <div className="space-y-8 mb-16">
            {/* Card 1: Overview */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-blue-600 block shrink-0" />
                Event Overview
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-normal text-sm md:text-base">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:line-height-1">
                  The <strong>Centre of Excellence in Socio-Environmental Sustainability for River Sand Mining (CoE SenSRS)</strong>, <strong>Indian Institute of Technology Ropar</strong>, successfully organized <strong>GeoInnovate Thon 2026</strong> on 25 April 2026 at Kendriya Vidyalaya, IIT Ropar, under the banner of the <strong>Indian Society of Remote Sensing (ISRS)</strong>.
                </p>
                <p>
                  Conceived as an interdisciplinary outreach initiative, the event aimed to foster scientific curiosity, innovation, and environmental awareness among school students by highlighting the immense potential of Earth and Space Sciences in addressing contemporary global challenges. The program was centered on the inspiring theme <strong>&ldquo;Innovate for Earth, Inspired by Space,&rdquo;</strong> encouraging participants to explore how scientific knowledge and technological advancements can contribute to building a sustainable future.
                </p>
                <p>
                  The event witnessed enthusiastic participation from students of <strong>Classes VIII to XII</strong>, who actively engaged in a diverse range of educational and experiential activities throughout the day. GeoInnovate Thon 2026 provided a unique platform for young learners to interact with experts, gain exposure to emerging technologies, and develop a deeper understanding of the role of space science, remote sensing, and geospatial technologies in environmental monitoring and sustainable resource management. Through a combination of lectures, demonstrations, and competitions, the event successfully bridged the gap between classroom learning and real-world scientific applications.
                </p>
              </div>
            </div>

            {/* Card 2: Keynote Sessions */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-emerald-600 block shrink-0" />
                Eminent Keynote Sessions
              </h2>
              <p className="text-slate-600 mb-8 text-sm md:text-base">
                A major highlight of the event was the series of keynote sessions delivered by eminent experts and professionals, giving students a broader perspective on the applications of scientific research and motivating them to pursue careers in science, technology, engineering, and related fields:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-slate-200 pl-4 py-1">
                  <strong className="text-slate-900 text-sm md:text-base block mb-1">Mr. Aseem K. Sharma (IFS Retd.)</strong>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Shared valuable insights on environmental stewardship, natural resource conservation, and the importance of sustainable development practices.
                  </span>
                </div>
                <div className="border-l-4 border-slate-200 pl-4 py-1">
                  <strong className="text-slate-900 text-sm md:text-base block mb-1">Dr. Reet Kamal Tiwari</strong>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Addressed the participants on the growing significance of Earth observation technologies and their contribution to solving environmental challenges.
                  </span>
                </div>
                <div className="border-l-4 border-slate-200 pl-4 py-1">
                  <strong className="text-slate-900 text-sm md:text-base block mb-1">Dr. Sartajvir Singh Dhillon</strong>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Inspired students by discussing scientific innovation, research opportunities, and the importance of cultivating analytical thinking from an early age.
                  </span>
                </div>
                <div className="border-l-4 border-slate-200 pl-4 py-1">
                  <strong className="text-slate-900 text-sm md:text-base block mb-1">Dr. Vishakha Sood</strong>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Further enriched the discussions by highlighting contemporary advancements in science and technology and their societal relevance.
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Drone Demonstration & Science Competition */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-cyan-600 block shrink-0" />
                Drone Demonstration &amp; Competition
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Live UAV / Drone Demonstration</h3>
                  <p>
                    Another key attraction of the program was the live drone demonstration conducted by <strong>Mohit Patial</strong>, <strong>Mohit Thakur</strong>, and <strong>Randeep Singh</strong>. The demonstration offered participants a hands-on understanding of drone technology and its applications in remote sensing, mapping, environmental monitoring, disaster management, and precision agriculture. Students were fascinated by the practical showcase of how drones collect and analyze geospatial data, reinforcing the connection between theoretical concepts and technological innovation.
                  </p>
                </div>
                <div className="h-px bg-slate-150 my-6" />
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Earth &amp; Space Science Competition</h3>
                  <p>
                    The Earth and Space Science Competition served as a vibrant platform for students to showcase their knowledge, creativity, and problem-solving abilities. The competition encouraged participants to think critically about environmental issues and explore innovative solutions inspired by scientific principles and space-based technologies. The enthusiasm and active engagement displayed by the students reflected the success of the event in nurturing scientific temper and innovative thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Conclusion & Awards */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-amber-500 block shrink-0" />
                Awards Ceremony &amp; Gratitude
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                The program concluded with an <strong>Awards and Certificate Distribution Ceremony</strong>, recognizing outstanding performances and acknowledging the enthusiastic participation of all students. 
              </p>
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-slate-600 text-xs md:text-sm italic mb-6">
                &ldquo;CoE SenSRS, IIT Ropar, expressed its sincere gratitude to the distinguished speakers, organizing teams, institutional partners, teachers, volunteers, and participants whose collective efforts contributed to the grand success of the event. GeoInnovate Thon 2026 stands as a testament to the commitment of IIT Ropar and ISRS toward promoting science education, environmental sustainability, and technological innovation, while inspiring the next generation of researchers, innovators, and responsible global citizens.&rdquo;
              </div>
            </div>
          </div>

          {/* ───── Interactive Photo Gallery Section ───── */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                  <span className="w-2 h-8 rounded bg-indigo-600 block shrink-0" />
                  Event Photograph Gallery
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-1">Explore capturing moments of student workshops, lectures, and live drone activities.</p>
              </div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer shrink-0"
              >
                {showAll ? 'Show Fewer Photos' : 'Show All 20 Photos'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displayedPhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIdx(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 cursor-pointer shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 hover:scale-[1.01]"
                >
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized={true}
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] md:text-xs text-white font-semibold leading-relaxed drop-shadow">
                      {photo.caption}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───── CTA Gallery Redirect Section ───── */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-8 md:p-10 rounded-3xl shadow-md border border-white/10 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 bg-white/10 px-3 py-1 rounded-full mb-3 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Original Platform Archive
              </span>
              <h3 className="font-black text-xl md:text-2xl tracking-tight mb-2">Explore the Full Gallery</h3>
              <p className="text-xs !text-slate-200 max-w-xl font-semibold leading-relaxed">
                Browse through high-resolution photography archives, student presentations, award summaries, and outreach achievements on the CoE SenSRS website.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="https://sensrs.com/gallery/geoinnovate-thon-26/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-none cursor-pointer"
              >
                Redirect to Photo Gallery
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Lightbox Modal Overlay ───── */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300">
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/10 transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/10 transition-all duration-300 cursor-pointer hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/10 transition-all duration-300 cursor-pointer hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Image Display Area */}
          <div className="relative max-w-4xl h-[60vh] sm:h-[75vh] w-full">
            <OptimizedImage
              src={eventPhotos[selectedIdx].src}
              alt={eventPhotos[selectedIdx].caption}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
              unoptimized={true}
              className="object-contain rounded-lg select-none animate-fadeIn"
            />
          </div>

          {/* Caption & Navigation Controls inside container */}
          <div className="max-w-2xl w-full text-center mt-6 px-4">
            <p className="!text-white text-sm sm:text-base font-semibold leading-relaxed select-none mb-3">
              {eventPhotos[selectedIdx].caption}
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-white/50">
              <span className="bg-white/10 px-3 py-1 rounded-md text-white/80 border border-white/5 select-none">
                {selectedIdx + 1} / {eventPhotos.length}
              </span>
              <div className="flex gap-2 md:hidden">
                <button
                  onClick={handlePrev}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md border border-white/10 cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md border border-white/10 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
