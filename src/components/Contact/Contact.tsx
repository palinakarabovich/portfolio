import styles from './contact.module.css'

const Contact = () => {
  return(
    <section className={styles.contact} id={'contacts'}>
      <h2 className={styles.title}>
        Contact me
      </h2>
      <ul className={styles.list}>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='#'>instagram.com</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='#'>instagram.com</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='#'>instagram.com</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='#'>instagram.com</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='#'>instagram.com</a>
      </li>
      </ul>
    </section>
  )
}

export default Contact;