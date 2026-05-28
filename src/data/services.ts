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
      'Build fast, scalable, and SEO-friendly websites.',
  },
  {
    id: 2,
    icon: mobileDevelopmentIcon,
    title: 'Mobile App Development',
    description:
      'Native & cross-platform apps tailored to user needs.',
  },
  {
    id: 3,
    icon: uiuxDesignIcon,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
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
      'Custom solutions built around your business logic.',
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
      'Stay protected with enterprise-grade security.',
  },
  {
    id: 8,
    icon: qaIcon,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    id: 9,
    icon: consultingIcon,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
  },
];

export const industries: IndustryItem[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    tag: 'Financial Technology',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: fintechImage,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    tag: 'Retail & Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ecommerceImage,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    tag: 'Health Technology',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: healthcareImage,
  },
];
