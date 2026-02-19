import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import { skillsData } from '../../../data/skills';
import styles from './Skills.module.css';

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      className={styles.skillItem}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillBar}>
        <motion.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.06, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  const [openId, setOpenId] = useState('backend');

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className="container">
        <SectionHeader title="Skills" subtitle="My Technical Level" />

        <div className={styles.grid}>
          {skillsData.map((cat) => (
            <div key={cat.id} className={styles.card}>
              {/* Accordion header */}
              <button
                className={[styles.cardHeader, openId === cat.id ? styles.cardHeaderOpen : ''].join(' ')}
                onClick={() => setOpenId(openId === cat.id ? null : cat.id)}
                aria-expanded={openId === cat.id}
              >
                <div className={styles.cardMeta}>
                  <h3 className={styles.cardTitle}>{cat.category}</h3>
                  <span className={styles.cardSub}>{cat.subtitle}</span>
                </div>
                <span className={[styles.chevron, openId === cat.id ? styles.chevronOpen : ''].join(' ')}>
                  ›
                </span>
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {openId === cat.id && (
                  <motion.div
                    className={styles.cardBody}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className={styles.skillsList}>
                      {cat.skills.map((s, i) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
