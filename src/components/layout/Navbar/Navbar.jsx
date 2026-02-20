import { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#qualification' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isMobile,   setIsMobile]   = useState(false); // ✅ track mobile

  // ✅ Detect mobile on mount and resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
        <nav className={`${styles.nav} container`}>

          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
            YW<span className={styles.logoDot}>.</span>
          </a>

          {/* Desktop nav list */}
          <ul className={styles.navList}>
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
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <button
              className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].join(' ')}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>

        </nav>
      </header>

      {/* ✅ Only rendered in the DOM on mobile — never shows on desktop */}
      {isMobile && (
        <div
          className={[styles.mobileOverlay, menuOpen ? styles.mobileOverlayOpen : ''].join(' ')}
          aria-hidden={!menuOpen}
        >
          {/* Top bar — logo + close */}
          <div className={styles.mobileHeader}>
            <a href="#home" className={styles.mobileLogo} onClick={() => handleNavClick('#home')}>
              YW<span className={styles.logoDot}>.</span>
            </a>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <li
                  key={href}
                  className={styles.mobileNavItem}
                  style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
                >
                  <a
                    href={href}
                    className={[styles.mobileNavLink, activeLink === href ? styles.mobileActive : ''].join(' ')}
                    onClick={() => handleNavClick(href)}
                  >
                    <span className={styles.mobileNavNum}>0{i + 1}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer — theme toggle */}
          <div className={styles.mobileFooter}>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <span className={styles.mobileFooterText}>Switch theme</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
