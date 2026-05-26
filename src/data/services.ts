import type { ServiceItem, IndustryItem } from '../types';
import fintechImage from '../assets/assets/fintech.png';
import ecommerceImage from '../assets/assets/e_commerce.png';
import healthcareImage from '../assets/assets/healthcare.png';
import webDevelopmentIcon from '../assets/web-development.png';
import mobileDevelopmentIcon from '../assets/mobile_development.png';
import uiuxDesignIcon from '../assets/uiux-design.png';
import cloudIcon from '../assets/cloud.png';
import softwareIcon from '../assets/software.png';
import infrastructureIcon from '../assets/insfrastructure.png';
import cybersecurityIcon from '../assets/cyber.png';
import qaIcon from '../assets/question.png';
import consultingIcon from '../assets/consulting.png';

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: webDevelopmentIcon,
    title: 'Web Development',
    description:
      'Build fast, scalable, and SEO-friendly websites with modern architecture.',
  },
  {
    id: 2,
    icon: mobileDevelopmentIcon,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform apps designed for real user engagement.',
  },
  {
    id: 3,
    icon: uiuxDesignIcon,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces and intuitive experiences that convert.',
  },
  {
    id: 4,
    icon: cloudIcon,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    id: 5,
    icon: softwareIcon,
    title: 'Software Development',
    description:
      'Custom software built around your business strategy and logic.',
  },
  {
    id: 6,
    icon: infrastructureIcon,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
  },
  {
    id: 7,
    icon: cybersecurityIcon,
    title: 'Cybersecurity Services',
    description:
      'Protect your systems with enterprise-grade security services.',
  },
  {
    id: 8,
    icon: qaIcon,
    title: 'QA Solutions',
    description: 'Ensure performance and reliability with rigorous testing.',
  },
  {
    id: 9,
    icon: consultingIcon,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert consulting support.',
  },
];

export const industries: IndustryItem[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    tag: 'Financial Technology',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems tailored to modern financial needs.',
    image: fintechImage,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    tag: 'Retail & Commerce',
    description:
      'High-performance storefronts, headless architecture, and intelligent inventory systems that convert browsers into buyers.',
    image: ecommerceImage,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    tag: 'Health Technology',
    description:
      'HIPAA-compliant digital health solutions — from patient portals to telemedicine platforms that transform how care is delivered.',
    image: healthcareImage,
  },
];
