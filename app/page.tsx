import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Editions from '../components/sections/Editions';
import IntersessionPreview from '../components/sections/IntersessionPreview';
import Ecosystem from '../components/sections/Ecosystem';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Editions />
      <IntersessionPreview />
      <Ecosystem />
      <Stats />
      <CTA />
    </>
  );
}
