import styles from './NavTab.module.scss';

const NavTab = () => {
  return (
    <nav className={styles.navtab}>
      <a className={styles.navtab__link} href="#about-project">
        О проекте
      </a>
      <a className={styles.navtab__link} href="#techs">
        Технологии
      </a>
      <a className={styles.navtab__link} href="#about-me">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
