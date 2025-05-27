'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ME } from '../../data/content';
import { Code, Compass, Database, Paintbrush } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and accessible user interfaces using modern frameworks and tools.',
      icon: <Code size={24} />,
    },
    {
      title: 'Backend Development',
      description: 'Designing robust server-side applications and APIs that power seamless user experiences.',
      icon: <Database size={24} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing designs that prioritize user experience.',
      icon: <Paintbrush size={24} />,
    },
    {
      title: 'Problem Solving',
      description: 'Approaching complex challenges with analytical thinking and creative solutions.',
      icon: <Compass size={24} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Engineer with a focus on creating beautiful, functional, and user-friendly applications. My journey in tech began with a fascination for building digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With experience across various technologies and frameworks, I bring a holistic approach to development, combining technical expertise with creative problem-solving. I believe in writing clean, maintainable code and staying current with industry trends and best practices.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">React</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">TypeScript</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">Node.js</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">Python</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">MongoDB</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-md">
                <span className="text-cyan-400 font-medium">AWS</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-500/20 p-3 rounded-md text-cyan-400">
                      {skill.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white mb-2">{skill.title}</h4>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;