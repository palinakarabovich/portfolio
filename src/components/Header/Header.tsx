import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.node}>
            <a href='#about' className={styles.link}>About me</a>
          </li>
          <li className={styles.node}>
            <a href='#education' className={styles.link}>Education and work</a>
          </li>
          <li className={styles.node}>
            <a href='#portfolio' className={styles.link}>Portfolio</a>
          </li>
          <li className={styles.node}>
            <a href='#contacts' className={styles.link}>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;