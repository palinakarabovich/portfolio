import React from 'react';
import styles from './header.module.css';

const Header = () => {

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
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

        <ul className={styles.menu} onClick={() => setMenuOpen(true)}>
          <li className={styles.stroke}></li>
          <li className={styles.stroke}></li>
          <li className={styles.stroke}></li>
        </ul>
        {
          isMenuOpen
          && (
            <nav className={styles.layout}>
              <ul className={styles.burgerList}>
                <li className={styles.burgerNode}>
                  <a href='#about' className={styles.link} onClick={closeMenu}>About me</a>
                </li>
                <li className={styles.burgerNode}>
                  <a href='#education' className={styles.link} onClick={closeMenu}>Education and work</a>
                </li>
                <li className={styles.burgerNode}>
                  <a href='#portfolio' className={styles.link} onClick={closeMenu}>Portfolio</a>
                </li>
                <li className={styles.burgerNode}>
                  <a href='#contacts' className={styles.link} onClick={closeMenu}>Contacts</a>
                </li>
              </ul>
              <div className={styles.closeIcon} onClick={closeMenu}>
                <div className={styles.strokeCloseFirst}></div>
                <div className={styles.strokeCloseSecond}></div>
              </div>
            </nav>
          )
        }
      </div>
    </header>
  )
}

export default Header;