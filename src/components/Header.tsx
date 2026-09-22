'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/site';
import { MenuIcon, CloseIcon } from '@/components/icons';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-silver/30 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo-full.png"
            alt="Silvacal Technologies"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="font-heading text-sm font-medium text-navy transition hover:text-electric"
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 rounded-2xl border border-silver/30 bg-background py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body transition hover:text-electric"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-medium text-navy transition hover:text-electric"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-2xl bg-electric px-5 py-2 font-heading text-sm font-medium text-white transition hover:scale-105"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy/40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-6 ml-auto block"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon />
            </button>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="font-heading text-base font-medium text-navy transition hover:text-electric"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-body transition hover:text-electric"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-electric px-5 py-2 text-center font-heading text-sm font-medium text-white transition hover:scale-105"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
