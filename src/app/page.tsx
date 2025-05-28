import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
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
        <Experience />
        <Contact />
        {process.env.NEXT_PUBLIC_ELEVEN_LABS && <ElevenLabsAgent />}
      </main>
      <Footer />
    </div>
  );
}