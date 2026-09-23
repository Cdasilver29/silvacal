export const portfolioHero = {
  title: 'Our Work',
  supportingLine:
    'Platforms and websites we have built for organisations in Kenya. Every project starts with understanding how a business actually operates, then building software around that.',
};

export type PortfolioProject = {
  slug: string;
  name: string;
  client: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  status: string;
  published: boolean;
  hasDetail: boolean;
};

// Only entries with published: true render anywhere on the site.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'saferide-africa',
    name: 'SafeRide Africa',
    client: 'SafeRide Africa',
    category: 'Operations Platform',
    summary: 'Driving school operations platform and marketing site.',
    problem:
      'Driving schools run enrollment, instructor scheduling, student records and NTSA-aligned training on paper and spreadsheets across multiple branches, with no single source of truth.',
    approach:
      'TypeScript monorepo with Fastify and Drizzle ORM on Neon Postgres, role-based access across six user roles, signed-URL file storage on Cloudflare R2, full audit logging, and an integrated learning management system covering the NTSA-aligned curriculum. Content protection rules lock legally bound training material to senior roles. Separate marketing site built with React Native Web and Expo Router, deployed on Vercel, with WhatsApp enrollment deep links and multi-language support.',
    outcome:
      'Single platform replacing fragmented manual processes, with instructor authoring, student progress tracking and branch-level administration in one system.',
    stack: [
      'TypeScript',
      'Fastify',
      'Drizzle ORM',
      'Neon Postgres',
      'React',
      'Vite',
      'Expo',
      'React Native Web',
      'Cloudflare R2',
      "Africa's Talking SMS",
      'Vercel',
    ],
    status: 'In production',
    published: true,
    hasDetail: true,
  },
  {
    slug: 'advent-unite',
    name: 'Advent Unite',
    client: 'Advent Unite',
    category: 'Events Platform',
    summary:
      "AI-assisted events marketing and ticketing platform for Kenya's Adventist community.",
    problem:
      'Community event organisers rely on WhatsApp broadcasts and manual registration lists, with no reliable ticketing, payment tracking or attendance data.',
    approach:
      'Next.js 15 with Drizzle ORM on Neon Postgres, Zod validation throughout, organisation verification flow, and consumer ticketing built around local payment behaviour. Earlier iteration shipped on React, Vite and Supabase with M-Pesa Daraja integration.',
    outcome:
      'Verified organisations can publish events and sell tickets, with registration and payment handled in one flow.',
    stack: [
      'Next.js 15',
      'TypeScript',
      'Drizzle ORM',
      'Neon Postgres',
      'Zod',
      'Tailwind CSS',
      'M-Pesa Daraja API',
    ],
    status: 'Active development',
    published: true,
    hasDetail: true,
  },
  {
    slug: 'camp-meeting-2026',
    name: 'Newlife Camp Meeting 2026',
    client: 'Newlife SDA Nairobi',
    category: 'Event Website',
    summary:
      'Searchable, offline-capable programme site for an eight-day conference with over two hundred sessions.',
    problem:
      'An eight-day conference programme with over two hundred sessions distributed as a PDF, leaving attendees unable to search, filter or track what applies to them.',
    approach:
      'Next.js 15 and React 19 static site with the full programme as typed data, so future years swap a data file rather than rebuilding. Searchable and filterable schedule with URL-driven state, per-session bookmarking, offline support via a service worker, speaker profiles, and structured event data for search engines.',
    outcome:
      'Complete programme accessible on any phone, online or offline, with a shareable personal schedule.',
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'Serwist',
      'Vercel',
    ],
    status: 'Delivered',
    published: true,
    hasDetail: true,
  },
  {
    slug: 'sose-engineering',
    name: 'Sight Over Site Engineering',
    client: 'Sight Over Site Engineering',
    category: 'Marketing Website',
    summary:
      'Fast, framework-free marketing site for a construction consulting firm.',
    problem:
      'A construction consulting firm with no web presence, needing credibility with corporate and institutional clients.',
    approach:
      'Multi-page static marketing site in plain HTML and CSS with no framework overhead, built around service storytelling rather than a brochure layout, with motion and performance tuned for slower mobile connections.',
    outcome: 'Fast, maintainable site deployed from GitHub to Vercel.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    status: 'Delivered',
    published: true,
    hasDetail: true,
  },
  {
    slug: 'landguard',
    name: 'LandGuard',
    client: 'Land Degradation Hackathon',
    category: 'AI & Data Platform',
    summary:
      'A monitoring platform combining satellite imagery and machine learning to assess land degradation risk, built for and winner of a land degradation hackathon.',
    problem:
      'Land degradation advances quietly, and the people who could act on it, farmers and policymakers, have no practical way to see soil health, vegetation cover and erosion risk for a specific location.',
    approach:
      'FastAPI backend with async SQLAlchemy, a RandomForest classifier trained on public land degradation data, Google Earth Engine for vegetation index data pulled from satellite imagery, and a React frontend with interactive dashboards and a geographic risk map. Role-based access separates what farmers, policymakers, community users and administrators can see, with the risk map restricted to policymakers.',
    outcome:
      'Farmers enter a location and soil readings and receive a risk assessment with recommendations, while policymakers see aggregated statistics and the geographic distribution of high-risk areas.',
    stack: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'scikit-learn',
      'Google Earth Engine',
      'React',
      'TypeScript',
      'Leaflet',
      'Chart.js',
      'Tailwind CSS',
    ],
    status: 'Prototype',
    published: true,
    hasDetail: true,
  },
  {
    slug: 'crystal-fountain',
    name: 'Crystal Fountain Development Project',
    client: 'Newlife SDA Nairobi',
    category: 'Payments Platform',
    summary:
      'Pledge capture and contribution tracking for a church building fund, with M-Pesa payments.',
    problem:
      'A church running a multi-year building fund campaign was tracking pledges and contributions by hand. Members had no way to see campaign progress or check their own pledge balance, and the committee had no reliable reconciliation between money received and pledges made.',
    approach:
      'A production web platform, not a static campaign page. Pledges accumulate against a phone number so one person holds one reference and one QR code across multiple commitments, with bot protection auto-approving smaller pledges and routing larger ones to committee review. Contributions arrive through Paybill and bank transfer and are recorded in an admin portal with duplicate detection, then allocated against pledges in transactional operations with row-level locking, auto-fulfilment and reversal-based corrections. Administration is role-separated across viewer, treasurer and admin with two-factor authentication and a full audit trail on every action. Members look up their own balance by reference or phone. A nightly snapshot job feeds progress charts, run-rate analysis and forecasting.',
    outcome:
      'The committee reconciles contributions against pledges in one system with a complete audit trail, and members see live campaign progress and their own balance without contacting anyone.',
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Drizzle ORM',
      'Neon Postgres',
      'Better Auth',
      'Tailwind CSS',
      'Recharts',
      'Vercel',
    ],
    status: 'In production',
    published: true,
    hasDetail: true,
  },
];

export const publishedProjects = portfolioProjects.filter((project) => project.published);

export const detailProjects = publishedProjects.filter((project) => project.hasDetail);

export function getDetailProject(slug: string) {
  return detailProjects.find((project) => project.slug === slug);
}

export const portfolioEmpty = {
  heading: 'Case studies coming soon',
  line: 'Project write-ups are being prepared and will be published here shortly.',
};

export const portfolioSeo = {
  title: 'Our Work',
  description:
    'Case studies from Silvacal Technologies: operations platforms, event ticketing and web systems built for organisations in Kenya.',
};
