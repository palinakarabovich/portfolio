import styles from './education.module.css';

const Education = () => {
  return (
    <section className={styles.education}>
        <h2 className={styles.title}>Education and Work</h2>
        <ul className={styles.list}>
          <li className={styles.node}>
            <p className={styles.year}>
              2016-2020
            </p>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo? 
            </p>
          </li>
          <li className={styles.node}>
            <p className={styles.year}>
              2016-2020
            </p>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo? 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo? 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo? 
            </p>
          </li>
          <li className={styles.node}>
            <p className={styles.year}>
              2016-2020
            </p>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam id sint cupiditate eveniet neque incidunt labore, amet tempore enim vitae laudantium ducimus temporibus explicabo? 
            </p>
          </li>
        </ul>
    </section>
  )
}

export default Education;