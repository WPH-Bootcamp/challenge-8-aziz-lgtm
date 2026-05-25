import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: 1,
    label: 'Landing Page',
    name: 'Portfolio 1',
    tags: ['Next.js', 'Tailwind'],
    accentColor: '#FF5C00',
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    label: 'Mobile App',
    name: 'Portfolio 2',
    tags: ['React Native', 'TypeScript'],
    accentColor: '#0066FF',
    year: '2024',
  },
  {
    id: 3,
    label: 'SaaS Dashboard',
    name: 'Portfolio 3',
    tags: ['React', 'Node.js'],
    accentColor: '#9B5DE5',
    year: '2023',
  },
];