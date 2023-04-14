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
              <span className={styles.span}>I have a 1+ year non-commercial expirience building web-applications</span> and I’m constantly open to learning new Frontend technologies.  I have a big desire and motivation to improve my skills as a developer and will be happy to become part of your team as an intern or junior specialist.
              With my background as a digital marketing specialist, I understand how websites should work to deliver a positive experience for users and business owners.
              Also I have a 3+ years experience working as a freelancer, where I have learned the importance of clear communication and effective time management to make the working process smooth.
            </p>
            <p className={styles.locationText}>
              <span className={styles.span}> I have been living in the Netherlands for 3 years</span> with my husband, who provides me with all the visa support I need, so I don’t have any restrictions on working here and I am open to any opportunities and challenges.
            </p>
            <a className={styles.cv} href='#' target={'_blank'}>my CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo;