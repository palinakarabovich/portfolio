import styles from './education.module.css';

const Education = () => {
  return (
    <section className={styles.education} id={'education'}>
      <h2 className={styles.title}>Education and Work</h2>
      <ul className={styles.list}>
        <li className={styles.node}>
          <p className={styles.year}>
            2016-2020
          </p>
          <div className={styles.text}>
            <h3 className={styles.textTitle}>Graduated as a Software Development with a knowledge of Digital Marketing from the Belarusian State University of Informatics and Radioelectronics</h3>
            <p className={styles.textDescription}>This program combined both marketing and development, giving me a broad range of knowledge and skills in both areas.
              During the marketing component of the program, I had the opportunity to create marketing strategies for different brands and markets, develop websites using Tilda and Wordpress, and learn how to analyze audiences and deliver products that meet their needs.
              As a software engineer, I gained an understanding of object-oriented programming using Java and was also familiar with low-level programming languages such as C and C++.
              In my final year of study, we focused on HTML, CSS, and JavaScript. This experience made my career change from marketing specialist to frontend developer easier.
              Overall, my education has provided me with all-purpose skills that I can use during work process.
            </p>
          </div>
        </li>
        <li className={styles.node}>
          <p className={styles.year}>
            2020-2023
          </p>
          <div className={styles.text}>
            <h3 className={styles.textTitle}>Working as a Social Media Traffic Manager</h3>
            <p className={styles.textDescription}>
              My current job is to create effective strategies for social media and advertising from scratch. Working as a freelancer, I have built strong and responsible relationships with my clients, many of whom have been with me for more than two years. My clients primarily include small businesses and influencers, and I help them achieve their goals by developing and managing social media ads that reach their desired audience. Through this work, I have gained a deep understanding of what makes a user-friendly website and how important it is for businesses to have everything work correctly and without errors. Since most social media ads lead users to websites, it is a big part of my job to analyze whether the website is good enough to retain the client. Overall, my role requires me to be highly strategic and detail-oriented to help my clients succeed.
            </p>
          </div>
        </li>
        <li className={styles.node}>
          <p className={styles.year}>
            2022-2022
          </p>
          <div className={styles.text}>
            <h3 className={styles.textTitle}>Completed the Web-Development Training Course</h3>
            <p className={styles.textDescription}>
              My education  has been a 1 year journey, beginning with the basics of HTML, CSS, and JavaScript and culminating in the ability to build full-stack applications using React for the frontend and Node.js with MongoDB for the backend. Through this training, I have developed a strong foundation in frontend development and gained basic knowledge of Node.js.
            </p>
            <a href='https://drive.google.com/file/d/1kGNjmVKbBnvrX2M5fJ6X5Kt1oudZ2C9S/view?usp=sharing' target={'_blank'} className={styles.link}>Certificate</a>
          </div>
        </li>
        <li className={styles.node}>
          <p className={styles.year}>
            2022-2023
          </p>
          <div className={styles.text}>
            <h3 className={styles.textTitle}>Completed the React Developer Professional Training Course</h3>
            <p className={styles.textDescription}>
              This course has significantly improved my knowledge and skills in React. Throughout the course, I have gained familiarity with Typescript, React-Redux, Redux Tool Kit and Websockets, which will allow me to build more projects and grow professionally as a Frontend Developer.
            </p>
            <a href='https://drive.google.com/file/d/1-HyvZ32_4uM2BOhoF3ZvQ1xIZxHut1OY/view?usp=sharing' target={'_blank'} className={styles.link}>Certificate</a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Education;