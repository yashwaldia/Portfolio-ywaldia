import styles from './Tag.module.css';

function Tag({ label }) {
  return <span className={styles.tag}>{label}</span>;
}

export default Tag;
