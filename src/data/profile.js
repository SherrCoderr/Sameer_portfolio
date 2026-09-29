// ─────────────────────────────────────────────────────────────
// Personal details. Edit this file to update the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sameer',
  roles: ['Computer Science Student', 'Full Stack Developer', 'Problem Solver'],
  summary:
    'Computer Science student focused on Full Stack Development and Data Structures & Algorithms. I enjoy building practical, reliable applications and solving challenging problems.',

  email: 'sameersaini8851@gmail.com',

  // Set showPhone to true if you want your number visible on the Contact section.
  phone: '7973279803',
  showPhone: false,

  leetcodeSolved: 450,
  leetcodeLanguages: ['C++', 'Java'],

  links: {
    github: 'https://github.com/SherrCoderr',
    linkedin: 'https://www.linkedin.com/in/sameer-saini-a0a248353/',
    leetcode: 'https://leetcode.com/u/SherrCoderr/',
    // File lives in /public.
    resume: `${import.meta.env.BASE_URL}Sameer_Resume.pdf`,
  },
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  // The Achievements section sits under Education, so both highlight this link.
  { id: 'education', label: 'Education', also: ['achievements'] },
  { id: 'contact', label: 'Contact' },
];

export const aboutParagraphs = [
  "I'm a Computer Science student at Chandigarh University, working toward a B.E. (expected 2028) with a current CGPA of 8.0.",
  'My core focus is building robust full-stack applications with React, Java, Spring Boot, and PostgreSQL, alongside solving algorithmic challenges in C++ and Java, with 450+ problems solved on LeetCode.',
  'In mid-2026, I completed a Data Science internship at Algoson – GraveAngels, where I worked with structured datasets using Python and strengthened my analytical problem-solving skills.',
  "I care deeply about writing clean, maintainable, production-ready code and building applications that solve practical problems. I'm looking for opportunities to grow as a Software Engineer and contribute to meaningful engineering teams.",
];