import React, { useState } from 'react';
import Icon from '../ui/Icon';
import { companyStats, processSteps } from '../../data/company';

const AboutSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="about" className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

{/* Header + stats — centered layout */}
      <div className="flex flex-col items-center text-center gap-12 mb-24">
        <div className="max-w-3xl">
          <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Why us
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            End-to-End IT Solutions<br />
            <span className="text-white/25">That Drive Results</span>
          </h2>
          <p className="mt-5 text-white/40 text-base leading-relaxed px-4 sm:px-0">
            From strategy to execution, we build technology that compounds — each
            decision made with your next milestone in mind.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center w-full max-w-5xl px-4">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
              className="aspect-square rounded-full border border-white/[0.07] bg-[#111111] p-6 flex flex-col items-center justify-center text-center group hover:border-[#FF5C00]/30 transition-colors duration-300"
            >
              <p className="text-4xl font-black text-[#FF5C00] mb-2 group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </p>
              <p className="text-white/30 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process accordion */}
        <div>
          <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our process
          </p>
          <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
            Clear steps.{' '}
            <span className="text-white/25">Smart execution.</span>
          </h2>
          <p className="text-white/30 mb-12 max-w-md">
            Results you can count on.
          </p>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#FF5C00]/40 via-[#FF5C00]/10 to-transparent hidden md:block" />

            <div className="flex flex-col gap-2">
              {processSteps.map((step, i) => (
                <div key={step.number} className="relative">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center gap-5 text-left group py-4 pr-4"
                  >
                    <div
                      className={[
                        'w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black flex-shrink-0 transition-all duration-200 z-10 bg-[#0a0a0a]',
                        open === i
                          ? 'border-[#FF5C00] text-[#FF5C00] shadow-[0_0_16px_rgba(255,92,0,0.3)]'
                          : 'border-white/10 text-white/30 group-hover:border-white/30',
                      ].join(' ')}
                    >
                      {step.number}
                    </div>

                    <span
                      className={[
                        'flex-1 font-semibold text-base transition-colors duration-150',
                        open === i ? 'text-white' : 'text-white/50 group-hover:text-white/80',
                      ].join(' ')}
                    >
                      {step.title}
                    </span>

                    <span
                      className={[
                        'text-white/20 transition-all duration-200',
                        open === i ? 'text-[#FF5C00] rotate-180' : '',
                      ].join(' ')}
                    >
                      <Icon name="chevron-down" size={16} />
                    </span>
                  </button>

                  {open === i && (
                    <div className="pl-[3.75rem] pb-5 pr-4">
                      <p className="text-white/40 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  )}

                  {i < processSteps.length - 1 && (
                    <div className="ml-[3.75rem] h-px bg-white/[0.05]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;