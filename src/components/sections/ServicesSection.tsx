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
          <div className='mx-auto max-w-5xl'>
            <h2 className='w-full font-bold text-[40px] leading-14 text-center tracking-[-0.02em] text-[#FDFDFD] m-0'>
              Smart IT Solutions That Grow With You
            </h2>
            <p className='mt-5 text-white/30 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto'>
              Tailored tech to boost efficiency, security, and results.
            </p>
          </div>
        </div>

        {/* Services grid — 3x3 cards with top-left overlapping PNG icons */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16 mb-24'>
          {services.map((service) => (
            <div
              key={service.id}
              className='relative flex flex-col items-start pt-16 px-5 pb-5 gap-5 isolate min-h-45.5 bg-[#0A0D12] border border-[#181D27] rounded-2xl shrink-0 grow cursor-pointer'
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className='absolute left-5 -top-10 w-20 h-20 object-contain'
              />
              <h3 className='w-full font-bold text-xl leading-8.5 text-[#FDFDFD] shrink-0 self-stretch m-0'>
                {service.title}
              </h3>
              <p className='w-full font-medium text-base leading-7.5 text-[#A4A7AE] shrink-0 self-stretch m-0'>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry focus */}
        <div>
          <h2 className='w-full font-bold text-[40px] leading-14 tracking-[-0.02em] text-[#FDFDFD] shrink-0 self-stretch m-0 mb-3'>
            Built for Your Industry
          </h2>
          <p className='w-full font-medium text-lg leading-8 text-[#A4A7AE] shrink-0 self-stretch m-0 mb-10'>
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>

          <div className='flex gap-12'>
            {/* Vertical tab list */}
            <div className='flex flex-col items-start gap-6 w-64 shrink-0'>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={[
                    'h-8.5 font-bold text-xl leading-8.5 text-center text-[#FDFDFD] whitespace-nowrap shrink-0 pl-4 border-l-2 transition-all duration-200',
                    activeId === ind.id
                      ? 'border-[#FF5C00]'
                      : 'border-white/20 opacity-40 hover:opacity-70',
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
              <div className='w-full max-w-210 h-87.75 rounded-3xl overflow-hidden shrink-0 self-stretch'>
                <img
                  src={active.image}
                  alt={active.label}
                  className='w-full h-full object-cover'
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
