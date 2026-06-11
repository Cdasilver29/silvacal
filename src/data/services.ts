export type ServiceOffering = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  offerings: ServiceOffering[];
  process: ProcessStep[];
  technologies: string[];
  faqs: ServiceFaq[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: 'software-development',
    name: 'Software Development',
    tagline: 'Custom platforms built around how your business actually runs',
    intro:
      "We design and build custom software for Kenyan businesses that have outgrown spreadsheets, paper records, and one-size-fits-all tools. From internal operations systems to full SaaS products, we write code that's documented, tested, and built to be maintained long after launch.",
    offerings: [
      {
        title: 'Custom Business Platforms',
        description:
          'We build internal systems for operations unique to your business — student management for training institutes, fleet tracking for logistics firms, booking systems for service providers. Each platform is designed around your existing workflows, not the other way around.',
      },
      {
        title: 'SaaS Product Development',
        description:
          'From idea to a multi-tenant product your customers can sign up for and pay for online. We handle the architecture, billing, and admin tooling so you can focus on growing your user base.',
      },
      {
        title: 'Systems Integration & APIs',
        description:
          'We connect the tools you already use — accounting software, SMS gateways, payment providers, government portals — through well-documented REST APIs. No more re-typing the same data into three different systems.',
      },
      {
        title: 'Database Design & Architecture',
        description:
          'A poorly designed database slows everything down as your data grows. We design normalised PostgreSQL schemas with proper indexing and backups from day one, so reports stay fast even at thousands of records.',
      },
      {
        title: 'Legacy System Modernisation',
        description:
          'Running on an old Access database, an unsupported PHP site, or a system the original developer disappeared with? We audit what is there, migrate your data safely, and rebuild on a modern stack you can extend.',
      },
    ],
    process: [
      {
        title: 'Discovery & Scoping',
        description:
          'We sit down with your team to map current workflows, pain points, and must-have features before writing a line of code.',
      },
      {
        title: 'Design & Architecture',
        description:
          'We plan the database structure, user roles, and screen flows, and share wireframes for sign-off before development starts.',
      },
      {
        title: 'Development & Testing',
        description:
          'We build in two-week milestones with regular demos, so you see progress and can adjust direction early.',
      },
      {
        title: 'Deployment & Support',
        description:
          'We deploy to production, train your team, and stay on for fixes and feature requests after launch.',
      },
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'REST APIs', 'Docker'],
    faqs: [
      {
        question: 'How long does a custom platform take to build?',
        answer:
          'Most internal operations platforms take 6 to 12 weeks depending on scope, while larger SaaS products with billing and multi-tenant features typically run 3 to 6 months. We break the build into milestones so you start using parts of the system before the full project is complete.',
      },
      {
        question: 'Can you work with our existing systems and data?',
        answer:
          'Yes. We regularly migrate data from spreadsheets, Access databases, and older web systems, and we build APIs to connect with accounting tools, SMS providers, and payment platforms you already rely on.',
      },
      {
        question: 'What happens after the platform goes live?',
        answer:
          "We offer ongoing support plans that cover bug fixes, server monitoring, and small feature additions, billed monthly or per request. You also get full access to your codebase — there's no vendor lock-in.",
      },
    ],
    seo: {
      title: 'Software Development Services in Kenya | Silvacal Technologies',
      description:
        'Custom business platforms, SaaS products, and systems integration built for Kenyan businesses. PostgreSQL, TypeScript, and Next.js development with long-term support.',
    },
  },
  {
    slug: 'mpesa-integration',
    name: 'M-Pesa Integration',
    tagline: 'Daraja API integration done right — STK Push, C2B, B2C, and reconciliation',
    intro:
      "M-Pesa is how most of your customers want to pay, and getting the integration wrong means failed transactions, support calls, and manual reconciliation at the end of every day. We've built Daraja API integrations for paybills, till numbers, and B2C disbursements that handle callbacks, retries, and edge cases correctly the first time.",
    offerings: [
      {
        title: 'STK Push (Lipa Na M-Pesa Online)',
        description:
          'Customers enter their phone number on your site or app and receive an M-Pesa prompt directly on their phone. We handle the request, the callback, and the timeout cases so a customer never pays without your system knowing.',
      },
      {
        title: 'C2B Integration (Paybill & Till)',
        description:
          "We register your paybill or till number's confirmation and validation URLs with Safaricom and build the handlers that record incoming payments automatically. Your team stops manually checking M-Pesa SMS messages against orders.",
      },
      {
        title: 'B2C Disbursements',
        description:
          'For platforms that pay out to users — refunds, commissions, salaries, or winnings — we integrate Business to Customer payments with proper authorisation, queue management, and result handling so payouts are reliable and auditable.',
      },
      {
        title: 'Transaction Reconciliation',
        description:
          'We build reconciliation reports that match M-Pesa statements against your internal records, flagging discrepancies automatically. No more spending hours at month-end comparing spreadsheets line by line.',
      },
      {
        title: 'Idempotent Payment Handling & Webhooks',
        description:
          'Safaricom can send the same callback more than once, and networks can retry requests. We design payment handling so duplicate callbacks never double-credit an account, and set up webhooks that notify your systems the moment a payment lands.',
      },
    ],
    process: [
      {
        title: 'Requirements & Safaricom Setup',
        description:
          'We confirm your paybill or till type, help you register on the Daraja portal if needed, and define exactly which payment flows your business requires.',
      },
      {
        title: 'Sandbox Integration',
        description:
          "We build and test the full integration against Safaricom's sandbox environment, covering successful payments, failures, and timeouts.",
      },
      {
        title: 'Go-Live with Production Credentials',
        description:
          'Once testing passes, we switch to your live shortcode and credentials and run controlled real-money test transactions before full rollout.',
      },
      {
        title: 'Monitoring & Reconciliation Support',
        description:
          'We set up logging and alerts for failed or delayed callbacks and remain available to support reconciliation as transaction volume grows.',
      },
    ],
    technologies: ['Daraja API', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Webhooks'],
    faqs: [
      {
        question: 'How long does M-Pesa integration take?',
        answer:
          'A standard STK Push integration for an existing website typically takes 1 to 2 weeks, including sandbox testing and go-live. C2B and B2C integrations with reconciliation reporting usually take 2 to 4 weeks depending on how many payment flows are involved.',
      },
      {
        question: 'Can this work with our existing website or system?',
        answer:
          'Yes. M-Pesa integration is almost always added to a system that already exists — we build the payment endpoints and callback handlers as an addition to your current site, app, or backend without requiring a rebuild.',
      },
      {
        question: 'What do we need from Safaricom to get started?',
        answer:
          "You'll need a registered paybill or till number and an account on the Safaricom Daraja developer portal where you create an app to get your consumer key and secret. If you don't have these yet, we can guide you through registration before development begins.",
      },
    ],
    seo: {
      title: 'M-Pesa Daraja API Integration Kenya | Silvacal Technologies',
      description:
        'STK Push, C2B, B2C, and reconciliation integrations using Safaricom\'s Daraja API. Reliable M-Pesa payments for Kenyan websites and platforms, built and supported by Silvacal Technologies.',
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
