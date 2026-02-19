import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </motion.div>
  );
}

export default SectionHeader;
