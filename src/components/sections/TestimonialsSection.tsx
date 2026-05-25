import React from 'react';
import Icon from '../ui/Icon';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#0d0d0d] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            What Partners Say<br />
            <span className="text-white/25">About Working With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={[
                'relative rounded-2xl border p-7 flex flex-col justify-between transition-all duration-300',
                t.featured
                  ? 'bg-[#151515] border-[#FF5C00]/20 shadow-[0_0_40px_rgba(255,92,0,0.05)]'
                  : 'bg-[#111111] border-white/[0.07]',
              ].join(' ')}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 w-12 h-px"
                style={{ background: t.accentColor }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FF5C00]">
                    <Icon name="star" size={12} />
                  </span>
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: `${t.accentColor}18`,
                    border: `1px solid ${t.accentColor}30`,
                    color: t.accentColor,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-white/25 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;