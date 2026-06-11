export const portfolioHero = {
  title: 'Our Work',
  supportingLine:
    "A look at the kind of platforms, stores, and websites we build for businesses across Kenya. Every project starts with understanding how a business actually operates, then building software around that.",
};

export type PortfolioProject = {
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  initials: string;
  gradient: string;
};

// The entries below are illustrative placeholders representing the type of work
// Silvacal Technologies takes on. Replace with real client projects as they are
// completed and cleared for public display.
export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Multi-Branch Driving School Platform',
    category: 'Custom Software',
    summary:
      'An operations platform for a driving school with multiple branches across Nairobi, replacing paper registers and spreadsheets with a single system for staff and students.',
    problem:
      'Each branch tracked enrollments, lesson schedules, and fee payments separately, making it hard for management to see overall performance or reconcile payments.',
    solution:
      'We built a multi-branch management system with role-based dashboards, student enrollment and progress tracking, and M-Pesa STK Push for lesson fee payments, all reporting into one admin view.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'M-Pesa Daraja API'],
    initials: 'DS',
    gradient: 'from-navy via-electric/70 to-navy',
  },
  {
    name: 'Online Store for a Nairobi Retailer',
    category: 'E-Commerce',
    summary:
      'A product catalogue and online checkout for a retail business looking to sell beyond their physical shop, with mobile money built in from day one.',
    problem:
      'The business was taking orders manually over WhatsApp and phone calls, leading to lost orders, slow responses, and no record of sales trends.',
    solution:
      'We delivered an online store with a searchable product catalogue, cart and checkout flow, and M-Pesa STK Push so customers can pay instantly from their phones, plus an order dashboard for the team.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'M-Pesa STK Push'],
    initials: 'RT',
    gradient: 'from-electric/70 via-navy to-navy',
  },
  {
    name: 'Community Events & Ticketing Platform',
    category: 'Web Platform',
    summary:
      'A registration and ticketing platform for a community organisation running recurring events, handling sign-ups, payments, and attendee communication in one place.',
    problem:
      'Event registration was managed through Google Forms and manual M-Pesa confirmations, which made it difficult to track who had paid and to remind attendees ahead of events.',
    solution:
      'We built an events platform with online registration, ticket sales, and automated SMS confirmations and reminders, giving organisers a live view of attendance and revenue per event.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'SMS Gateway'],
    initials: 'CE',
    gradient: 'from-navy via-electric/50 to-electric/20',
  },
  {
    name: 'Booking-Enabled Website for a Professional Services Firm',
    category: 'Business Website',
    summary:
      'A professional website for a services firm that lets clients learn about the practice and book consultations directly online instead of calling to check availability.',
    problem:
      'The firm relied on phone calls and WhatsApp to schedule appointments, which often led to double bookings and time lost confirming availability back and forth.',
    solution:
      'We designed a fast, modern website with service pages and an integrated booking calendar, so clients can pick an available slot themselves and the team gets automatic notifications of new bookings.',
    stack: ['Next.js', 'Tailwind CSS', 'Booking Calendar', 'CMS'],
    initials: 'PS',
    gradient: 'from-electric/40 via-navy to-navy',
  },
];

export const portfolioClosing =
  'Some client work is under NDA. Ask us about relevant experience for your industry.';

export const portfolioSeo = {
  title: 'Our Work',
  description:
    'See the type of custom software, e-commerce stores, and websites Silvacal Technologies builds for businesses in Kenya, from driving school management platforms to M-Pesa-enabled online stores.',
};
