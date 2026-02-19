import { FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/yashwaldia',        icon: <FiGithub size={16} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yashwaldia',   icon: <FiLinkedin size={16} /> },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.logo}>YW<span className={styles.dot}>.</span></span>
        <ul className={styles.links}>
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.socials}>
          {SOCIALS.map(s => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Yash Waldia. Built with React.</p>
    </footer>
  );
}

export default Footer;
