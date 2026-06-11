export type CtaLink = {
  label: string;
  href: string;
};

export const hero = {
  eyebrow: 'SOFTWARE ENGINEERING. NAIROBI, KENYA',
  headline: 'We Build Software That Moves Business Forward',
  subtext:
    'We design, build, and support web platforms, mobile apps, and M-Pesa-integrated payment systems for businesses across Kenya and East Africa.',
  primaryCta: { label: 'Get a Quote', href: '/contact' } satisfies CtaLink,
  secondaryCta: { label: 'View Our Work', href: '/portfolio' } satisfies CtaLink,
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 6, suffix: '+', label: 'Years Engineering Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export type ServiceIcon =
  | 'code'
  | 'globe'
  | 'smartphone'
  | 'wallet'
  | 'megaphone'
  | 'palette';

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: 'Software Development',
    description:
      'Custom business systems, internal tools, and APIs built around how your team actually works, and written to be maintained long after launch.',
    href: '/services/software-development',
    icon: 'code',
  },
  {
    title: 'Web Development',
    description:
      'Fast, responsive websites and web applications built with modern frameworks, from company sites to client portals and dashboards.',
    href: '/services/web-development',
    icon: 'globe',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform Android and iOS apps built with React Native, so your product reaches users on the devices they already carry.',
    href: '/services/mobile-app-development',
    icon: 'smartphone',
  },
  {
    title: 'M-Pesa Integration',
    description:
      'Daraja API integrations for STK Push, paybills, and till numbers, wired directly into your platform so payments simply work.',
    href: '/services/mpesa-integration',
    icon: 'wallet',
  },
  {
    title: 'Digital Marketing',
    description:
      'SEO, social media management, and ad campaigns built around local search habits and the platforms your customers use daily.',
    href: '/services/digital-marketing',
    icon: 'megaphone',
  },
  {
    title: 'Branding & Identity',
    description:
      'Logos, brand guidelines, and visual identity systems that make a new business look established and trustworthy from day one.',
    href: '/services/branding-identity',
    icon: 'palette',
  },
];

export const aboutStrip = {
  heading: 'Engineering Tomorrow. Empowering Possibilities.',
  paragraphs: [
    'Silvacal Technologies is a software engineering company based in Nairobi, building digital products for businesses across Kenya and East Africa, from early-stage startups to established SMEs.',
    'Our stack is modern: TypeScript, React, and React Native on the front end, PostgreSQL on the back end, paired with deep experience integrating M-Pesa and other local payment rails. We stay on after launch to support what we build.',
  ],
  points: ['Full-stack delivery', 'Local payment expertise', 'Long-term support'],
  cta: { label: 'More About Us', href: '/about' } satisfies CtaLink,
};
