import Tag from '../../shared/Tag/Tag';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  const { title, description, image, type, tags, liveUrl, repoUrl, featured } = project;

  return (
    <div className={[styles.card, featured ? styles.cardFeatured : ''].join(' ')}>
      {/* Screenshot — full card background */}
      <div className={styles.cardImg}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      {/* Hover overlay */}
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <span className={styles.typeTag}>{type}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesc}>{description}</p>

          <div className={styles.tags}>
            {tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>

          <div className={styles.links}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                ▶ Live Demo
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkGhost}>
                ⌥ GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
