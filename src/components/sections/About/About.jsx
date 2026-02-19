import { motion } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import Button from '../../shared/Button/Button';
import styles from './About.module.css';
import profileImg from '../../../assets/profile.jpg';

const STATS = [
  { value: '1+',  label: 'Years Experience' },
  { value: '5+',  label: 'Projects Shipped' },
  { value: '4+',  label: 'Certifications' },
];

function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <SectionHeader title="About Me" subtitle="My Introduction" />

        <div className={styles.grid}>

          {/* Image side */}
          <motion.div
            className={styles.imgWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className={styles.imgFrame}>
              <img src={profileImg} alt="Yash Waldia" className={styles.img} />
            </div>
            <div className={styles.imgAccent} />
          </motion.div>

          {/* Content side */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className={styles.description}>
              I'm a <strong>Full-Stack Developer</strong> with a B.Tech in Computer
              Science (AI/ML) from NIET, Greater Noida. I specialize in
              <strong> React.js, TypeScript, and React Native</strong> — building
              everything from AI voice assistants to cross-platform mobile apps.
              I've worked with global teams at Outlier AI (Scale AI) and delivered
              freelance projects for clients across web and mobile. I care about
              clean UI, solid architecture, and shipping things that actually work.
            </p>

            <div className={styles.stats}>
              {STATS.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Button
                href="/assets/pdf/yash-waldia-resume.pdf"
                variant="primary"
                target="_blank"
              >
                Download CV
              </Button>
              <Button href="#contact" variant="outline">Let's Talk</Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
