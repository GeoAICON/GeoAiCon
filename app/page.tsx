import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Editions from '../components/sections/Editions';
import IntersessionPreview from '../components/sections/IntersessionPreview';
import Ecosystem from '../components/sections/Ecosystem';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Editions />
      <IntersessionPreview />
      <Ecosystem />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
