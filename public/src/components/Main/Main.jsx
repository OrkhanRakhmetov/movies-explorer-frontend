import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
