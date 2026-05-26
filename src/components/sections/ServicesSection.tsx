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
          <h2 className='text-4xl font-black text-white mb-3 tracking-tight'>
            Built for Your Industry
          </h2>
          <p className='text-white/40 text-sm mb-10'>
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>

          <div className='flex gap-12'>
            {/* Vertical tab list */}
            <div className='flex flex-col gap-6 w-44 shrink-0 pt-1'>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={[
                    'text-left pl-4 py-0.5 border-l-2 text-sm font-medium transition-all duration-200',
                    activeId === ind.id
                      ? 'border-[#FF5C00] text-white'
                      : 'border-white/20 text-white/35 hover:text-white/60',
                  ].join(' ')}
                >
                  {ind.label}
                </button>
              ))}
            </div>

            {/* Description + image stacked */}
            <div className='flex-1'>
              <p className='text-white/60 text-sm leading-relaxed mb-6'>
                {active.description}
              </p>
              <div className='rounded-xl overflow-hidden'>
                <img
                  src={active.image}
                  alt={active.label}
                  className='w-full object-cover rounded-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
