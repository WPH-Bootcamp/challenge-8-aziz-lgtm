import React from 'react';
import { companyInfo } from '../../data/company';
import heroImageDark from '../../assets/hero_image.png';
import heroImageLight from '../../assets/hero_image_light.png';
import { useTheme } from '../../theme/useTheme';

const HeroSection: React.FC = () => {
  const { mode } = useTheme();
  const heroImage = mode === 'light' ? heroImageLight : heroImageDark;

  return (
    <section className='relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden'>
      {/* Subtle grid */}
      <div
        className='absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]'
      />
      {/* Ambient glow — top right */}
      <div
        className='absolute top-0 right-0 w-150 h-125 pointer-events-none [background:radial-gradient(ellipse_at_80%_10%,rgba(255,92,0,0.18)_0%,transparent_65%)]'
      />
      {/* Dim glow — bottom left */}
      <div
        className='absolute bottom-0 left-0 w-100 h-100 pointer-events-none [background:radial-gradient(ellipse_at_20%_90%,rgba(255,92,0,0.07)_0%,transparent_60%)]'
      />

      {/* Spacer */}
      <div className='flex-1' />

      {/* Hero image */}
      <img
        src={heroImage}
        alt='Hero Image'
        className='absolute w-[747px] h-[747px] right-0 top-0'
      />

      {/* Hero content */}
      <div className='flex flex-col items-start gap-10 absolute w-[653px] left-[140px] top-[230px]'>
        {/* Title */}
        <h1 className='w-[653px] font-bold text-[56px] leading-[68px] tracking-[-0.02em] m-0'>
          <span className='block text-white'>Your Tech Partner for</span>
          <span className='block text-[#FF6C37]'>Smarter Growth</span>
        </h1>

        {/* Description */}
        <p className='w-[653px] font-semibold text-xl leading-[34px] text-[#FDFDFD] m-0'>
          {companyInfo.description}
        </p>

        {/* CTA button */}
        <button
          type='button'
          className='flex flex-row justify-center items-center gap-1 w-[200px] h-12 bg-[#FF623E] shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] rounded-full border-0 cursor-pointer font-semibold text-base text-white'
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
