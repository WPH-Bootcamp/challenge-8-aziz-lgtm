import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Creative Director',
    company: 'Innovate Corp',
    avatar: 'JL',
    quote:
      'The team was a game changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    rating: 5,
    accentColor: '#FF5C00',
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    avatar: 'ST',
    quote:
      'The team delivered exactly what we needed on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    rating: 5,
    accentColor: '#0066FF',
    featured: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head',
    company: 'Tech Solutions',
    avatar: 'EC',
    quote:
      'The collaboration was seamless, and the results exceeded our expectations. Their expertise transformed our idea into a successful product.',
    rating: 5,
    accentColor: '#9B5DE5',
  },
];