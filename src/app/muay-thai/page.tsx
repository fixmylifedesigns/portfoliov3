/* app/muay-thai/page.tsx  (Next 13/14)  */
"use client";
import { useRef } from "react";
import Image from "next/image";
import SocialStatsCard from "@/components/SocialStatsCard";
import LazyYouTubeShort from "@/components/LazyYouTubeShort";

export default function MuayThaiPage() {
  /* refs let us scroll smoothly on sidebar click */
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const gymsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videos = [
    {
      url: "https://youtube.com/shorts/K1zZTQSVn_A",
      title: "Training Highlights",
    },
    {
      url: "https://youtube.com/shorts/ugrtTvWtxqU",
      title: "Shadowboxing - Vietnam",
    },
    {
      url: "https://youtube.com/shorts/ZLHjV_gT-fg",
      title: "Drone Footage - Khunsuek",
    },
    {
      url: "https://youtube.com/shorts/0GaFZzNipXc",
      title: "Moving to Thailand 2023",
    },
    {
      url: "https://youtube.com/shorts/VI3QL9GWapI",
      title: "First Training in Thailand",
    },
    {
      url: "https://youtube.com/shorts/BWeAgtPGS6M",
      title: "Life in Bangtao",
    },
    {
      url: "https://youtube.com/shorts/5CKhfv4iGzM",
      title: "Content in Sinbi",
    },
    {
      url: "https://youtube.com/shorts/ng2kdiJQg2E",
      title: "Back in Krabi",
    },
    {
      url: "https://youtube.com/shorts/mEMfHAZJuCI",
      title: "Emerald Muay Thai",
    },
    {
      url: "https://youtube.com/shorts/aI3YE1LbiCk",
      title: "Eagle Muay Thai",
    },
    {
      url: "https://youtube.com/shorts/lpyLYNFIe3E",
      title: "Khunsuek Muay Thai",
    },
    {
      url: "https://youtube.com/shorts/aJ2sGBIak3Y",
      title: "Friendly Sparring - Khunsuek",
    },
    {
      url: "https://youtube.com/shorts/pl0bIw-a5r8",
      title: "Superbon Muay Thai",
    },
    {
      url: "https://youtube.com/shorts/56h9qnRRQL0",
      title: "Wizard Kickboxing",
    },
    {
      url: "https://youtube.com/shorts/GBU6gyqChhw",
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
            className="bg-gradient-to-b from-gray-900 to-black pt-20"
          >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              {/* Avatar — left on desktop, top on mobile */}
              <div className="flex-shrink-0 order-first md:order-none mb-8 md:mb-0">
                <Image
                  src="/images/3d.png"
                  alt="Irving — Muay Thai digital-nomad avatar"
                  width={260}
                  height={390}
                  className="w-40 md:w-64 mx-auto"
                  priority
                />
              </div>
              {/* Heading and bio */}
              {/* <div className="max-w-3xl mx-auto text-center space-y-6"> */}
              <div className="flex-1 space-y-10">
                {/* Intro copy */}
                <div className="text-center md:text-left space-y-6 max-w-3xl mx-auto md:mx-0">
                  <h1 className="text-4xl font-bold text-white">About Me</h1>
                  <p className="text-gray-300 leading-relaxed">
                    I’m a former bike messenger turned software engineer—and, as
                    any New York native will tell you, wearing a dozen hats is
                    the only way to survive here. Outside of code my real
                    passion is creating content and helping others grow. When I
                    lost my job in 2023 I moved to Thailand to train Muay Thai
                    full-time, then headed to Japan to study Japanese (training
                    lagged a bit—tattoo-friendly gyms were a long commute). I’m
                    back in NYC now, job-hunting for my next engineering role,
                    and open to part-time gigs that tap the skills I’ve honed
                    along the way—from social-media marketing to full-stack
                    builds and video production.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SocialStatsCard
            avatarSrc="/portrait.jpg" // same PNG you already saved
            tiktokFollowers="28k"
            instagramFollowers="23k"
            tiktokUrl="https://www.tiktok.com/@fixmylifenyc"
            instagramUrl="https://www.instagram.com/fixmylifenyc/"
          />
          <section ref={experienceRef} id="experience" className="">
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
          <section ref={goalsRef} id="fitness-goals" className="pt-20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Current Fitness Goals
            </h2>
            <p className="text-gray-300 mb-6">
              The whole purpose of my training is to fight, so I focus on
              strength, conditioning, and technique. Here are my current goals:{" "}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Drop down to 80kg.</li>
              <li>
                Ride 100 miles on a bicycle. Max miles done 120 miles in 2014.
              </li>
              <li>Do my first fight. Ideally in Thailand</li>
              <li>Spar twice a week focusing on clinch dominance.</li>
            </ul>
          </section>

          {/* 3. Gyms Trained In */}
          <section ref={gymsRef} id="gyms" className="pt-20">
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
          <section ref={contentRef} id="content" className="pt-20">
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
              {videos.map((v) => (
                <LazyYouTubeShort key={v.url} url={v.url} title={v.title} />
              ))}
              {/* {videos.map(({ url, title }) => (
                <div key={url} className="w-full space-y-2">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <TikTokEmbed url={url} width="100%" height={560} />
                </div>
              ))} */}
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
