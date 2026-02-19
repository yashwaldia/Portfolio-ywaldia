import { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Experience',    href: '#qualification' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Contact',       href: '#contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <nav className={`${styles.nav} container`}>

        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
          YW<span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop + Mobile Menu */}
        <ul className={[styles.navList, menuOpen ? styles.navListOpen : ''].join(' ')}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={[styles.navLink, activeLink === href ? styles.active : ''].join(' ')}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className={styles.controls}>
          {/* Theme toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          {/* Hamburger */}
          <button
            className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].join(' ')}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

export default Navbar;
