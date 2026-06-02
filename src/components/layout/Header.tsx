'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const filteredNav = NAV_ITEMS.filter((item) => item.label !== 'Home');

  // When not scrolled: white text (sits over dark hero images)
  // When scrolled: dark text on white bg
  const textColor = scrolled ? 'text-foreground' : 'text-white';
  const mutedColor = scrolled ? 'text-foreground/80' : 'text-white/80';
  const logoMutedColor = scrolled ? 'text-muted' : 'text-white/50';
  const iconColor = scrolled ? 'text-foreground' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-baseline gap-1.5">
            <span
              className={`text-xl tracking-tight font-bold transition-colors duration-500 ${
                mobileOpen ? 'text-foreground' : textColor
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              DEEROI
            </span>
            <span
              className={`text-[0.65rem] uppercase tracking-[0.25em] font-normal transition-colors duration-500 ${
                mobileOpen ? 'text-muted' : logoMutedColor
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Constructions
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {filteredNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative text-sm tracking-wide transition-colors duration-300 hover:text-accent ${mutedColor}`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide text-white bg-accent hover:bg-accent-hover transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg active:translate-y-0"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`relative z-50 lg:hidden p-2 -mr-2 transition-colors duration-500 ${
                mobileOpen ? 'text-foreground' : iconColor
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">{mobileOpen ? 'Close' : 'Menu'}</span>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-start container-main h-full">
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.href}
                className="overflow-hidden"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-light text-foreground hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="mt-10"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + NAV_ITEMS.length * 0.06}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + NAV_ITEMS.length * 0.06}s`,
            }}
          >
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center px-8 py-3 text-base font-medium tracking-wide text-white bg-accent hover:bg-accent-hover transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get a Quote
            </Link>
          </div>

          <div
            className="mt-auto pb-12"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + (NAV_ITEMS.length + 1) * 0.06}s`,
            }}
          >
            <a
              href={`tel:${SITE.phone}`}
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
