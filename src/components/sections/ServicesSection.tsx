import React, { useState } from 'react';
import Card from '../ui/Card';
import Icon from '../ui/Icon';



type ServiceIconName = 'globe' | 'mobile' | 'palette' | 'cloud' | 'code' | 'server' | 'shield' | 'check' | 'consulting';

const services: { icon: ServiceIconName; title: string; description: string }[] = [
  { icon: 'globe', title: 'Web Development', description: 'Build fast, scalable, and SEO-friendly websites.' },
  { icon: 'mobile', title: 'Mobile App Development', description: 'Native & cross-platform apps tailored to user needs.' },
  { icon: 'palette', title: 'UI/UX Design', description: 'Delight users with intuitive and beautiful interfaces.' },
  { icon: 'cloud', title: 'Cloud Solutions', description: 'Secure and flexible cloud infrastructure for your growth.' },
  { icon: 'code', title: 'Software Development', description: 'Custom solutions built around your business logic.' },
  { icon: 'server', title: 'IT Infrastructure', description: 'Scale your backend with reliable tech foundations.' },
  { icon: 'shield', title: 'Cybersecurity Services', description: 'Stay protected with enterprise-grade security.' },
  { icon: 'check', title: 'QA Solutions', description: 'Ensure performance with rigorous testing frameworks.' },
  { icon: 'consulting', title: 'IT Consulting & Support', description: 'Make smarter tech decisions with expert guidance.' },
];

const industries = [
  {
    id: 'fintech',
    label: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems tailored to modern financial needs.',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description:
      'We craft high-performance e-commerce platforms with seamless UX, smart integrations, and conversion-focused design built for growth.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'We develop HIPAA-compliant digital health solutions, from patient portals to telemedicine platforms that transform care delivery.',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('fintech');

  const activeData = industries.find((i) => i.id === activeIndustry)!;

  return (
    <section id="services" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-gray-400 text-lg">Tailored tech to boost efficiency, security, and results.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((service) => (
            <Card key={service.title} hover className="group">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                <Icon name={service.icon} size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* Industry section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-3">Built for Your Industry</h2>
            <p className="text-gray-400">
              We've helped companies across industries launch smarter, faster, and more securely.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Tabs */}
            <div className="flex flex-col gap-2 min-w-[180px]">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`text-left px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeIndustry === industry.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {industry.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-start min-h-[200px]">
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-4">{activeData.label}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{activeData.description}</p>
              </div>
              {/* Decorative image placeholder */}
              <div className="w-full lg:w-64 h-36 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 text-sm">Industry Visual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;