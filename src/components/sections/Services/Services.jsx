import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'api',
    icon: '⚙',
    title: 'REST API Development',
    brief: 'Secure, documented APIs built with Spring Boot.',
    points: [
      'Spring Boot REST controllers with clean layered architecture',
      'JWT-based authentication and role-based authorization',
      'Swagger/OpenAPI documentation out of the box',
      'Input validation, error handling, and response standards',
    ],
  },
  {
    id: 'backend',
    icon: '🛠',
    title: 'Backend Systems',
    brief: 'Robust business logic and database integration.',
    points: [
      'Enterprise-grade MES and workflow automation systems',
      'Hibernate/JPA with SQL Server, MySQL, PostgreSQL',
      'Service-layer business logic and data integrity patterns',
      'Performance optimization and query tuning',
    ],
  },
  {
    id: 'auth',
    icon: '🔐',
    title: 'Auth & Security',
    brief: 'JWT, Spring Security, and access control.',
    points: [
      'Spring Security configuration and filter chains',
      'JWT token generation, validation, and refresh flow',
      'Role-based access control (RBAC) per endpoint',
      'BCrypt password hashing and secure credential handling',
    ],
  },
];

function Services() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className={`${styles.services} section`} id="services">
      <div className="container">
        <SectionHeader title="Services" subtitle="What I Offer" />

        <div className={styles.grid}>
          {SERVICES.map((srv, i) => (
            <motion.div
              key={srv.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.icon}>{srv.icon}</span>
              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <p className={styles.cardBrief}>{srv.brief}</p>
              <button className={styles.viewMore} onClick={() => setActiveModal(srv.id)}>
                View details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal && (() => {
            const srv = SERVICES.find(s => s.id === activeModal);
            return (
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
              >
                <motion.div
                  className={styles.modal}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button className={styles.close} onClick={() => setActiveModal(null)}>✕</button>
                  <span className={styles.modalIcon}>{srv.icon}</span>
                  <h3 className={styles.modalTitle}>{srv.title}</h3>
                  <ul className={styles.points}>
                    {srv.points.map((pt, i) => (
                      <li key={i} className={styles.point}>
                        <span className={styles.pointDot} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Services;
