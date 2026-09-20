'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/portfolio', label: 'Enquiry' },
  { href: '/about', label: 'About Me' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin/login', label: 'Admin Login' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label="SM Photography home">
          <span className="brand-mark">
            <img src="/images/IMG_1786.PNG" alt="SM Photography logo" />
          </span>
          <span className="brand-text">SM PHOTOGRAPHY</span>
        </Link>

        <div className="nav-wrap">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>

          <nav aria-label="Main navigation">
            <ul className={`top-nav ${isOpen ? 'is-open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
