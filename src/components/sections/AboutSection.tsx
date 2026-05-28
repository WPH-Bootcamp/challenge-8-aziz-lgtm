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
  { src: databrick, alt: 'Databrick', height: 'h-16' },
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
    <section id='about' className='bg-white dark:bg-[#0a0a0a] pb-10 md:pb-32'>
      {/* Brand strip */}
      <div className='relative h-48 overflow-hidden mb-24 mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] sm:mask-[linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,black_25%,black_75%,transparent_85%,transparent_100%)]'>

        {/* Title */}
        <span className='block w-full sm:w-auto h-7.5 sm:h-auto font-bold text-base sm:text-2xl leading-7.5 sm:leading-9 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0'>
          Trusted by Global Innovators & Leading Brands
        </span>

        {/* Logos container — doubled for seamless loop */}
        <div
          aria-hidden='true'
          className='flex flex-row items-center py-10 absolute w-max h-32 left-0 top-16 animate-marquee'
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.height ?? 'h-10'} w-auto max-w-28 mr-12 mix-blend-luminosity shrink-0 opacity-[0.65] grayscale object-contain transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0 hover:scale-105`}
            />
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header + stats */}
        <div className='flex flex-col items-center text-center gap-12 mb-24'>
          <div className='w-full max-w-5xl'>
            <h2 className='w-90.25 sm:w-full h-19 sm:h-auto mx-auto sm:mx-0 font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-9.5 md:leading-14 text-center tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0 m-0'>
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className='w-90.25 sm:w-full h-14 sm:h-auto mx-auto sm:mx-0 font-medium text-sm sm:text-lg leading-7 sm:leading-8 text-center text-[#717680] dark:text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0'>
              {companyInfo.longDescription}
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-6 w-full'>
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className='flex flex-col justify-center items-center p-4 gap-1.5 w-45 md:w-60 aspect-square lg:aspect-auto lg:w-68.75 lg:h-68.75 bg-gray-50 dark:bg-[#0A0D12] border border-gray-200 dark:border-[#181D27] rounded-full flex-none order-0 transition-all duration-300 hover:scale-105 hover:border-[#FF623E]/50 hover:shadow-lg'
              >
                <p className='w-full lg:w-60.75 h-11 lg:h-15 font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-center tracking-[-0.02em] text-[#FF623E] flex-none order-0 self-stretch grow-0 m-0'>
                  {stat.value}
                </p>
                <p className='w-full lg:w-60.75 h-7 lg:h-8.5 font-semibold text-sm lg:text-xl leading-7 lg:leading-8.5 text-center text-[#0A0D12] dark:text-[#FDFDFD] flex-none order-1 self-stretch grow-0 m-0'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col items-center text-center gap-4 mb-12'>
            <h2 className='w-90.25 sm:w-auto h-9.5 sm:h-auto mx-auto sm:mx-0 font-bold text-[28px] sm:text-4xl md:text-5xl leading-9.5 sm:leading-tight tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] flex-none order-0 self-stretch grow-0'>
              Our Process
            </h2>
            <p className='w-90.25 sm:w-full h-14 sm:h-8 mx-auto sm:mx-0 font-medium text-sm sm:text-lg leading-7 sm:leading-8 text-center text-[#A4A7AE] flex-none order-1 self-stretch grow-0'>
              Clear steps. Smart execution. Results you can count on.
            </p>
          </div>

          <div className='relative'>
            {/* Vertical line — center on desktop, left on mobile */}
            <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 md:-translate-x-1/2' />

            {/* Mobile: [circle | card], Desktop: zigzag [card | circle | card] */}
            <div className='relative flex flex-col gap-8 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-y-8'>
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openItems.has(index);

                const card = (
                  <div className='w-full rounded-2xl bg-gray-50 dark:bg-[#0A0D12] p-4 cursor-pointer border border-gray-200 dark:border-[#181D27] transition-all duration-200 hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]' onClick={() => toggle(index)}>
                    <div className='flex items-center justify-between gap-10'>
                      <h3 className='flex-1 md:w-83.25 md:flex-none font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] order-0 self-stretch m-0'>
                        {step.title}
                      </h3>
                      <span className={`shrink-0 transition-transform duration-200 ${isOpen ? 'text-[#FF5C00] rotate-180' : 'text-[#717680] dark:text-[#FDFDFD]'}`}>
                        <Icon name='chevron-down' size={20} />
                      </span>
                    </div>
                    {isOpen && (
                      <p className='w-full md:w-83.25 font-medium text-sm md:text-base leading-7 md:leading-7.5 text-[#A4A7AE] flex-none order-1 self-stretch grow-0 m-0 mt-2'>
                        {step.detail}
                      </p>
                    )}
                  </div>
                );

                return (
                  <React.Fragment key={step.number}>
                    {/* Mobile layout */}
                    <div className='flex md:hidden items-start gap-4 pl-0'>
                      <div className='relative z-10 flex items-center justify-center shrink-0 mt-1'>
                        <div className='flex flex-col justify-center items-center p-2 gap-2 w-12 h-12 bg-[#FF623E] rounded-full flex-none text-sm font-bold text-white'>
                          {step.number}
                        </div>
                      </div>
                      <div className='flex-1'>{card}</div>
                    </div>

                    {/* Desktop zigzag layout */}
                    <div className='hidden md:flex items-center justify-end pr-8'>
                      {isLeft ? card : null}
                    </div>
                    <div className='hidden md:flex relative z-10 items-center justify-center py-2'>
                      <div className='flex flex-col justify-center items-center p-2 gap-2 w-12 h-12 bg-[#FF623E] rounded-full flex-none order-1 grow-0 text-sm font-bold text-white'>
                        {step.number}
                      </div>
                    </div>
                    <div className='hidden md:flex items-center justify-start pl-8'>
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
