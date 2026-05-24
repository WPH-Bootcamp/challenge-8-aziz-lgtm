import React from 'react';
import Icon from '../ui/Icon';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { name: 'facebook' as const, href: '#' },
  { name: 'twitter' as const, href: '#' },
  { name: 'linkedin' as const, href: '#' },
  { name: 'instagram' as const, href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Top CTA Banner */}
      <div className="bg-gray-900 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-1">
              LET'S DISCUSS
            </p>
            <h3 className="text-3xl font-black text-white">YOUR IDEAS</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">Y</span>
              </div>
              <span className="text-white font-bold text-lg">Your Logo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label={social.name}
              >
                <Icon name={social.name} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Your Logo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;