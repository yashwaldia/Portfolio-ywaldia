import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '../../shared/Button/Button';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={`${styles.hero} section`} id="home">
      <div className={`${styles.container} container`}>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.span
            className={styles.greeting}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Yash Waldia
          </motion.h1>

          <motion.h2
            className={styles.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Full-Stack Developer
            <span className={styles.accent}> — React & React Native</span>
          </motion.h2>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I build production-ready web and mobile apps using React, TypeScript,
            and React Native. From AI voice assistants to cross-platform health
            tools — I ship things that actually work.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button href="#projects" variant="primary" size="lg">View My Work</Button>
            <Button href="#contact"  variant="outline" size="lg">Get In Touch</Button>
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://github.com/yashwaldia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yashwaldia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <DotLottieReact
            src="https://lottie.host/5adf4170-74ba-4a08-b3b4-924ecdfc5fde/Ex2lPTYhQ4.lottie"
            loop
            autoplay
            className={styles.lottie}
          />
        </motion.div>

        {/* Scroll indicator */}
        <a href="#about" className={styles.scroll} aria-label="Scroll down">
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </a>

      </div>
    </section>
  );
}

export default Hero;
