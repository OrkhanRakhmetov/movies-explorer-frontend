import avatar from '../../images/avatar.png';

import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section id="about-me" className={`${styles.landingBlock} ${styles.aboutme}`}>
      <div className={styles.slide}>
        <h2 className={styles.slide__header}>Студент</h2>
      </div>

      <div className={styles.aboutme__info}>
        <div className={styles.aboutme__left}>
          <h3 className={styles.aboutme__header}>Виталий</h3>
          <h4 className={styles.aboutme__subheader}>Фронтенд-разработчик, 30 лет</h4>
          <p className={styles.aboutme__text}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className={styles.aboutme__link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Numarta">
            GitHub
          </a>
        </div>

        <img className={styles.aboutme__right} src={avatar} alt="Фото фрилансера"></img>
      </div>
    </section>
  );
};

export default AboutMe;
