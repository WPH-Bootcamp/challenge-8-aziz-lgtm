import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';

const CARD_W = 480;
const GAP = 28;
const STEP = CARD_W + GAP;

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(1); // Sarah Tan (featured) is index 1

  return (
    <section id="testimonials" className="bg-[#0d0d0d] py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
          What Partners Say About Working With Us
        </h2>
        <p className="text-white/50 text-base">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Carousel track */}
      <div className="relative overflow-hidden">
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
                className="flex-shrink-0 transition-opacity duration-500 cursor-pointer"
                style={{
                  width: `${CARD_W}px`,
                  marginRight: `${GAP}px`,
                  opacity: isActive ? 1 : 0.3,
                }}
                onClick={() => !isActive && setCurrent(i)}
              >
                <div
                  className={`rounded-2xl p-8 pt-6 flex flex-col items-center ${
                    isActive ? 'bg-[#1c1c1c]' : 'bg-[#111111]'
                  }`}
                >
                  {/* Large quote mark */}
                  <div className="self-start text-[#FF5C00] font-black leading-none mb-3"
                    style={{ fontSize: '4.5rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}
                  >
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="#FF5C00">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-sm text-center leading-relaxed mb-5">
                    "{t.quote}"
                  </p>

                  {/* Name */}
                  <p className="text-white font-bold text-base mb-1">{t.name}</p>

                  {/* Role */}
                  <p className="text-[#FF5C00] text-sm mb-6">
                    {t.role} at {t.company}
                  </p>

                  {/* Avatar */}
                  {t.avatarImg ? (
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-[#0d0d0d]"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black"
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
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-[#FF5C00] w-2.5'
                : 'bg-white/20 w-2.5 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;
