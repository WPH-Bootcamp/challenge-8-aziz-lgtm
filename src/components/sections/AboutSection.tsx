import React, { useState } from 'react';
import Icon from '../ui/Icon';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Industry Awards Won' },
  { value: '100%', label: 'Client Satisfaction Rate' },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap',
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
  },
  {
    number: '04',
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
  },
  {
    number: '05',
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
  },
  {
    number: '06',
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
  },
];

const AboutSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="about" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500/40 transition-colors duration-300"
              >
                <p className="text-4xl font-black text-orange-500 mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-3">Our Process</h2>
            <p className="text-gray-400">Clear steps. Smart execution. Results you can count on.</p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 text-sm font-bold flex-shrink-0">
                      {step.number}
                    </span>
                    <span className="text-white font-semibold">{step.title}</span>
                  </div>
                  <span className="text-gray-500">
                    <Icon name={openStep === index ? 'chevron-up' : 'chevron-down'} size={18} />
                  </span>
                </button>
                {openStep === index && (
                  <div className="px-6 pb-5 pl-[4.5rem]">
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;