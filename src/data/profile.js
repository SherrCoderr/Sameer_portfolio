// ─────────────────────────────────────────────────────────────
// Personal details. Edit this file to update the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sameer',
  roles: ['Computer Science Student', 'Full Stack Developer', 'Problem Solver'],
  summary:
    'Computer Science student focused on Full Stack Development and Data Structures & Algorithms. I enjoy building reliable web applications and solving challenging problems.',

  email: 'sameersaini8851@gmail.com',

  // Set showPhone to true if you want your number visible on the Contact section.
  // (Public phone numbers tend to attract spam, so it is hidden by default.)
  phone: '7973279803',
  showPhone: false,

  leetcodeSolved: 450,
  leetcodeLanguages: ['C++', 'Java'],

  links: {
    github: 'https://github.com/SherrCoderr',
    linkedin: 'https://www.linkedin.com/in/sameer-saini-a0a248353/',
    leetcode: 'https://leetcode.com/u/SherrCoderr/',
    // File lives in /public. Replace it with a newer PDF using the same name.
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
  'My work sits between two things I enjoy: building web applications with React and Node.js, and solving algorithmic problems, with 450+ solved on LeetCode in C++ and Java.',
  'In mid-2026 I completed a Data Science internship at Algoson – GraveAngels, where I cleaned and analysed structured datasets in Python.',
  "I care about code that other people can read, extend and debug. I'm looking for a Software Engineer role where I can keep building that way.",
];
