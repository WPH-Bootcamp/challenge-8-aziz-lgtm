import React, { useState } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { navItems } from '../../data/navigation';
import companyLogo from '../../assets/company_logo.png';
import { useTheme } from '../../theme/useTheme';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggle } = useTheme();

  return (
    <header className='py-4 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-2 flex-shrink-0'>
          <img
            src={companyLogo}
            alt='Company Logo'
            className='w-6 h-6 object-contain'
          />

          <span className='text-white font-bold text-lg'>Your Logo</span>
        </a>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className='text-white hover:text-white/80 transition-colors font-medium text-sm'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-3'>
          <button
            type='button'
            onClick={toggle}
            aria-label='Toggle theme'
            className='rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors'
          >
            {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Button variant='primary' size='sm'>
            Let's Talk
          </Button>
        </div>

        {/* Mobile controls */}
        <div className='md:hidden flex items-center gap-3'>
          <button
            type='button'
            onClick={toggle}
            aria-label='Toggle theme'
            className='rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors'
          >
            {mode === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            className='text-white hover:text-white/80 transition-colors'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle menu'
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className='md:hidden mt-4 mx-4 bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden'>
          <div className='flex flex-col p-4 gap-3'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileOpen(false)}
                className='text-white hover:text-white/80 transition-colors font-medium text-sm'
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className='px-4 pb-4'>
            <Button variant='primary' size='sm' className='w-full'>
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
