import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import ElevenLabsAgent from "@/components/ElevenLabsAgent";

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
        {process.env.NEXT_PUBLIC_ELEVEN_LABS && <ElevenLabsAgent />}
      </main>
      <Footer />
    </div>
  );
}