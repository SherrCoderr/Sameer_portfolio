import { Code2, Cpu, Globe, Database, Wrench } from 'lucide-react';

// `span` controls how wide the card is on large screens (out of 6 columns).
export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    span: 'lg:col-span-3',
    items: ['C++', 'Java', 'Python', 'C'],
  },
  {
    title: 'Core Computer Science',
    icon: Cpu,
    span: 'lg:col-span-3',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Debugging',
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    span: 'lg:col-span-6',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
      'WebSockets',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    span: 'lg:col-span-3',
    items: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'SQL',
      'Flyway',
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    span: 'lg:col-span-3',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'VS Code',
    ],
  },
];

export const softSkills = [
  'Communication',
  'Teamwork',
  'Adaptability',
  'Documentation',
  'Time Management',
  'Quick Learner',
];