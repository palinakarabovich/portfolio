import React from 'react';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Tech from '../Tech/Tech';
import styles from './app.module.css'

const App = () =>  {
  return (
    <div className={styles.app}>
      <Header />
      <Promo />
      <Tech />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
