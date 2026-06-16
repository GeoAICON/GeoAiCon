import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 section-padding pb-12 mt-auto">
      <div className="container-standard flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-slate-900 focus:outline-none focus-visible:outline-none">
              <Image 
                src="/Logo1.png" 
                alt="GeoAI CON Logo" 
                width={40} 
                height={40} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
              <span>GeoAI CON</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              The premier international hub for Artificial Intelligence in Geospatial Technology. Bridging the gap between academic research and industry execution.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 tracking-wide text-sm uppercase">Editions</h4>
              <ul className="space-y-3 text-sm flex flex-col text-slate-600 font-medium">
                <li><Link href="https://2026.geoaicon.com" target="_blank" className="hover:text-blue-600 transition-colors">GeoAI CON 2026</Link></li>
                <li><Link href="https://2025.geoaicon.com" target="_blank" className="hover:text-blue-600 transition-colors">GeoAI CON 2025</Link></li>
                <li><Link href="/workshop/intersession-2026" className="hover:text-blue-600 transition-colors">Inter-session 2026</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 tracking-wide text-sm uppercase">Resources</h4>
              <ul className="space-y-3 text-sm flex flex-col text-slate-600 font-medium">
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Research Papers</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Global Network</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Press Kit</Link></li>
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Guidelines</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 tracking-wide text-sm uppercase">Connect</h4>
              <ul className="space-y-3 text-sm flex flex-col text-slate-600 font-medium">
                <li><Link href="https://www.facebook.com/people/Geoaicon/61582803331985/" target="_blank" className="hover:text-blue-600 transition-colors">Facebook</Link></li>
                <li><Link href="https://www.instagram.com/geoaicon/" target="_blank" className="hover:text-blue-600 transition-colors">Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/groups/15392053/" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
                <li><Link href="mailto:support@geoaicon.com" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
                <li><Link href="https://2026.geoaicon.com/committee" target="_blank" className="hover:text-blue-600 transition-colors">Sponsorship</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} GeoAI CON Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-900 transition-colors">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
