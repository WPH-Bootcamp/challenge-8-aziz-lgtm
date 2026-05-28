import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { companyInfo, companyStats, processSteps } from '../../data/company';
import adobe from '../../assets/adobe.png';
import airbnb from '../../assets/airbnb.png';
import paypal from '../../assets/paypal.png';
import netflix from '../../assets/netflix.png';
import postman from '../../assets/postman.png';
import zoom from '../../assets/zoom.png';
import dropbox from '../../assets/dropbox.png';
import upwork from '../../assets/upwork.png';
import databrick from '../../assets/databrick.png';

const logos = [
  { src: adobe, alt: 'Adobe' },
  { src: zoom, alt: 'Zoom' },
  { src: postman, alt: 'Postman' },
  { src: databrick, alt: 'Databrick' },
  { src: netflix, alt: 'Netflix' },
  { src: airbnb, alt: 'Airbnb' },
  { src: dropbox, alt: 'Dropbox' },
  { src: upwork, alt: 'Upwork' },
  { src: paypal, alt: 'PayPal' },
];

const AboutSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id='about' className='bg-white dark:bg-[#0a0a0a] pb-32'>
      {/* Brand strip */}
      <div className='relative h-48 overflow-hidden dark:border-t dark:border-white/5 mb-24 mask-[linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)]'>

        {/* Title */}
        <span className='block w-full text-2xl font-bold leading-9 text-center text-gray-900 dark:text-[#FDFDFD]'>
          Trusted by Global Innovators & Leading Brands
        </span>

        {/* Logos container — doubled for seamless loop */}
        <div
          aria-hidden='true'
          className='flex flex-row items-center py-10 gap-12 absolute w-401 h-32 left-0 top-16 animate-marquee'
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className='w-24.5 h-12 mix-blend-luminosity shrink-0 opacity-[0.65] grayscale transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-105'
            />
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header + stats */}
        <div className='flex flex-col items-center text-center gap-12 mb-24'>
          <div className='w-full max-w-5xl'>
            <h2 className='w-full h-14 font-bold text-[40px] leading-14 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0'>
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className='w-full font-medium text-lg leading-8 text-center text-[#717680] dark:text-[#A4A7AE] m-0'>
              {companyInfo.description}
            </p>
          </div>

          <div className='flex flex-row justify-center items-center flex-wrap gap-6 w-full'>
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className='flex flex-col justify-center items-center p-4 gap-1.5 w-68.75 h-68.75 bg-gray-50 dark:bg-[#0A0D12] border border-gray-200 dark:border-[#181D27] rounded-full shrink-0'
              >
                <p className='w-60.75 h-15 font-bold text-5xl leading-15 text-center tracking-[-0.02em] text-[#FF623E] flex-none order-0 self-stretch grow-0 m-0'>
                  {stat.value}
                </p>
                <p className='w-60.75 h-8.5 font-semibold text-xl leading-8.5 text-center text-[#717680] dark:text-[#FDFDFD] flex-none order-1 self-stretch grow-0 m-0'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col items-center text-center gap-4 mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight'>
              Our Process
            </h2>
            <p className='font-medium text-lg leading-8 text-center text-[#717680] dark:text-white/40 flex-none order-1 self-stretch grow-0'>
              Clear steps. Smart execution. Results you can count on.
            </p>
          </div>

          <div className='relative'>
            {/* Continuous vertical line */}
            <div className='absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -translate-x-1/2' />

            <div className='relative grid grid-cols-[1fr_auto_1fr] gap-y-8'>
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openItems.has(index);

                const card = (
                  <div className='w-full rounded-2xl bg-gray-50 dark:bg-[#111111] p-5 cursor-pointer border border-gray-200 dark:border-transparent' onClick={() => toggle(index)}>
                    <div className='flex items-center justify-between gap-4'>
                      <h3 className='w-83.25 font-bold text-xl leading-8.5 text-gray-900 dark:text-[#FDFDFD] shrink-0 m-0'>
                        {step.title}
                      </h3>
                      <span className={`shrink-0 transition-transform duration-200 ${isOpen ? 'text-[#FF5C00] rotate-180' : 'text-[#717680] dark:text-white/50'}`}>
                        <Icon name='chevron-down' size={20} />
                      </span>
                    </div>
                    {isOpen && (
                      <p className='w-83.25 font-medium text-base leading-7.5 text-[#717680] dark:text-[#A4A7AE] m-0 mt-2'>
                        {step.detail}
                      </p>
                    )}
                  </div>
                );

                return (
                  <React.Fragment key={step.number}>
                    <div className='flex items-center justify-end pr-8'>
                      {isLeft ? card : null}
                    </div>

                    <div className='relative z-10 flex items-center justify-center py-2'>
                      <div className='flex items-center justify-center w-11 h-11 rounded-full bg-[#FF5C00] text-sm font-bold text-white shrink-0'>
                        {step.number}
                      </div>
                    </div>

                    <div className='flex items-center justify-start pl-8'>
                      {!isLeft ? card : null}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
