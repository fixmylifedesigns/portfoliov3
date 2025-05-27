'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../../types';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cyan-500/20 p-3 rounded-md text-cyan-400">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:contact@duranirving.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    contact@duranirving.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cyan-500/20 p-3 rounded-md text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Brooklyn, NY</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <blockquote className="text-gray-300 italic">
                  "The best way to predict the future is to create it."
                </blockquote>
                <p className="text-right text-cyan-400 mt-2">— Peter Drucker</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-6 text-center"
              >
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-md font-medium transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full bg-gray-800/50 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300`}
                    placeholder="Irving Duran"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full bg-gray-800/50 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300`}
                    placeholder="Your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full bg-gray-800/50 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300`}
                    placeholder="Your message"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-md p-3">
                    <p className="text-red-400 text-sm">{submitError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/70 text-black px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;