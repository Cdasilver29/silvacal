export const aboutHero = {
  title: 'About Silvacal Technologies',
  tagline: 'Engineering Tomorrow. Empowering Possibilities.',
};

export const story = {
  paragraphs: [
    'Silvacal Technologies is a software engineering company based in Nairobi, Kenya. We work with businesses across Kenya and East Africa, from early-stage startups to established SMEs, building the digital systems they run on every day.',
    'We design and build web platforms, mobile apps, and payment-integrated systems, with particular depth in M-Pesa Daraja API integrations. Our work spans custom business platforms, e-commerce stores, booking systems, and internal operations tools.',
    'We work in a modern TypeScript stack, React, Next.js, React Native, and PostgreSQL, as a small team of senior engineers rather than a large agency with junior staff and high overheads. That means direct access to the people building your software, and long-term partnerships that continue well past launch.',
  ],
};

export const missionVision = {
  mission:
    'To build reliable, well-engineered software that helps African businesses operate more efficiently, reach more customers, and grow with confidence.',
  vision:
    "To be East Africa's most trusted software engineering partner, known for technical depth, straightforward communication, and systems that keep working long after they're delivered.",
};

export type WhyChooseUsIcon = 'award' | 'payment' | 'tag' | 'clock' | 'shield' | 'layers';

export type WhyChooseUsItem = {
  icon: WhyChooseUsIcon;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: 'award',
    title: 'Senior Engineering Talent',
    description:
      'Every project is built by experienced engineers, not junior staff learning on the job. You get the same people from planning through to launch and beyond.',
  },
  {
    icon: 'payment',
    title: 'Local Payment Expertise',
    description:
      "We've integrated M-Pesa's Daraja API across paybills, till numbers, and B2C disbursements for businesses of every size. Payment integration is one of our core specialities, not an afterthought.",
  },
  {
    icon: 'tag',
    title: 'Transparent Pricing',
    description:
      "Every quote breaks down exactly what you're paying for, with no hidden charges added later. You know the full cost before work begins.",
  },
  {
    icon: 'clock',
    title: 'On-Time Delivery',
    description:
      "We plan projects in clear milestones and communicate early if anything could affect a deadline. Most projects ship on the timeline we quote at the start.",
  },
  {
    icon: 'shield',
    title: 'Long-Term Support',
    description:
      "We don't disappear after launch. Ongoing support plans cover bug fixes, updates, and small feature additions long after your project goes live.",
  },
  {
    icon: 'layers',
    title: 'Modern Technology Stack',
    description:
      "We build on TypeScript, React, Next.js, and PostgreSQL, technologies with strong community support and long shelf lives, so your investment doesn't become outdated software in two years.",
  },
];

export type ValueItem = {
  title: string;
  description: string;
};

export const values: ValueItem[] = [
  {
    title: 'Integrity',
    description: "We give honest assessments, even when the answer is \"this will take longer than you'd like.\"",
  },
  {
    title: 'Craftsmanship',
    description: "We write code we'd be comfortable maintaining ourselves five years from now.",
  },
  {
    title: 'Partnership',
    description: 'We treat your business goals as the measure of success, not just a finished build.',
  },
  {
    title: 'Impact',
    description:
      'We measure our work by whether it makes your business run better, not by how impressive it looks in a portfolio.',
  },
];

export const aboutSeo = {
  title: 'About Us',
  description:
    'Silvacal Technologies is a Nairobi-based software engineering company building web, mobile, and M-Pesa-integrated platforms for businesses across Kenya and East Africa.',
};
