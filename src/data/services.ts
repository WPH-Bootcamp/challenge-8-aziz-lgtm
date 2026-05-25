import type { ServiceItem, IndustryItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: 'globe',
    title: 'Web Development',
    description: 'Fast, scalable, SEO-friendly websites built with modern frameworks.',
  },
  {
    id: 2,
    icon: 'mobile',
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to real user needs.',
  },
  {
    id: 3,
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Delight users with intuitive, conversion-focused interfaces.',
  },
  {
    id: 4,
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Secure, elastic infrastructure that scales with your business.',
  },
  {
    id: 5,
    icon: 'code',
    title: 'Software Development',
    description: 'Custom solutions architected around your exact business logic.',
  },
  {
    id: 6,
    icon: 'server',
    title: 'IT Infrastructure',
    description: 'Reliable backend foundations that support ambitious growth.',
  },
  {
    id: 7,
    icon: 'shield',
    title: 'Cybersecurity Services',
    description: 'Enterprise-grade protection before threats become incidents.',
  },
  {
    id: 8,
    icon: 'check',
    title: 'QA Solutions',
    description: 'Rigorous testing frameworks that ensure peak performance.',
  },
  {
    id: 9,
    icon: 'consulting',
    title: 'IT Consulting & Support',
    description: 'Expert guidance for smarter, faster technology decisions.',
  },
];

export const industries: IndustryItem[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    tag: 'Financial Technology',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems tailored to modern financial needs.',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    tag: 'Retail & Commerce',
    description:
      'High-performance storefronts, headless architecture, and intelligent inventory systems that convert browsers into buyers.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    tag: 'Health Technology',
    description:
      'HIPAA-compliant digital health solutions — from patient portals to telemedicine platforms that transform how care is delivered.',
  },
];