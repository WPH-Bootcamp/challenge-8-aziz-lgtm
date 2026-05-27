import type { CompanyInfo, StatItem, ProcessStep, FaqItem } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'Your Logo',
  tagline: 'Your Tech Partner for Smarter Growth',
  description:
    'From strategy to execution, we deliver solutions that grow your business.',
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
    number: '1',
    title: 'Discovery & Consultation',
    detail: 'Understand Your Needs & Goals',
  },
  {
    number: '2',
    title: 'Planning & Strategy',
    detail: 'Build a Clear, Scalable Roadmap',
  },
  {
    number: '3',
    title: 'Design & Prototyping',
    detail: 'Craft UX That Converts',
  },
  {
    number: '4',
    title: 'Development & Implementation',
    detail: 'Deliver With Speed & Precision',
  },
  {
    number: '5',
    title: 'Testing & Optimization',
    detail: 'Ensure Quality at Every Step',
  },
  {
    number: '6',
    title: 'Launch & Growth',
    detail: 'Scale, Measure & Improve Continuously',
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