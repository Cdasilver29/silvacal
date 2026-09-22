export const siteConfig = {
  name: 'Silvacal Technologies',
  description:
    'Software engineering company in Nairobi, Kenya, building modern web, mobile, and digital solutions.',
  url: 'https://silvacaltechnologies.com',
};

export const contactInfo = {
  location: 'Nairobi, Kenya',
  phones: [
    { display: '+254 729 435 125', e164: '+254729435125' },
    { display: '+254 141 839 855', e164: '+254141839855' },
  ],
  email: 'silvacaltechnologies@gmail.com',
};

export const whatsappLink = `https://wa.me/${contactInfo.phones[0].e164.replace(
  '+',
  ''
)}?text=${encodeURIComponent('Hello Silvacal Technologies, I need a quote')}`;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'M-Pesa Integration', href: '/services/mpesa-integration' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Branding & Identity', href: '/services/branding-identity' },
    ],
  },
  { label: 'Packages', href: '/packages' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export type SocialLink = {
  label: string;
  href: string;
  enabled: boolean;
};

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '', enabled: false },
  { label: 'Instagram', href: '', enabled: false },
  { label: 'LinkedIn', href: '', enabled: false },
  { label: 'X', href: '', enabled: false },
];
