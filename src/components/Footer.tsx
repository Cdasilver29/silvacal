import Image from 'next/image';
import Link from 'next/link';
import { contactInfo, navItems, socialLinks, siteConfig } from '@/data/site';
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/icons';

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedInIcon />,
  X: <XIcon />,
};

const servicesItem = navItems.find((item) => item.label === 'Services');
const quickLinks = navItems.filter((item) => !item.children);
const enabledSocialLinks = socialLinks.filter((social) => social.enabled);

export default function Footer() {
  return (
    <footer className="bg-navy text-silver">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <span className="relative h-12 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image src="/brand/favicon.png" alt="" fill sizes="56px" className="object-contain p-1" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold tracking-tight text-white">SILVACAL</span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-silver/80">
                TECHNOLOGIES
              </span>
            </span>
          </Link>
          <p className="text-sm text-silver/80">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {servicesItem?.children?.map((child) => (
              <li key={child.href}>
                <Link href={child.href} className="text-sm link-draw hover:text-electric">
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm link-draw hover:text-electric">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>{contactInfo.location}</li>
            {contactInfo.phones.map((phone) => (
              <li key={phone.e164}>
                <a href={`tel:${phone.e164}`} className="link-draw hover:text-electric">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contactInfo.email}`} className="link-draw hover:text-electric">
                {contactInfo.email}
              </a>
            </li>
          </ul>
          {enabledSocialLinks.length > 0 && (
            <div className="mt-4 flex gap-4">
              {enabledSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition hover:text-electric"
                >
                  {socialIcons[social.label]}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-silver/20 px-4 py-6 text-center text-sm text-silver/70">
        <p>© 2026 Silvacal Technologies. All rights reserved</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="link-draw hover:text-electric">
            Privacy Policy
          </Link>
          <Link href="/terms" className="link-draw hover:text-electric">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
