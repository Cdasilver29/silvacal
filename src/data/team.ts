export const teamHero = {
  title: 'The Team Behind Silvacal',
  supportingLine:
    'Silvacal is led by an engineer who builds every product hands-on, from the database to the screen your customers tap.',
};

export type Credential = {
  title: string;
  institution: string;
};

export const founder = {
  name: 'Calvine Dasilver Mugunda',
  role: 'Founder & Lead Engineer',
  location: 'Nairobi, Kenya',
  photo: '/brand/founder.jpg',
  // PLACEHOLDER: draft bio for review. Replace with the founder's own wording before launch.
  bio: [
    'Calvine came to software through statistics. A degree focused on data and inference led naturally into data engineering, and from there into building the full products that data lives inside.',
    'He spent two years at Dataseal Software building data pipelines and analytics systems: consolidating data from multiple sources, keeping it reliable, and turning it into reporting that teams used to make decisions.',
    'Today he builds production platforms for Kenyan businesses across web, mobile, and payments, bringing the same discipline around data, reliability, and long-term maintenance to every system Silvacal ships.',
  ],
  credentials: [
    { title: 'BSc Statistics', institution: 'Egerton University' },
    { title: 'Software Engineering', institution: 'PLP Academy' },
    { title: 'Data Science', institution: 'Moringa School' },
    { title: 'Generative AI', institution: 'Moringa School' },
    { title: 'Data Protection', institution: 'CIPIT, Strathmore University' },
  ] satisfies Credential[],
};

export type WorkPrinciple = {
  title: string;
  description: string;
  icon: 'user' | 'tag' | 'shield' | 'clock';
};

export const howWeWork = {
  heading: 'How We Work',
  items: [
    {
      title: 'Direct access to your engineer',
      description:
        'You talk to the person writing your code, not an account manager relaying messages, so questions get answered and decisions get made quickly.',
      icon: 'user',
    },
    {
      title: 'Fixed scope, transparent pricing',
      description:
        'We agree on what gets built and what it costs before work starts. If the scope changes, you see the impact on price and timeline first.',
      icon: 'tag',
    },
    {
      title: 'You own the code and the accounts',
      description:
        'Your repository, hosting, domain, and payment accounts are in your name. No lock-in, and nothing held back when the project ends.',
      icon: 'shield',
    },
    {
      title: 'Support continues after launch',
      description:
        'We stay on for fixes, updates, and new features once your product is live, so it keeps working as your business grows.',
      icon: 'clock',
    },
  ] satisfies WorkPrinciple[],
};

export const teamClosing = {
  line: "Silvacal is growing. If you're an engineer, designer, or partner who wants to build for Kenyan businesses, we'd like to hear from you.",
  cta: { label: 'Get in Touch', href: '/contact' },
};

export const teamSeo = {
  title: 'Our Team',
  description:
    'Meet Calvine Dasilver Mugunda, founder and lead engineer of Silvacal Technologies, building web, mobile, and payment platforms for Kenyan businesses.',
};
