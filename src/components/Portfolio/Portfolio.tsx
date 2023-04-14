import styles from './portfolio.module.css'

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id ={'portfolio'}>
      <h2 className={styles.title}>
        Portfolio
      </h2>
      <ul className={styles.list}>
        <li className={styles.node}>
          <h3 className={styles.project}>
            React burger
          </h3>
          <div className={styles.container}>
            <a href='https://github.com/palinakarabovich/react-burger' className={styles.link} target={'_blank'}>github</a>
            <a href='https://palinakarabovich.github.io/react-burger/' className={styles.link} target={'_blank'}>website</a>
          </div>
          <p className={styles.text}>
          This is a burger ordering application that allows you to build your own burgers using the presented ingredients and place order only after authorization. If you forgot your password, you can reset it with the verefication code which will be send to your email. The app also has real-time tracking of all orders that are preparing now. Your orders are saved to personal order history in your profile, where you can also change your email, name and passwords. You can place the ingredients to the burger-constructor using Drag and Drop. The app was designed partially using external ux library.
          </p>
          <p className={styles.remark}>* You can use this data to signin, if don't want to spend time on registration. Login: cat@cat.cat. Password: cat123</p>
          <ul className={styles.tags}>
            <li className={styles.tag}>TypeScript</li>
            <li className={styles.tag}>React</li>
            <li className={styles.tag}>Redux Tool Kit</li>
            <li className={styles.tag}>React d-n-d</li>
            <li className={styles.tag}>Websockets</li>
            <li className={styles.tag}>Jest</li>
            <li className={styles.tag}>Cypress</li>
          </ul>
        </li>
        <li className={styles.node}>
          <h3 className={styles.project}>
            Movies Explorer
          </h3>
          <div className={styles.container}>
            <a href='https://github.com/palinakarabovich/movies-explorer-frontend' className={styles.link} target={'_blank'}>github</a>
            <a href='https://palinakarabovich.github.io/movies-explorer-frontend/' className={styles.link} target={'_blank'}>website</a>
          </div>
          <p className={styles.text}>
          This app allows you to search along  a bit weird  but interested movies made by young directors. To use the server you need to be authorised. You can also save movies and remove them from your favourites later. 
          </p>
          <p className={styles.remark}>* You can use this data to signin, if don't want to spend time on registration. Login: cat@cat.cat. Password: cat123</p>
          <ul className={styles.tags}>
            <li className={styles.tag}>JS</li>
            <li className={styles.tag}>React</li>
            <li className={styles.tag}>Express.js</li>
            <li className={styles.tag}>MongoDB</li>
          </ul>
        </li>
        <li className={styles.node}>
          <h3 className={styles.project}>
            Mesto - photo service
          </h3>
          <div className={styles.container}>
            <a href='https://github.com/palinakarabovich/react-mesto-api-full' className={styles.link} target={'_blank'}>github</a>
            <a href='https://palinakarabovich.github.io/react-mesto-api-full' className={styles.link} target={'_blank'}>website</a>
          </div>
          <p className={styles.text}>
            This app allows you to add your photos to the shared feed with other users. To add photo you have to be authorized. You can put likes on your photos and photos of others. You see the amount of likes and can dislike the photo any time. You can delete your own photos. Also you have ability to change the avatar, name and profile description.
          </p>
          <p className={styles.remark}>* You can use this data to signin, if don't want to spend time on registration. Login: cat@cat.cat. Password: cat123</p>
          <ul className={styles.tags}>
            <li className={styles.tag}>JS</li>
            <li className={styles.tag}>React</li>
            <li className={styles.tag}>Express.js</li>
            <li className={styles.tag}>MongoDB</li>
          </ul>
        </li>
        <li className={`${styles.node} ${styles.nodeLink}`}>
          <p className={styles.project}>
            Find out more my educational projects on <a  href='https://github.com/palinakarabovich' target='_blank' className={styles.tagLink}>github</a>
          </p>
          </li>
      </ul>
    </section>
  )
}

export default Portfolio;