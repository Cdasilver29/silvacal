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
      title: 'Software Development Services in Kenya',
      description:
        'Custom business platforms, SaaS products, and systems integration for Kenyan businesses, built with PostgreSQL, TypeScript, and Next.js, with long-term support.',
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
      title: 'M-Pesa Integration Developer in Kenya | Daraja API',
      description:
        "M-Pesa integration developer in Kenya. We build STK Push, C2B, B2C, and reconciliation solutions on Safaricom's Daraja API for websites and platforms.",
    },
  },
  {
    slug: 'data-ai',
    name: 'Data & AI',
    tagline: 'Turn the data your business already has into decisions',
    intro:
      'Most Kenyan businesses sit on valuable data spread across spreadsheets, M-Pesa statements, and their own systems, without a way to see what it is telling them. We consolidate that data, build reporting your team actually uses, and add AI features where they save real time, so decisions rest on current numbers rather than guesswork.',
    offerings: [
      {
        title: 'Business Intelligence Dashboards',
        description:
          "Management reporting built on live data, not month-old spreadsheets someone has to update by hand. Sales, collections, and operations figures refresh automatically, so you see this week's position this week.",
      },
      {
        title: 'Data Pipelines & Warehousing',
        description:
          'We consolidate data from your POS, accounting software, M-Pesa statements, and internal systems into one queryable source. Every report then draws from the same numbers, ending the debate over whose spreadsheet is right.',
      },
      {
        title: 'Data Cleaning & Migration',
        description:
          'We move you off spreadsheets and legacy systems without losing years of history. Duplicates, inconsistent formats, and missing records are resolved and documented before anything goes live.',
      },
      {
        title: 'Analytics & Reporting',
        description:
          'Recurring reports and ad-hoc analysis for the operational and financial decisions in front of you, from branch performance to customer retention. Findings come in plain language with the numbers behind them, not just charts.',
      },
      {
        title: 'AI Integration',
        description:
          'We add LLM-powered features to products you already run: document processing, customer support assistance, and content generation. Each feature is scoped to a measurable task, with human review built in where accuracy matters.',
      },
    ],
    process: [
      {
        title: 'Decision Mapping',
        description:
          'We start with the decisions you need to make and the questions you cannot answer today, so everything we build serves a real use.',
      },
      {
        title: 'Data Assessment',
        description:
          'We map the data you already have, where it lives, and how reliable it is, and tell you plainly what it can and cannot support.',
      },
      {
        title: 'Pipeline & Reporting Build',
        description:
          'We build the pipelines that pull your data together and the reporting layer on top, reviewing early versions with you as we go.',
      },
      {
        title: 'Handover & Training',
        description:
          'We hand over with documentation and train your team to read, trust, and maintain the reports, with support available afterwards.',
      },
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'dbt', 'Looker Studio', 'Power BI', 'Pandas', 'Claude API', 'OpenAI API'],
    faqs: [
      {
        question: 'What does my business need before starting?',
        answer:
          'Any consistent source of data is enough to begin, even spreadsheets kept by hand. If your records are regular and cover a reasonable period, we can work with them, and part of our assessment is telling you honestly where gaps will limit the results.',
      },
      {
        question: 'How is this different from hiring a data analyst?',
        answer:
          'An analyst typically produces reports on request, and when they leave, the work often goes with them. We build systems that keep running: pipelines that refresh on their own and dashboards your team can use without us, with documentation so anyone can maintain them.',
      },
      {
        question: 'Are AI features worth it yet for a small business?',
        answer:
          'Sometimes. They pay off where your team spends hours on repetitive text work, such as reading invoices, drafting routine replies, or summarising documents, and where a person can check the output. They are rarely worth it as a novelty or where every answer must be correct with no review, so we recommend starting with one small, measurable use case before committing further.',
      },
    ],
    seo: {
      title: 'Data Analytics & AI Services in Kenya',
      description:
        'Business intelligence dashboards, data pipelines, and practical AI integration for Kenyan businesses. Turn spreadsheets and M-Pesa data into decisions with Silvacal Technologies.',
    },
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'Websites that load fast, rank well, and turn visitors into customers',
    intro:
      'Whether you need a marketing site that establishes credibility, an online store that takes payments, or a portal your customers log into, we build on modern frameworks that are fast by default and easy to extend. Every site we deliver is responsive, optimised for Kenyan mobile networks, and handed over with documentation your team can actually use.',
    offerings: [
      {
        title: 'Business Websites',
        description:
          'A professional website that explains what you do, builds trust with new customers, and gives you a place to send people instead of a Facebook page. We handle the design, copywriting structure, and a content management setup so you can update text and images yourself.',
      },
      {
        title: 'E-Commerce Websites',
        description:
          'Online stores with product catalogues, cart and checkout flows, and M-Pesa or card payment options built in from the start. We set up order management so you can track sales and stock without juggling spreadsheets.',
      },
      {
        title: 'Custom Web Portals',
        description:
          "Login-protected portals for clients, students, or members — think parent portals, client dashboards, or member-only resource libraries. We build role-based access so different users see only what's relevant to them.",
      },
      {
        title: 'Website Redesign & Rescue',
        description:
          "If your current site is slow, outdated, or was never finished by a previous developer, we audit what exists, salvage what's worth keeping, and rebuild the rest on a stack that's actually maintainable. You keep your domain and content history.",
      },
      {
        title: 'Performance & SEO Optimisation',
        description:
          "We tune page load speed, image sizes, and code structure so your site scores well on Google's Core Web Vitals, and set up on-page SEO basics — meta tags, sitemaps, and structured data — so search engines can find and rank you.",
      },
    ],
    process: [
      {
        title: 'Discovery & Sitemap',
        description:
          'We map out the pages, content, and user journeys your site needs based on your goals and audience.',
      },
      {
        title: 'Design & Content',
        description:
          'We design page layouts in your brand colours and work with you to finalise copy and imagery before development begins.',
      },
      {
        title: 'Build & Launch',
        description:
          'We build the site using Next.js for fast page loads, test across devices, and launch on your domain with SSL configured.',
      },
      {
        title: 'Post-Launch Support',
        description:
          'We monitor performance after launch and remain available for content updates, new pages, or feature additions.',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel'],
    faqs: [
      {
        question: 'What determines the cost of a website?',
        answer:
          'Cost depends mainly on the number of unique page designs, whether you need e-commerce or portal functionality, and how much content needs to be written or migrated. A simple business website costs significantly less than a store with dozens of products or a portal with user accounts — we give you a fixed quote after a short scoping call.',
      },
      {
        question: 'How long does a website project take?',
        answer:
          'A standard business website typically takes 2 to 4 weeks from content sign-off to launch. E-commerce sites and custom portals usually take 4 to 8 weeks depending on the number of features and integrations involved.',
      },
      {
        question: 'Will we be able to update the content ourselves?',
        answer:
          'Yes. We set up a content management system appropriate to your site so you can edit text, swap images, and add blog posts or products without needing a developer. We also provide a short walkthrough so your team is comfortable using it from day one.',
      },
    ],
    seo: {
      title: 'Web Design Company in Nairobi, Kenya',
      description:
        'Silvacal Technologies is a web design company in Nairobi building business websites, e-commerce stores, and web portals with Next.js. Fast and SEO-ready.',
    },
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    tagline: 'One codebase, native apps for Android and iOS',
    intro:
      'We build cross-platform mobile apps with React Native and Expo, so your product runs natively on both Android and iOS from a single codebase. For the Kenyan market, where most users are on Android, this means you reach the widest audience possible without doubling your development cost or maintaining two separate teams.',
    offerings: [
      {
        title: 'Consumer Apps',
        description:
          'Apps your customers download to browse, book, or buy — built with the smooth animations and offline-friendly behaviour users expect from apps on the Play Store and App Store. We design for low-end Android devices as well as newer phones.',
      },
      {
        title: 'Business & Operations Apps',
        description:
          'Internal apps for field teams, drivers, or sales agents to log activity, capture data, and sync with your main system. These apps replace paper forms and WhatsApp groups with structured data your office can actually use.',
      },
      {
        title: 'App Store Deployment (Play Store & App Store)',
        description:
          "We handle developer account setup, app store listings, screenshots, and the submission and review process for both Google Play and Apple's App Store. We also manage updates and version releases after launch.",
      },
      {
        title: 'Offline-Capable Apps',
        description:
          "For users with unreliable connectivity, we build apps that store data locally and sync automatically once a connection is available. This is essential for field agents, rural users, and anyone who can't depend on constant data.",
      },
      {
        title: 'Push Notifications & SMS Integration',
        description:
          "We set up push notifications for order updates, reminders, and announcements, and integrate SMS gateways for users who don't have data or haven't installed the app yet. Both channels can be triggered from the same backend events.",
      },
    ],
    process: [
      {
        title: 'Discovery & Platform Strategy',
        description:
          'We confirm whether you need Android only, iOS only, or both, and define the core screens and features for your first release.',
      },
      {
        title: 'UI Design & Prototyping',
        description:
          "We design the app's screens and navigation flow and walk you through a clickable prototype before development starts.",
      },
      {
        title: 'Development & Device Testing',
        description:
          'We build with React Native and Expo and test on a range of physical Android and iOS devices to catch issues before release.',
      },
      {
        title: 'Store Submission & Support',
        description:
          'We submit the app to the relevant app stores, handle review feedback, and remain available for updates and bug fixes after launch.',
      },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    faqs: [
      {
        question: 'Should we build for Android first, or both platforms at once?',
        answer:
          'For most Kenyan businesses, we recommend launching on Android first since it represents the large majority of smartphones in the local market, then adding iOS once the app is validated. Because we build with React Native, adding iOS later reuses almost all of the existing code rather than starting over.',
      },
      {
        question: 'Is cross-platform development cheaper than building separate native apps?',
        answer:
          "Yes, significantly. Building separate native apps for Android and iOS roughly doubles development and maintenance cost since you're maintaining two codebases. React Native lets us share around 90% of the code between platforms, which keeps both initial cost and future updates lower.",
      },
      {
        question: 'What happens after the app is published?',
        answer:
          'We offer maintenance plans that cover bug fixes, OS compatibility updates, and minor feature additions, since both Android and iOS regularly require updates to stay compatible. We also handle app store account management so your listing stays active and up to date.',
      },
    ],
    seo: {
      title: 'Mobile App Development Kenya | React Native & Expo',
      description:
        'Cross-platform Android and iOS apps built with React Native and Expo. Consumer apps, business operations apps, and offline-capable apps for Kenyan businesses.',
    },
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'Get found on Google, get noticed on social, get replies on WhatsApp',
    intro:
      "Having a great website or app means little if customers can't find it. We run digital marketing built around how Kenyans actually search, scroll, and shop — local SEO, social media management, paid ads, and WhatsApp Business setup that turns chats into sales.",
    offerings: [
      {
        title: 'Search Engine Optimisation (SEO)',
        description:
          "We optimise your website's content, structure, and technical setup so it ranks for the searches your customers are actually making, including local searches like 'near me'. This includes keyword research, on-page fixes, and ongoing content recommendations.",
      },
      {
        title: 'Social Media Marketing',
        description:
          'We plan and post content for Facebook, Instagram, and TikTok that fits your brand and speaks to your audience, and manage comments and messages so customer questions get answered. Content is scheduled around what performs best for your industry.',
      },
      {
        title: 'Google Ads Campaigns',
        description:
          'We set up and manage Google Search and Display ad campaigns targeted at the locations and search terms most relevant to your business, with budgets you control. We monitor performance weekly and adjust targeting to reduce wasted spend.',
      },
      {
        title: 'WhatsApp Business API Setup',
        description:
          'We set up WhatsApp Business with catalogues, automated greetings, and quick-reply templates so customers can browse and order directly in chat. For higher-volume businesses, we integrate the WhatsApp Business API with your existing systems.',
      },
      {
        title: 'Content & Analytics Reporting',
        description:
          "We track website traffic, ad performance, and social engagement in a single monthly report written in plain language, not just numbers. Each report includes what worked, what didn't, and what we're adjusting next.",
      },
    ],
    process: [
      {
        title: 'Audit & Strategy',
        description:
          'We review your current website, social presence, and competitors to identify the highest-impact opportunities for your budget.',
      },
      {
        title: 'Setup & Foundations',
        description:
          'We set up tracking, ad accounts, and social profiles correctly so every campaign from day one is measurable.',
      },
      {
        title: 'Campaign Execution',
        description:
          'We run the agreed mix of SEO, social, ads, and WhatsApp activity on a weekly content and posting schedule.',
      },
      {
        title: 'Reporting & Optimisation',
        description:
          "We review results monthly, report back in plain language, and reallocate budget toward what's driving results.",
      },
    ],
    technologies: ['Google Analytics', 'Google Search Console', 'Google Ads', 'Meta Business Suite', 'WhatsApp Business API', 'Canva'],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'SEO is a gradual process — most businesses start seeing measurable improvements in search rankings and traffic within 3 to 6 months, with continued growth after that. Paid ads and social media can drive traffic immediately while SEO builds in the background.',
      },
      {
        question: 'How much should we budget for digital marketing?',
        answer:
          'This depends on your goals and how competitive your industry is, but most small to medium Kenyan businesses start with a combined budget of KES 30,000 to 80,000 per month covering our management fee and ad spend. We recommend starting with one or two channels and expanding once you see what is working.',
      },
      {
        question: 'What kind of reporting do we get?',
        answer:
          "You receive a monthly report covering website traffic, ad performance, and social media growth, written in plain language with clear takeaways rather than raw data dumps. We're also available for a monthly call to walk through results if you'd like.",
      },
    ],
    seo: {
      title: 'Digital Marketing Services Kenya | SEO, Ads & WhatsApp',
      description:
        'SEO, social media management, Google Ads, and WhatsApp Business setup for Kenyan businesses in Nairobi. Local search marketing with monthly reporting.',
    },
  },
  {
    slug: 'branding-identity',
    name: 'Branding & Identity',
    tagline: 'Visual identity that makes a new business look established from day one',
    intro:
      "First impressions happen before a customer ever speaks to you — on your logo, your business card, your social media page. We design visual identities that look professional and consistent everywhere your brand shows up, whether you're launching a new business or refreshing one that's outgrown its current look.",
    offerings: [
      {
        title: 'Logo & Visual Identity',
        description:
          'We design a logo along with a core colour palette and typography that reflects your business and works across digital and print. You receive multiple concepts before we refine the chosen direction into final files.',
      },
      {
        title: 'Brand Guidelines Documents',
        description:
          "A reference document showing how your logo, colours, and fonts should be used — including spacing rules, do's and don'ts, and examples — so anyone designing for your business stays consistent. This is especially useful once you start working with multiple designers or agencies.",
      },
      {
        title: 'Company Profile Design',
        description:
          'A professionally designed company profile covering your services, team, and track record, formatted for sharing with clients, investors, or partners. We write the structure with you and design it to match your brand identity.',
      },
      {
        title: 'Business Cards & Letterheads',
        description:
          "Print-ready designs for business cards, letterheads, and invoice templates that match your brand guidelines, delivered in formats ready to send to any printer in Kenya. We can also recommend local printers we've worked with.",
      },
      {
        title: 'Social Media Kits',
        description:
          'A set of templates for profile images, cover photos, and post layouts for Facebook, Instagram, and WhatsApp, so your social presence looks consistent without designing each post from scratch. Templates are delivered editable so your team can update them.',
      },
    ],
    process: [
      {
        title: 'Discovery & Direction',
        description:
          'We discuss your business, audience, and any existing branding to agree on a creative direction before design begins.',
      },
      {
        title: 'Concept Design',
        description:
          'We present two to three logo and identity concepts based on the agreed direction for you to react to.',
      },
      {
        title: 'Refinement',
        description:
          'We refine the chosen concept based on your feedback until the identity is ready for final delivery.',
      },
      {
        title: 'Final Delivery & Files',
        description:
          'We deliver final files in all formats you need, along with guidelines for using them consistently.',
      },
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva'],
    faqs: [
      {
        question: 'What file formats do we receive?',
        answer:
          'You receive your logo in vector formats (AI, EPS, SVG) for scaling to any size, plus PNG and JPG versions for everyday digital use. Brand guideline documents and collateral are delivered as print-ready PDFs alongside editable source files.',
      },
      {
        question: 'How many revision rounds are included?',
        answer:
          "Our standard logo and identity packages include up to two rounds of revisions on the chosen concept, which is enough for most projects to reach a result you're happy with. Additional rounds or entirely new concepts beyond the initial set can be added if needed.",
      },
      {
        question: 'How long does a branding project take?',
        answer:
          'A logo and core identity typically takes 1 to 2 weeks from discovery to final files. Adding a full brand guidelines document, company profile, and collateral set usually extends this to 3 to 4 weeks.',
      },
    ],
    seo: {
      title: 'Branding & Identity Design Kenya | Logo, Guidelines & Collateral',
      description:
        'Logo design, brand guidelines, company profiles, and marketing collateral for Kenyan businesses. Professional visual identity from Silvacal Technologies.',
    },
  },
];

export type ServiceOption = Pick<Service, 'slug' | 'name'>;

// Lightweight list for client components; pass it as a prop from a server
// component so the full service content stays out of the client bundle.
export const serviceOptions: ServiceOption[] = services.map(({ slug, name }) => ({ slug, name }));

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
