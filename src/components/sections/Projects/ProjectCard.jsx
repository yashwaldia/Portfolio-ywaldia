import { useState } from 'react';
import { FiPlay, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Tag from '../../shared/Tag/Tag';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  const { title, description, image, type, tags, liveUrl, repoUrl, featured } = project;
  const [expanded, setExpanded] = useState(false);

  const handleMore = (e) => {
    e.stopPropagation();
    setExpanded(prev => !prev);
  };

  return (
    <div className={[styles.card, featured ? styles.cardFeatured : ''].join(' ')}>

      {/* Screenshot */}
      <div className={styles.cardImg}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      {/* Overlay */}
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>

          {/* 1 — Type tag */}
          <span className={styles.typeTag}>{type}</span>

          {/* 2 — Title */}
          <h3 className={styles.cardTitle}>{title}</h3>

          {/* 3 — Description + More inline */}
          <div className={styles.descRow}>
            <p className={[
              styles.cardDesc,
              expanded ? styles.cardDescExpanded : ''
            ].join(' ')}>
              {description}
            </p>
            <button
              className={styles.moreBtn}
              onClick={handleMore}
              aria-label={expanded ? 'Show less' : 'Show more'}
            >
              {expanded
                ? <><FiChevronUp size={10} style={{ marginRight: 2 }} />Less</>
                : <><FiChevronDown size={10} style={{ marginRight: 2 }} />More</>
              }
            </button>
          </div>

          {/* 4 — Tags */}
          <div className={[
            styles.tags,
            expanded ? styles.tagsExpanded : ''
          ].join(' ')}>
            {tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>

          {/* 5 — Links */}
          <div className={styles.links}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <FiPlay size={12} style={{ marginRight: 5 }} />
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkGhost}
              >
                <FiGithub size={12} style={{ marginRight: 5 }} />
                GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
