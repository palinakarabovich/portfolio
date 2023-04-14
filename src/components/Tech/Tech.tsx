import styles from './tech.module.css';

const Tech = () => {
  return(
    <section className={styles.tech}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Technologies
        </h2>
        <ul className={styles.list}>
          <li className={styles.node}>HTML</li>
          <li className={styles.node}>CSS</li>
          <li className={styles.node}>JavaScript</li>
          <li className={styles.node}>TypeScript</li>
          <li className={styles.node}>React</li>
          <li className={styles.node}>Redux Tool Kit</li>
          <li className={styles.node}>Node.js</li>
          <li className={styles.node}>Express.js</li>
          <li className={styles.node}>Jest</li>
        </ul>
      </div>
    </section>
  )
}

export default Tech;