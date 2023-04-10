import styles from './portfolio.module.css'

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.title}>
        Portfolio
      </h2>
      <ul className={styles.list}>
        <li className={styles.node}>
          <h3 className={styles.project}>
            React burger
          </h3>
          <div className={styles.container}>
            <a href='#' className={styles.link}>github</a>
            <a href='#' className={styles.link}>website</a>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloribus tempora recusandae voluptatibus ex sed corrupti ea ullam iste laudantium aut vero, sint totam optio cupiditate accusantium possimus ipsam. Ut?
          </p>
          <ul className={styles.tags}>
            <li className={styles.tag}>JS</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
          </ul>
        </li>
        <li className={styles.node}>
          <h3 className={styles.project}>
            React burger
          </h3>
          <div className={styles.container}>
            <a href='#' className={styles.link}>github</a>
            <a href='#' className={styles.link}>website</a>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloribus tempora recusandae voluptatibus ex sed corrupti ea ullam iste laudantium aut vero, sint totam optio cupiditate accusantium possimus ipsam. Ut?
          </p>
          <ul className={styles.tags}>
            <li className={styles.tag}>JS</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
          </ul>
        </li>
        <li className={styles.node}>
          <h3 className={styles.project}>
            React burger
          </h3>
          <div className={styles.container}>
            <a href='#' className={styles.link}>github</a>
            <a href='#' className={styles.link}>website</a>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloribus tempora recusandae voluptatibus ex sed corrupti ea ullam iste laudantium aut vero, sint totam optio cupiditate accusantium possimus ipsam. Ut?
          </p>
          <ul className={styles.tags}>
            <li className={styles.tag}>JS</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
            <li className={styles.tag}>react</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;