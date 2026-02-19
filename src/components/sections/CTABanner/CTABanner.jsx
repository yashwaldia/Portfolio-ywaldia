import { motion } from 'framer-motion';
import Button from '../../shared/Button/Button';
import styles from './CTABanner.module.css';

function CTABanner() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.text}>
            <h2 className={styles.title}>Got a project in mind?</h2>
            <p className={styles.sub}>Let's build something great together.</p>
          </div>
          <Button href="#contact" variant="white" size="lg">Start a Conversation</Button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;
