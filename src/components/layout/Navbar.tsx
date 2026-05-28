import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { navItems } from '../../data/navigation';
import companyLogo from '../../assets/company_logo.png';
import { useTheme } from '../../theme/useTheme';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggle } = useTheme();

  return (
    <header className='py-4 fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-2 shrink-0 transition-opacity duration-200 hover:opacity-80'>
          <img
            src={companyLogo}
            alt='Company Logo'
            className='w-[29.5px] h-[32.4px] object-contain'
          />

          <span className='text-gray-900 dark:text-white font-bold text-lg w-27.25 h-9 inline-flex items-center'>Your Logo</span>
        </a>

        {/* Desktop nav */}
        <nav className='hidden lg:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className='text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-white/80 transition-colors font-medium text-sm w-19.5 h-9 rounded-full py-2 px-4 gap-1.5 inline-flex items-center justify-center'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden lg:flex items-center gap-3'>
          <button
            type='button'
            onClick={toggle}
            aria-label='Toggle theme'
            className='rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-white transition-colors cursor-pointer'
          >
            {mode === 'dark' ? '🌙' : '☀️'}
          </button>
          <a
            href='#contact'
            className='w-49.25 h-11 flex flex-row justify-center items-center p-2 gap-1 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full font-semibold text-sm text-white no-underline transition-all duration-200 hover:bg-[#FF623E]/90 hover:scale-105 cursor-pointer'
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile controls */}
        <div className='lg:hidden flex items-center gap-3'>
          <button
            type='button'
            onClick={toggle}
            aria-label='Toggle theme'
            className='rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-white transition-colors cursor-pointer'
          >
            {mode === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className='text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-white/80 transition-colors cursor-pointer'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle menu'
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className='lg:hidden mt-4 mx-4 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden'>
          <div className='flex flex-col p-4 gap-3'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileOpen(false)}
                className='text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-white/80 transition-colors font-medium text-sm'
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className='px-4 pb-4'>
            <a
              href='#contact'
              onClick={() => setMobileOpen(false)}
              className='flex justify-center items-center w-full h-10 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full font-semibold text-sm text-white no-underline transition-all duration-200 hover:bg-[#FF623E]/90 cursor-pointer'
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
