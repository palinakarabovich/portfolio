import styles from './promo.module.css';
import img from '../../images/pick.jpg';

const Promo = () => {
  return (
    <section className={styles.promo} id={'about'}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt='portrait' />
        <div className={styles.intro}>
          <h1 className={styles.title}>Hi, my name is Palina!</h1>
          <p className={styles.introductionText}>
            I am a frontend developer with a passion for creating user-friendly and functional websites.
          </p>
          <div className={styles.text}>
            <p className={styles.mainText}>
              <span className={styles.span}>I have a 1+ year non-commercial expirience building web-applications</span> and I am eager to learn new Frontend technologies and improve my skills as a developer. With my background in digital marketing as a freelancer, I value clear communication and effective time management for a smooth working process. I would be thrilled to join your team as an intern or junior specialist.
            </p>
            <p className={styles.locationText}>
              <span className={styles.span}> Location:</span> Rotterdam, the Netherlands
            </p>
            <a className={styles.cv} href='#' target={'_blank'}>my CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo;