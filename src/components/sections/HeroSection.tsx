import React from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

const trustedBrands = [
  'Lework', 'Zoom', 'Rethree', 'Databricks', 'Airbnb', 'Dropbox', 'Pho.',
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gray-950 flex flex-col overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-600/8 rounded-full blur-2xl" />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-20 flex-1">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Your Tech Partner for{' '}
            <span className="text-orange-500">Smarter Growth</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            We deliver tailored IT solutions to help you scale with speed and confidence.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full">
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Right: Illustration placeholder / device mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Glowing orb / abstract device */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-700/10 rounded-3xl border border-orange-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-orange-500/30 to-orange-700/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
                <div className="text-orange-400 opacity-80">
                  <Icon name="code" size={64} />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-orange-500 font-black text-2xl">50+</p>
              <p className="text-gray-400 text-xs">Projects Delivered</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-orange-500 font-black text-2xl">100%</p>
              <p className="text-gray-400 text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted brands */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <p className="text-center text-gray-600 text-sm font-medium mb-6 tracking-widest uppercase">
          Trusted by Global Innovators &amp; Leading Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trustedBrands.map((brand) => (
            <span
              key={brand}
              className="text-gray-600 hover:text-gray-400 font-semibold text-base transition-colors duration-200 cursor-default tracking-wide"
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