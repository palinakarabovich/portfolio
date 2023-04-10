import styles from './promo.module.css';
import img from '../../images/pick.jpg';

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt='portrait' />
        <div className={styles.intro}>
          <h1 className={styles.title}>Hi, I am Palina</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, impedit quo placeat est, provident natus eius minus tenetur nemo optio dolorem numquam saepe mollitia quia? Ad explicabo vitae commodi sapiente?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Promo;