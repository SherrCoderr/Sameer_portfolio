// ─────────────────────────────────────────────────────────────
// Project links and dataset.
// ─────────────────────────────────────────────────────────────

// Smart Inventory Management System (Featured / Flagship)
const SMART_INVENTORY_LIVE_DEMO_URL = 'https://smart-inventory-management-system-flame.vercel.app/';
const SMART_INVENTORY_GITHUB_URL = 'https://github.com/SherrCoderr/smart-inventory-management-system';

// Job Portal & Resume Analyzer (Featured / Flagship)
const JOB_PORTAL_LIVE_DEMO_URL = 'https://job-portal-resume-analyzer-seven.vercel.app/';
const JOB_PORTAL_GITHUB_URL = 'https://github.com/SherrCoderr/job-portal-resume-analyzer';

// SplitWiseX (Featured / Flagship)
const SPLITWISEX_LIVE_DEMO_URL = 'https://split-wise-x-navy.vercel.app/';
const SPLITWISEX_GITHUB_URL = 'https://github.com/SherrCoderr/SplitWiseX';

// Web Traffic Analyzer
const TRAFFIC_ANALYZER_LIVE_DEMO_URL = 'https://traffic-analyzer-vert.vercel.app/';
const TRAFFIC_ANALYZER_GITHUB_URL = 'https://github.com/SherrCoderr/traffic-analyzer';

export const projects = [
  {
    id: 'smart-inventory-management-system',
    name: 'Smart Inventory Management System',
    featured: true,
    category: 'Full-Stack',
    tagline: 'Enterprise Full-Stack Platform',
    chrome: 'smart-inventory-management-system-flame.vercel.app',
    description:
      'Built and deployed a full-stack inventory management platform with role-based access for administrators and employees. The system supports product, supplier, category, stock IN/OUT, transaction history, low-stock detection, and reorder workflows.',
    tech: [
      'React',
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    features: [
      'Admin/Employee role-based access control with JWT authentication and Spring Security',
      'Concurrency-safe inventory operations with PostgreSQL and JPA/Hibernate',
      'Redis caching layer with automated cache invalidation strategies',
      'Low-stock detection engine with automated reorder recommendations',
      'Immutable inventory transaction and audit history tracking for stock IN/OUT',
      'Containerized with Docker and verified with 57 automated backend tests',
      'Production deployment with React on Vercel, Spring Boot on Render, and Neon PostgreSQL',
    ],
    architecture: {
      auth: 'JWT-based authentication with Spring Security & role hierarchy (Admin / Employee)',
      concurrency: 'Database-level transactional isolation & optimistic locking for safe stock operations',
      caching: 'Redis key-value caching with event-driven invalidation on stock mutations',
      persistence: 'PostgreSQL with JPA/Hibernate ORM and relational schema constraints',
      testing: '57 automated backend unit & integration tests',
      deployment: 'Docker containerized backend on Render, React frontend on Vercel, Neon PostgreSQL',
    },
    status: {
      label: 'Live',
      tone: 'live',
      note: 'Production on Vercel & Render with Redis & Neon PostgreSQL',
    },
    github: SMART_INVENTORY_GITHUB_URL,
    liveDemo: SMART_INVENTORY_LIVE_DEMO_URL,
  },
  {
    id: 'job-portal-resume-analyzer',
    name: 'Job Portal & Resume Analyzer',
    featured: true,
    category: 'Full-Stack',
    tagline: 'Flagship Full-Stack Platform',
    chrome: 'job-portal-resume-analyzer-seven.vercel.app',
    description:
      'Full-stack job platform with role-based authentication, job management, resume analysis, job matching, and application tracking.',
    tech: [
      'React',
      'Spring Boot',
      'Java',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'JPA/Hibernate',
    ],
    features: [
      'Role-based authentication & authorization supporting Job Seeker, Recruiter, and Admin roles',
      'Secure JWT authentication with BCrypt password hashing and CORS configuration',
      'Job posting, keyword searching, and streamlined direct job application workflow',
      'Recruiter applicant management dashboard and end-to-end application status tracking',
      'Resume upload with automated skill extraction, analysis, and job-resume match percentage',
      'Admin dashboard for platform moderation and oversight',
      'PostgreSQL persistence via JPA/Hibernate with Neon cloud database and environment-based config',
      'Production deployment with React frontend on Vercel and Spring Boot backend on Render',
    ],
    architecture: {
      auth: 'Role-based access control (Job Seeker, Recruiter, Admin) with JWT & BCrypt',
      matching: 'Automated skill extraction algorithms matching candidate resumes to job descriptions',
      tracking: 'Multi-stage application status pipeline with recruiter feedback workflow',
      persistence: 'PostgreSQL relational database via JPA/Hibernate ORM',
      deployment: 'React SPA on Vercel, Java Spring Boot REST API on Render, Neon Cloud DB',
    },
    status: {
      label: 'Live',
      tone: 'live',
      note: 'Production on Vercel & Render with Neon PostgreSQL',
    },
    github: JOB_PORTAL_GITHUB_URL,
    liveDemo: JOB_PORTAL_LIVE_DEMO_URL,
  },
  {
    id: 'splitwisex',
    name: 'SplitWiseX',
    featured: true,
    category: 'Full-Stack',
    tagline: 'Featured Full-Stack Application',
    chrome: 'split-wise-x-navy.vercel.app',
    description:
      'Full-stack group expense splitting platform for managing shared expenses, calculating balances, and simplifying settlements between members.',
    tech: [
      'React',
      'TypeScript',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'WebSockets',
      'STOMP',
      'Flyway',
      'Docker',
    ],
    features: [
      'JWT authentication with BCrypt password hashing and server-side authorization',
      'Group and member management with deterministic equal expense splitting',
      'Automatic balance calculation and settlement optimization with greedy algorithm to minimize transactions',
      'Real-time live group updates using WebSockets and STOMP messaging',
      'PostgreSQL persistence with JPA/Hibernate and Flyway database migrations',
      'Dockerized backend with production deployment on Render and React on Vercel',
    ],
    architecture: {
      algorithm: 'Greedy transaction minimization algorithm simplifying multi-party debt graphs',
      realtime: 'Bi-directional STOMP over WebSockets for instant expense balance sync',
      migrations: 'Version-controlled database schema evolution using Flyway migrations',
      persistence: 'PostgreSQL with JPA/Hibernate and transactional integrity',
      deployment: 'Docker containerized backend on Render, React frontend on Vercel',
    },
    status: {
      label: 'Live',
      tone: 'live',
      note: 'Production on Vercel with Spring Boot backend on Render',
    },
    github: SPLITWISEX_GITHUB_URL,
    liveDemo: SPLITWISEX_LIVE_DEMO_URL,
  },
  {
    id: 'web-traffic-analyzer',
    name: 'Web Traffic Analyzer',
    featured: false,
    category: 'Analytics',
    tagline: 'Web Analytics Tool',
    chrome: 'traffic-analyzer-vert.vercel.app',
    description:
      'Web traffic analyzer that monitors and visualizes website traffic patterns.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    features: [
      'Built backend logic using Node.js for data ingestion and processing',
      'Processes and serves structured traffic data metrics',
      'Responsive analytics interface for pattern visualization',
      'Deployed publicly on Vercel',
    ],
    architecture: {
      backend: 'Node.js server handling traffic logging and data processing',
      frontend: 'Responsive web interface for real-time traffic metric visualization',
      deployment: 'Deployed publicly on Vercel serverless platform',
    },
    status: {
      label: 'Live',
      tone: 'live',
      note: 'Deployed publicly on Vercel',
    },
    github: TRAFFIC_ANALYZER_GITHUB_URL,
    liveDemo: TRAFFIC_ANALYZER_LIVE_DEMO_URL,
  },
];