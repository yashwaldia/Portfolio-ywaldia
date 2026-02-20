import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import { skillsData } from '../../../data/skills';
import styles from './Skills.module.css';

/* ── Pill chip — no level, no bar ── */
function SkillPill({ name, index }) {
  return (
    <motion.span
      className={styles.pill}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      {name}
    </motion.span>
  );
}

function Skills() {
  // ✅ 'frontend' opens first — not 'backend'
  const [openId, setOpenId] = useState('frontend');

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className="container">
        <SectionHeader title="Skills" subtitle="Technologies I Work With" />

        <div className={styles.grid}>
          {skillsData.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id} className={[styles.card, isOpen ? styles.cardOpen : ''].join(' ')}>

                {/* Accordion header */}
                <button
                  className={[styles.cardHeader, isOpen ? styles.cardHeaderOpen : ''].join(' ')}
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.cardMeta}>
                    <h3 className={styles.cardTitle}>{cat.category}</h3>
                    <span className={styles.cardSub}>{cat.subtitle}</span>
                  </div>
                  <span className={[styles.chevron, isOpen ? styles.chevronOpen : ''].join(' ')}>
                    ›
                  </span>
                </button>

                {/* Accordion body — pill grid */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.cardBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.pillGrid}>
                        {cat.skills.map((s, i) => (
                          <SkillPill key={s.name} name={s.name} index={i} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
