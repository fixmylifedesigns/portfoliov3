'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ABOUT_ME } from '../../data/content';
import Landing from '../3d/Landing';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70"></div>
      
      {/* Particles effect (optional) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {ABOUT_ME.name}
              <br />
              <span className="text-cyan-400">{ABOUT_ME.title}</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-8">
              Born in {ABOUT_ME.birthYear}
              <br/>in {ABOUT_ME.birthPlace}.
            </p>
            <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-8">
              {ABOUT_ME.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* 3D Head */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 h-[300px] md:h-[600px] relative"
            ref={containerRef}
          >
            {/* <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} /> */}
              <Landing />
            {/* </Canvas> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gray-400 text-sm mb-2">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;