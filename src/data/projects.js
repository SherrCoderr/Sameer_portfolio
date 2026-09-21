// ─────────────────────────────────────────────────────────────
// Project links. Replace the values below whenever they change.
// Set a link to null to hide its button.
// ─────────────────────────────────────────────────────────────

// Web Traffic Analyzer
const TRAFFIC_ANALYZER_LIVE_DEMO_URL = 'https://traffic-analyzer-vert.vercel.app/';
const TRAFFIC_ANALYZER_GITHUB_URL = 'https://github.com/SherrCoderr/traffic-analyzer';

// CampusOne: no public links yet. Add them here once the repo / demo exist.
const CAMPUSONE_LIVE_DEMO_URL = null;
const CAMPUSONE_GITHUB_URL = null;

export const projects = [
  {
    name: 'CampusOne',
    chrome: 'campusone (in development)',
    description:
      'Campus management platform designed to streamline communication between students, faculty, and administration.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'React'],
    features: [
      'Building responsive and accessible interfaces',
      'Modular components for announcements, events, and student services',
      'Focus on maintainability and clean code',
      'Designed for straightforward feature additions and debugging',
    ],
    status: { label: 'In Development', tone: 'progress', note: 'Expected completion: December 2026' },
    github: CAMPUSONE_GITHUB_URL,
    liveDemo: CAMPUSONE_LIVE_DEMO_URL,
    linksNote: 'Source and demo links will be added when it ships.',
  },
  {
    name: 'Web Traffic Analyzer',
    chrome: 'traffic-analyzer-vert.vercel.app',
    description: 'Web traffic analyzer that monitors and visualizes website traffic patterns.',
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
