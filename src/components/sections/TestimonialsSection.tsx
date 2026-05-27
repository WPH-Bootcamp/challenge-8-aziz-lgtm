import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import quotationImg from '../../assets/quotation.png';

const CARD_W = 560;
const GAP = 28;
const STEP = CARD_W + GAP;

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section id="testimonials" className="bg-[#0d0d0d] py-24">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          What Partners Say About Working With Us
        </h2>
        <p className="text-white/50 text-base">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* pt-14 prevents overflow-hidden from clipping the quote marks that sit above the card */}
      <div className="relative overflow-hidden pt-14">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50vw - ${current * STEP + CARD_W / 2}px))`,
          }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === current;
            return (
              <div
                key={t.id}
                onClick={() => !isActive && setCurrent(i)}
                className={`relative shrink-0 transition-all duration-500 ${
                  isActive ? '' : 'opacity-40 cursor-pointer'
                }`}
                style={{ width: `${CARD_W}px`, marginRight: `${GAP}px` }}
              >
                {/* Quotation mark image — floats top-left above the card */}
                <div className="absolute -top-7 left-8 z-10">
                  <img src={quotationImg} alt="quote" className="w-14 h-auto" />
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl border flex flex-col items-center px-10 pt-16 pb-10 transition-colors duration-500 ${
                    isActive
                      ? 'bg-[#111111] border-indigo-500/50'
                      : 'bg-[#0d0d0d] border-white/5'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-2 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="24" height="24" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-lg text-center leading-relaxed mb-6">
                    "{t.quote}"
                  </p>

                  {/* Name */}
                  <p className="text-white font-bold text-lg mb-1">{t.name}</p>

                  {/* Role at Company */}
                  <p className="text-[#FF5C00] text-sm mb-8">
                    {t.role} at {t.company}
                  </p>

                  {/* Avatar */}
                  {t.avatarImg ? (
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-black text-lg"
                      style={{ background: `${t.accentColor}20`, color: t.accentColor }}
                    >
                      {t.avatar}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-3 bg-[#FF5C00]'
                : 'w-3 h-3 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;
