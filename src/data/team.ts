import type { ProjectItem } from '../types';
import portfolio1 from '../assets/portfolio/portfolio_1.png';
import portfolio2 from '../assets/portfolio/portfolio_2.png';
import portfolio3 from '../assets/portfolio/portfolio_3.png';

export const projects: ProjectItem[] = [
  {
    id: 1,
    label: 'Landing Page',
    name: 'Portofolio 1',
    tags: ['Next.js', 'Tailwind'],
    accentColor: '#FF5C00',
    year: '2024',
    featured: true,
    image: portfolio1,
  },
  {
    id: 2,
    label: 'Landing Page',
    name: 'Portofolio 2',
    tags: ['React Native', 'TypeScript'],
    accentColor: '#FF5C00',
    year: '2024',
    image: portfolio2,
  },
  {
    id: 3,
    label: 'Landing Page',
    name: 'Portofolio 3',
    tags: ['React', 'Node.js'],
    accentColor: '#FF5C00',
    year: '2023',
    image: portfolio3,
  },
];