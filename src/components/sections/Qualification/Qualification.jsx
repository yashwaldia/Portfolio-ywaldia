import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import { educationData, workData, certificationsData } from '../../../data/experience';
import styles from './Qualification.module.css';

const TABS = [
  { id: 'work',   label: 'Experience', data: workData },
  { id: 'edu',    label: 'Education',  data: educationData },
  { id: 'certs',  label: 'Certifications', data: certificationsData },
];

function TimelineItem({ item, index }) {
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
    >
      <div className={styles.itemDot} />
      {index < TABS[0].data.length - 1 && <div className={styles.itemLine} />}
      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <span className={styles.itemSub}>{item.company || item.institution || item.issuer}</span>
        <span className={styles.itemPeriod}>{item.period}</span>
        {item.description && <p className={styles.itemDesc}>{item.description}</p>}
      </div>
    </motion.div>
  );
}

function Qualification() {
  const [activeTab, setActiveTab] = useState('work');
  const current = TABS.find(t => t.id === activeTab);

  return (
    <section className={`${styles.qual} section`} id="qualification">
      <div className="container">
        <SectionHeader title="Qualification" subtitle="My Journey" />

        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={[styles.tab, activeTab === tab.id ? styles.tabActive : ''].join(' ')}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.timeline}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {current.data.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Qualification;
