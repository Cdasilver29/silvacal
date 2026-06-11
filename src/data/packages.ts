export const packagesHero = {
  title: 'Packages & Pricing',
  supportingLine:
    "All prices below are starting points for a typical project of that scope. Every business is different, so we provide a custom, no-obligation quote once we understand what you need.",
};

export type PackageTier = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export type PackageGroup = {
  heading: string;
  tiers: PackageTier[];
};

export const packageGroups: PackageGroup[] = [
  {
    heading: 'Website Design',
    tiers: [
      {
        name: 'Starter',
        price: 'From KES 25,000',
        features: [
          'Up to 5 pages',
          'Mobile-responsive design',
          'Contact form',
          'Basic on-page SEO',
          '2 rounds of revisions',
        ],
      },
      {
        name: 'Business',
        price: 'From KES 60,000',
        popular: true,
        features: [
          'Up to 10 pages',
          'CMS or admin panel',
          'WhatsApp integration',
          'Google Business Profile setup',
          '3 rounds of revisions',
        ],
      },
      {
        name: 'E-Commerce',
        price: 'From KES 120,000',
        features: [
          'Product catalogue',
          'Cart and checkout',
          'M-Pesa integration',
          'Order management dashboard',
          'Team training included',
        ],
      },
    ],
  },
  {
    heading: 'Mobile Apps',
    tiers: [
      {
        name: 'Single Platform',
        price: 'From KES 150,000',
        features: [
          'Android or iOS app',
          'Up to 6 screens',
          'Backend API integration',
          '1 month of post-launch support',
        ],
      },
      {
        name: 'Cross-Platform',
        price: 'From KES 250,000',
        popular: true,
        features: [
          'Android and iOS from one codebase',
          'Up to 10 screens',
          'App store deployment (Play Store & App Store)',
          '3 months of post-launch support',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom Quote',
        features: [
          'Unlimited screens and flows',
          'Custom backend and integrations',
          'Offline-capable architecture',
          'Dedicated support plan',
        ],
      },
    ],
  },
  {
    heading: 'M-Pesa Integration',
    tiers: [
      {
        name: 'STK Push Add-On',
        price: 'From KES 30,000',
        features: [
          'STK Push for an existing website or app',
          'Sandbox and production setup',
          'Callback and webhook handling',
          'Typically 1-2 weeks to deliver',
        ],
      },
      {
        name: 'Full Payment Suite',
        price: 'From KES 80,000',
        features: [
          'C2B and B2C integration',
          'Transaction reconciliation dashboard',
          'Callback and webhook handling',
          'Idempotent payment processing',
        ],
      },
    ],
  },
  {
    heading: 'Digital Marketing (Monthly Plans)',
    tiers: [
      {
        name: 'Essentials',
        price: 'From KES 15,000/mo',
        features: ['Social media management', '8 posts per month', 'Monthly performance report'],
      },
      {
        name: 'Growth',
        price: 'From KES 35,000/mo',
        features: [
          'Everything in Essentials',
          'SEO optimisation',
          'Google Ads campaign management',
          'Bi-weekly reporting',
        ],
      },
    ],
  },
];

export const packagesSeo = {
  title: 'Packages & Pricing',
  description:
    'Transparent starting prices for website design, mobile apps, M-Pesa integration, and digital marketing from Silvacal Technologies. Free custom quotes for every project.',
};

export type PackageFaq = {
  question: string;
  answer: string;
};

export const packagesFaqs: PackageFaq[] = [
  {
    question: 'What does "from" pricing mean?',
    answer:
      'The prices shown are starting points for a typical project at that scope. Your final quote depends on the number of pages or screens, integrations, and any custom features you need. We always confirm a fixed price in writing before work begins, so there are no surprises later.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'Most projects follow a 50% deposit to begin work and 50% on delivery. For larger engagements, we can split payments into milestones tied to project phases. Monthly plans, such as digital marketing retainers, are billed at the start of each month.',
  },
  {
    question: 'What is not included in the price?',
    answer:
      'Quoted prices cover our design and development work only. They do not include third-party costs such as web hosting, domain registration, SSL certificates, app store developer accounts, or fees charged by payment providers like M-Pesa. We help you set these up and explain ongoing costs upfront.',
  },
];
