import React from 'react';
import { SOCIAL_LINKS, NAV_ITEMS } from '../../data/content';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black py-12 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="font-mono">{'<'}</span>
              <span className="text-cyan-400">Portfolio</span>
              <span className="font-mono">{' />'}</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Engineer specializing in creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.platform}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Brooklyn, NY</p>
            <p className="text-gray-400 mb-4">contact@duranirving.com</p>
            <a
              href="#contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Irving Duran. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;