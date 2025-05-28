'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data/content';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={24} />;
      case 'Briefcase':
        return <Briefcase size={24} />;
      case 'Award':
        return <Award size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Key milestones and accomplishments throughout my professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((Experience, index) => (
              <motion.div
                key={Experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{Experience.title}</h3>
                  <p className="text-gray-400 mb-2">{Experience.description}</p>
                  <span className="text-cyan-400 font-medium">{Experience.date}</span>
                </div>

                {/* Icon in the middle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <div className="text-black">
                      {renderIcon(Experience.icon)}
                    </div>
                  </div>
                </div>

                {/* Empty div for layout on the other side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;