import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}