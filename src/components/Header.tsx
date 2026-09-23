'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/site';
import { MenuIcon, CloseIcon } from '@/components/icons';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Mobile menu: move focus in on open, Escape closes and returns focus to the toggle
  useEffect(() => {
    if (!mobileOpen) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMobileOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-silver/30 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Silvacal Technologies home">
          <span className="relative h-12 w-[61px] shrink-0 md:h-16 md:w-[82px]">
            <Image
              src="/brand/favicon.png"
              alt=""
              fill
              sizes="82px"
              className="object-contain mix-blend-multiply brightness-[1.07]"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-navy md:text-xl">
              SILVACAL
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-body/70">
              TECHNOLOGIES
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onKeyDown={(e) => {
                  if (e.key !== 'Escape') return;
                  setOpenMenu(null);
                  menuButtonRefs.current[item.label]?.focus();
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
                }}
              >
                <button
                  ref={(el) => {
                    menuButtonRefs.current[item.label] = el;
                  }}
                  className="font-heading text-sm font-medium text-navy transition hover:text-electric-strong"
                  aria-expanded={openMenu === item.label}
                  aria-controls={`${item.label.toLowerCase()}-menu`}
                  onClick={() => setOpenMenu((open) => (open === item.label ? null : item.label))}
                >
                  {item.label}
                </button>
                {openMenu === item.label && (
                  <div
                    id={`${item.label.toLowerCase()}-menu`}
                    className="absolute left-0 top-full w-64 rounded-2xl border border-silver/30 bg-background py-2 shadow-lg"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body transition hover:text-electric-strong"
                        onClick={() => setOpenMenu(null)}
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
                className="font-heading text-sm font-medium text-navy transition hover:text-electric-strong"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn rounded-2xl bg-electric-strong px-5 py-2 font-heading text-sm font-medium text-white"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy/40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 overflow-y-auto bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="-mr-2 mb-4 ml-auto flex h-11 w-11 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon />
            </button>
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center font-heading text-base font-medium text-navy transition hover:text-electric-strong"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex min-h-11 items-center text-sm text-body transition hover:text-electric-strong"
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
                className="btn mt-4 flex min-h-11 items-center justify-center rounded-2xl bg-electric-strong px-5 py-2 text-center font-heading text-sm font-medium text-white"
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
