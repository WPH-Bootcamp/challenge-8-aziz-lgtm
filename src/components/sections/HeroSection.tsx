import React from 'react';
import Button from '../ui/Button';
import { companyInfo, companyStats, trustedBrands } from '../../data/company';
import heroImage from '../../assets/hero_image.png';
import adobe from '../../assets/adobe.png';
import airbnb from '../../assets/airbnb.png';
import paypal from '../../assets/paypal.png';
import netflix from '../../assets/netflix.png';
import postman from '../../assets/postman.png';
import zoom from '../../assets/zoom.png';
import dropbox from '../../assets/dropbox.png';
import upwork from '../../assets/upwork.png';
import databrick from '../../assets/databrick.png';

const HeroSection: React.FC = () => {
  return (
    <section className='relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden'>
      {/* Subtle grid */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Ambient glow — top right */}
      <div
        className='absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at 80% 10%, rgba(255,92,0,0.18) 0%, transparent 65%)',
        }}
      />
      {/* Dim glow — bottom left */}
      <div
        className='absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at 20% 90%, rgba(255,92,0,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Main content (two-column on large screens) */}
      <div className='relative flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-20 pb-20'>
        {/* Left column: text (vertically centered) */}
        <div className='w-full px-4 lg:pr-12 py-12 lg:py-0'>
          <div className='inline-flex items-center gap-2 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-full px-4 py-1.5 mb-6'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse' />
            <span className='text-[#FF5C00] text-xs font-semibold tracking-widest uppercase'>
              Trusted by global innovators
            </span>
          </div>

          {/* Headline — layered opacity for depth */}
          <h1 className='font-black text-white leading-[1.05] tracking-tight mb-6'>
            <span className='block text-[clamp(3rem,8vw,6.5rem)]'>
              Your Tech
            </span>
            <span className='block text-[clamp(3rem,8vw,6.5rem)] text-white/20'>
              Partner for
            </span>
            <span className='block text-[clamp(3rem,8vw,6.5rem)] text-[#FF5C00]'>
              Smarter Growth
            </span>
          </h1>

          <p className='text-white/40 text-lg max-w-xl leading-relaxed mb-10'>
            {companyInfo.description}
          </p>

          <div className='flex flex-wrap items-center gap-4'>
            <Button size='lg'>Let's Talk</Button>
            <a
              href='#services'
              className='text-white/40 hover:text-white text-sm font-medium transition-colors flex items-center gap-2'
            >
              <span>See our services</span>
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column: hero image (fill and align to right) */}
        <div className='w-full flex items-center justify-end lg:pl-8'>
          <div className='w-full max-w-[640px] lg:h-[640px] rounded-xl overflow-hidden'>
            <img
              src={heroImage}
              alt='Hero Image'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className='relative border-t border-white/[0.05] py-8'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='text-center mb-4'>
            <span className='text-white text-sm font-semibold'>
              Trusted by Global Innovators & Leading Brands
            </span>
          </div>

          <div className='mt-4 overflow-hidden'>
            <style>{`\n              @keyframes marquee { from { transform: translateX(0%); } to { transform: translateX(-50%); } }\n              .marquee { display: flex; gap: 3rem; align-items: center; animation: marquee 18s linear infinite; }\n              .marquee img { opacity: .65; filter: grayscale(80%); transition: all .2s ease; }\n              .marquee img:hover { opacity: 1; filter: none; transform: scale(1.05); }\n            `}</style>

            <div className='marquee' aria-hidden='true'>
              <img src={adobe} alt='Adobe' className='h-6 w-auto' />
              <img src={zoom} alt='Zoom' className='h-6 w-auto' />
              <img src={postman} alt='Postman' className='h-6 w-auto' />
              <img src={databrick} alt='Databrick' className='h-6 w-auto' />
              <img src={netflix} alt='Netflix' className='h-6 w-auto' />
              <img src={airbnb} alt='Airbnb' className='h-6 w-auto' />
              <img src={dropbox} alt='Dropbox' className='h-6 w-auto' />
              <img src={upwork} alt='Upwork' className='h-6 w-auto' />
              <img src={paypal} alt='PayPal' className='h-6 w-auto' />

              {/* duplicate for seamless loop */}
              <img src={adobe} alt='Adobe' className='h-6 w-auto' />
              <img src={zoom} alt='Zoom' className='h-6 w-auto' />
              <img src={postman} alt='Postman' className='h-6 w-auto' />
              <img src={databrick} alt='Databrick' className='h-6 w-auto' />
              <img src={netflix} alt='Netflix' className='h-6 w-auto' />
              <img src={airbnb} alt='Airbnb' className='h-6 w-auto' />
              <img src={dropbox} alt='Dropbox' className='h-6 w-auto' />
              <img src={upwork} alt='Upwork' className='h-6 w-auto' />
              <img src={paypal} alt='PayPal' className='h-6 w-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
