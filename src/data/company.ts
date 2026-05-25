import type { CompanyInfo, StatItem, ProcessStep, FaqItem } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'Your Logo',
  tagline: 'Your Tech Partner for Smarter Growth',
  description:
    'We deliver tailored IT solutions to help you scale with speed and confidence — from strategy to execution.',
  email: 'hello@yourlogo.com',
  phone: '+62 812-3456-7890',
  address: 'Jakarta, Indonesia',
  social: {
    facebook: 'https://facebook.com/yourlogo',
    instagram: 'https://instagram.com/yourlogo',
    twitter: 'https://twitter.com/yourlogo',
    linkedin: 'https://linkedin.com/company/yourlogo',
  },
};

export const companyStats: StatItem[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Industry Awards Won' },
  { value: '100%', label: 'Client Satisfaction Rate' },
];

export const trustedBrands: string[] = [
  'Lework',
  'Zoom',
  'Databricks',
  'Airbnb',
  'Dropbox',
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    detail:
      'We begin by deeply understanding your goals, constraints, and competitive landscape through structured workshops and open conversations.',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    detail:
      'A clear, scalable roadmap built around your timelines, budget, and long-term vision — so everyone knows exactly what comes next.',
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    detail:
      'High-fidelity prototypes that validate UX decisions before a single line of production code is written. Less rework, more confidence.',
  },
  {
    number: '04',
    title: 'Development & Implementation',
    detail:
      'Agile delivery with weekly demos, transparent progress tracking, and rapid iteration based on your feedback.',
  },
  {
    number: '05',
    title: 'Testing & Optimization',
    detail:
      'Automated and manual QA across devices, browsers, and edge cases — so launch day feels like a celebration, not a gamble.',
  },
  {
    number: '06',
    title: 'Launch & Growth',
    detail:
      'Post-launch monitoring, analytics dashboards, and continuous improvement cycles. We scale alongside you.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'Custom web and app development, cloud solutions, UX/UI design, cybersecurity, QA testing, and IT consulting — end to end.',
  },
  {
    question: 'How do I know if this is right for my business?',
    answer:
      "Let's talk it through. Book a free consultation with our team — no pressure, just an honest conversation about what you need.",
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Costs vary depending on scope and complexity. After a short discovery call, we put together a detailed, transparent quote with no hidden fees.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A simple website typically takes 2–4 weeks. A full-featured product can take 3–6 months. We always agree on a timeline upfront.',
  },
  {
    question: 'Can I start with a small project first?',
    answer:
      'Absolutely. Many of our longest-running partnerships started with a single focused sprint. Start small, grow fast.',
  },
];

export const contactServiceOptions: string[] = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];