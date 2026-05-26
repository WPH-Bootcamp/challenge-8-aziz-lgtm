import type { Testimonial } from '../types';
import johnLee from '../assets/partners/john_lee.png';
import sarahTan from '../assets/partners/sarah_tan.png';
import emilyChen from '../assets/partners/emily_chen.png';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Creative Director',
    company: 'Innovate Corp',
    avatar: 'JL',
    avatarImg: johnLee,
    quote:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    rating: 5,
    accentColor: '#FF5C00',
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    avatar: 'ST',
    avatarImg: sarahTan,
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
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
    avatarImg: emilyChen,
    quote:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    rating: 5,
    accentColor: '#9B5DE5',
  },
];