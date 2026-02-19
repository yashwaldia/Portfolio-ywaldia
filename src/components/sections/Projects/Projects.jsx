import { motion } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  const bigRow1  = projectsData.slice(0, 2); // AlzCare, PiHealth
  const bigRow2  = projectsData.slice(2, 4); // VisionFlow, ChartMasterAI
  const smallRow = projectsData.slice(4, 7); // Studio 634, Evis Networx, n8n

  const renderRow = (items, rowClass, cardClass, baseDelay = 0) =>
    items.map((p, i) => (
      <motion.div
        key={p.id}
        className={cardClass}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: baseDelay + i * 0.1 }}
      >
        <ProjectCard project={p} />
      </motion.div>
    ));

  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <SectionHeader title="Projects" subtitle="What I've Built" />

        {/* Row 1 — 2 big cards */}
        <div className={styles.bigRow}>
          {renderRow(bigRow1, styles.bigRow, styles.bigCell, 0)}
        </div>

        {/* Row 2 — 2 big cards */}
        <div className={styles.bigRow}>
          {renderRow(bigRow2, styles.bigRow, styles.bigCell, 0.1)}
        </div>

        {/* Row 3 — 3 small cards */}
        <div className={styles.smallRow}>
          {renderRow(smallRow, styles.smallRow, styles.smallCell, 0.15)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
