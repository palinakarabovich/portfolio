import styles from './promo.module.css';
import img from '../../images/pick.jpg';

const Promo = () => {
  return (
    <section className={styles.promo} id={'about'}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt='portrait' />
        <div className={styles.intro}>
          <h1 className={styles.title}>Hi, my name is Palina!</h1>
          <p className={styles.text}>
            I am a frontend developer with a passion for creating user-friendly and functional websites.
            <p />
            <p>
              With my background as a digital marketing specialist, I understand how websites should work to deliver a positive experience for users and business owners.
            </p>
            <p>
              Most of the time I work with  React, TypeScript, JavaScript, CSS and HTML, but I’m constantly open to learning new Frontend technologies.  I have a big desire and motivation to improve my skills as a developer and will be happy to become part of your team as an intern or junior specialist.
            </p>
            <p>
              Now I have a 3+ years experience working as a freelancer, where I have learned the importance of clear communication and effective time management to make the working process smooth.
            </p>
            <p>
              Currently, I live in the Netherlands with my husband, who provides me with all the visa support I need, so I don’t have any restrictions on working here. I am open to opportunities as a young developer, whether permanent or temporary
            </p>
            <p>
              Let’s stay in touch and make outstanding projects together!
            </p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Promo;