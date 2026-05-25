import React from 'react';
import Button from '../ui/Button';
import { companyInfo, companyStats, trustedBrands } from '../../data/company';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 10%, rgba(255,92,0,0.18) 0%, transparent 65%)',
        }}
      />
      {/* Dim glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 90%, rgba(255,92,0,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
            <span className="text-[#FF5C00] text-xs font-semibold tracking-widest uppercase">
              Trusted by global innovators
            </span>
          </div>

          {/* Headline — layered opacity for depth */}
          <h1 className="font-black text-white leading-[1.05] tracking-tight mb-6">
            <span className="block text-[clamp(3rem,8vw,6.5rem)]">Your Tech</span>
            <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white/20">
              Partner for
            </span>
            <span className="block text-[clamp(3rem,8vw,6.5rem)] text-[#FF5C00]">
              Smarter Growth
            </span>
          </h1>

          <p className="text-white/40 text-lg max-w-xl leading-relaxed mb-10">
            {companyInfo.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">Let's Talk</Button>
            <a
              href="#services"
              className="text-white/40 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              <span>See our services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {companyStats.slice(0, 3).map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111111] border border-white/[0.07] rounded-xl px-5 py-4 text-right"
            >
              <p className="text-2xl font-black text-[#FF5C00] leading-none">{stat.value}</p>
              <p className="text-white/30 text-xs mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand strip */}
      <div className="relative border-t border-white/[0.05] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center items-center gap-10">
          <span className="text-white/20 text-xs font-semibold tracking-[0.2em] uppercase">
            Trusted by
          </span>
          {trustedBrands.map((brand) => (
            <span
              key={brand}
              className="text-white/20 hover:text-white/50 font-bold text-sm tracking-wide transition-colors duration-200 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;