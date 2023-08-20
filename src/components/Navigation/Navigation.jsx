import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import accountimage from '../../images/headericon.svg';

import styles from './Navigation.module.scss';

const Navigation = ({ pathname, logedIn }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const clickBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const chooseMenuItem = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      {!logedIn ? (
        <div className={styles.notsignedmenu}>
          <Link to="/signup" className={`${styles.button} ${styles.button_signup}`}>
            Регистрация
          </Link>
          <Link to="/signin" className={`${styles.button} ${styles.button_login}`}>
            Войти
          </Link>
        </div>
      ) : (
        <div className={styles.menu}>
          <nav className={`${styles.nav} ${isBurgerOpen && styles.nav_active}`}>
            <nav className={`${styles.nav__toplinks}`}>
              <Link
                onClick={chooseMenuItem}
                to="/"
                className={`${styles.menu__link} ${
                  pathname === '/' && styles.menu__link_topactive
                } ${styles.menu__toplink_main}`}>
                Главная
              </Link>

              <Link
                to="/movies"
                onClick={chooseMenuItem}
                className={`${styles.menu__link} ${
                  pathname === '/movies' && styles.menu__link_topactive
                } ${styles.menu__toplink_films}`}>
                Фильмы
              </Link>

              <Link
                to="/saved-movies"
                onClick={chooseMenuItem}
                className={`${styles.menu__link} ${
                  pathname === '/saved-movies' && styles.menu__link_topactive
                } ${styles.menu__toplink_saved}`}>
                Сохраненные фильмы
              </Link>
            </nav>

            <nav className={`${styles.nav__bottomlinks}`}>
              <Link
                to="/profile"
                onClick={chooseMenuItem}
                className={`${styles.menu__link} ${
                  pathname === '/profile' && styles.menu__link_bottomactive
                } ${styles.menu__link_bottomprofile}`}>
                <p className={styles.menu__text}>Аккаунт</p>
                <img
                  className={styles.menu__image}
                  src={accountimage}
                  alt="переход к профилю пользователю"></img>
              </Link>
            </nav>
          </nav>

          <div className={`${styles.blackout} ${isBurgerOpen && styles.blackout_active}`}></div>

          <nav className={styles.menu__links}>
            <Link
              to="/movies"
              className={`${styles.menu__link} ${
                pathname === '/movies' && styles.menu__link_active
              } ${styles.menu__link_films}`}>
              Фильмы
            </Link>

            <Link
              to="/saved-movies"
              className={`${styles.menu__link} ${
                pathname === '/saved-movies' && styles.menu__link_active
              } ${styles.menu__link_saved}`}>
              Сохраненные фильмы
            </Link>

            <Link
              to="/profile"
              className={`${styles.menu__link} ${
                pathname === '/profile' && styles.menu__link_active
              } ${styles.menu__link_profile}`}>
              Аккаунт
              <img
                className={styles.menu__image}
                src={accountimage}
                alt="переход к профилю пользователю"></img>
            </Link>
          </nav>

          <button
            onClick={clickBurger}
            type="button"
            className={`${styles.menu__burger} ${isBurgerOpen && styles.menu__burger_active}`}>
            <span className={styles.menu__lines}></span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
