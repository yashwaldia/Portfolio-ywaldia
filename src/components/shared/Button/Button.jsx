import styles from './Button.module.css';

function Button({ children, variant = 'primary', size = 'md', href, target, onClick, type = 'button', className = '' }) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cls}>
        {children}
      </a>
    );
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

export default Button;
