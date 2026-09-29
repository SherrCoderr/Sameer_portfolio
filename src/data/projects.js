// ─────────────────────────────────────────────────────────────
// Project links. Replace the values below whenever they change.
// Set a link to null to hide its button.
// ─────────────────────────────────────────────────────────────

// SplitWiseX
const SPLITWISEX_LIVE_DEMO_URL = 'https://split-wise-x-navy.vercel.app/';
const SPLITWISEX_GITHUB_URL = 'https://github.com/SherrCoderr/SplitWiseX';

// Web Traffic Analyzer
const TRAFFIC_ANALYZER_LIVE_DEMO_URL = 'https://traffic-analyzer-vert.vercel.app/';
const TRAFFIC_ANALYZER_GITHUB_URL = 'https://github.com/SherrCoderr/traffic-analyzer';

export const projects = [
  {
    name: 'SplitWiseX',
    chrome: 'split-wise-x-navy.vercel.app • full-stack expense platform',
    description:
      'Full-stack group expense splitting platform for managing shared expenses, calculating balances, and simplifying settlements between members.',
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    features: [
      'JWT authentication with BCrypt password hashing',
      'Group and member management with server-side authorization',
      'Expense tracking with deterministic equal splitting',
      'Automatic balance calculation and settlement optimization',
      'Greedy algorithm to minimize settlement transactions',
      'Real-time group updates using WebSockets and STOMP',
      'PostgreSQL persistence with JPA/Hibernate and Flyway migrations',
      'Dockerized backend with production deployment on Render and Vercel',
    ],
    status: {
      label: 'Live',
      tone: 'live',
      note: 'Deployed on Vercel with Spring Boot backend on Render',
    },
    github: SPLITWISEX_GITHUB_URL,
    liveDemo: SPLITWISEX_LIVE_DEMO_URL,
    linksNote: 'Live demo and source code available.',
  },
  {
    name: 'Web Traffic Analyzer',
    chrome: 'traffic-analyzer-vert.vercel.app',
    description:
      'Web traffic analyzer that monitors and visualizes website traffic patterns.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    features: [
      'Built backend logic using Node.js',
      'Processes and serves traffic data',
      'Responsive analytics interface',
      'Deployed publicly on Vercel',
    ],
    status: { label: 'Live', tone: 'live', note: 'Deployed on Vercel' },
    github: TRAFFIC_ANALYZER_GITHUB_URL,
    liveDemo: TRAFFIC_ANALYZER_LIVE_DEMO_URL,
  },
];