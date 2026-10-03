import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    span: 'lg:col-span-2',
    items: ['C++', 'Java', 'Python', 'C'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    span: 'lg:col-span-2',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Database',
    icon: Database,
    span: 'lg:col-span-2',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'SQL', 'JPA/Hibernate'],
  },
  {
    title: 'Backend',
    icon: Server,
    span: 'lg:col-span-3',
    items: ['Spring Boot', 'REST APIs', 'WebSockets', 'STOMP', 'JWT'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    span: 'lg:col-span-3',
    items: ['Git', 'GitHub', 'Maven', 'Flyway', 'Docker', 'VS Code'],
  },
];

export const softSkills = [
  'Problem Solving',
  'Data Structures & Algorithms',
  'Clean Code & Design',
  'Team Collaboration',
  'Technical Documentation',
  'Time Management',
];