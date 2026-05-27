import React from 'react';
import Icon from '../ui/Icon';
import companyLogo from '../../assets/company_logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socialLinks = [
  { key: 'facebook', icon: <Icon name="facebook" size={16} /> },
  { key: 'instagram', icon: <Icon name="instagram" size={16} /> },
  { key: 'linkedin', icon: <Icon name="linkedin" size={16} /> },
  { key: 'tiktok', icon: <TikTokIcon size={16} /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] py-8 px-4">
      <div className="mx-auto w-full max-w-290 min-h-82 bg-[#111111] rounded-2xl flex flex-col justify-between px-12 py-10">

        {/* Top: CTA + Logo */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#FF5C00] uppercase mb-1">
              LET'S DISCUSS
            </p>
            <h3 className="text-4xl font-black text-white">YOUR IDEAS</h3>
          </div>
          <div className="flex items-center gap-3">
            <img src={companyLogo} alt="Company Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-lg">Your Logo</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-2" />

        {/* Bottom: Nav + Social */}
        <div className="flex items-center justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF5C00] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label={social.key}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
