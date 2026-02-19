import { motion } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  const featured = projectsData.filter(p => p.featured);
  const rest      = projectsData.filter(p => !p.featured);

  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <SectionHeader title="Projects" subtitle="What I've Built" />

        {/* Featured row */}
        {featured.length > 0 && (
          <div className={styles.featuredRow}>
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Grid row */}
        {rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
