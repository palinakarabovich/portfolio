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
          Email
        </p>
        <a className={styles.link} href='mailto:polina.mestovskaya@gmail.com' target={'_blank'}>polina.mestovskaya@gmail.com</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Telephone / WhatsApp
        </p>
        <a className={styles.link} href='tel:+31627962585' target={'_blank'}>+31 6 27962585</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
        Linkedin
        </p>
        <a className={styles.link} href='https://www.linkedin.com/in/palina-karabovich/' target={'_blank'}>Palina Karabovich</a>
      </li>
      <li className={styles.node}>
        <p className={styles.text}>
          Instargam
        </p>
        <a className={styles.link} href='https://www.instagram.com/palina.karabovich/' target={'_blank'}>@palinakarabovich</a>
      </li>
      </ul>
    </section>
  )
}

export default Contact;