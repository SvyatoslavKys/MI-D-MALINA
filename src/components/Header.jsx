import { useEffect, useState } from 'react';
import { navigation } from '../data/siteData.js';
import Brand from './Brand.jsx';

function Navigation({ className, onNavigate }) {
  return (
    <nav className={className} aria-label="Główna nawigacja">
      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__topbar">
          <Brand />
          <Navigation className="desktop-nav" />

          <button
            className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <Navigation
          className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
          onNavigate={() => setMenuOpen(false)}
        />

        <div className="hero__content">
          <p className="hero__eyebrow">BESKIDZKI WYPOCZYNEK</p>
          <h1>MIÓD MALINA</h1>
          <p className="hero__subtitle">OSADA ISTEBNA</p>
          <a className="button" href="#about">
            ZOBACZ WIĘCEJ
          </a>
        </div>
      </div>
    </header>
  );
}
