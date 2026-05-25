import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { companyStats, processSteps } from '../../data/company';

const AboutSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id='about' className='bg-[#0a0a0a] py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header + stats — centered layout */}
        <div className='flex flex-col items-center text-center gap-12 mb-24'>
          <div className='max-w-3xl'>
            <p className='text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4'>
              Why us
            </p>
            <h2 className='text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight'>
              End-to-End IT Solutions
              <br />
              <span className='text-white/25'>That Drive Results</span>
            </h2>
            <p className='mt-5 text-white/40 text-base leading-relaxed px-4 sm:px-0'>
              From strategy to execution, we build technology that compounds —
              each decision made with your next milestone in mind.
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center w-full max-w-5xl px-4'>
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className='aspect-square rounded-full border border-white/[0.07] bg-[#111111] p-6 flex flex-col items-center justify-center text-center group hover:border-[#FF5C00]/30 transition-colors duration-300'
              >
                <p className='text-4xl font-black text-[#FF5C00] mb-2 group-hover:scale-105 transition-transform duration-200'>
                  {stat.value}
                </p>
                <p className='text-white/30 text-sm leading-relaxed'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process accordion */}
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col items-center text-center gap-4 mb-12'>
            <p className='text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase'>
              Our process
            </p>
            <h2 className='text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight'>
              Clear steps.
              <span className='text-white/25 block'>Smart execution.</span>
            </h2>
            <p className='text-white/30 max-w-xl'>Results you can count on.</p>
          </div>

          <div className='relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] items-start'>
            <div className='space-y-6'>
              {processSteps
                .filter((_, i) => i % 2 === 0)
                .map((step, i) => {
                  const index = i * 2;
                  return (
                    <div key={step.number} className='flex justify-end'>
                      <div className='w-full max-w-[480px] rounded-[30px] border border-white/10 bg-[#111111]/90 p-6 shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#FF5C00]/30'>
                        <button
                          type='button'
                          onClick={() => setOpen(open === index ? null : index)}
                          className='w-full text-left'
                        >
                          <div className='flex items-center justify-between gap-4'>
                            <div>
                              <p className='text-sm font-semibold text-white/50 mb-1 uppercase tracking-[0.18em]'>
                                Step {step.number}
                              </p>
                              <h3
                                className={
                                  open === index
                                    ? 'text-xl font-black text-white'
                                    : 'text-xl font-black text-white/80'
                                }
                              >
                                {step.title}
                              </h3>
                            </div>
                            <span
                              className={
                                open === index
                                  ? 'text-[#FF5C00] rotate-180 transition-transform duration-200'
                                  : 'text-white/40 transition-transform duration-200'
                              }
                            >
                              <Icon name='chevron-down' size={20} />
                            </span>
                          </div>
                        </button>

                        {open === index && (
                          <div className='mt-4 text-white/40 text-sm leading-relaxed'>
                            {step.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className='relative flex justify-center py-4 md:py-0'>
              <div className='absolute inset-y-0 w-px bg-white/10' />
              <div className='relative z-10 flex flex-col items-center gap-6'>
                {processSteps.map((step) => (
                  <div
                    key={`${step.number}-marker`}
                    className='flex items-center justify-center w-11 h-11 rounded-full bg-[#FF5C00] text-sm font-black text-black shadow-[0_0_24px_rgba(255,92,0,0.35)]'
                  >
                    {step.number}
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-6'>
              {processSteps
                .filter((_, i) => i % 2 === 1)
                .map((step, i) => {
                  const index = i * 2 + 1;
                  return (
                    <div key={step.number} className='flex justify-start'>
                      <div className='w-full max-w-[480px] rounded-[30px] border border-white/10 bg-[#111111]/90 p-6 shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#FF5C00]/30'>
                        <button
                          type='button'
                          onClick={() => setOpen(open === index ? null : index)}
                          className='w-full text-left'
                        >
                          <div className='flex items-center justify-between gap-4'>
                            <div>
                              <p className='text-sm font-semibold text-white/50 mb-1 uppercase tracking-[0.18em]'>
                                Step {step.number}
                              </p>
                              <h3
                                className={
                                  open === index
                                    ? 'text-xl font-black text-white'
                                    : 'text-xl font-black text-white/80'
                                }
                              >
                                {step.title}
                              </h3>
                            </div>
                            <span
                              className={
                                open === index
                                  ? 'text-[#FF5C00] rotate-180 transition-transform duration-200'
                                  : 'text-white/40 transition-transform duration-200'
                              }
                            >
                              <Icon name='chevron-down' size={20} />
                            </span>
                          </div>
                        </button>

                        {open === index && (
                          <div className='mt-4 text-white/40 text-sm leading-relaxed'>
                            {step.detail}
                          </div>
                        )}
                      </div>
                    </div>
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
