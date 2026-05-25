import React, { useState } from 'react';
import { services, industries } from '../../data/services';

const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState(industries[0].id);

  const active = industries.find((ind) => ind.id === activeId)!;

  return (
    <section id='services' className='bg-[#0d0d0d] py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header — centered section */}
        <div className='mb-16 text-center'>
          <p className='text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4'>
            Services
          </p>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight'>
              Smart IT Solutions
              <br />
              <span className='text-white/25'>That Grow With You</span>
            </h2>
            <p className='mt-5 text-white/30 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto'>
              Tailored tech to boost efficiency, security, and results.
            </p>
          </div>
        </div>

        {/* Services grid — 3x3 cards with top-left overlapping PNG icons */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24'>
          {services.map((service) => (
            <div
              key={service.id}
              className='group relative rounded-[28px] border border-white/[0.08] bg-[#111111]/90 pt-12 pb-8 px-10 transition-all duration-300 hover:border-[#FF5C00]/30 hover:bg-[#161616] cursor-pointer overflow-visible aspect-[16/9]'
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className='absolute left-6 -top-8 h-14 w-14 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]'
              />
              <h3 className='text-xl font-semibold text-white mb-2 leading-snug mt-2 pl-14'>
                {service.title}
              </h3>
              <p className='text-white/40 text-sm leading-relaxed pl-14'>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry focus */}
        <div>
          <p className='text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4'>
            Industry focus
          </p>
          <h2 className='text-4xl font-black text-white mb-10 tracking-tight'>
            Built for Your Industry
          </h2>

          {/* Tab pills */}
          <div className='flex gap-2 mb-8 flex-wrap'>
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={[
                  'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                  activeId === ind.id
                    ? 'bg-[#FF5C00] text-white shadow-[0_0_20px_rgba(255,92,0,0.25)]'
                    : 'bg-white/[0.04] text-white/40 hover:text-white border border-white/[0.07]',
                ].join(' ')}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Active industry content */}
          <div className='bg-[#111111] border border-white/[0.07] rounded-2xl p-8 flex flex-col lg:flex-row gap-10'>
            <div className='flex-1'>
              <span className='text-[#FF5C00]/60 text-xs font-semibold tracking-widest uppercase'>
                {active.tag}
              </span>
              <h3 className='text-2xl font-black text-white mt-2 mb-4'>
                {active.label}
              </h3>
              <p className='text-white/40 leading-relaxed'>
                {active.description}
              </p>
            </div>
            {/* Intentional placeholder — styled to look like a real visual */}
            <div className='lg:w-72 h-44 rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#FF5C00]/5 to-transparent flex items-center justify-center flex-shrink-0 relative overflow-hidden'>
              <div
                className='absolute inset-0 opacity-5'
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <span className='text-[#FF5C00]/20 font-black text-4xl tracking-tight'>
                {active.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
