import React, { useState } from 'react';
import { services, industries } from '../../data/services';

const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState(industries[0].id);

  const active = industries.find((ind) => ind.id === activeId)!;

  return (
    <section id='services' className='bg-gray-50 dark:bg-[#0d0d0d] py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header — centered section */}
        <div className='mb-16 text-center'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='w-90.25 sm:w-full h-19 sm:h-auto mx-auto sm:mx-0 font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-9.5 md:leading-14 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0'>
              Smart IT Solutions That Grow With You
            </h2>
            <p className='w-90.25 sm:max-w-2xl h-7 sm:h-auto mx-auto font-medium text-sm sm:text-lg leading-7 sm:leading-relaxed text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0 mt-5'>
              Tailored tech to boost efficiency, security, and results.
            </p>
          </div>
        </div>

        {/* Services grid — 3x3 cards with top-left overlapping PNG icons */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16 mb-24'>
          {services.map((service) => (
            <div
              key={service.id}
              className='relative flex flex-col items-start pt-12 md:pt-16 px-5 pb-5 gap-2 md:gap-5 isolate min-h-32.5 md:min-h-45.5 bg-white dark:bg-[#0A0D12] border border-gray-200 dark:border-[#181D27] rounded-2xl flex-none order-1 self-stretch grow-0 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 dark:hover:border-white/20'
            >
              <div className='absolute left-5 -top-8 w-16 h-16 md:-top-10 md:w-20 md:h-20'>
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className='absolute inset-0 w-full h-full object-contain'
                />
              </div>
              <h3 className='w-full h-7.5 md:h-auto font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0'>
                {service.title}
              </h3>
              <p className='w-full h-14 md:h-auto font-medium text-sm md:text-base leading-7 md:leading-7.5 text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0'>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry focus */}
        <div>
          <h2 className='w-90.25 sm:w-full h-10.5 sm:h-auto font-bold text-[32px] sm:text-[34px] md:text-[40px] leading-10.5 sm:leading-tight md:leading-14 tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0 mb-3'>
            Built for Your Industry
          </h2>
          <p className='w-90.25 sm:w-full h-14 sm:h-auto font-medium text-sm sm:text-lg leading-7 sm:leading-8 text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0 mb-10'>
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>

          <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
            {/* Vertical tab list */}
            <div className='flex flex-col items-start gap-6 md:w-64 md:shrink-0'>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={[
                    'h-7.5 md:h-8.5 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 text-center tracking-[-0.02em] whitespace-nowrap flex-none grow-0 pl-4 border-l-2 transition-all duration-200 cursor-pointer',
                    activeId === ind.id
                      ? 'border-[#FF5C00] text-gray-900 dark:text-[#FDFDFD]'
                      : 'border-gray-200 dark:border-white/20 text-gray-900 dark:text-[#FDFDFD] opacity-40 hover:opacity-70',
                  ].join(' ')}
                >
                  {ind.label}
                </button>
              ))}
            </div>

            {/* Description + image stacked */}
            <div className='flex-1'>
              <p className='w-90.25 sm:w-full h-21 sm:h-auto font-medium text-sm sm:text-lg leading-7 sm:leading-8 text-[#717680] dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 mb-6'>
                {active.description}
              </p>
              <div className='w-full h-50 sm:h-72 md:h-87.75 rounded-xl sm:rounded-3xl overflow-hidden flex-none order-1 self-stretch grow-0'>
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
