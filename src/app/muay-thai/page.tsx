/* app/muay-thai/page.tsx  (Next 13/14)  */
"use client";
import { useRef } from "react";
import { TikTokEmbed, InstagramEmbed } from "react-social-media-embed";
import TikTokProfile from "@/components/TikTokProfile";
import Image from "next/image";

export default function MuayThaiPage() {
  /* refs let us scroll smoothly on sidebar click */
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const gymsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videos = [
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7349184459134012678",
      title: "Training Highlights",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7344262961499835654",
      title: "Shadowboxing - Vietnam",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7323373400888462598",
      title: "Drone Footage - Khunsuek",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7287237681254354181",
      title: "Moving to Thailand 2023",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7290391345867394309",
      title: "First Traing in Thailand",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7302225528751230213",
      title: "Life in Bangtao",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7309454008312171782",
      title: "Content in Sinbi",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7389069908933446917",
      title: "Back in Krabi",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7333205871104658693",
      title: "Emerald Muay Thai",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7334044214314994949",
      title: "Eagle Muay Thai",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7332354952636960006",
      title: "Khunsuek Muay Thai",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7329973171816254725",
      title: "Friendly Sparring - Khunsuek",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7358115863834135813",
      title: "Superbon Muay Thai",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7374246311031344390",
      title: "Wizard Kickboxing",
    },
    {
      url: "https://www.tiktok.com/@fixmylifenyc/video/7498574346311535879",
      title: "Back in NYC",
    },
  ];

  const gyms = [
    {
      name: "Diamond Heart Gym",
      city: "Brooklyn",
      country: "America",
      period: "Sept 2023",
    },
    {
      name: "Bangtao Muay Thai",
      city: "Phuket",
      country: "Thailand",
      period: "Oct – Nov 2024",
    },
    {
      name: "Tiger Muay Thai",
      city: "Singapore",
      country: "Singapore",
      period: "Dec 2024",
    },
    {
      name: "Sinbi Muay Thai",
      city: "Phuket",
      country: "Thailand",
      period: "Nov - Dec 2024",
    },
    {
      name: "Khunsuek Muay Thai",
      city: "Krabi",
      country: "Thailand",
      period: "Dec - Jan 2025",
    },
    {
      name: "Emerald Muay Thai",
      city: "Phuket",
      country: "Thailand",
      period: "Feb 2024",
    },
    {
      name: "Superbon Muay Thai",
      city: "Bangkok",
      country: "Thailand",
      period: "Feb 2024",
    },
    {
      name: "Dang Muay Thai",
      city: "Chiang Mai",
      country: "Thailand",
      period: "Mar 2024",
    },

    {
      name: "SVG Muay Thai",
      city: "Nigata",
      country: "Japan",
      period: "Apr 2024",
    },
    {
      name: "Wizard Kickboxing",
      city: "Kyoto",
      country: "Japan",
      period: "May 2024 - Feb 2025",
    },
    {
      name: "Diamond Heart Gym",
      city: "Brooklyn",
      country: "America",
      period: "Apr 2025",
    },
  ];

  /* ---------- 2. helper to group by country ---------- */
  const gymsByCountry = gyms.reduce<Record<string, typeof gyms>>((acc, gym) => {
    acc[gym.country] = acc[gym.country] ? [...acc[gym.country], gym] : [gym];
    return acc;
  }, {});

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* main content */}
        <main className="flex-1 flex flex-col gap-24">
          {/* 1. Experience */}
          <section
            ref={aboutMeRef}
            id="about-me"
            className="bg-gradient-to-b from-gray-900 to-black py-20"
          >
            <div className="container mx-auto px-6 flex flex-col gap-12">
              {/* Heading and bio */}
              {/* <div className="max-w-3xl mx-auto text-center space-y-6"> */}
                <h1 className="text-4xl font-bold text-white">About Me</h1>
                <p className="text-gray-300 leading-relaxed">
                  I am a full-stack engineer by trade and a storyteller by
                  passion. When I am not shipping code you will find me filming
                  sunrise streets in Kyoto, jotting kanji flashcards at a café,
                  or hammering elbows and kicks at a humid gym in Chiang Mai. My
                  channels document the wins and stumbles of learning languages,
                  living out of one backpack, and chasing Muay Thai across
                  Southeast Asia. If you are into travel tips, digital nomad
                  hacks, and the grind of building a border-free career, you are
                  in the right place.
                </p>
              {/* </div> */}

              {/* Social embeds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* TikTok profile */}
                <div className="w-full">
                  {/* Replace with your actual TikTok handle */}
                  {/* <TikTokProfile username="fixmylifenyc" /> */}
                </div>

                {/* Instagram profile */}
                <div className="w-full">
                  {/* Replace with your actual Instagram post URL or profile URL */}
                
                </div>
              </div>
            </div>
          </section>
          <section ref={experienceRef} id="experience">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Muay Thai Experience
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              I began training in 2023 and have since completed twelve weeks of
              intensive camps in Thailand, fought in three smoker bouts, and
              logged more than two hundred hours of pad work and sparring.
            </p>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/pad-work.jpg"
                alt="Pad work in Bangkok"
                width={1200}
                height={675}
                className="object-cover w-full h-auto"
              />
            </div>
          </section>

          {/* 2. Fitness Goals */}
          <section ref={goalsRef} id="fitness-goals">
            <h2 className="text-3xl font-bold text-white mb-4">
              Current Fitness Goals
            </h2>
            <p className="text-gray-300 mb-6">
              The whole purpose of my training is to fight, so I focus on
              strength, conditioning, and technique. Here are my current goals:{" "}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Drop down to 80kg and do my first fight.</li>
              <li>Run 5 km under 22 minutes.</li>
              <li>Land 300 kicks per session for hip mobility.</li>
              <li>Spar twice a week focusing on clinch dominance.</li>
            </ul>
          </section>

          {/* 3. Gyms Trained In */}
          <section ref={gymsRef} id="gyms">
            <h2 className="text-3xl font-bold text-white mb-4">
              Gyms Trained In
            </h2>

            {Object.entries(gymsByCountry).map(([country, list]) => (
              <div key={country} className="mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {country}
                </h3>

                <div className="space-y-4">
                  {list.map((gym) => (
                    <div
                      key={gym.name}
                      className="bg-gray-800/30 p-4 rounded-lg flex justify-between flex-wrap"
                    >
                      <span className="text-white">
                        {gym.name}, {gym.city}
                      </span>
                      <span className="text-gray-400">{gym.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* 4. Content Created */}
          <section ref={contentRef} id="content">
            <h2 className="text-3xl font-bold text-white mb-4">
              Content Created While Training
            </h2>
            <p className="text-gray-300 mb-6">
              My short-form clips reach more than 500 k views across TikTok and
              Instagram, showcasing drills, fight-camp diaries, and local gym
              culture.
            </p>
            {/* TikTok embed – substitute your real link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(({ url, title }) => (
                <div key={url} className="w-full space-y-2">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <TikTokEmbed url={url} width="100%" height={560} />
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* sidebar */}
        <aside className="md:w-64 sticky top-24 self-start">
          <nav className="bg-gray-800/30 rounded-lg p-6 space-y-2">
            <h3 className="text-xl font-semibold text-white mb-2">Sections</h3>
            <button
              onClick={() => scrollTo(aboutMeRef)}
              className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
            >
              About Me
            </button>
            <button
              onClick={() => scrollTo(experienceRef)}
              className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo(goalsRef)}
              className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
            >
              Fitness Goals
            </button>
            <button
              onClick={() => scrollTo(gymsRef)}
              className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
            >
              Gyms Trained In
            </button>
            <button
              onClick={() => scrollTo(contentRef)}
              className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
            >
              Content Created
            </button>
          </nav>
        </aside>
      </div>
    </div>
  );
}
